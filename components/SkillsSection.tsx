"use client";

import { portfolioData } from "@/data/portfolioData";

export default function SkillsSection() {
  const { skillsCategories } = portfolioData;

  const categoryColor = (title: string) => {
    switch (title) {
      case "Frontend":
        return {
          border: "hover:border-cyan-500/40",
          tagBg: "hover:bg-cyan-500/10 hover:text-cyan-300",
          badge: "text-cyan-400 border-cyan-500/30",
        };
      case "Backend":
        return {
          border: "hover:border-emerald-500/40",
          tagBg: "hover:bg-emerald-500/10 hover:text-emerald-300",
          badge: "text-emerald-400 border-emerald-500/30",
        };
      case "Tools & Cloud":
        return {
          border: "hover:border-amber-500/40",
          tagBg: "hover:bg-amber-500/10 hover:text-amber-300",
          badge: "text-amber-400 border-amber-500/30",
        };
      case "AI Integration":
        return {
          border: "hover:border-violet-500/40",
          tagBg: "hover:bg-violet-500/10 hover:text-violet-300",
          badge: "text-violet-400 border-violet-500/30",
        };
      default:
        return {
          border: "hover:border-white/20",
          tagBg: "hover:bg-white/10 hover:text-white",
          badge: "text-white/60 border-white/20",
        };
    }
  };

  return (
    <section className="py-8 border-b border-white/10" id="skills">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-4 lg:gap-10">
        {/* Section Label */}
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            03
          </span>
          <h2 className="text-lg font-bold text-white mt-0.5">Stack</h2>
          <span className="font-script italic text-xs text-[var(--dim)] block mt-0.5 select-none">
            مهارات
          </span>
        </div>

        {/* Section Body */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsCategories.map((cat) => {
            const colors = categoryColor(cat.title);

            return (
              <div
                key={cat.title}
                className={`p-4 rounded-2xl bg-black/40 border border-white/10 transition-all duration-300 ${colors.border}`}
              >
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-white/5">
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    {cat.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${colors.badge}`}
                  >
                    {cat.skills.length} tools
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[var(--dim)] mt-1.5 mb-3">
                  {cat.subtitle}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-mono px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-white/80 transition-colors cursor-default ${colors.tagBg}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
