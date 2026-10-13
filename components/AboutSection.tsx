"use client";

import { portfolioData } from "@/data/portfolioData";
import { MapPin, Globe, Mail, Phone } from "lucide-react";

export default function AboutSection() {
  const { about } = portfolioData;

  const getIcon = (label: string) => {
    switch (label) {
      case "Location":
        return <MapPin className="w-3.5 h-3.5 text-cyan-400" />;
      case "Time Zone":
        return <Globe className="w-3.5 h-3.5 text-lime-400" />;
      case "Email":
        return <Mail className="w-3.5 h-3.5 text-amber-400" />;
      case "Phone":
        return <Phone className="w-3.5 h-3.5 text-violet-400" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-8 border-b border-white/10" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-4 lg:gap-10">
        {/* Section Label */}
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            02
          </span>
          <h2 className="text-lg font-bold text-white mt-0.5">About</h2>
          <span className="font-script italic text-xs text-[var(--dim)] block mt-0.5 select-none">
            عن
          </span>
        </div>

        {/* Section Content */}
        <div>
          <p className="text-sm sm:text-base font-body font-medium text-white leading-relaxed max-w-2xl">
            {about.lead}
          </p>

          {/* Highlights List */}
          <div className="mt-4 space-y-2">
            {about.paragraphs.map((p, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-body text-[var(--muted)] leading-relaxed">
                <span className="text-cyan-400 font-mono mt-1 text-xs">▸</span>
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* Metadata Grid */}
          <div className="mt-6 pt-5 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {about.metadata.map((item) => (
              <div
                key={item.label}
                className="p-3 rounded-xl bg-black/40 border border-white/5 flex flex-col justify-between"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[var(--dim)]">
                  {getIcon(item.label)}
                  <span>{item.label}</span>
                </div>
                <div className="mt-2 text-xs font-mono text-white break-words">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-cyan-300 transition-colors underline decoration-white/20 underline-offset-2"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span>{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
