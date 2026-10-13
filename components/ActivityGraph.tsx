"use client";

import { useState } from "react";
import { contributionDays, contributionMonths, totalContributions } from "@/data/contributions";

export default function ActivityGraph() {
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
  } | null>(null);

  // Group days into columns of 7 days
  const columns: typeof contributionDays[] = [];
  for (let i = 0; i < contributionDays.length; i += 7) {
    columns.push(contributionDays.slice(i, i + 7));
  }

  return (
    <section className="py-8 border-b border-white/10" id="activity">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-4 lg:gap-10">
        {/* Section Label */}
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            01
          </span>
          <h2 className="text-lg font-bold text-white mt-0.5">Activity</h2>
          <span className="font-script italic text-xs text-[var(--dim)] block mt-0.5 select-none">
            نشاط
          </span>
        </div>

        {/* Section Body */}
        <div>
          <p className="text-xs sm:text-sm font-body text-[var(--muted)] leading-relaxed max-w-2xl">
            Real-time GitHub activity tracking across distributed repositories, open-source tooling, and client deliverables.
          </p>

          {/* Heatmap Card */}
          <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-black/40 border border-white/10 relative overflow-hidden">
            <div className="overflow-x-auto pb-2">
              <div className="min-w-[700px]">
                {/* Month labels */}
                <div className="flex text-[11px] font-mono text-[var(--dim)] mb-2 pl-2">
                  {contributionMonths.map((m) => (
                    <span
                      key={m.name}
                      className="inline-block"
                      style={{ width: `${100 / 12}%` }}
                    >
                      {m.name}
                    </span>
                  ))}
                </div>

                {/* Heatmap Columns */}
                <div className="flex gap-[3px] items-start">
                  {columns.map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-[3px]">
                      {col.map((day) => {
                        const levelClasses = [
                          "bg-white/[0.04] border border-white/[0.06]",
                          "bg-emerald-950/70 border border-emerald-800/40",
                          "bg-emerald-800/90 border border-emerald-600/50",
                          "bg-emerald-500 border border-emerald-400",
                          "bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,0.6)]",
                        ][day.level] || "bg-white/[0.04]";

                        return (
                          <div
                            key={day.date}
                            onMouseEnter={() =>
                              setHoveredDay({ date: day.date, count: day.count })
                            }
                            onMouseLeave={() => setHoveredDay(null)}
                            className={`w-[10.5px] h-[10.5px] rounded-[2px] transition-transform duration-150 hover:scale-130 cursor-pointer ${levelClasses}`}
                            aria-label={`${day.count} contributions on ${day.date}`}
                          />
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hover Tooltip / Status Display */}
            <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="text-white font-medium">
                {hoveredDay ? (
                  <span className="text-cyan-300">
                    <span className="font-bold">{hoveredDay.count}</span> contribution
                    {hoveredDay.count === 1 ? "" : "s"} on {hoveredDay.date}
                  </span>
                ) : (
                  <span>
                    <strong className="text-emerald-400">
                      {totalContributions.toLocaleString()}
                    </strong>{" "}
                    contributions in the last year on GitHub
                  </span>
                )}
              </div>

              {/* Less / More Legend */}
              <div className="flex items-center gap-1.5 text-[11px] text-[var(--dim)]">
                <span>Less</span>
                <div className="w-2.5 h-2.5 rounded-[1.5px] bg-white/[0.04] border border-white/[0.08]" />
                <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-950/70 border border-emerald-800/40" />
                <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-800/90 border border-emerald-600/50" />
                <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-500" />
                <div className="w-2.5 h-2.5 rounded-[1.5px] bg-emerald-300 shadow-[0_0_6px_rgba(110,231,183,0.6)]" />
                <span>More</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
