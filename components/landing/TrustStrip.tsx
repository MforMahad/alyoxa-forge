"use client";

import { useState, useRef } from "react";
import { Cpu, Terminal } from "lucide-react";

export default function TrustStrip() {
  const stack = [
    { name: "Next.js", version: "v14.2" },
    { name: "TypeScript", version: "v5.4" },
    { name: "React", version: "v18.3" },
    { name: "Tailwind CSS", version: "v3.4" },
    { name: "MongoDB", version: "v6.0" },
    { name: "Lucide Icons", version: "v0.3" },
  ];

  const stripRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!stripRef.current) return;
    const rect = stripRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={stripRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -500, y: -500 });
      }}
      className="relative py-10 border-y border-[#18181B]/15 bg-[#F7F6F2] overflow-hidden select-none group"
    >
      {/* Dynamic Cursor Spotlight Effect */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.07), transparent 80%)`,
        }}
      />

      {/* Background Architectural Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b08_1px,transparent_1px)] [background-size:32px_100%] pointer-events-none" />

      {/* Crosshair Decorative CAD Intersections */}
      <div className="absolute top-0 left-6 text-[#18181B]/30 text-[10px] ">+</div>
      <div className="absolute top-0 right-6 text-[#18181B]/30 text-[10px] ">+</div>
      <div className="absolute bottom-0 left-6 text-[#18181B]/30 text-[10px] ">+</div>
      <div className="absolute bottom-0 right-6 text-[#18181B]/30 text-[10px] ">+</div>

      <div className="max-w-7xl mx-auto px-6 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-[#18181B]" />
          <span className="text-[10px]  uppercase tracking-widest text-[#18181B]/70 font-semibold">
            [01 // SYSTEM STACK]
          </span>
        </div>
        <p className="text-[11px]  text-[#27272A]/80 uppercase tracking-wider text-center">
          Engineered on high-agency production architecture
        </p>
        <div className="hidden sm:flex items-center gap-1.5 text-[10px]  text-[#18181B]/70">
          <Cpu className="w-3 h-3" />
          <span>EDGE_READY</span>
        </div>
      </div>

      {/* Infinite Architectural Marquee with Hover Pause & Cursor Magnetism */}
      <div className="relative flex overflow-x-hidden z-10">
        <div className="flex animate-marquee whitespace-nowrap gap-6 py-2 group-hover:[animation-play-state:paused]">
          {stack.concat(stack).concat(stack).map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl border border-[#18181B]/15 bg-white/80 backdrop-blur-md text-[#18181B] shadow-sm hover:scale-105 hover:bg-[#18181B] hover:text-[#F7F6F2] hover:border-[#18181B] hover:shadow-xl transition-all duration-300 cursor-pointer group/badge"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#18181B] group-hover/badge:bg-emerald-400 transition-colors" />
              <span className="text-xs font-semibold tracking-tight font-sans">
                {item.name}
              </span>
              <span className="text-[9px]  text-[#18181B]/60 bg-[#18181B]/5 group-hover/badge:bg-white/15 group-hover/badge:text-[#F7F6F2] px-1.5 py-0.5 rounded transition-colors">
                {item.version}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}