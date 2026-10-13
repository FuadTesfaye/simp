"use client";

import { portfolioData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const { experienceList } = portfolioData;

  return (
    <section className="py-8 border-b border-white/10" id="experience">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-4 lg:gap-10">
        {/* Section Label */}
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            04
          </span>
          <h2 className="text-lg font-bold text-white mt-0.5">Experience</h2>
          <span className="font-script italic text-xs text-[var(--dim)] block mt-0.5 select-none">
            خبرة
          </span>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/10 transition-all hover:border-white/20 relative"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 pb-3 border-b border-white/5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-mono text-cyan-300">
                    <span className="font-semibold">{exp.organization}</span>
                    <span className="text-white/30">·</span>
                    <span className="inline-flex items-center gap-1 text-[var(--dim)]">
                      <MapPin className="w-3 h-3" />
                      {exp.location} ({exp.workType})
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-lime-400 px-2.5 py-1 rounded bg-lime-400/10 border border-lime-400/20 w-fit">
                  <Calendar className="w-3 h-3" />
                  <span>{exp.period}</span>
                  <span className="text-lime-400/60">({exp.duration})</span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mt-3.5 space-y-2">
                {exp.bullets.map((b, bIdx) => (
                  <div
                    key={bIdx}
                    className="flex items-start gap-2 text-xs sm:text-sm font-body text-[var(--muted)] leading-relaxed"
                  >
                    <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Tagged */}
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {exp.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
