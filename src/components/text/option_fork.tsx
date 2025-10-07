"use client";
import React from "react";

export default function OptionFork({
  leftTitle,
  rightTitle,
  left,
  right,
  className = "",
}: {
  leftTitle: string;
  rightTitle: string;
  left: React.ReactNode;
  right: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
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
