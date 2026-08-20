"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Search, 
  Bell, 
  Command, 
  SlidersHorizontal, 
  Terminal, 
  ChevronDown,
} from "lucide-react";

export default function Topbar() {
  const [unreadCount, setUnreadCount] = useState(3);
  const [searchFocused, setSearchFocused] = useState(false);

  // Keyboard shortcut listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        document.getElementById("topbar-search-input")?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7F6F2]/80 backdrop-blur-md border-b border-[#18181B]/15 text-[#18181B] select-none">
      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* Left Section: Logo & Quick Telemetry */}
        <div className="flex items-center gap-6">
          
        </div>

        {/* Center Section: Command Palette / Architectural Search */}
        <div className="flex-1 max-w-xl mx-2 sm:mx-6">
          <div className="relative group">
            <div className={`relative flex items-center w-full bg-white/70 backdrop-blur-sm border transition-all duration-200 rounded-xl shadow-xs ${
              searchFocused 
                ? "border-[#18181B] bg-white ring-1 ring-[#18181B]/20" 
                : "border-[#18181B]/15 hover:border-[#18181B]/30"
            }`}>
              <div className="pl-3.5 pr-2 text-[#18181B]/50 group-hover:text-[#18181B] transition-colors">
                <Search className="w-4 h-4" />
              </div>
              
              <input
                id="topbar-search-input"
                type="text"
                placeholder="Search telemetry, nodes, deployments..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full py-2 pr-12 text-xs bg-transparent text-[#18181B] placeholder-[#18181B]/40 focus:outline-hidden"
              />

              <div className="absolute right-2.5 flex items-center gap-1.5 pointer-events-none">
                <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[9px] font-semibold text-[#18181B]/60 bg-[#F7F6F2] border border-[#18181B]/20 rounded-md shadow-2xs">
                  <Command className="w-2.5 h-2.5" /> K
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: System Actions & User Control Profile */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Action Trigger Buttons */}
          <div className="hidden md:flex items-center gap-1 border-r border-[#18181B]/15 pr-3">
            <button 
              aria-label="Quick Actions"
              className="p-2 text-[#18181B]/70 hover:text-[#18181B] hover:bg-[#18181B]/5 rounded-lg transition-colors relative"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button 
              aria-label="Terminal Shell"
              className="p-2 text-[#18181B]/70 hover:text-[#18181B] hover:bg-[#18181B]/5 rounded-lg transition-colors"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>

          {/* Notification Bell */}
          <button 
            aria-label="Notifications"
            className="relative p-2 text-[#18181B]/70 hover:text-[#18181B] hover:bg-[#18181B]/5 rounded-lg transition-colors group"
          >
            <Bell className="w-4 h-4 transition-transform group-hover:rotate-12" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18181B] opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18181B]"></span>
              </span>
            )}
          </button>

          {/* User Profile Avatar Module */}
          <div className="flex items-center gap-2 pl-1 sm:pl-2">
            <button className="flex items-center gap-2.5 p-1 rounded-full sm:rounded-xl border border-[#18181B]/15 bg-white/80 hover:bg-white hover:border-[#18181B]/30 transition-all shadow-2xs group">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden border border-[#18181B]/20 bg-[#18181B] flex items-center justify-center text-white font-bold text-xs">
                {/* Avatar Image Placeholder fallback */}
                <span className="text-[11px] tracking-wider">MK</span>
              </div>
              
              <div className="hidden sm:flex flex-col text-left pr-1">
                <span className="text-xs font-bold leading-tight text-[#18181B]">
                  Mahad K.
                </span>
                <span className="text-[9px] text-[#18181B]/60 font-medium">
                  Lead Engineer
                </span>
              </div>

              <ChevronDown className="hidden sm:block w-3.5 h-3.5 text-[#18181B]/50 group-hover:text-[#18181B] transition-transform group-hover:translate-y-0.5 mr-1" />
            </button>
          </div>

        </div>

      </div>
    </header>
  );
}