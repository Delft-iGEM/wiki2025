"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type Placement = "top" | "bottom" | "left" | "right";

export function HoverPic({
  children,
  src,
  alt = "",
  width = 600,          // requested size; will be capped by viewport
  placement = "top",
  className = "",
  portal = true,
  viewportPadding = 12, // min gap to screen edges
  gap = 8,              // gap to the hovered word
}: {
  children: React.ReactNode;
  src: string;
  alt?: string;
  width?: number;
  placement?: Placement;
  className?: string;
  portal?: boolean;
  viewportPadding?: number;
  gap?: number;
}) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const [actualPlacement, setActualPlacement] = useState<Placement>(placement);

  function getImgSize() {
    const el = imgRef.current;
    if (!el) return { w: width, h: Math.round(width * 0.6) };
    const r = el.getBoundingClientRect();
    return { w: r.width || width, h: r.height || Math.round(width * 0.6) };
  }

  function place() {
    const anchor = anchorRef.current;
    if (!anchor) return;
    const a = anchor.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const { w: iw, h: ih } = getImgSize();

    // Try preferred placement, flip if needed
    let p: Placement = placement;
    const fitsTop = a.top - gap - ih >= viewportPadding;
    const fitsBottom = a.bottom + gap + ih <= vh - viewportPadding;
    const fitsLeft = a.left - gap - iw >= viewportPadding;
    const fitsRight = a.right + gap + iw <= vw - viewportPadding;

    if (p === "top" && !fitsTop && fitsBottom) p = "bottom";
    else if (p === "bottom" && !fitsBottom && fitsTop) p = "top";
    else if (p === "left" && !fitsLeft && fitsRight) p = "right";
    else if (p === "right" && !fitsRight && fitsLeft) p = "left";

    let top = 0;
    let left = 0;

    if (p === "top") {
      top = a.top - gap - ih;
      left = a.left + a.width / 2 - iw / 2;
    } else if (p === "bottom") {
      top = a.bottom + gap;
      left = a.left + a.width / 2 - iw / 2;
    } else if (p === "left") {
      top = a.top + a.height / 2 - ih / 2;
      left = a.left - gap - iw;
    } else {
      // right
      top = a.top + a.height / 2 - ih / 2;
      left = a.right + gap;
    }

    // Clamp inside viewport with padding
    top = Math.max(viewportPadding, Math.min(top, vh - viewportPadding - ih));
    left = Math.max(viewportPadding, Math.min(left, vw - viewportPadding - iw));

    setActualPlacement(p);
    setCoords({ top, left });
  }

  useEffect(() => {
    if (!open) return;
    place();
    const onScroll = () => place();
    const onResize = () => place();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, placement, viewportPadding, gap]);

  const popover =
    open && coords ? (
      <div
        role="tooltip"
        aria-hidden="true"
        style={{
          position: "fixed",
          top: coords.top,
          left: coords.left,
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          width={width}
          onLoad={place} // reposition when the image actually knows its size
          className="block rounded-xl shadow-xl border border-black/5 bg-white"
          style={{
            maxWidth: "90vw",
            maxHeight: "85vh",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
    ) : null;

  return (
    <span
      ref={anchorRef}
      className={`relative inline-block ${className}`}
      tabIndex={0}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      aria-haspopup="true"
      aria-expanded={open}
      aria-label={alt || "hover preview"}
      data-placement={actualPlacement}
    >
      <span className="underline decoration-dotted underline-offset-2">
        {children}
      </span>
      {portal ? createPortal(popover, document.body) : popover}
    </span>
  );
}
