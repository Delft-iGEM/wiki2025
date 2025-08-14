import React from "react";

/** Types that match your Pages file */
type Base = { name?: string };
type Page = Base & { title?: string; path?: string; component?: React.FC; lead?: string };
type Folder = Base & { folder?: (Page | Folder)[] };
type NavNode = Page | Folder;

function isFolder(n: NavNode): n is Folder {
  return Array.isArray((n as Folder).folder);
}
function isPage(n: NavNode): n is Page {
  return typeof (n as Page).path === "string" && !isFolder(n);
}

type Props = {
  pages: NavNode[];
  buttonLabel?: string;
};

export default function HamburgerMenu({ pages, buttonLabel = "Menu" }: Props) {
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState<Set<string>>(() => new Set());
  const rootRef = React.useRef<HTMLDivElement>(null);

  // Close on outside click + ESC
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && rootRef.current && !rootRef.current.contains(t)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const toggleFolder = (key: string) => {
    setExpanded(prev => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const renderNodes = (nodes: NavNode[], level = 0) => (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {nodes.map((n, idx) => {
        const key = (n.name ?? "unnamed") + ":" + level + ":" + idx;
        const indent = 10 * level;

        if (isFolder(n)) {
          const isOpen = expanded.has(key);
          return (
            <li key={key}>
              <button
                onClick={() => toggleFolder(key)}
                aria-expanded={isOpen}
                style={{ ...rowBtn, paddingLeft: 10 + indent, fontWeight: 600 }}
              >
                <span style={{ marginRight: 6, opacity: 0.8 }}>
                  {isOpen ? "▾" : "▸"}
                </span>
                {n.name ?? "Folder"}
              </button>
              {isOpen && n.folder && (
                <div style={{ marginTop: 2 }}>{renderNodes(n.folder, level + 1)}</div>
              )}
            </li>
          );
        }

        if (isPage(n)) {
          return (
            <li key={key}>
              <a
                href={n.path!}
                onClick={() => setOpen(false)}
                style={{ ...rowLink, paddingLeft: 28 + indent }}
              >
                {n.name ?? n.title ?? n.path}
              </a>
            </li>
          );
        }

        return null;
      })}
    </ul>
  );

  return (
    <div
      ref={rootRef}
      style={{
        position: "fixed",
        top: 14,
        right: 14,
        zIndex: 200000, // very high so it sits above headers/dots
      }}
    >
      <button
        aria-label={buttonLabel}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        style={fab}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="6" width="18" height="2" rx="1" />
          <rect x="3" y="11" width="18" height="2" rx="1" />
          <rect x="3" y="16" width="18" height="2" rx="1" />
        </svg>
      </button>

      {open && <div style={dropdown}>{renderNodes(pages)}</div>}
    </div>
  );
}

/* --- styles --- */
const fab: React.CSSProperties = {
  width: 55,
  height: 55,
  borderRadius: 10,
  border: "none",
  background: "#09A7D7",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
 // boxShadow: "0 8px 22px #126A85",
 // backdropFilter: "blur(3px)",
};

const dropdown: React.CSSProperties = {
  position: "absolute",
  top: 50, // below the button
  right: 0,
  width: 240,
  maxHeight: "70vh",
  overflowY: "auto",
  background: "#09A7D7",
  color: "#fff",
  border: "1px solid #034156",
  borderRadius: 12,
  padding: 6,
 // boxShadow: "0 14px 34px #126A85",
};

const rowBtn: React.CSSProperties = {
  width: "100%",
  textAlign: "left",
  background: "transparent",
  color: "#fff",
  border: "none",
  padding: "8px 10px",
  borderRadius: 8,
  cursor: "pointer",
  fontSize: 14,
};

const rowLink: React.CSSProperties = {
  display: "block",
  color: "#fff",
  textDecoration: "none",
  padding: "8px 10px",
  borderRadius: 8,
  fontSize: 14,
};
