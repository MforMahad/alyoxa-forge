"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#F7F6F2]/90 backdrop-blur-md border-b border-[#27272A]/5 py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="w-full px-6 md:px-10 xl:px-20">
        <div className="flex items-center justify-between">
          
          {/* Left: Logo */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="group inline-block">
              <Image
                src="/assets/images/logo/Alyoxa-Forge-Logo.svg"
                alt="Alyoxa-Forge"
                width={220}
                height={50}
                className="w-[160px] md:w-[220px] h-auto object-contain transition-opacity duration-300 group-hover:opacity-70"
                priority
              />
            </Link>
          </div>

          {/* Center: Editorial Nav Links */}
          <nav className="hidden lg:flex items-center justify-center gap-10 flex-1">
            <Link 
              href="#features" 
              className="text-xs uppercase tracking-widest text-[#27272A]/60 hover:text-[#18181B] transition-colors font-medium"
            >
              Features
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-xs uppercase tracking-widest text-[#27272A]/60 hover:text-[#18181B] transition-colors font-medium"
            >
              Architecture
            </Link>
            <Link 
              href="#roadmap" 
              className="text-xs uppercase tracking-widest text-[#27272A]/60 hover:text-[#18181B] transition-colors font-medium"
            >
              Roadmap
            </Link>
          </nav>

          {/* Right: Architectural Action Buttons */}
          <div className="hidden lg:flex items-center justify-end gap-8 flex-1">
            <a
              href="https://github.com/Alyoxa"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-widest text-[#27272A]/60 hover:text-[#18181B] transition-colors font-medium"
            >
              GitHub
            </a>
            <Link
              href="/dashboard"
              className="text-xs uppercase tracking-widest text-[#18181B] hover:text-[#18181B]/60 transition-colors font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="text-[11px] font-semibold uppercase tracking-widest text-[#F7F6F2] bg-[#141415] hover:bg-[#27272A] px-6 py-4 rounded-lg transition-all flex items-center gap-2 group shadow-sm"
            >
              Get Started
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex flex-1 justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#18181B] p-2 hover:bg-[#27272A]/5 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Editorial Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#F7F6F2] border-b border-[#27272A]/10 px-8 py-8 flex flex-col gap-6 shadow-2xl">
          <Link
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-[#18181B] font-medium py-1"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-[#18181B] font-medium py-1"
          >
            Architecture
          </Link>
          <Link
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="text-xs uppercase tracking-widest text-[#18181B] font-medium py-1"
          >
            Roadmap
          </Link>
          
          <div className="pt-6 border-t border-[#27272A]/10 flex flex-col gap-4">
            <Link
              href="/dashboard/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs uppercase tracking-wider font-medium text-[#18181B] border border-[#27272A]/20 rounded-lg"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard/projects"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 text-xs uppercase tracking-wider font-medium text-[#F7F6F2] bg-[#141415] rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}