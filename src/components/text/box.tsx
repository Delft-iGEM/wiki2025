"use client";
import * as React from "react";

type Variant = "neutral" | "info" | "success" | "warning" | "danger";

const VARIANT_STYLES: Record<Variant, { bg: string; border: string; text: string; badge: string }> = {
  neutral: { bg: "bg-slate-50 dark:bg-slate-900/40", border: "border-slate-200/60 dark:border-slate-800",
             text: "text-slate-800 dark:text-slate-200", badge: "bg-slate-200 dark:bg-slate-800" },
  info:    { bg: "bg-blue-50 dark:bg-blue-900/20",     border: "border-blue-200/60 dark:border-blue-800",
             text: "text-blue-900 dark:text-blue-100",  badge: "bg-blue-200 dark:bg-blue-800" },
  success: { bg: "bg-emerald-50 dark:bg-emerald-900/20",border: "border-emerald-200/60 dark:border-emerald-800",
             text: "text-emerald-900 dark:text-emerald-100", badge: "bg-emerald-200 dark:bg-emerald-800" },
  warning: { bg: "bg-amber-50 dark:bg-amber-900/20",    border: "border-amber-200/60 dark:border-amber-800",
             text: "text-amber-900 dark:text-amber-100", badge: "bg-amber-200 dark:bg-amber-800" },
  danger:  { bg: "bg-rose-50 dark:bg-rose-900/20",      border: "border-rose-200/60 dark:border-rose-800",
             text: "text-rose-900 dark:text-rose-100",   badge: "bg-rose-200 dark:bg-rose-800" },
};

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  variant?: Variant;
  /** If true, renders a <details> block with a clickable summary header */
  collapsible?: boolean;
  /** Works only when collapsible */
  defaultOpen?: boolean;
  /** Optional small label badge on the right of the header */
  badge?: React.ReactNode;
}

export function Box({
  header,
  variant = "neutral",
  collapsible = false,
  defaultOpen = true,
  badge,
  className = "",
  children,
  ...rest
}: BoxProps) {
  const s = VARIANT_STYLES[variant];

  const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div
      className={`rounded-2xl border p-4 md:p-5 ${s.bg} ${s.border} ${s.text} ${className}`}
      {...rest}
    >
      {children}
    </div>
  );

  if (collapsible) {
    return (
      <Container>
        <details open={defaultOpen} className="group">
          <summary className="cursor-pointer list-none select-none">
            <div className="flex items-center justify-between gap-3">
              <div className="font-semibold">{header}</div>
              <div className="flex items-center gap-2">
                {badge ? <span className={`text-xs px-2 py-1 rounded-full ${s.badge}`}>{badge}</span> : null}
                <span className="text-sm opacity-70 group-open:rotate-180 transition-transform">▾</span>
              </div>
            </div>
          </summary>
          <div className="mt-3 text-sm leading-relaxed">{children}</div>
        </details>
      </Container>
    );
  }

  return (
    <Container>
      {(header || badge) && (
        <div className="mb-2 flex items-center justify-between gap-3">
          {header ? <div className="font-semibold">{header}</div> : <div />}
          {badge ? <span className={`text-xs px-2 py-1 rounded-full ${s.badge}`}>{badge}</span> : null}
        </div>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </Container>
  );
}
