"use client";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Dna, Filter, FlaskConical, Columns, Droplets } from "lucide-react";

type Step = {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  { key: "clarification", title: "Clarification", description: "Initial removal of large cellular debris post-lysis.", icon: <FlaskConical className="w-5 h-5" /> },
  { key: "nuclease", title: "Nuclease Treatment", description: "Degradation of residual host nucleic acids (DNA and RNA).", icon: <Dna className="w-5 h-5" /> },
  { key: "filtration", title: "Filtration", description: "A crucial step to separate the phage product from smaller impurities.", icon: <Filter className="w-5 h-5" /> },
  { key: "aex", title: "Anion-Exchange Chromatography", description: "The primary method for robustly removing endotoxins and other protein contaminants.", icon: <Columns className="w-5 h-5" /> },
  { key: "polishing", title: "Polishing (TFF / UF/DF)", description: "A final concentration and buffer exchange step to prepare the final formulation.", icon: <Droplets className="w-5 h-5" /> },
];

const AccentLine = () => (
  <div className="h-1 w-40 rounded-full bg-gradient-to-r from-sky-900 via-sky-600 to-sky-400" />
);

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

function StepCard({
  step,
  index,
  active,
  onClick,
}: {
  step: Step;
  index: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 250, damping: 20 }}>
      <div
        className={`relative cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-md p-4 ${
          active ? "ring-2 ring-sky-600" : "hover:ring-1 hover:ring-slate-300"
        }`}
        onClick={onClick}
        title={step.description}
      >
        <div className="pb-2">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            {step.icon}
            <span>
              Step {index + 1}: {step.title}
            </span>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-slate-700">{step.description}</p>
      </div>
    </motion.div>
  );
}

export default function DownstreamPurificationFlow() {
  const [active, setActive] = useState<string>(STEPS[0].key);

  return (
    <div className="w-full mx-auto max-w-6xl p-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Downstream Purification</h2>
          <p className="text-slate-600 max-w-2xl">Click a step to focus. Phages drift across to suggest continuous processing.</p>
          <div className="mt-3">
            <AccentLine />
          </div>
        </div>
      </div>

      <div className="my-6 h-px bg-slate-200" />

      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
        <FlowParticles />
        <div className="absolute left-0 right-0 top-[140px] h-[2px] bg-gradient-to-r from-slate-200 via-sky-200 to-slate-200" />

        <div className="grid md:grid-cols-5 gap-4 relative mt-8">
          {STEPS.map((s, i) => (
            <div key={s.key} className="relative pt-6">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1">
                  {i > 0 && <ArrowRight className="h-3 w-3" />}Step {i + 1}
                </span>
              </div>
              <StepCard step={s} index={i} active={active === s.key} onClick={() => setActive(s.key)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
