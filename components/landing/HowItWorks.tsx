"use client";

import { useState, useRef } from "react";
import { Workflow, ArrowRight, Layers, ListTodo, Hammer, Terminal } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      phase: "INITIALIZATION",
      icon: Layers,
      title: "Create Vault",
      description: "Define project parameters, isolate build scope, and initialize a dedicated workspace in seconds.",
      status: "EXEC_READY",
    },
    {
      step: "02",
      phase: "DECONSTRUCTION",
      icon: ListTodo,
      title: "Deconstruct Scope",
      description: "Break macro vision into atomic, actionable task vectors and prioritized execution sequences.",
      status: "PARSING_TREE",
    },
    {
      step: "03",
      phase: "DEPLOYMENT",
      icon: Hammer,
      title: "Forge & Deliver",
      description: "Execute continuously with low context latency, track progress, and ship high-agency output.",
      status: "PIPELINE_ACTIVE",
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
      id="how-it-works"
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

      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px]  uppercase tracking-widest mb-6 shadow-sm">
            <Workflow className="w-3.5 h-3.5 text-[#18181B]" />
            <span>[05 // EXECUTION PIPELINE]</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-[1.12] mb-6 text-[#18181B]">
            A simple, predictable{" "}
            <span className="italic  font-normal text-zinc-600">
              execution rhythm.
            </span>
          </h2>

          <p className="text-base text-[#27272A]/70 font-light leading-relaxed max-w-xl">
            Zero setup tax or learning curve. Three structured phases to move from raw concept to delivered product.
          </p>
        </div>

        {/* Pipeline Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-[1px] bg-dashed border-b border-dashed border-[#18181B]/20 -translate-y-12 z-0" />

          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative p-8 sm:p-9 rounded-3xl bg-[#18181B] text-[#F7F6F2] border border-[#27272A] shadow-2xl hover:scale-[1.02] hover:shadow-zinc-900/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden z-10"
              >
                {/* Micro CAD Grid Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Bar Spec */}
                  <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#27272A]">
                    <span className="text-[10px]  font-bold text-zinc-500 group-hover:text-white transition-colors">
                      STEP // {s.step}
                    </span>
                    <span className="text-[9px]  uppercase tracking-widest text-zinc-300 bg-[#27272A] px-2.5 py-1 rounded-full border border-white/10">
                      {s.phase}
                    </span>
                  </div>

                  {/* Icon & Sequence Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#27272A] text-[#F7F6F2] border border-white/10 flex items-center justify-center shadow-inner group-hover:bg-[#F7F6F2] group-hover:text-[#18181B] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="hidden md:block w-4 h-4 text-zinc-600 group-hover:text-zinc-300 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed mb-8">
                    {s.description}
                  </p>
                </div>

                {/* Status Telemetry Footer */}
                <div className="relative z-10 pt-6 border-t border-[#27272A] flex items-center justify-between text-[10px]  text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <Terminal className="w-3.5 h-3.5" /> {s.status}
                  </span>
                  <span className="text-zinc-500 font-bold">[{s.step}/03]</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}