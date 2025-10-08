
import type { ReactNode } from "react";

import { useEffect, useRef,useMemo, useState  } from "react";
import { LayoutGroup, motion , AnimatePresence} from "framer-motion";
import clsx from "clsx";



interface SegmentDefinition {
  readonly label: string;
  readonly content: ReactNode;
  readonly defaultActive?: boolean;
}

interface SegmentedContentProps {
  readonly segments: readonly SegmentDefinition[];
  readonly title?: string;
  readonly className?: string;
  readonly segmentsClassName?: string;
  readonly allowUppercase?: boolean;
}


interface SegmentsProps {
  readonly segments: readonly string[];
  readonly activeSegment: string;
  readonly onChange: (segment: string) => void;
  readonly className?: string;
  readonly title?: string;
  readonly allowUppercase?: boolean;
}

export function Segments({
  segments,
  activeSegment,
  onChange,
  className = "",
  title,
  allowUppercase = false,
}: SegmentsProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  

  return (
    <div
      className={clsx(
        "flex w-full flex-col items-center gap-6 text-center",
        className
      )}
    >
      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-brand">
          {title}
        </h2>
      )}
      <LayoutGroup>
        <div
          ref={wrapperRef}
          className="relative flex max-w-4xl flex-wrap items-center justify-center gap-2 rounded-2xl border border-white/30 bg-popover/70 p-2 shadow-lg backdrop-blur-xl transition-all duration-500 dark:border-white/10 dark:bg-secondary/30"
        >
          {segments.map((segment) => {
            const isActive = segment === activeSegment;

            return (
              <button
                key={segment}
                type="button"
                data-active={isActive}
                onClick={() => onChange(segment)}
                className={clsx(
                  "relative overflow-hidden rounded-lg px-6 py-2 text-sm font-semibold tracking-wide transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2",
                  !allowUppercase && "lowercase",
                  isActive
                    ? "text-white"
                    : "text-foreground/60 hover:text-foreground hover:cursor-pointer"
                )}
                aria-pressed={isActive}
              >
                {isActive && (
                  <motion.span
                    layoutId="segment-active-highlight"
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-[var(--color-secondary)] via-[var(--color-primary)] to-[var(--color-brand)] shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 whitespace-nowrap">
                  {segment}
                </span>
              </button>
            );
          })}
        </div>
      </LayoutGroup>
    </div>
  );
}

export function SegmentedContent({
  segments,
  title,
  className,
  segmentsClassName,
  allowUppercase = false,
}: SegmentedContentProps) {
  const labels = useMemo(() => segments.map((segment) => segment.label), [segments]);

  const [activeLabel, setActiveLabel] = useState(() => {
    const defaultSegment = segments.find((segment) => segment.defaultActive);
    if (defaultSegment) {
      return defaultSegment.label;
    }
    return labels[0] ?? "";
  });

  useEffect(() => {
    if (labels.length === 0) {
      return;
    }

    if (!labels.includes(activeLabel)) {
      const defaultSegment = segments.find((segment) => segment.defaultActive);
      if (defaultSegment) {
        setActiveLabel(defaultSegment.label);
      } else {
        setActiveLabel(labels[0]);
      }
    }
  }, [activeLabel, labels, segments]);

  const activeSegment = useMemo(
    () => segments.find((segment) => segment.label === activeLabel) ?? segments[0],
    [activeLabel, segments]
  );

  if (!activeSegment) {
    return null;
  }

  return (
    <section className={clsx("space-y-5 mt-5", className)}>
      <Segments
        segments={labels}
        activeSegment={activeSegment.label}
        onChange={setActiveLabel}
        className={segmentsClassName}
        title={title}
        allowUppercase={allowUppercase}
      />
      <div className="relative w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment.label}
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -48 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="w-full"
          >
            {activeSegment.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
