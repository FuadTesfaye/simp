"use client";

import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const { personal, externalLinks } = portfolioData;

  return (
    <section className="relative pt-6 pb-8 border-b border-white/10" id="top">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-6 lg:gap-10 items-start">
        {/* Left Side: External Quick Links & Micro Fig */}
        <div className="flex flex-col gap-5 text-xs font-mono">
          <div>
            <span className="text-[10px] tracking-wider uppercase text-[var(--dim)] block mb-2 font-semibold">
              Connect & Source
            </span>
            <div className="flex flex-wrap lg:flex-col gap-2">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 hover:border-white/25 hover:bg-white/[0.07] text-white/80 hover:text-white transition-all group w-fit"
                >
                  <span>{link.label.replace(" ↗", "")}</span>
                  <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Architectural Layer SVG Diagram */}
          <div className="hidden lg:block pt-3 border-t border-white/5">
            <figure className="relative p-2.5 rounded bg-black/40 border border-white/5">
              <svg
                viewBox="0 0 190 140"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="w-full text-white/40"
                role="img"
                aria-label="Exploded layered drawing of a software stack"
              >
                <path d="M30 40l50-20 70 24-50 20z" stroke="#38bdf8" />
                <path d="M30 40v6l70 24 50-20v-6" stroke="#38bdf8" opacity="0.6" />
                <path d="M45 68l48-18 62 22-45 18z" stroke="#c5e04a" />
                <path d="M45 68v5l65 24 45-20v-5" stroke="#c5e04a" opacity="0.6" />
                <path d="M60 98l40-15 50 18-38 15z" stroke="#e5522a" strokeDasharray="3 3" />
                <path d="M60 98v5l52 18 38-14v-5" stroke="#e5522a" opacity="0.6" />
              </svg>
              <figcaption className="text-[10px] font-mono text-[var(--dim)] mt-2 text-center">
                Fig 1 — AI, Distributed & Cloud Stack
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Right Side: Headline, NOW Banner, and Editorial Musings Annotation */}
        <div className="relative">
          {/* Hand-drawn annotation doodle positioned in hero corner */}
          <svg
            className="absolute -top-3 right-0 w-28 sm:w-36 h-20 overflow-visible pointer-events-none opacity-80"
            viewBox="0 0 200 120"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="doodle-draw"
              stroke="#4a7cf0"
              strokeWidth="2.5"
              strokeLinecap="round"
              style={{ animationDelay: "200ms" }}
              d="M30 30c25-20 70-20 90 5s-10 40-40 40 50 20 80-10"
            />
            <circle cx="165" cy="65" r="4" fill="#c5e04a" />
          </svg>

          {/* Compact Headline */}
          <div className="max-w-2xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-white leading-[1.15]">
              Full-Stack AI Engineer crafting{" "}
              <span className="font-script italic font-normal text-cyan-300">
                production-grade
              </span>
              , distributed &amp;{" "}
              <span className="relative inline-block font-script italic font-normal text-lime-300">
                AI-native
                <svg
                  className="absolute left-[-2%] bottom-[-0.2em] w-[104%] h-[0.4em] overflow-visible"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="doodle-draw"
                    style={{ animationDelay: "600ms" }}
                    d="M0 5c20 2 50 1 100-2"
                    fill="none"
                    stroke="#c5e04a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>{" "}
              systems.
            </h1>

            {/* Compact NOW Banner Pill */}
            <div className="mt-4 inline-flex flex-wrap items-center gap-2 p-1.5 sm:px-3 sm:py-2 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-mono">
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-white text-black tracking-wider uppercase">
                NOW
              </span>
              <span className="text-[var(--muted)] text-[11px] sm:text-xs">
                {personal.nowStatus}
              </span>
            </div>

            {/* Compact Bio Paragraph */}
            <p className="mt-4 text-xs sm:text-sm font-body text-[var(--muted)] leading-relaxed max-w-xl">
              Specialized in high-throughput microservices, event-driven architectures, and AI agent orchestration from Addis Ababa, Ethiopia. Open to global remote engineering engagements.
            </p>

            {/* Quick action jump tags */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-mono">
              <a
                href="#projects"
                className="px-3 py-1.5 rounded bg-white text-black font-semibold hover:bg-cyan-300 transition-colors"
              >
                View Projects (20)
              </a>
              <a
                href="#activity"
                className="px-3 py-1.5 rounded bg-white/[0.04] border border-white/10 hover:border-white/25 text-white transition-colors"
              >
                Activity Graph
              </a>
              <a
                href="#about"
                className="px-3 py-1.5 rounded bg-white/[0.04] border border-white/10 hover:border-white/25 text-white transition-colors"
              >
                About Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
