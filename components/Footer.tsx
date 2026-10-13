"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="pt-10 pb-28 border-t border-white/10 relative">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-6 lg:gap-10 items-start">
        {/* Author Avatar & Crimson Doodle */}
        <div className="relative">
          <div
            className="w-24 h-20 rounded-t-sm shadow-inner transition-transform duration-500 hover:scale-[1.02] border border-white/10"
            style={{
              background:
                "linear-gradient(160deg, #e8622a, #9c2a12 70%, #2b0f08)",
            }}
            role="img"
            aria-label="Portrait of Fuad Tesfaye"
          />
          <svg
            className="absolute -top-3 left-16 w-36 h-16 overflow-visible pointer-events-none"
            viewBox="0 0 260 80"
            fill="none"
            stroke="#e5522a"
            strokeWidth="4"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path
              className="doodle-draw"
              style={{ animationDelay: "1400ms" }}
              d="M8 52c30-22 110-26 150-12 22 8 10 26-30 30-50 6-110 0-118-20-3-8 30-16 90-14"
            />
            <path
              className="doodle-draw"
              style={{ animationDelay: "1600ms" }}
              d="M180 70l30-26 14 22 18-30"
            />
          </svg>
          <p className="font-body italic text-[11px] text-[var(--muted)] mt-2 underline decoration-[var(--dim)] underline-offset-2">
            He’s not verified on Twitter.
          </p>
        </div>

        {/* Footer info & links */}
        <div className="flex flex-col justify-between gap-6">
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {personal.name}
              </h3>
              <span className="font-script italic text-sm text-white/40">
                {personal.arabicName}
              </span>
            </div>
            <p className="text-xs font-mono text-[var(--dim)] mt-0.5">
              {personal.title}
            </p>

            {/* Quick links */}
            <div className="flex flex-wrap gap-3 mt-4 text-xs font-mono">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
              >
                <span>{personal.email}</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/70 hover:text-white"
              >
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/70 hover:text-white"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
              <a
                href={personal.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-white/70 hover:text-white"
              >
                <span>X</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Bottom Colophon */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-white/5 text-[11px] font-mono text-[var(--dim)]">
            <div>
              © 2026 {personal.name} · Built in Addis Ababa
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/40">build 9b98ff2</span>
              <span>·</span>
              <a
                href="/llms.txt"
                className="text-white/60 hover:text-white underline decoration-white/20"
              >
                llms.txt
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
