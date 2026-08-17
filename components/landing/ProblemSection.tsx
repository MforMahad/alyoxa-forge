"use client";

import { useState, useRef } from "react";
import { Layers, AppWindow, GitCommit, Minimize2, AlertTriangle, Terminal } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      code: "01",
      tag: "SCATTER",
      icon: Layers,
      title: "Fragmented Workflows",
      description: "Ideas, deliverables, and critical project logs get buried across disparate third-party web apps.",
      impact: "High Latency",
    },
    {
      code: "02",
      tag: "OVERLOAD",
      icon: AppWindow,
      title: "Tool Configuration Fatigue",
      description: "Managing projects shouldn't require managing an entire bloated software operating system.",
      impact: "Cognitive Noise",
    },
    {
      code: "03",
      tag: "CONTEXT_LOSS",
      icon: GitCommit,
      title: "Vanishing Context",
      description: "Crucial strategic decisions disappear into endless chat streams, disconnecting teams from goals.",
      impact: "Scope Drift",
    },
    {
      code: "04",
      tag: "FRICTION",
      icon: Minimize2,
      title: "Heavy Enterprise Overhead",
      description: "Heavy, sluggish legacy suites paralyze individuals and agile teams who thrive on pure velocity.",
      impact: "Momentum Loss",
    },
  ];

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
      className="py-28 relative bg-[#F7F6F2] text-[#18181B] overflow-hidden select-none"
    >
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.05), transparent 80%)`,
        }}
      />

      {/* Structural Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Tag & Editorial Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px] font-mono uppercase tracking-widest mb-6 shadow-sm">
            <AlertTriangle className="w-3.5 h-3.5 text-[#18181B]" />
            <span>[02 // DIAGNOSTIC REVIEW]</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-[1.12] mb-6 text-[#18181B]">
            Work shouldn&apos;t be scattered across{" "}
            <span className="italic font-normal text-zinc-600">
              five different silos.
            </span>
          </h2>

          <p className="text-base text-[#27272A]/70 font-light leading-relaxed max-w-xl">
            Redundant configurations, lost focus, and fragmented context. Structural friction is the silent killer of execution speed.
          </p>
        </div>

        {/* Diagnostic Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.code}
                className="relative p-6 sm:p-7 rounded-2xl border border-[#18181B]/15 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-[#18181B] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Blueprint Corner Coordinates */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#18181B]/10">
                  <span className="text-[10px] font-mono font-bold text-[#18181B]/40 group-hover:text-[#18181B] transition-colors">
                    REF_{item.code}
                  </span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[#18181B]/60 bg-[#18181B]/5 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                <div>
                  {/* Icon Box */}
                  <div className="w-12 h-12 rounded-xl bg-[#18181B] text-[#F7F6F2] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-semibold text-[#18181B] mb-2.5 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#27272A]/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Impact Metric Tag */}
                <div className="mt-8 pt-4 border-t border-[#18181B]/10 flex items-center justify-between text-[10px] font-mono text-[#18181B]/60">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> IMPACT:
                  </span>
                  <span className="font-semibold text-[#18181B]">{item.impact}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}