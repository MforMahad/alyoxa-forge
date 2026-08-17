"use client";

import { useState, useRef } from "react";
import { Compass, Sparkles, Terminal, CheckCircle2, XCircle, ArrowRight } from "lucide-react";

export default function Philosophy() {
  const [activeTab, setActiveTab] = useState<"old" | "forge">("forge");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

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
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.05), transparent 80%)`,
        }}
      />

      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px] uppercase tracking-widest mb-6 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#18181B]" />
            <span>[06 // PRODUCT PHILOSOPHY]</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-[1.12] text-[#18181B]">
            Less management.{" "}
            <span className="italic font-normal text-zinc-600">
              More making.
            </span>
          </h2>
        </div>

        {/* High-Agency Manifesto Box */}
        <div className="rounded-3xl bg-[#18181B] text-[#F7F6F2] border border-[#27272A] shadow-2xl overflow-hidden relative group">
          
          {/* CAD Background Grid Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          {/* Top Control Bar & State Switcher */}
          <div className="p-6 sm:p-8 border-b border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 bg-[#18181B]/80 backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span className="uppercase tracking-wider font-medium">MANIFESTO_ENGINE // V1.0</span>
            </div>

            {/* Interactive Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-[#27272A] border border-white/10">
              <button
                onClick={() => setActiveTab("old")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === "old"
                    ? "bg-red-500/20 text-red-300 border border-red-500/30"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <XCircle className="w-3.5 h-3.5" />
                LEGACY SUITES
              </button>
              <button
                onClick={() => setActiveTab("forge")}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                  activeTab === "forge"
                    ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 shadow-md"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                THE FORGE WAY
              </button>
            </div>
          </div>

          {/* Dynamic Content Panel */}
          <div className="p-8 sm:p-14 relative z-10">
            {activeTab === "old" ? (
              <div className="space-y-6 animate-fadeIn">
                <div className="inline-block px-3 py-1 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] uppercase tracking-wider">
                  SYSTEM_STATUS // HIGH_FRICTION
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                  Bloated software suites turn makers into full-time project managers.
                </h3>
                <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-2xl">
                  Endless custom databases, required field entries, complex automation rules, and setup fatigue. You spend more energy configuring your workspace than actually shipping software.
                </p>
                <div className="pt-6 border-t border-[#27272A] flex items-center gap-2 text-xs text-red-400">
                  <span>RESULT: METRIC DRIFT & CONTEXT LOSS</span>
                </div>
              </div>
            ) : (
              <div className="space-y-6 animate-fadeIn">
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase tracking-wider">
                  SYSTEM_STATUS // OPTIMAL_VELOCITY
                </div>
                <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-snug">
                  Forge provides just enough structure to keep momentum moving.
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-2xl">
                  Zero setup tax. Clean, high-agency project vaults designed for individuals and teams who care about shipping over status reports.
                </p>
                <div className="pt-6 border-t border-[#27272A] flex items-center justify-between text-xs text-emerald-400">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-4 h-4" /> GUARANTEED EXECUTION VELOCITY
                  </span>
                  <span className="text-zinc-400 flex items-center gap-1">
                    READY TO BUILD <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Cad Telemetry */}
          <div className="px-8 py-4 bg-[#111113] border-t border-[#27272A] flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span>COORD: [44.091, -71.021]</span>
            <span>ALYOXA_PHILOSOPHY_CORE</span>
          </div>
        </div>
      </div>
    </section>
  );
}