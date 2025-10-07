"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

/** Toggle the white panel (border + bg) on/off */
const SHOW_PANEL = true;

type Step = {
  key: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  titleClass?: string;
};

const STEPS: Step[] = [
  { key: "clarification", title: "Clarification", description: "Initial removal of large cellular debris post-lysis." },
  { key: "nuclease", title: "Nuclease Treatment", description: "Degradation of residual host nucleic acids (DNA and RNA)." },
  { key: "filtration", title: "Filtration", description: "A crucial step to separate the phage product from smaller impurities." },
  { key: "aex", title: "Anion-Exchange Chromatography", description: "The primary method for robustly removing endotoxins and other protein contaminants.", titleClass: "text-sm" },
  { key: "polishing", title: "Polishing", description: "A final concentration and buffer exchange step to prepare the final formulation." },
];

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

const FlowParticles = () => {
  const lanes = 7;
  const count = 24;
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        lane: i % lanes,
        delay: (i % lanes) * 0.35 + (i % 3) * 0.12,
        scale: 0.8 + ((i * 37) % 10) / 50,
        jitter: ((i * 53) % 6) - 3,
        speed: 7 + ((i * 29) % 30) / 10,
      })),
    []
  );

  return (
    <svg viewBox="0 0 900 180" className="w-full h-40 overflow-visible">
      {particles.map((p) => (
        <motion.g
          key={p.id}
          initial={{ x: -40, y: 20 + p.lane * 20 + p.jitter, opacity: 1 }}
          animate={{ x: 940 }}
          transition={{ duration: p.speed, repeat: Infinity, delay: p.delay, ease: "linear" }}
        >
          <T7Particle x={0} y={0} scale={p.scale} />
        </motion.g>
      ))}
    </svg>
  );
};

/** arrows that align 1:1 with the 5 cards */
const StepArrows = () => (
  <div className="absolute inset-x-6 top-[142px] grid md:grid-cols-5 gap-4 pointer-events-none">
    {STEPS.map((s) => (
      <svg key={s.key} viewBox="0 0 100 12" className="h-3 w-full">
        <line x1="0" y1="6" x2="96" y2="6" stroke="#60a5fa" strokeWidth="2" />
        <polygon points="96,2 100,6 96,10" fill="#60a5fa" />
      </svg>
    ))}
  </div>
);

function StepCard({
  step,
  active,
  onClick,
}: {
  step: Step;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 220, damping: 22 }} className="h-full">
      <div
        className={`relative cursor-pointer rounded-2xl border border-slate-200 bg-white p-4 h-full flex flex-col shadow-sm hover:shadow-md ${
          active ? "ring-2 ring-sky-600" : ""
        }`}
        onClick={onClick}
      >
        <div className="pb-2">
          <div className="flex items-center gap-2 text-slate-800 font-semibold leading-snug">
            {step.icon && step.icon}
            <span className={`break-words text-[0.95rem] ${step.titleClass ?? ""}`}>{step.title}</span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-700 mt-1 grow">{step.description}</p>
      </div>
    </motion.div>
  );
}

export function DownstreamPurificationFlow() {
  const [active, setActive] = useState<string>(STEPS[0].key);

  return (
    <div className="w-full mx-auto max-w-6xl p-6">
      {/* title optional — delete if you don't want it */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Downstream Purification</h2>
        </div>
      </div>

      <div className="my-6 h-px bg-slate-200" />

      <div
        className={[
          "relative p-6",
          SHOW_PANEL ? "rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden" : "",
        ].join(" ")}
      >
        {/* particles */}
        <FlowParticles />

        {/* thin rule under the particles */}
        <div className="absolute left-6 right-6 top-[146px] h-px bg-slate-200/80" />

        {/* arrows aligned to cards */}
        <StepArrows />

        {/* cards */}
        <div className="grid md:grid-cols-5 gap-4 relative mt-8 items-stretch auto-rows-fr">
          {STEPS.map((s) => (
            <div key={s.key} className="relative">
              <StepCard step={s} active={active === s.key} onClick={() => setActive(s.key)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
