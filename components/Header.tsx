"use client";

import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Search } from "lucide-react";

export default function Header() {
  const { personal, navLinks } = portfolioData;
  const [localTime, setLocalTime] = useState("13:29");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Africa/Addis_Ababa",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <header className="border-b border-white/10 pb-4">
      {/* Top compact status bar */}
      <div className="flex flex-wrap items-center justify-between gap-2.5 text-[11px] sm:text-xs font-mono text-[var(--soft)] pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-white tracking-wider">ADDIS ABABA</span>
          <span className="opacity-40">·</span>
          <span className="text-[var(--muted)]">{localTime} LOCAL</span>
          <span className="opacity-40">·</span>
          <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {personal.status}
          </span>
        </div>

        {/* Command palette compact search button */}
        <button
          type="button"
          onClick={openCommandPalette}
          className="flex items-center gap-2 px-2.5 py-1 text-[11px] rounded border border-white/10 hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.07] text-white/80 transition-all cursor-pointer group"
          title="Press ⌘K or Ctrl+K to search"
        >
          <Search className="w-3 h-3 text-white/50 group-hover:text-cyan-300 transition-colors" />
          <span className="hidden sm:inline text-white/60">Search for a command to run...</span>
          <span className="sm:hidden text-white/60">Search...</span>
          <kbd className="text-[10px] bg-white/10 text-white/70 px-1 py-0.2 rounded font-mono">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Main compact brand and nav row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pt-3">
        <div>
          <div className="flex items-baseline gap-2.5">
            <a
              href="#top"
              className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-cyan-300 transition-colors"
            >
              {personal.name}
            </a>
            <span
              lang="ar"
              dir="rtl"
              className="font-script text-base text-white/40 select-none"
              title="Fuad in Arabic"
            >
              {personal.arabicName}
            </span>
          </div>
          <p className="text-xs font-mono text-[var(--dim)] mt-0.5">
            {personal.title}
          </p>
        </div>

        {/* Compact navigation links */}
        <nav aria-label="Main" className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono text-[var(--soft)]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors relative py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
