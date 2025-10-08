"use client";
import * as React from "react";

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  /** If true, renders a <details> block with a clickable summary header */
  collapsible?: boolean;
  /** Works only when collapsible */
  defaultOpen?: boolean;
  /** Optional small label badge on the right of the header */
  badge?: React.ReactNode;
}

export function Box({
  header,
  collapsible = false,
  defaultOpen = true,
  badge,
  className = "",
  children,
  ...rest
}: BoxProps) {
  const frostedClasses =
    "rounded-2xl border p-4 md:p-5 bg-white/60 backdrop-blur-sm border-slate-200/60 dark:border-slate-700/60 text-slate-900 dark:text-slate-100";

  const badgeClasses =
    "text-xs px-2 py-1 rounded-full bg-slate-200/80 dark:bg-slate-700/80";

  const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className={`${className} ${frostedClasses}`} {...rest}>
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
                {badge ? (
                  <span className={badgeClasses}>{badge}</span>
                ) : null}
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
          {badge ? <span className={badgeClasses}>{badge}</span> : null}
        </div>
      )}
      <div className="text-sm leading-relaxed">{children}</div>
    </Container>
  );
}
