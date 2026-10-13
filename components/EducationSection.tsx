"use client";

import { portfolioData } from "@/data/portfolioData";
import { GraduationCap, Calendar } from "lucide-react";

export default function EducationSection() {
  const { educationList } = portfolioData;

  return (
    <section className="py-8 border-b border-white/10" id="education">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-4 lg:gap-10">
        {/* Section Label */}
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            05
          </span>
          <h2 className="text-lg font-bold text-white mt-0.5">Education</h2>
          <span className="font-script italic text-xs text-[var(--dim)] block mt-0.5 select-none">
            تعليم
          </span>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-black/40 border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 pb-2.5 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400 shrink-0" />
                    <h3 className="text-sm font-bold text-white">
                      {edu.institution}
                    </h3>
                  </div>
                </div>

                <div className="mt-2 flex items-center gap-1.5 text-xs font-mono text-lime-400">
                  <Calendar className="w-3 h-3" />
                  <span>{edu.period}</span>
                </div>

                <p className="mt-1.5 text-xs font-mono text-[var(--muted)] font-medium">
                  {edu.degree}
                </p>

                <div className="mt-3 space-y-1.5">
                  {edu.bullets.map((b, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-start gap-2 text-xs font-body text-[var(--soft)] leading-relaxed"
                    >
                      <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                {edu.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-white/60"
                  >
                    {tag}
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
