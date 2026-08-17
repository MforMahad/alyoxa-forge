"use client";

import { useState, useRef } from "react";
import { Cpu, Sparkles, Workflow, Users2, Rocket, ArrowUpRight, Radio } from "lucide-react";

export default function FutureVision() {
  const [activeCard, setActiveCard] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const upcoming = [
    {
      icon: Cpu,
      label: "AI-Assisted Workflows",
      code: "CAPABILITY // 01",
      quarter: "Q3 2026",
      status: "IN_DEVELOPMENT",
      description: "Context-aware AI co-pilots integrated directly into task structures for automated spec drafting and dynamic prioritization.",
    },
    {
      icon: Sparkles,
      label: "Smart Project Insights",
      code: "CAPABILITY // 02",
      quarter: "Q3 2026",
      status: "STAGING",
      description: "Autonomous bottleneck detection and execution velocity forecasting computed real-time from telemetry streams.",
    },
    {
      icon: Workflow,
      label: "Automated Task Pipeline",
      code: "CAPABILITY // 03",
      quarter: "Q4 2026",
      status: "ARCHITECTURE",
      description: "Zero-code trigger nodes connecting GitHub events, Webhooks, and deployment pipelines to task state transitions.",
    },
    {
      icon: Users2,
      label: "Collaborative Workspaces",
      code: "CAPABILITY // 04",
      quarter: "Q4 2026",
      status: "CONCEPTUAL",
      description: "Real-time multiplayer editing and high-agency team permissions built on low-latency state synchronization.",
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
      id="roadmap"
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

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* CAD Corner Crosshairs */}
      <div className="absolute top-6 left-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute top-6 right-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute bottom-6 left-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute bottom-6 right-6 text-[#18181B]/30 text-[10px]">+</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Tag & Editorial Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px] uppercase tracking-widest mb-6 shadow-sm">
            <Rocket className="w-3.5 h-3.5 text-[#18181B]" />
            <span>[08 // ECOSYSTEM ROADMAP]</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-[1.12] mb-6 text-[#18181B]">
            And this is only the{" "}
            <span className="italic font-normal text-zinc-600">
              beginning.
            </span>
          </h2>

          <p className="text-base text-[#27272A]/70 font-light leading-relaxed max-w-xl">
            Forge is engineered as the foundational workspace layer for the expanding ALYOXA high-agency product ecosystem.
          </p>
        </div>

        {/* Live Interactive Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {upcoming.map((item, idx) => {
            const Icon = item.icon;
            const isSelected = activeCard === idx;

            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveCard(idx)}
                className={`p-7 rounded-3xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group cursor-pointer border ${
                  isSelected
                    ? "bg-[#18181B] text-[#F7F6F2] border-[#27272A] shadow-2xl -translate-y-1.5"
                    : "bg-white/60 text-[#18181B] border-[#18181B]/15 hover:bg-white hover:border-[#18181B]/30 shadow-sm"
                }`}
              >
                {/* Micro CAD Grid Accent inside active card */}
                {isSelected && (
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
                )}

                <div className="relative z-10">
                  {/* Top Metadata Badge */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-current/10">
                    <span className="text-[9px] uppercase tracking-widest opacity-60 font-medium">
                      {item.code}
                    </span>
                    <span
                      className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded font-bold ${
                        isSelected
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-[#18181B]/5 text-[#18181B]/70"
                      }`}
                    >
                      {item.quarter}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-colors ${
                        isSelected
                          ? "bg-white/10 text-emerald-400 border border-white/10"
                          : "bg-[#18181B]/5 text-[#18181B]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-2">
                      {item.label}
                    </h3>
                    <p
                      className={`text-xs font-light leading-relaxed ${
                        isSelected ? "text-zinc-300" : "text-[#27272A]/70"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Status Telemetry */}
                <div
                  className={`relative z-10 pt-4 border-t flex items-center justify-between text-[10px] ${
                    isSelected
                      ? "border-[#27272A] text-zinc-400"
                      : "border-[#18181B]/10 text-[#18181B]/50"
                  }`}
                >
                  <span className="flex items-center gap-1 font-semibold uppercase tracking-wider">
                    <Radio className={`w-3 h-3 ${isSelected ? "text-emerald-400 animate-pulse" : "text-zinc-400"}`} />
                    {item.status}
                  </span>
                  <ArrowUpRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isSelected ? "text-emerald-400 translate-x-0.5 -translate-y-0.5" : "opacity-40"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Status Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#18181B] text-[#F7F6F2] border border-[#27272A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-300 font-medium">
              DEPLOYMENT_PIPELINE // ALL SYSTEMS OPERATIONAL
            </span>
          </div>
          <span className="text-zinc-400 text-[10px] uppercase tracking-wider">
            ALYOXA_CORE_FRAMEWORK v2.4
          </span>
        </div>

      </div>
    </section>
  );
}