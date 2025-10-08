"use client";

import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Domain = "RRI" | "SbD";

type Stakeholder = {
  id: string;
  name: string;
  subtitle?: string;
  href?: string;
};

/* ===================== RRI (unchanged labels) ===================== */
const RRI_PILLARS = [
  { key: "anticipation",  label: "Anticipation",  color: "#fff4e6", stroke: "#f08c00",  def: "Anticipate impacts" },
  { key: "inclusion",     label: "Inclusion",     color: "#e7f5ff", stroke: "#1c7ed6",  def: "Bring people in" },
  { key: "reflexivity",   label: "Reflexivity",   color: "#f3f0ff", stroke: "#7048e8",  def: "Reflect on values" },
  { key: "responsiveness",label: "Responsiveness",color: "#ebfbee", stroke: "#2b8a3e",  def: "Adapt to feedback" },
  { key: "sustainability",label: "Sustainability",color: "#fff9db", stroke: "#e67700",  def: "Long-term viability" },
];

/* ===================== SbD (new set + defs) ===================== */
const SBD_RISKS = [
  { key: "risk",                 label: "Risk",                 color: "#ffe3e3", stroke: "#c92a2a", def: "Known probs/outcomes" },
  { key: "scenario-uncertainty", label: "Scenario Uncertainty", color: "#e7f5ff", stroke: "#1971c2", def: "Unknown scenarios" },
  { key: "ignorance",            label: "Ignorance",            color: "#f8f0ff", stroke: "#7048e8", def: "Unknown unknowns" },
  { key: "indeterminacy",        label: "Indeterminacy",        color: "#ebfbee", stroke: "#2b8a3e", def: "Open causal links" },
  { key: "normative-ambiguity",  label: "Normative Ambiguity",  color: "#fff9db", stroke: "#e67700", def: "Conflicting values" },
];

/* ===================== Stakeholders (left) ===================== */
const DEFAULT_STAKEHOLDERS: Stakeholder[] = [
  { id: "brouns",      name: "Prof. Brouns",         subtitle: "Phage–host expert", href: "#prof-brouns" },
  { id: "rivm",        name: "RIVM GMO Office",      subtitle: "Regulator",         href: "#rivm-gmo" },
  { id: "field",       name: "Field Trial Experts",  subtitle: "Surveillance",      href: "#field-test-experts" },
  { id: "avined",      name: "AVINED",               subtitle: "Poultry sector",     href: "#avined" },
  { id: "farmer",      name: "Johannis Florid",      subtitle: "Farmer",             href: "#johannis-florid" },
  { id: "kamerik",     name: "Dr. Eline Kamerik",    subtitle: "Veterinarian",       href: "#eline-kamerik" },
  { id: "koster",      name: "Dr. Charlotte Koster", subtitle: "SciComm",            href: "#dr-koster" },
  { id: "van-oosten",  name: "Dr. Luuk van Oosten",  subtitle: "Manufacturing",      href: "#dr-van-oosten" },
  { id: "erik",        name: "Erik de Jonge",        subtitle: "Ecologist",          href: "#erik-de-jonge" },
];

/* ===================== Fixed mappings ===================== */
/* RRI mapping (as previously set) */
const RRI_MAPPING: Record<string, string[] | null> = {
  "van-oosten": ["responsiveness"],
  "koster": ["inclusion"],
  "kamerik": ["inclusion"],
  "avined": ["anticipation"],
  "farmer": ["reflexivity", "inclusion"],
  "field": ["reflexivity"],
  "rivm": ["anticipation"],
  "brouns": ["anticipation"],
  "erik": ["reflexivity"], // reasonable default; adjust if you want
};

/* SbD mapping (YOUR new requests) */
const SBD_MAPPING: Record<string, string[] | null> = {
  "brouns": ["ignorance"],
  "field": ["scenario-uncertainty"],
  "koster": ["normative-ambiguity"],
  "van-oosten": ["risk", "scenario-uncertainty"],
  "rivm": ["risk", "indeterminacy"],
  "farmer": ["normative-ambiguity", "scenario-uncertainty"],
  "kamerik": ["scenario-uncertainty"],
  "erik": ["indeterminacy", "normative-ambiguity"],
  "avined": null, // not requested
};

type Props = {
  stakeholders?: Stakeholder[];
  className?: string;
  initialDomain?: Domain;
  leftTitle?: string;        // Stakeholders (left)
  rightTitleRRI?: string;    // RRI column title
  rightTitleSbD?: string;    // SbD column title
  boxHeight?: number;        // fixed height for all cards
  columnGapRem?: number;     // horizontal spacing between columns
};

export default function IntegrationFlowInteractive({
  stakeholders = DEFAULT_STAKEHOLDERS,
  className,
  initialDomain = "RRI",
  leftTitle = "Stakeholders",
  rightTitleRRI = "RRI Pillars",
  rightTitleSbD = "Safe-by-Design Principles",
  boxHeight = 74,
  columnGapRem = 4.5, // spaced further to reduce tangling
}: Props) {
  const [domain, setDomain] = useState<Domain>(initialDomain);

  const POOL = domain === "RRI" ? RRI_PILLARS : SBD_RISKS;
  const MAP  = domain === "RRI" ? RRI_MAPPING : SBD_MAPPING;

  // Which right-side nodes are actually used in the current domain?
  const usedRightKeys = useMemo(() => {
    const keys = new Set<string>();
    for (const s of stakeholders) {
      const arr = MAP[s.id];
      if (arr) for (const k of arr) keys.add(k);
    }
    return Array.from(keys);
  }, [MAP, stakeholders]);

  const rightNodes = useMemo(
    () => usedRightKeys.map((k) => POOL.find((p) => p.key === k)!).filter(Boolean),
    [usedRightKeys, POOL]
  );

  // Refs for robust arrow positioning
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftColRef   = useRef<HTMLDivElement | null>(null);
  const rightColRef  = useRef<HTMLDivElement | null>(null);
  const leftRefs  = useRef<Record<string, HTMLAnchorElement | null>>({});
  const rightRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [lines, setLines] = useState<
    { id: string; x1: number; y1: number; x2: number; y2: number; color: string }[]
  >([]);

  const metaOf = (key: string) =>
    (domain === "RRI" ? RRI_PILLARS : SBD_RISKS).find((p) => p.key === key)!;

  const recompute = () => {
    if (!containerRef.current) return;
    const cbox = containerRef.current.getBoundingClientRect();
    const next: typeof lines = [];

    for (const s of stakeholders) {
      const targets = MAP[s.id];
      if (!targets || targets.length === 0) continue;

      const L = leftRefs.current[s.id];
      if (!L) continue;

      const lb = L.getBoundingClientRect();

      for (const key of targets) {
        const R = rightRefs.current[key];
        if (!R) continue;

        const rb = R.getBoundingClientRect();
        // connect center-right of LEFT (stakeholder) to center-left of RIGHT (pillar/risk)
        const x1 = lb.right - cbox.left;
        const y1 = lb.top + lb.height / 2 - cbox.top;
        const x2 = rb.left - cbox.left;
        const y2 = rb.top + rb.height / 2 - cbox.top;

        const meta = metaOf(key);
        next.push({ id: `${s.id}__${key}`, x1, y1, x2, y2, color: meta.stroke });
      }
    }
    setLines(next);
  };

  // Recompute after domain change & layout
  useLayoutEffect(() => {
    requestAnimationFrame(() => requestAnimationFrame(recompute));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [domain, stakeholders, usedRightKeys.join("|")]);

  useEffect(() => {
    const onResize = () => recompute();
    window.addEventListener("resize", onResize);

    const ro = new ResizeObserver(() => {
      requestAnimationFrame(recompute);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    if (leftColRef.current) ro.observe(leftColRef.current);
    if (rightColRef.current) ro.observe(rightColRef.current);

    return () => {
      window.removeEventListener("resize", onResize);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Columns: equal card heights, vertical space distributed
  const colStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 0,
    height: "100%",
  };

  const leftCardStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: 12,
    padding: "0.75rem",
    background: "#fff",
    boxShadow: "0 1px 2px rgba(0,0,0,0.05)",
    height: boxHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const rightCardStyle = (stroke: string, fill: string): React.CSSProperties => ({
    border: `2px solid ${stroke}`,
    background: fill,
    borderRadius: 12,
    padding: "0.75rem",
    height: boxHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  });

  // Legend (definitions only, show only items currently used)
  const usedLegend = useMemo(() => {
    const pool = domain === "RRI" ? RRI_PILLARS : SBD_RISKS;
    const used = new Set(usedRightKeys);
    return pool.filter(p => used.has(p.key)).map(p => ({ key: p.key, def: p.def, color: p.color, stroke: p.stroke }));
  }, [domain, usedRightKeys]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1fr", // LEFT stakeholders, RIGHT nodes
        columnGap: `${columnGapRem}rem`,
        rowGap: "1rem",
        alignItems: "stretch",
        minHeight:
          Math.max(stakeholders.length, rightNodes.length) * (boxHeight + 16),
      }}
      className={className}
    >
      {/* LEFT — stakeholders */}
      <div ref={leftColRef} style={colStyle}>
        <h3 style={{ margin: "0 0 0.75rem 0" }}>{leftTitle}</h3>
        {stakeholders.map((s) => (
          <a
            key={`L-${s.id}`}
            ref={(el) => { leftRefs.current[s.id] = el; }}
            href={s.href || "#"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div style={leftCardStyle}>
              <div style={{ fontWeight: 600 }}>{s.name}</div>
              {s.subtitle && (
                <div style={{ fontSize: 13, opacity: 0.8 }}>{s.subtitle}</div>
              )}
            </div>
          </a>
        ))}
      </div>

      {/* RIGHT — domain toggle + unique nodes */}
      <div ref={rightColRef} style={colStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 12,
          }}
        >
          <h3 style={{ margin: 0 }}>
            {domain === "RRI" ? rightTitleRRI : rightTitleSbD}
          </h3>
          <div
            role="group"
            aria-label="Domain toggle (applies to the entire graphic)"
            style={{
              marginLeft: "auto",
              display: "inline-flex",
              border: "1px solid #ccc",
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            {(["RRI", "SbD"] as Domain[]).map((d) => (
              <button
                key={d}
                onClick={() => setDomain(d)}
                style={{
                  padding: "6px 12px",
                  fontSize: 13,
                  background: domain === d ? "#111" : "#fff",
                  color: domain === d ? "#fff" : "#111",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {rightNodes.map((node) => (
          <div
            key={`R-${node.key}`}
            ref={(el) => { rightRefs.current[node.key] = el; }}
            style={rightCardStyle(node.stroke, node.color)}
          >
            <div style={{ fontWeight: 600 }}>{node.label}</div>
          </div>
        ))}

        {/* Legend: definitions only, only used items */}
        <div style={{ marginTop: 12 }}>
          <h4 style={{ margin: "0 0 6px 0" }}>Legend</h4>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {usedLegend.map((l) => (
              <span
                key={l.key}
                title={l.key}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "4px 8px",
                  borderRadius: 8,
                  background: l.color,
                  border: `1px solid ${l.stroke}`,
                  fontSize: 12,
                  lineHeight: 1.1,
                }}
              >
                {l.def}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CONNECTORS */}
      <svg
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "visible",
        }}
      >
        {lines.map((ln) => {
          const dx = Math.max(40, Math.min(180, (ln.x2 - ln.x1) / 2));
          const d = `M ${ln.x1} ${ln.y1} C ${ln.x1 + dx} ${ln.y1}, ${ln.x2 - dx} ${ln.y2}, ${ln.x2} ${ln.y2}`;
          return (
            <g key={`g-${ln.id}`}>
              <path d={d} fill="none" stroke={ln.color} strokeWidth={2} opacity={0.92} />
              <polygon
                points={`${ln.x2},${ln.y2} ${ln.x2 - 8},${ln.y2 - 4} ${ln.x2 - 8},${ln.y2 + 4}`}
                fill={ln.color}
                opacity={0.95}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
