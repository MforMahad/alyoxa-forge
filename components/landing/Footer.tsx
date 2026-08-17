"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Terminal, Cpu, ShieldCheck, Compass, GitBranch, Layers, Activity } from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePos({ x: -500, y: -500 });
      }}
      className="relative bg-[#F7F6F2] text-[#18181B] border-t border-[#18181B]/15 pt-16 pb-10 overflow-hidden select-none"
    >
      {/* Interactive Cursor Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(24, 24, 27, 0.06), transparent 80%)`,
        }}
      />

      {/* Embedded Vector Architectural Blueprint SVG Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] overflow-hidden flex items-center justify-center">
        <svg
          className="w-[120%] h-[120%] text-[#18181B] transition-transform duration-1000 ease-out"
          style={{
            transform: isHovered
              ? `translate(${(mousePos.x - 500) * 0.02}px, ${(mousePos.y - 500) * 0.02}px) scale(1.02)`
              : "translate(0px, 0px) scale(1)",
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 600"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        >
          {/* Blueprint Axis Lines & Radial Concentric Framework */}
          <circle cx="500" cy="300" r="180" strokeDasharray="4 4" />
          <circle cx="500" cy="300" r="320" strokeDasharray="2 6" />
          <circle cx="500" cy="300" r="450" />
          <line x1="0" y1="300" x2="1000" y2="300" strokeDasharray="6 6" />
          <line x1="500" y1="0" x2="500" y2="600" strokeDasharray="6 6" />
          <line x1="100" y1="0" x2="900" y2="600" opacity="0.4" />
          <line x1="100" y1="600" x2="900" y2="0" opacity="0.4" />
          
          {/* Architectural Framing Crosshairs */}
          <path d="M 480 300 H 520 M 500 280 V 320" strokeWidth="1.5" />
          <rect x="200" y="100" width="600" height="400" strokeDasharray="8 8" opacity="0.5" />
          <rect x="350" y="200" width="300" height="200" opacity="0.3" />
        </svg>
      </div>

      {/* Dot Grid Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(#18181b15_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />

      {/* CAD Telemetry Coordinates */}
      <div className="absolute top-4 left-6 text-[#18181B]/40 text-[9px] flex items-center gap-1.5 tracking-wider uppercase font-semibold">
        <span>+</span>
        <span>LAT: 24.8607° N</span>
      </div>
      <div className="absolute top-4 right-6 text-[#18181B]/40 text-[9px] flex items-center gap-1.5 tracking-wider uppercase font-semibold">
        <span>LNG: 67.0011° E</span>
        <span>+</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-20">
        
        {/* Upper Telemetry & Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-[#18181B]/15 text-[10px] tracking-widest uppercase font-semibold">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md border border-[#18181B]/15 px-4 py-1.5 rounded-full shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18181B] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18181B]"></span>
            </span>
            <span className="text-[#18181B]">SYSTEM STATUS // ONLINE</span>
          </div>

          <div className="flex items-center gap-6 text-[#18181B]/70">
            <div className="flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-[#18181B]" />
              <span>CORE v2.4.0</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-[#18181B]" />
              <span>MAIN</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#18181B]" />
              <span>ENCRYPTED</span>
            </div>
          </div>
        </div>

        {/* Main Grid Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 text-xs">
          
          {/* Brand Manifesto Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="group inline-block">
              <Image
                src="/assets/images/logo/Alyoxa-Forge-Logo.svg"
                alt="Alyoxa Forge"
                width={200}
                height={70}
                className="w-[180px] md:w-[200px] h-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>
            <p className="text-[#27272A]/75 text-xs leading-relaxed max-w-sm">
              High-agency workspace built for modern engineers, creators, and teams. Eliminate configuration friction and focus on building.
            </p>
            <div className="pt-1 flex items-center gap-2 text-[10px] text-[#18181B]/80 uppercase tracking-wider font-semibold">
              <Compass className="w-3.5 h-3.5 text-[#18181B]" />
              <span>DESIGNED FOR HIGH-VELOCITY EXECUTION</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[#18181B] font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#18181B]/10 pb-2">
              <Layers className="w-3.5 h-3.5 text-[#18181B]" /> Platform
            </h4>
            <ul className="space-y-2.5 text-xs text-[#27272A]/70">
              <li>
                <a href="#features" className="hover:text-[#18181B] transition-all flex items-center justify-between group">
                  <span>Features</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#18181B]" />
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-[#18181B] transition-all flex items-center justify-between group">
                  <span>Architecture</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#18181B]" />
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-[#18181B] transition-all flex items-center justify-between group">
                  <span>Roadmap</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#18181B]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Control Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[#18181B] font-bold text-[11px] uppercase tracking-widest flex items-center gap-1.5 border-b border-[#18181B]/10 pb-2">
              <Terminal className="w-3.5 h-3.5 text-[#18181B]" /> Control
            </h4>
            <ul className="space-y-2.5 text-xs text-[#27272A]/70">
              <li>
                <Link href="/dashboard/projects" className="hover:text-[#18181B] transition-all flex items-center justify-between group">
                  <span>Workspace</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#18181B]" />
                </Link>
              </li>
              <li>
                <Link href="/dashboard/projects" className="hover:text-[#18181B] transition-all flex items-center justify-between group">
                  <span>Projects</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#18181B]" />
                </Link>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#18181B] transition-all flex items-center justify-between group">
                  <span>Repository</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#18181B]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Telemetry Card */}
          <div className="md:col-span-3 space-y-3 bg-white/70 backdrop-blur-md border border-[#18181B]/15 p-5 rounded-2xl shadow-sm hover:border-[#18181B]/40 transition-all group">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-[#18181B]/60 uppercase tracking-widest block font-bold">TELEMETRY DATA</span>
              <Activity className="w-3.5 h-3.5 text-[#18181B]" />
            </div>
            <div className="text-3xl font-extrabold text-[#18181B] tracking-tight group-hover:scale-105 transition-transform origin-left">
              99.98%
            </div>
            <p className="text-[11px] text-[#27272A]/70 leading-relaxed">
              Autonomous sync uptime across global edge nodes.
            </p>
          </div>

        </div>

        {/* Massive Architectural Watermark Logo */}
        <div
          data-footer="wordmark"
          className="relative left-1/2 z-10 flex w-screen -translate-x-1/2 items-center justify-center overflow-hidden border-y border-[#18181B]/10 py-6 my-6 bg-[#F7F6F2]/30 backdrop-blur-xs"
        >
          <Image
            src="/assets/images/logo/alyoxaFooterLogo.svg"
            alt="Alyoxa-Forge Watermark"
            width={1200}
            height={400}
            className="h-auto w-[92vw] max-w-none select-none object-contain pointer-events-none opacity-90 transition-all duration-500 hover:scale-[1.01]"
            priority
          />
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#18181B]/60 uppercase font-semibold">
          <p>© 2026 ALYOXA FORGE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 tracking-wider">
            <span className="hover:text-[#18181B] transition-colors">NEXT.JS 15</span>
            <span>•</span>
            <span className="hover:text-[#18181B] transition-colors">TYPESCRIPT</span>
            <span>•</span>
            <span className="hover:text-[#18181B] transition-colors">TAILWIND CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}