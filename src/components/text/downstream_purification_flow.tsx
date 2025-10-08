"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";

/** Simple T7-ish phage drawing (unchanged shape) */
function T7Particle({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const headR = 6 * scale;
  const tailL = 12 * scale;
  const headPath = `M 0 ${-headR} L ${headR * 0.866} ${-headR / 2} L ${headR * 0.866} ${headR / 2} L 0 ${headR} L ${-headR * 0.866} ${headR / 2} L ${-headR * 0.866} ${-headR / 2} Z`;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <path d={headPath} fill="#0ea5e9" stroke="#0369a1" strokeWidth={0.8} />
      <line x1={0} y1={headR} x2={0} y2={headR + tailL} stroke="#0c4a6e" strokeWidth={1.4} strokeLinecap="round" />
      <line x1={-4 * scale} y1={headR + tailL} x2={4 * scale} y2={headR + tailL} stroke="#0c4a6e" strokeWidth={1.2} strokeLinecap="round" />
      <line x1={-4 * scale} y1={headR + tailL} x2={-7 * scale} y2={headR + tailL + 3 * scale} stroke="#0c4a6e" strokeWidth={0.9} />
      <line x1={4 * scale} y1={headR + tailL} x2={7 * scale} y2={headR + tailL + 3 * scale} stroke="#0c4a6e" strokeWidth={0.9} />
    </g>
  );
}

/** Icosahedral-like MS2 capsid (regular 20-gon with faint facet lines; not a star) */
function MS2Capsid({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const r = 5 * scale;
  const sides = 10;
  const verts = Array.from({ length: sides }).map((_, i) => {
    const angle = (i * 2 * Math.PI) / sides;
    return { x: Math.cos(angle) * r, y: Math.sin(angle) * r };
  });
  const points = verts.map(v => `${v.x},${v.y}`).join(" ");

  return (
    <g transform={`translate(${x}, ${y})`}>
      <polygon points={points} fill="#f59e0b" stroke="#b45309" strokeWidth={0.8} />
      {/* subtle facet fan to suggest triangular faces */}
      {verts.map((v, i) => (
        <line
          key={i}
          x1={0}
          y1={0}
          x2={v.x}
          y2={v.y}
          stroke="#b45309"
          strokeWidth={0.5}
          strokeOpacity={0.35}
        />
      ))}
    </g>
  );
}

/** Smooth E. coli body (no tails) */
function EColi({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  const bodyL = 50 * scale;
  const bodyR = 25 * scale;
  return (
    <g transform={`translate(${x}, ${y})`}>
      <ellipse rx={bodyL / 2} ry={bodyR / 2} fill="#84cc16" stroke="#4d7c0f" strokeWidth={1} />
    </g>
  );
}

/** Exported name stays the same so your imports don't change */
export function DownstreamPurificationFlow() {
  const width = 900;
  const height = 180;

  // Gentle "float" generator
  const makeFloaters = useMemo(() => {
    const rand = (n: number) => Math.random() * n;
    const base = (n: number) => Array.from({ length: n }).map((_, i) => i);

    // Phages
    const phages = base(20).map((i) => ({
      id: `phage-${i}`,
      x: rand(width),
      y: rand(height),
      dx: (Math.random() - 0.5) * 50, // drift amplitude
      dy: (Math.random() - 0.5) * 40,
      duration: 10 + rand(6),
      delay: rand(2),
      scale: 0.7 + rand(0.6),
    }));

    // E. coli
    const eColi = base(6).map((i) => ({
      id: `ecoli-${i}`,
      x: rand(width),
      y: rand(height),
      dx: (Math.random() - 0.5) * 60,
      dy: (Math.random() - 0.5) * 50,
      duration: 12 + rand(6),
      delay: rand(3),
      scale: 0.8 + rand(0.6),
    }));

    // MS2
    const ms2 = base(10).map((i) => ({
      id: `ms2-${i}`,
      x: rand(width),
      y: rand(height),
      dx: (Math.random() - 0.5) * 55,
      dy: (Math.random() - 0.5) * 45,
      duration: 9 + rand(6),
      delay: rand(2),
      scale: 0.6 + rand(0.6),
    }));

    return { phages, eColi, ms2 };
  }, []);

  const { phages, eColi, ms2 } = makeFloaters;

  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40 overflow-visible">
        {/* Floaters: E. coli */}
        {eColi.map((c) => (
          <motion.g
            key={c.id}
            initial={{ x: c.x, y: c.y, opacity: 0.95 }}
            animate={{ x: c.x + c.dx, y: c.y + c.dy }}
            transition={{
              duration: c.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: c.delay,
            }}
          >
            <EColi x={0} y={0} scale={c.scale} />
          </motion.g>
        ))}

        {/* Floaters: MS2 capsids */}
        {ms2.map((m) => (
          <motion.g
            key={m.id}
            initial={{ x: m.x, y: m.y, opacity: 0.95 }}
            animate={{ x: m.x + m.dx, y: m.y + m.dy }}
            transition={{
              duration: m.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: m.delay,
            }}
          >
            <MS2Capsid x={0} y={0} scale={m.scale} />
          </motion.g>
        ))}

        {/* Floaters: T7 phages */}
        {phages.map((p) => (
          <motion.g
            key={p.id}
            initial={{ x: p.x, y: p.y, opacity: 0.95 }}
            animate={{ x: p.x + p.dx, y: p.y + p.dy }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: p.delay,
            }}
          >
            <T7Particle x={0} y={0} scale={p.scale} />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
