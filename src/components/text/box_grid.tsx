"use client";
import React, { useEffect, useLayoutEffect, useRef, isValidElement, cloneElement } from "react";

/**
 * Global equal-height grid (all items equal to tallest),
 * responsive columns (1 on small, 2 on md+).
 */
export function BoxGrid({
  children,
  className = "",
  gap = "gap-6",
  colsClass = "grid-cols-1 md:grid-cols-2",
}: {
  children: React.ReactNode;
  className?: string;
  gap?: string;
  colsClass?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const equalize = () => {
    const el = containerRef.current;
    if (!el) return;

    const wrappers = Array.from(el.children) as HTMLElement[];

    // Reset before measuring
    wrappers.forEach((w) => {
      w.style.height = "";
      w.style.minHeight = "";
    });

    // Measure INNER content height (the Box root) so padding/border are included
    const heights = wrappers.map((w) => {
      const inner = (w.firstElementChild as HTMLElement) ?? w;
      // Temporarily clear child sizing to get natural height
      const prevH = inner.style.height;
      const prevMinH = inner.style.minHeight;
      inner.style.height = "";
      inner.style.minHeight = "";
      const h = Math.ceil(Math.max(inner.getBoundingClientRect().height, inner.scrollHeight));
      inner.style.height = prevH;
      inner.style.minHeight = prevMinH;
      return h;
    });

    const maxH = Math.max(...heights, 0);
    if (maxH > 0 && Number.isFinite(maxH)) {
      // Apply exact same height to ALL wrappers
      wrappers.forEach((w) => {
        w.style.minHeight = `${maxH}px`;
        w.style.height = `${maxH}px`;
      });
    }
  };

  // Run after layout, and keep in sync with changes
  useLayoutEffect(() => {
    equalize();
    const raf = requestAnimationFrame(equalize);

    const onResize = () => equalize();
    window.addEventListener("resize", onResize);

    const root = containerRef.current;
    const imgs = root ? (Array.from(root.querySelectorAll("img")) as HTMLImageElement[]) : [];
    imgs.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", equalize);
        img.addEventListener("error", equalize);
      }
    });

    const mo = new MutationObserver(() => equalize());
    if (root) mo.observe(root, { childList: true, subtree: true, characterData: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      imgs.forEach((img) => {
        img.removeEventListener("load", equalize);
        img.removeEventListener("error", equalize);
      });
      mo.disconnect();
    };
  }, [children]);

  useEffect(() => {
    const id = setTimeout(equalize, 120); // catch late fonts/layout
    return () => clearTimeout(id);
  }, [children]);

  // Inject `h-full` into each child so it can stretch to the wrapper height
  const normalizedChildren = React.Children.map(children, (child) => {
    if (!isValidElement(child)) {
      return <div className="h-full">{child}</div>;
    }
    const element = child as React.ReactElement<{ className?: string }>;
    const prev = element.props.className || "";
    return cloneElement(element, { className: `h-full ${prev}`.trim() });
  });

  return (
    <div
      ref={containerRef}
      className={`grid ${colsClass} ${gap} items-stretch ${className}`}
    >
      {normalizedChildren?.map((child, i) => (
        // Wrapper we control; we set the equalized height here.
        <div key={i} className="h-full">{child}</div>
      ))}
    </div>
  );
}
