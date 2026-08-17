"use client";

import { useState, useRef } from "react";
import { Target, CheckCircle2, Zap, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      num: "01",
      tag: "SYNCHRONIZED_TREE",
      icon: Target,
      title: "Centralized Vault",
      description: "Keep specs, status updates, and code repos neatly categorized under dedicated, unified project trees.",
      metric: "100% Context Retention",
    },
    {
      num: "02",
      tag: "ATOMIC_EXECUTION",
      icon: CheckCircle2,
      title: "Focused Task Execution",
      description: "Break complex vision into atomic, actionable steps that can be tracked, executed, and completed effortlessly.",
      metric: "Zero Friction Velocity",
    },
    {
      num: "03",
      tag: "OPTIMIZED_PIPELINE",
      icon: Zap,
      title: "Uncompromising Momentum",
      description: "Eliminate setup tax completely. Forge lets you transition seamlessly from pure conceptualization to active build.",
      metric: "Instant Deployment",
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

      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b08_1px,transparent_1px),linear-gradient(to_bottom,#18181b08_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px]  uppercase tracking-widest mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#18181B]" />
            <span>[03 // ARCHITECTURAL SOLUTION]</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-[1.12] mb-6 text-[#18181B]">
            Forge brings everything back into{" "}
            <span className="italic  font-normal text-zinc-600">
              singular focus.
            </span>
          </h2>

          <p className="text-base text-[#27272A]/70 font-light leading-relaxed max-w-xl">
            Organize projects, track progress, manage execution, and keep momentum moving from one quiet, focused workspace.
          </p>
        </div>

        {/* Structural Solution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className="relative p-8 sm:p-9 rounded-3xl bg-[#18181B] text-[#F7F6F2] border border-[#27272A] shadow-2xl hover:scale-[1.02] hover:shadow-zinc-900/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Subtle CAD Watermark Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar Spec */}
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#27272A]">
                    <span className="text-[10px]  font-bold text-zinc-500 group-hover:text-white transition-colors">
                      SPEC // {item.num}
                    </span>
                    <span className="text-[9px]  uppercase tracking-widest text-zinc-300 bg-[#27272A] px-2.5 py-1 rounded-full border border-white/10">
                      {item.tag}
                    </span>
                  </div>

                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-[#27272A] text-[#F7F6F2] border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:bg-[#F7F6F2] group-hover:text-[#18181B] transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Architectural Telemetry Tag */}
                <div className="relative z-10 pt-6 border-t border-[#27272A] flex items-center justify-between text-[10px]  text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5" /> {item.metric}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}