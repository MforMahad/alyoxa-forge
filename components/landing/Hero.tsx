"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import ProductPreview from "./ProductPreview";
import InteractiveGrid from "./InteractiveGrid";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-52 md:pb-32 overflow-hidden bg-[#F7F6F2]">
        <InteractiveGrid />
      {/* Editorial Structural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex justify-between max-w-7xl mx-auto px-6 lg:px-12">
        <div className="w-[1px] h-full bg-[#18181B]" />
        <div className="w-[1px] h-full bg-[#18181B]" />
        <div className="w-[1px] h-full bg-[#18181B]" />
      </div>

      <div className="w-full px-6 md:px-12 xl:px-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Architectural Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#18181B]/15 bg-white/60 backdrop-blur-sm text-[#18181B] text-xs uppercase tracking-widest mb-10 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#18181B]" />
            <span>ALYOXA Forge System</span>
            <span className="w-1 h-1 rounded-full bg-[#18181B]/30" />
            <span className="text-[#18181B]/60">Active Build</span>
          </div>

          {/* Large Architectural Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#18181B] mb-8 leading-[1.08] text-balance">
            Turn scattered work into{" "}
            <span className="italic text-zinc-600 font-normal">
              organized progress.
            </span>
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#27272A]/70 mb-12 max-w-2xl leading-relaxed font-light">
            Forge is a high-agency workspace built for team clarity. Designed with geometric rigor, zero clutter, and uncompromising architectural speed.
          </p>

          {/* Action Elements */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-[#18181B] hover:bg-[#27272A] text-[#F7F6F2] text-xs font-semibold uppercase tracking-widest transition-all flex items-center justify-center gap-2 group shadow-md"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            
            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white hover:bg-white/80 text-[#18181B] border border-[#27272A]/15 text-xs font-semibold uppercase tracking-widest transition-all text-center shadow-sm"
            >
              Explore Architecture
            </a>
          </div>
        </div>

        {/* Product Preview Frame Container */}
        <div className="relative max-w-6xl mx-auto rounded-2xl p-2 bg-white/40 border border-[#27272A]/10 shadow-2xl backdrop-blur-sm">
          <div className="rounded-xl overflow-hidden border border-[#27272A]/10 bg-white">
            <ProductPreview />
          </div>
        </div>
      </div>
    </section>
  );
}