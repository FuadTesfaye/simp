"use client";

import { Terminal, Mail, Sparkles } from "lucide-react";

export default function FloatingPill() {
  const openPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <div
      style={{
        bottom: "max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))",
      }}
      className="fixed z-30 left-1/2 -translate-x-1/2 flex items-center gap-3 sm:gap-4 whitespace-nowrap rounded-full border border-white/15 bg-black/70 backdrop-blur-xl px-4 sm:px-6 py-2.5 sm:py-3 font-mono text-xs sm:text-sm text-white shadow-[0_12px_45px_rgba(0,0,0,0.8)] transition-all duration-300 hover:scale-[1.02] hover:border-white/30 hover:bg-black/85"
    >
      <button
        type="button"
        onClick={openPalette}
        className="flex items-center gap-2 hover:text-cyan-300 transition-colors cursor-pointer group"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
        <span className="text-white/60 group-hover:text-cyan-300">Command</span>
        <kbd className="text-[10px] bg-white/10 px-1.5 py-0.5 rounded text-white/80 border border-white/10 font-mono">
          ⌘K
        </kbd>
      </button>

      <span className="text-white/20 select-none">|</span>

      <a
        href="mailto:fuadtesfaye24@gmail.com"
        className="flex items-center gap-1.5 text-white/80 hover:text-lime-300 transition-colors"
      >
        <Mail className="w-3.5 h-3.5 text-lime-400" />
        <span className="hidden sm:inline">fuadtesfaye24@gmail.com</span>
        <span className="sm:hidden">Email</span>
      </a>
    </div>
  );
}
