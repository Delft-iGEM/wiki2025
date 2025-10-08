import {
  Children,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
} from "react";
import type {
  MouseEvent as ReactMouseEvent,
  ReactNode,
} from "react";

interface FootnoteEntry {
  number: number;
  content: ReactNode | null;
  key: string;
  references: FootnoteReference[];
}

interface FootnoteDefinitionProps {
  noteKey: string;
  children: ReactNode;
}

interface FootnoteReference {
  id: string;
  refKey: string;
}

interface RegisterReferenceResult {
  number: number;
  referenceId: string;
}

interface FootnoteContextType {
  registerReference: (key: string, refKey: string) => RegisterReferenceResult;
  registerDefinition: (key: string, content: ReactNode) => number;
  getFootnotes: () => FootnoteEntry[];
  reset: () => void;
}

const FootnoteContext = createContext<FootnoteContextType | null>(null);

const SCROLL_MARGIN = 16;

const getNavbarHeight = () => {
  if (typeof document === "undefined") return 0;
  const nav = document.getElementById("site-navbar");
  return nav instanceof HTMLElement ? nav.offsetHeight : 0;
};

const getScrollBehavior = (): ScrollBehavior => {
  if (typeof window === "undefined") return "auto";
  try {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    return prefersReducedMotion.matches ? "auto" : "smooth";
  } catch {
    return "smooth";
  }
};

const scrollElementIntoView = (element: HTMLElement) => {
  if (typeof window === "undefined") return;
  const offset = getNavbarHeight() + SCROLL_MARGIN;
  const rect = element.getBoundingClientRect();
  const target = window.scrollY + rect.top - offset;
  const top = target < 0 ? 0 : target;
  window.scrollTo({ top, behavior: getScrollBehavior() });
};

const highlightElement = (element: HTMLElement) => {
  element.classList.remove("footnote-flash");
  element.getBoundingClientRect(); // Force reflow
  element.classList.add("footnote-flash");
};

export function FootnotesProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const footnotesRef = useRef(new Map<string, FootnoteEntry>());
  const counterRef = useRef(0);

  const ensureFootnoteEntry = useCallback((key: string): FootnoteEntry => {
    const existing = footnotesRef.current.get(key);
    if (existing) return existing;

    counterRef.current += 1;
    const entry: FootnoteEntry = {
      number: counterRef.current,
      content: null,
      key,
      references: [],
    };
    footnotesRef.current.set(key, entry);
    return entry;
  }, []);

  const registerReference = useCallback(
    (key: string, refKey: string): RegisterReferenceResult => {
      const entry = ensureFootnoteEntry(key);
      const existing = entry.references.find((reference) => reference.refKey === refKey);
      if (existing) {
        return { number: entry.number, referenceId: existing.id };
      }

      const referenceIndex = entry.references.length + 1;
      const referenceId = `fnref-${entry.number}-${referenceIndex}`;

      entry.references.push({ id: referenceId, refKey });
      footnotesRef.current.set(key, entry);

      return { number: entry.number, referenceId };
    },
    [ensureFootnoteEntry],
  );

  const registerDefinition = useCallback(
    (key: string, content: ReactNode) => {
      const entry = ensureFootnoteEntry(key);
      if (entry.content !== content) {
        entry.content = content;
        footnotesRef.current.set(key, entry);
      }
      return entry.number;
    },
    [ensureFootnoteEntry],
  );

  const getFootnotes = useCallback((): FootnoteEntry[] => {
    return Array.from(footnotesRef.current.values()).sort(
      (a, b) => a.number - b.number,
    );
  }, []);

  const reset = useCallback(() => {
    footnotesRef.current.clear();
    counterRef.current = 0;
  }, []);

  const value = useMemo<FootnoteContextType>(
    () => ({
      registerReference,
      registerDefinition,
      getFootnotes,
      reset,
    }),
    [registerReference, registerDefinition, getFootnotes, reset],
  );

  return <FootnoteContext.Provider value={value}>{children}</FootnoteContext.Provider>;
}

export function Footnote({
  noteKey,
  children,
}: {
  readonly noteKey: string;
  readonly children?: ReactNode;
}) {
  const context = useContext(FootnoteContext);

  if (!context) {
    throw new Error("Footnote must be used within FootnotesProvider");
  }

  const { registerReference, registerDefinition } = context;

  const reactId = useId();
  const referenceKey = useMemo(() => reactId.replace(/:/g, "-"), [reactId]);

  const { number, referenceId } = registerReference(noteKey, referenceKey);

  if (children !== undefined && children !== null) {
    registerDefinition(noteKey, children);
  }

  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const footnoteElement = document.getElementById(`fn-${number}`);
    if (footnoteElement) {
      scrollElementIntoView(footnoteElement);
      footnoteElement.focus({ preventScroll: true });
      highlightElement(footnoteElement);
    }
  };

  return (
    <sup>
      <a
        id={referenceId}
        href={`#fn-${number}`}
        className="footnote-ref"
        onClick={handleClick}
        data-footnote-ref={referenceId}
        data-footnote-key={noteKey}
      >
        {number}
      </a>
    </sup>
  );
}

export function FootnoteDefinition({
  noteKey,
  children,
}: FootnoteDefinitionProps) {
  const context = useContext(FootnoteContext);

  if (!context) {
    throw new Error("FootnoteDefinition must be used within FootnotesProvider");
  }

  context.registerDefinition(noteKey, children);
  return null;
}

export function FootnotesList({
  title = "Footnotes",
  children,
}: {
  readonly title?: string;
  readonly children?: ReactNode;
}) {
  const context = useContext(FootnoteContext);

  if (!context) {
    throw new Error("FootnotesList must be used within FootnotesProvider");
  }

  const { getFootnotes, reset, registerDefinition } = context;

  Children.forEach(children, (child) => {
    if (
      isValidElement(child) &&
      child.type === FootnoteDefinition &&
      child.props
    ) {
      const definitionProps = child.props as FootnoteDefinitionProps;
      registerDefinition(definitionProps.noteKey, definitionProps.children);
    }
  });

  const footnotes = getFootnotes();

  useEffect(() => () => reset(), [reset]);

  if (footnotes.length === 0) return null;

  const handleBackrefClick = (
    event: ReactMouseEvent<HTMLAnchorElement>,
    referenceId: string,
  ) => {
    event.preventDefault();
    const refElement = document.getElementById(referenceId);
    if (refElement) {
      scrollElementIntoView(refElement);
      refElement.focus({ preventScroll: true });
      highlightElement(refElement);
    }
  };

  return (
    <div className="footnotes">
      {children}
      <h3>{title}</h3>
      <ol>
        {footnotes.map(({ number, content, key, references }) => (
          <li
            key={key}
            value={number}
            className="footnote-item"
            id={`fn-${number}`}
            data-footnote-key={key}
            tabIndex={-1}
          >
            <span className="footnote-item__content">{content}</span>
            {references.length > 0 && (
              <span className="footnote-backref-group">
                {references.map(({ id }, index) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className="footnote-backref"
                    onClick={(event) => handleBackrefClick(event, id)}
                  >
                    ↩{references.length > 1 ? index + 1 : ""}
                  </a>
                ))}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
