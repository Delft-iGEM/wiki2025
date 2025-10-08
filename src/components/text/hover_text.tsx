"use client";
import React, { useId, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Placement = "top" | "bottom" | "left" | "right";

export default function HoverText({
  children,
  content,
  placement = "top",
  // always use portal for anti-clipping; you can toggle to false if needed
  portal = true,
  minWidth = 240,
  maxWidth = 520,
  viewportPadding = 8,
  className = "",
}: {
  children: React.ReactNode;
  content: React.ReactNode | string;
  placement?: Placement;
  portal?: boolean;
  minWidth?: number;
  maxWidth?: number;
  viewportPadding?: number;
  className?: string;
}) {
  const tid = useId();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const tipRef = useRef<HTMLDivElement | null>(null);

  const [absPos, setAbsPos] = useState<{ top: number; left: number } | null>(null);
  const [boxWidth, setBoxWidth] = useState<number>(minWidth);
  const [actualPlacement, setActualPlacement] = useState<Placement>(placement);

  const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

  const compute = () => {
    if (!anchorRef.current || !tipRef.current) return;

    const a = anchorRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    // measure natural width, clamp to viewport and props
    const tip = tipRef.current;
    tip.style.width = "max-content";
    const natural = Math.ceil(tip.scrollWidth);
    const desired = clamp(natural, minWidth, Math.min(maxWidth, vw - 2 * viewportPadding));
    setBoxWidth(desired);
    tip.style.width = desired + "px";

    const r = tip.getBoundingClientRect();

    // decide best placement if default doesn't fit (simple flip logic)
    let place: Placement = placement;
    if (placement === "top" && a.top - r.height - 8 < viewportPadding) place = "bottom";
    else if (placement === "bottom" && a.bottom + r.height + 8 > vh - viewportPadding) place = "top";
    else if (placement === "left" && a.left - r.width - 8 < viewportPadding) place = "right";
    else if (placement === "right" && a.right + r.width + 8 > vw - viewportPadding) place = "left";
    setActualPlacement(place);

    // initial coords relative to viewport (fixed)
    let top = 0, left = 0;
    switch (place) {
      case "top":
        top = a.top - r.height - 8;
        left = a.left + a.width / 2 - r.width / 2;
        break;
      case "bottom":
        top = a.bottom + 8;
        left = a.left + a.width / 2 - r.width / 2;
        break;
      case "left":
        top = a.top + a.height / 2 - r.height / 2;
        left = a.left - r.width - 8;
        break;
      case "right":
        top = a.top + a.height / 2 - r.height / 2;
        left = a.right + 8;
        break;
    }

    // clamp to viewport
    left = clamp(left, viewportPadding, vw - r.width - viewportPadding);
    top = clamp(top, viewportPadding, vh - r.height - viewportPadding);

    setAbsPos({ top, left });
  };

  useLayoutEffect(() => {
    if (!open) return;
    const handler = () => compute();
    handler();
    window.addEventListener("resize", handler);
    window.addEventListener("scroll", handler, true); // capture nested scrolls
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("scroll", handler, true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, placement, minWidth, maxWidth, viewportPadding]);

  const tipBox: React.CSSProperties = {
    position: portal ? "fixed" as const : "absolute",
    top: portal ? absPos?.top : undefined,
    left: portal ? absPos?.left : undefined,
    zIndex: 2147483647, // above almost everything
    width: boxWidth,
    maxWidth: Math.min(
      maxWidth,
      typeof window !== "undefined" ? window.innerWidth - 2 * viewportPadding : maxWidth
    ),
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 10,
    padding: "10px 12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    lineHeight: 1.35,
    fontSize: 14,
    color: "#111827",
    overflowWrap: "anywhere",
    whiteSpace: "normal",
    pointerEvents: "none", // hover stays attached to the anchor
    transform: portal ? undefined : "translateX(-50%) translateY(8px)",
    willChange: "top,left",
  };

  const tipNode = (
    <div ref={tipRef} role="tooltip" id={tid} style={tipBox} data-placement={actualPlacement}>
      {content}
    </div>
  );

  return (
    <span
      ref={anchorRef}
      className={className}
      style={{ position: "relative", display: "inline" }}
      tabIndex={0}
      aria-describedby={open ? tid : undefined}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      onTouchStart={(e) => {
        e.preventDefault();
        setOpen((v) => !v);
      }}
    >
      <span
        style={{
          borderBottom: "1px dashed currentColor",
          cursor: "help",
          whiteSpace: "nowrap",
        }}
      >
        {children}
      </span>

      {open &&
        (portal
          ? createPortal(tipNode, document.body)
          : (
            <div
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
              }}
            >
              {tipNode}
            </div>
          ))}
    </span>
  );
}
export { HoverText };