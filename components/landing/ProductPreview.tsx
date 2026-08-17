"use client";

import { useState } from "react";
import { 
  FolderKanban, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Layers, 
  Terminal, 
  Cpu, 
  Activity, 
  ShieldCheck, 
  GitBranch,
  ArrowUpRight,
  Maximize2
} from "lucide-react";

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"board" | "telemetry" | "nodes">("board");

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl border border-[#27272A]/15 bg-[#141415] text-[#F7F6F2] p-3 sm:p-4 shadow-2xl overflow-hidden font-sans">
      
      {/* Background Architectural Watermark Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      {/* Frame Top Operating Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 px-4 py-3 border-b border-[#27272A]/80 bg-[#18181B] rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#27272A]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27272A]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27272A]" />
          </div>
          <div className="h-4 w-[1px] bg-[#27272A]" />
          <div className="text-[11px] font-mono tracking-widest text-zinc-400 uppercase flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-zinc-300" />
            <span>ALYOXA // FORGE_OS_v2.0</span>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-1 bg-[#141415] p-1 rounded-full border border-[#27272A]">
          <button
            onClick={() => setActiveTab("board")}
            className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
              activeTab === "board"
                ? "bg-[#F7F6F2] text-[#141415] font-semibold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            01 / Architecture
          </button>
          <button
            onClick={() => setActiveTab("telemetry")}
            className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
              activeTab === "telemetry"
                ? "bg-[#F7F6F2] text-[#141415] font-semibold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            02 / Telemetry
          </button>
          <button
            onClick={() => setActiveTab("nodes")}
            className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider transition-all ${
              activeTab === "nodes"
                ? "bg-[#F7F6F2] text-[#141415] font-semibold shadow"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            03 / Node Graph
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[10px] font-mono text-zinc-400">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>SYSTEM_ONLINE</span>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[460px] bg-[#141415]">
        
        {/* Left Sidebar: Workspace Selector */}
        <div className="lg:col-span-3 border-r border-[#27272A]/80 p-5 bg-[#18181B]/50 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3">
                <span>Active Vaults</span>
                <Plus className="w-3.5 h-3.5 text-zinc-400 hover:text-white transition-colors cursor-pointer" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#27272A]/60 border border-[#27272A] text-white text-xs font-medium cursor-pointer shadow-sm">
                  <div className="flex items-center gap-2.5">
                    <FolderKanban className="w-4 h-4 text-zinc-300" />
                    <span>Website Redesign</span>
                  </div>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-zinc-700 text-zinc-200">PROD</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl text-zinc-400 hover:bg-[#18181B] text-xs transition-colors cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-4 h-4 text-zinc-500" />
                    <span>AI Engine Pipeline</span>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-600">v1.4</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl text-zinc-400 hover:bg-[#18181B] text-xs transition-colors cursor-pointer">
                  <div className="flex items-center gap-2.5">
                    <GitBranch className="w-4 h-4 text-zinc-500" />
                    <span>Client Portal API</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cad Metric Box */}
            <div className="p-3.5 rounded-2xl bg-[#18181B] border border-[#27272A]/60">
              <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-2">
                <span className="flex items-center gap-1.5"><Cpu className="w-3 h-3" /> Core Load</span>
                <span>24%</span>
              </div>
              <div className="w-full h-1.5 bg-[#27272A] rounded-full overflow-hidden">
                <div className="w-1/4 h-full bg-zinc-300 rounded-full" />
              </div>
            </div>
          </div>

          {/* User Profile Footer */}
          <div className="pt-4 border-t border-[#27272A]/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#F7F6F2] text-[#141415] flex items-center justify-center text-xs font-bold font-mono">
                MK
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-200">Maddy Khan</span>
                <span className="text-[10px] font-mono text-zinc-500">Lead Architect</span>
              </div>
            </div>
            <Maximize2 className="w-3.5 h-3.5 text-zinc-500 hover:text-white transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Dynamic Main Workspace Content */}
        <div className="lg:col-span-9 p-6 sm:p-8 flex flex-col justify-between">
          
          {activeTab === "board" && (
            <div className="space-y-6">
              {/* Header Details */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#27272A]/80">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-base font-semibold text-white tracking-tight">
                      Website Redesign
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/10 text-zinc-300 border border-white/10">
                      Phase 02 / Active
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1 font-light">
                    Core landing page, design tokens & high-agency component architecture
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                  <div className="px-3 py-1.5 rounded-lg bg-[#18181B] border border-[#27272A]">
                    Progress: <span className="text-white font-semibold">82%</span>
                  </div>
                </div>
              </div>

              {/* Architectural Task Cards */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-xl border border-[#27272A] bg-[#18181B]/60 hover:border-zinc-500 transition-all group">
                  <div className="flex items-center gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors">
                      Design system palette & off-white token structure
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Deployed
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-[#27272A] bg-[#18181B]/60 hover:border-zinc-500 transition-all group">
                  <div className="flex items-center gap-3.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium text-zinc-200 group-hover:text-white transition-colors">
                      Canvas cursor physics & interactive CAD grid component
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Deployed
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-white/20 bg-white/[0.03] transition-all group shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span className="text-xs font-medium text-white">
                      Build tactile ProductPreview interactive workspace
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                    In Progress
                  </span>
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl border border-[#27272A]/40 bg-[#141415] opacity-50">
                  <div className="flex items-center gap-3.5">
                    <div className="w-4 h-4 rounded-full border border-zinc-600" />
                    <span className="text-xs font-medium text-zinc-400">
                      Production edge deployment & performance verification
                    </span>
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 bg-zinc-800/40 px-2.5 py-1 rounded-full">
                    Queued
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "telemetry" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-[#27272A]/80">
                <h3 className="text-sm font-mono text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" /> Active Workspace Telemetry
                </h3>
                <span className="text-xs font-mono text-zinc-500">REFRESH_RATE: 60FPS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-[#18181B] border border-[#27272A]">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">API Latency</span>
                  <div className="text-2xl font-mono font-bold text-white mt-1">12ms</div>
                  <span className="text-[10px] font-mono text-emerald-400">Optimal Connection</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#18181B] border border-[#27272A]">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Database Sync</span>
                  <div className="text-2xl font-mono font-bold text-white mt-1">100%</div>
                  <span className="text-[10px] font-mono text-emerald-400">0 Dropped Frames</span>
                </div>
                <div className="p-4 rounded-2xl bg-[#18181B] border border-[#27272A]">
                  <span className="text-[10px] font-mono uppercase text-zinc-500">Security Vault</span>
                  <div className="text-2xl font-mono font-bold text-white mt-1">Encrypted</div>
                  <span className="text-[10px] font-mono text-zinc-400">AES-256 Enabled</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "nodes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-[#27272A]/80">
                <h3 className="text-sm font-mono text-zinc-300 uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-zinc-300" /> Node Graph Architecture
                </h3>
                <span className="text-xs font-mono text-zinc-500">GRAPH_NODES: 12</span>
              </div>

              <div className="h-48 rounded-2xl bg-[#18181B] border border-[#27272A] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:12px_12px]" />
                <div className="relative z-10 flex items-center gap-6">
                  <div className="px-3 py-2 rounded-xl bg-[#27272A] text-xs font-mono border border-zinc-600">
                    Input Node
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 rotate-45" />
                  <div className="px-4 py-2 rounded-xl bg-[#F7F6F2] text-[#141415] text-xs font-mono font-bold shadow-lg">
                    ALYOXA Engine
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-500 rotate-45" />
                  <div className="px-3 py-2 rounded-xl bg-[#27272A] text-xs font-mono border border-zinc-600">
                    Output Pipeline
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Precision Telemetry Bar */}
          <div className="pt-6 border-t border-[#27272A]/80 flex flex-wrap items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
            <div className="flex items-center gap-4">
              <span>LOC: NARNIA</span>
              <span>•</span>
              <span>MEM: 4.2GB / 16GB</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span>PRESS OPTION + F TO TOGGLE FULLSCREEN</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}