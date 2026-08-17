"use client";

import { useState, useRef } from "react";
import { XCircle, CheckCircle2, Sliders, Zap, ShieldAlert, Cpu, Terminal, Sparkles } from "lucide-react";

export default function ComparisonSection() {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const comparisonData = [
    {
      category: "SETUP & ONBOARDING",
      legacy: "Hours lost in workspace setup and schema design",
      forge: "Zero setup tax. Instant production workspace out of the box",
      delta: "10x Speedup",
    },
    {
      category: "INTERFACE NOISE",
      legacy: "Bloated navigation tree and hidden nested sub-menus",
      forge: "Focused, noise-free layout engineered for pure execution",
      delta: "Zero Latency",
    },
    {
      category: "WORKFLOW FRICTION",
      legacy: "Complex field requirements slowing down individual velocity",
      forge: "Atomic, frictionless task execution that flows seamlessly",
      delta: "High Agency",
    },
    {
      category: "CONTEXT RETENTION",
      legacy: "Key decisions lost inside multi-channel chat logs",
      forge: "Centralized project vault with 100% context alignment",
      delta: "Unified State",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -500, y: -500 });
      }}
      className="py-28 relative bg-[#F7F6F2] text-[#18181B] overflow-hidden select-none border-t border-[#18181B]/15"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.05), transparent 80%)`,
        }}
      />

      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* Crosshair Corner Markers */}
      <div className="absolute top-6 left-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute top-6 right-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute bottom-6 left-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute bottom-6 right-6 text-[#18181B]/30 text-[10px]">+</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Tag & Editorial Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px] uppercase tracking-widest mb-6 shadow-sm">
            <Sliders className="w-3.5 h-3.5 text-[#18181B]" />
            <span>[07 // ARCHITECTURAL BENCHMARK]</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight leading-[1.12] mb-6 text-[#18181B]">
            Powerful doesn&apos;t have to mean{" "}
            <span className="italic font-serif font-normal text-[#18181B]">
              over-engineered.
            </span>
          </h2>

          <p className="text-base text-[#27272A]/70 font-light leading-relaxed max-w-xl">
            Built from the ground up to respect your focus, eliminate setup fatigue, and maximize execution velocity.
          </p>
        </div>

        {/* Live Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Legacy Tools Side (Passive / Low Agency) */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-[#18181B]/15 bg-white/40 backdrop-blur-sm flex flex-col justify-between opacity-80 hover:opacity-100 transition-opacity">
            <div>
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#18181B]/10">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-500/80" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#18181B]/60">
                    LEGACY SUITES
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest bg-red-500/10 text-red-600 px-2.5 py-0.5 rounded border border-red-500/20">
                  HIGH_FRICTION
                </span>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveFeature(idx)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeFeature === idx
                        ? "bg-red-500/5 border-red-500/30"
                        : "border-transparent hover:bg-black/5"
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-widest text-[#18181B]/40 block mb-1">
                      {item.category}
                    </span>
                    <div className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                      <p className="text-xs text-[#27272A]/80 font-light leading-relaxed">
                        {item.legacy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#18181B]/10 flex items-center justify-between text-[10px] text-[#18181B]/50">
              <span>STATUS: BLOATED</span>
              <span>LATENCY: HIGH</span>
            </div>
          </div>

          {/* ALYOXA Forge Side (Active / High Agency) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-[#18181B] text-[#F7F6F2] border border-[#27272A] shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            {/* Background Structural Accent Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#27272A]">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-white">
                    ALYOXA FORGE
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-widest bg-emerald-500/10 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-500/30 shadow-sm">
                  [FORGE // OPTIMIZED]
                </span>
              </div>

              <div className="space-y-6">
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveFeature(idx)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      activeFeature === idx
                        ? "bg-[#27272A] border-emerald-500/40 shadow-lg translate-x-1"
                        : "border-transparent bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[9px] uppercase tracking-widest text-zinc-400">
                        {item.category}
                      </span>
                      <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded">
                        {item.delta}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <p className="text-xs text-zinc-200 font-normal leading-relaxed">
                        {item.forge}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CAD Telemetry Readout */}
            <div className="relative z-10 mt-10 pt-6 border-t border-[#27272A] flex items-center justify-between text-[10px] text-zinc-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Terminal className="w-3.5 h-3.5" /> VELOCITY_MODE: ACTIVE
              </span>
              <span className="flex items-center gap-1 text-zinc-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> 100% HIGH AGENCY
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}