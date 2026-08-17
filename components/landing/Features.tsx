"use client";

import { useState, useRef } from "react";
import { Kanban, CheckSquare, BarChart3, Box, Compass, ShieldCheck, Terminal, Cpu } from "lucide-react";

export default function Features() {
  const featuresList = [
    {
      id: "01",
      tag: "CORE_VAULT",
      icon: Kanban,
      title: "Projects",
      desc: "Structure and isolate your ideas into distinct, manageable build channels.",
    },
    {
      id: "02",
      tag: "ATOMIC_TASKS",
      icon: CheckSquare,
      title: "Tasks",
      desc: "Convert high-level concepts into clear, actionable itemized workflows.",
    },
    {
      id: "03",
      tag: "TELEMETRY",
      icon: BarChart3,
      title: "Progress Insights",
      desc: "Understand what is moving forward and what needs immediate technical focus.",
    },
    {
      id: "04",
      tag: "CONTEXT_NODE",
      icon: Box,
      title: "Workspace Context",
      desc: "Unify project details, notes, and progress markers under a single view.",
    },
    {
      id: "05",
      tag: "SMART_ROUTING",
      icon: Compass,
      title: "Smart Organization",
      desc: "Keep workflows neat without spending hours configuring custom schemas.",
    },
    {
      id: "06",
      tag: "SCALABLE_MESH",
      icon: ShieldCheck,
      title: "Built for Scale",
      desc: "Start lightweight as an individual, scale seamlessly as projects expand.",
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
      id="features"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -500, y: -500 });
      }}
      className="py-28 relative bg-[#F7F6F2] text-[#18181B] overflow-hidden select-none border-t border-[#18181B]/15"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.05), transparent 80%)`,
        }}
      />

      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px]  uppercase tracking-widest mb-6 shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#18181B]" />
            <span>[04 // FEATURE MATRIX]</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-bold tracking-tight leading-[1.12] mb-6 text-[#18181B]">
            Engineered for clarity and{" "}
            <span className="italic  font-normal text-zinc-600">
              pure execution.
            </span>
          </h2>

          <p className="text-base text-[#27272A]/70 font-light leading-relaxed max-w-xl">
            Every component in Forge is crafted to reduce friction and keep your high-agency projects moving forward.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresList.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="relative p-7 sm:p-8 rounded-2xl border border-[#18181B]/15 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:border-[#18181B] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* CAD Header Tag */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#18181B]/10">
                  <span className="text-[10px]  font-bold text-[#18181B]/40 group-hover:text-[#18181B] transition-colors">
                    MOD_{item.id}
                  </span>
                  <span className="text-[9px]  uppercase tracking-widest text-[#18181B]/60 bg-[#18181B]/5 px-2 py-0.5 rounded">
                    {item.tag}
                  </span>
                </div>

                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-[#18181B] text-[#F7F6F2] flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold text-[#18181B] mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#27272A]/70 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Footer Crosshair Detail */}
                <div className="mt-8 pt-4 border-t border-[#18181B]/10 flex items-center justify-between text-[9px]  text-[#18181B]/40">
                  <span className="flex items-center gap-1">
                    <Terminal className="w-3 h-3" /> ALYOXA_CORE
                  </span>
                  <span>+</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}