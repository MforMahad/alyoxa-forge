"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, 
  FolderKanban, 
  CheckSquare, 
  Activity, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  Menu,
  X
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Overview", href: "/dashboard", icon: Home },
  { label: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { label: "Tasks", href: "/dashboard/tasks", icon: CheckSquare },
  { label: "Activity", href: "/dashboard/activity", icon: Activity },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Toggle Trigger */}
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open Sidebar"
        className="lg:hidden fixed bottom-6 right-6 z-50 p-3 bg-[#18181B] text-white rounded-full shadow-lg hover:scale-105 transition-transform"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 bg-[#18181B]/40 backdrop-blur-xs z-40 transition-opacity"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen bg-[#F7F6F2] border-r border-[#18181B]/15 flex flex-col justify-between transition-all duration-300 select-none ${
          collapsed ? "lg:w-20" : "lg:w-64"
        } ${
          mobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Top Header Section */}
        <div>
          <div className="h-16 px-4 flex items-center justify-between border-b border-[#18181B]/15">
            <Link href="/dashboard" className="flex items-center gap-3 overflow-hidden">
              <div className="min-w-9 h-9 rounded-xl bg-[#18181B] text-white flex items-center justify-center font-black text-sm tracking-widest shadow-xs">
                F
              </div>
              {(!collapsed || mobileOpen) && (
                <span className="font-extrabold text-base tracking-widest uppercase text-[#18181B]">
                  FORGE
                </span>
              )}
            </Link>

            {/* Desktop Collapse Button */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              aria-label={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
              className="hidden lg:flex items-center justify-center p-1.5 rounded-lg border border-[#18181B]/15 text-[#18181B]/70 hover:text-[#18181B] hover:bg-[#18181B]/5 transition-colors"
            >
              {collapsed ? (
                <ChevronRight className="w-4 h-4" />
              ) : (
                <ChevronLeft className="w-4 h-4" />
              )}
            </button>

            {/* Mobile Close Button */}
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close Mobile Menu"
              className="lg:hidden p-1.5 rounded-lg text-[#18181B]/70 hover:text-[#18181B]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="p-3 space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`relative flex items-center gap-3.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group ${
                    isActive
                      ? "bg-[#18181B] text-white shadow-xs"
                      : "text-[#18181B]/70 hover:text-[#18181B] hover:bg-[#18181B]/5"
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-white" : "text-[#18181B]"}`} />

                  {(!collapsed || mobileOpen) && (
                    <span className="truncate tracking-wide">{item.label}</span>
                  )}

                  {/* Tooltip on Collapsed Desktop View */}
                  {collapsed && !mobileOpen && (
                    <div className="absolute left-full ml-3 px-2.5 py-1 bg-[#18181B] text-white text-[11px] font-medium rounded-md shadow-md opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 whitespace-nowrap">
                      {item.label}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom System Telemetry Indicator */}
        <div className="p-3 border-t border-[#18181B]/15">
          <div className="flex items-center gap-3 p-2.5 bg-white/70 border border-[#18181B]/15 rounded-xl">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#18181B] opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#18181B]"></span>
            </span>
            {(!collapsed || mobileOpen) && (
              <div className="flex flex-col overflow-hidden">
                <span className="text-[10px] font-bold text-[#18181B] tracking-wider uppercase truncate">
                  NODE ONLINE
                </span>
                <span className="text-[9px] text-[#18181B]/60 truncate">
                  v2.4.0 // ARCHITECT
                </span>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}