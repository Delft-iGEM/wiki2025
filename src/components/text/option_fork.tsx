"use client";
import React from "react";

/**
 * OptionFork
 *
 * Renders a responsive two-column comparison with a center "fork" arrow on desktop/tablet.
 * On small screens, columns stack and the fork arrows are hidden automatically.
 *
 * Tailwind is assumed to be available.
 */

export default function OptionFork({
  leftTitle,
  rightTitle,
  left,
  right,
  className = "text-gray-500" // arrows will be gray by default
}: {
  leftTitle: string;
  rightTitle: string;
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Fork arrows (hidden on small screens) */}
      <div
        className="absolute inset-x-0 -top-6 hidden md:block pointer-events-none"
        aria-hidden
      >
        <svg viewBox="0 0 100 36" preserveAspectRatio="none" className="w-full h-9">
          <defs>
            <marker
              id="arrowhead"
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <path d="M0,0 L6,3 L0,6 z" fill="currentColor" />
            </marker>
          </defs>
          {/* center stem */}
          <path
            d="M50 0 L50 18"
            strokeWidth="1.2"
            stroke="currentColor"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          {/* left branch */}
          <path
            d="M50 12 C50 16, 37.5 16, 25 18"
            strokeWidth="1.2"
            stroke="currentColor"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
          {/* right branch */}
          <path
            d="M50 12 C50 16, 62.5 16, 75 18"
            strokeWidth="1.2"
            stroke="currentColor"
            fill="none"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>

      {/* Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="rounded-2xl border p-4 md:pt-6 bg-white/60 backdrop-blur-sm">
          <h4 className="text-lg font-semibold mb-2">{leftTitle}</h4>
          <div className="prose prose-sm md:prose-base max-w-none">{left}</div>
        </div>
        <div className="rounded-2xl border p-4 md:pt-6 bg-white/60 backdrop-blur-sm">
          <h4 className="text-lg font-semibold mb-2">{rightTitle}</h4>
          <div className="prose prose-sm md:prose-base max-w-none">{right}</div>
        </div>
      </div>
    </div>
  );
}
