"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

export default function CTASection() {
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
      className="py-28 relative bg-[#F7F6F2] text-[#18181B] overflow-hidden select-none border-t border-[#18181B]/15 text-center"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.04), transparent 80%)`,
        }}
      />

      {/* Blueprint Grid Lines */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* CAD Crosshairs */}
      <div className="absolute top-6 left-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute top-6 right-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute bottom-6 left-6 text-[#18181B]/30 text-[10px]">+</div>
      <div className="absolute bottom-6 right-6 text-[#18181B]/30 text-[10px]">+</div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        
  {/* Top Telemetry Tag */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#18181B]/15 bg-white/80 text-[#18181B] text-[10px] uppercase tracking-widest mb-8 shadow-sm">
  <Zap className="w-3.5 h-3.5 text-[#18181B]" />
  <span>[09 // IMMEDIATE EXECUTION]</span>
</div>

        {/* Main Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-[#18181B]">
          Ready to forge{" "}
          <span className="italic font-normal text-zinc-600 block sm:inline">
            something real?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-[#27272A]/70 font-light leading-relaxed max-w-xl mx-auto mb-10">
          Eliminate setup tax and start organizing your projects, tasks, and ideas with high-agency velocity on ALYOXA Forge today.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
  <Link
    href="/dashboard/projects"
    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#18181B] hover:bg-[#27272A] text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-xl hover:scale-[1.02] active:scale-[0.98] group"
  >
    <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
    <span>Get Started Now</span>
    <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  </Link>

  <Link
    href="/dashboard/projects"
    className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-zinc-100 text-[#18181B] border border-[#18181B]/20 text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2.5 shadow-sm group"
  >
    <Terminal className="w-4 h-4 text-[#18181B]" />
    <span>Explore Dashboard</span>
    <ArrowUpRight className="w-4 h-4 text-[#18181B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  </Link>
</div>

        {/* Bottom Telemetry Bar */}
        <div className="pt-8 border-t border-[#18181B]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#18181B]/60">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>ZERO CONFIGURATION TAX // INSTANT ACCESS</span>
          </div>

          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#18181B]" />
            <span>ALYOXA HIGH-AGENCY PLATFORM v2.4</span>
          </div>
        </div>

      </div>
    </section>
  );
}