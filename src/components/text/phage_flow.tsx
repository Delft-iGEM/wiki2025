"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/** ============ Types ============ */
type PhageFlowProps = {
  /** If provided, explicitly controls animation on/off. */
  isActive?: boolean;
  /** If provided, auto-activates when any element matching this selector has aria-expanded="true". Example: ".dropdown-item" */
  triggerSelector?: string;
  /** How many phages to show while active. */
  count?: number;
  /** Origin of the flow within the viewport (px or %, e.g. "50%"). */
  origin?: { x: string | number; y: string | number };
  /** Max travel distance in px from origin in each axis. */
  spread?: { x: number; y: number };
  /** Min/Max seconds for one outward drift cycle (each phage gets a random duration in this range). */
  durationSec?: { min: number; max: number };
  /** Per-phage random start delay range (sec). */
  delaySec?: { min: number; max: number };
  /** Per-phage random scale range. */
  scaleRange?: { min: number; max: number };
  /** z-index of the overlay canvas */
  zIndex?: number;
};

/** ============ Utility ============ */
const randBetween = (min: number, max: number) => min + Math.random() * (max - min);
const px = (v: string | number) => (typeof v === "number" ? `${v}px` : v);

type Particle = {
  id: string;
  dx: number;
  dy: number;
  delay: number;
  duration: number;
  scale: number;
  rotate: number;
  opacity: number;
};

/** Simple inline SVG of a T7-like phage (keeps things self-contained) */
const PhageSVG: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    width="48"
    height="48"
    aria-hidden="true"
  >
    {/* head (icosahedral-ish) */}
    <polygon points="32,4 48,16 48,32 32,44 16,32 16,16" fill="currentColor" opacity="0.9" />
    {/* neck */}
    <rect x="29" y="44" width="6" height="6" rx="2" fill="currentColor" opacity="0.85" />
    {/* tail */}
    <rect x="30" y="50" width="4" height="10" rx="2" fill="currentColor" />
    {/* tail fibers */}
    <line x1="30" y1="60" x2="22" y2="64" stroke="currentColor" strokeWidth="2" />
    <line x1="34" y1="60" x2="42" y2="64" stroke="currentColor" strokeWidth="2" />
    <line x1="30" y1="56" x2="20" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.8" />
    <line x1="34" y1="56" x2="44" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.8" />
  </svg>
);

/** ============ Component ============ */
const PhageFlow: React.FC<PhageFlowProps> = ({
  isActive,
  triggerSelector, // optional auto-detect
  count = 28,
  origin = { x: "50%", y: "40%" },
  spread = { x: 700, y: 400 },
  durationSec = { min: 6, max: 12 },
  delaySec = { min: 0, max: 3 },
  scaleRange = { min: 0.65, max: 1.2 },
  zIndex = 40,
}) => {
  const [autoActive, setAutoActive] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  // Auto-detect activation by observing dropdown(s) aria-expanded
  useEffect(() => {
    if (!triggerSelector) return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>(triggerSelector));
    if (!targets.length) return;

    const computeActive = () =>
      targets.some((el) => el.getAttribute("aria-expanded") === "true");

    setAutoActive(computeActive());

    // Watch attribute changes
    const mo = new MutationObserver(() => setAutoActive(computeActive()));
    targets.forEach((el) =>
      mo.observe(el, { attributes: true, attributeFilter: ["aria-expanded"] })
    );

    // Also listen to clicks (in case aria-expanded updates after a microtask)
    const clickHandler = () => setTimeout(() => setAutoActive(computeActive()), 0);
    targets.forEach((el) => el.addEventListener("click", clickHandler));

    return () => {
      mo.disconnect();
      targets.forEach((el) => el.removeEventListener("click", clickHandler));
    };
  }, [triggerSelector]);

  const active = isActive ?? autoActive;

  // Build particles once per activation (new random field each time it turns on)
  const particles = useMemo<Particle[]>(() => {
    if (!active) return [];
    return Array.from({ length: count }, (_, i) => {
      const angle = Math.random() * Math.PI * 2; // 0..2π
      const dx = Math.cos(angle) * randBetween(spread.x * 0.4, spread.x); // outward bias
      const dy = Math.sin(angle) * randBetween(spread.y * 0.4, spread.y);
      return {
        id: `phage-${Date.now()}-${i}-${Math.floor(Math.random() * 1e6)}`,
        dx,
        dy,
        delay: randBetween(delaySec.min, delaySec.max),
        duration: randBetween(durationSec.min, durationSec.max),
        scale: randBetween(scaleRange.min, scaleRange.max),
        rotate: randBetween(-25, 25),
        opacity: randBetween(0.65, 1),
      };
    });
  }, [active, count, spread.x, spread.y, delaySec.min, delaySec.max, durationSec.min, durationSec.max, scaleRange.min, scaleRange.max]);

  return (
    <>
      {/* Local CSS for the drifting animation */}
      <style>{`
        @keyframes phage-drift {
          0% { transform: translate(0, 0) rotate(0deg); opacity: 0; }
          8% { opacity: 1; }
          100% { transform: translate(var(--dx), var(--dy)) rotate(var(--rot)); opacity: 1; }
        }
      `}</style>

      {/* Overlay canvas (pointer-events none so it doesn't block the page) */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="phage-overlay"
            ref={overlayRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex,
              pointerEvents: "none",
              overflow: "hidden",
            }}
            aria-hidden
          >
            {/* Absolute origin container */}
            <div
              style={{
                position: "absolute",
                left: px(origin.x),
                top: px(origin.y),
                transform: "translate(-50%, -50%)", // center the origin point
              }}
            >
              {particles.map((p) => (
                <div
                  key={p.id}
                  style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    // Per-phage variables for the CSS keyframe to read
                    // rotate needs "deg"
                    ["--dx" as any]: `${p.dx}px`,
                    ["--dy" as any]: `${p.dy}px`,
                    ["--rot" as any]: `${p.rotate}deg`,
                    animation: `phage-drift ${p.duration}s linear ${p.delay}s both`,
                    filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.15))",
                    opacity: p.opacity,
                  }}
                >
                  <div
                    style={{
                      transform: `scale(${p.scale})`,
                      color: "rgba(38, 38, 38, 0.9)", // dark gray; inherits to SVG
                    }}
                  >
                    <PhageSVG />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export {PhageFlow};
