"use client";

import { useState } from "react";
import { portfolioData, ProjectDetail } from "@/data/portfolioData";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectsSection() {
  const { projectCategories, projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("All Works");
  const [expandedCatalogId, setExpandedCatalogId] = useState<string | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All Works") return true;
    return p.categoryGroup === activeFilter;
  });

  const featuredProjects = filteredProjects.filter((p) => p.featured);
  const catalogProjects = filteredProjects.filter((p) => !p.featured);

  return (
    <section className="py-8" id="projects">
      <div className="grid grid-cols-1 lg:grid-cols-[12rem_1fr] gap-4 lg:gap-10">
        {/* Section Label */}
        <div>
          <span className="text-xs font-mono text-cyan-400 font-semibold tracking-wider">
            06
          </span>
          <h2 className="text-lg font-bold text-white mt-0.5">Projects</h2>
          <span className="font-script italic text-xs text-[var(--dim)] block mt-0.5 select-none">
            مشاريع
          </span>
        </div>

        {/* Section Content */}
        <div>
          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-5 border-b border-white/10">
            {projectCategories.map((cat) => {
              const isActive = activeFilter === cat.label;
              return (
                <button
                  key={cat.label}
                  type="button"
                  onClick={() => setActiveFilter(cat.label)}
                  className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    isActive
                      ? "bg-white text-black border-white font-semibold shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      : "bg-white/[0.03] border-white/10 text-[var(--soft)] hover:border-white/25 hover:text-white"
                  }`}
                >
                  {cat.label}{" "}
                  <span className={isActive ? "text-black/70" : "text-white/40"}>
                    ({cat.count})
                  </span>
                </button>
              );
            })}
          </div>

          {/* Featured Projects Cards */}
          <div className="mt-6 space-y-6">
            {featuredProjects.map((p) => (
              <div
                key={p.id}
                className="p-5 sm:p-6 rounded-2xl bg-black/40 border border-white/10 transition-all hover:border-white/25"
              >
                {/* Header: Project Index, Year, Category Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-white/5">
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-script italic text-2xl font-bold text-cyan-400">
                      {p.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {p.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-white/70">
                      {p.category}
                    </span>
                    <span className="text-white/40">·</span>
                    <span className="text-[var(--dim)]">{p.year}</span>
                    {p.badge && (
                      <>
                        <span className="text-white/40">·</span>
                        <span className="px-2 py-0.5 rounded bg-lime-400/10 border border-lime-400/20 text-lime-400 text-[11px] font-medium">
                          {p.badge}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Summary */}
                <p className="mt-3 text-xs sm:text-sm font-semibold text-white/90 leading-snug">
                  {p.summary}
                </p>

                {/* Bullets */}
                {p.bullets && (
                  <div className="mt-3 space-y-1.5">
                    {p.bullets.map((b, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm font-body text-[var(--muted)] leading-relaxed"
                      >
                        <span className="text-cyan-400 font-mono mt-0.5">▸</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="mt-4 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] border border-white/10 text-white/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-4 pt-2 flex flex-wrap gap-3 text-xs font-mono">
                  {p.launchUrl && (
                    <a
                      href={p.launchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-black font-semibold hover:bg-cyan-300 transition-colors"
                    >
                      <span>Launch Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/[0.04] border border-white/10 hover:border-white/25 text-white transition-colors"
                    >
                      <span>Source Code</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Catalog Index Section (17 more systems) */}
          {catalogProjects.length > 0 && (
            <div className="mt-10 pt-6 border-t border-white/10">
              <div className="flex items-baseline justify-between mb-4">
                <h4 className="text-sm font-bold tracking-wider uppercase text-white font-mono">
                  Catalog Index
                </h4>
                <span className="text-xs font-mono text-[var(--dim)]">
                  {catalogProjects.length} more systems
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {catalogProjects.map((p) => {
                  const isExpanded = expandedCatalogId === p.id;

                  return (
                    <div
                      key={p.id}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-baseline gap-2">
                            <span className="font-script italic text-sm font-semibold text-cyan-400">
                              {p.number}
                            </span>
                            <h5 className="text-xs sm:text-sm font-bold text-white">
                              {p.title}
                            </h5>
                          </div>
                          <div className="flex items-center gap-1.5 text-[10px] font-mono shrink-0">
                            <span className="px-1.5 py-0.5 rounded bg-white/5 text-white/60">
                              {p.category}
                            </span>
                            <span className="text-[var(--dim)]">{p.year}</span>
                          </div>
                        </div>

                        <p className="mt-1.5 text-xs font-body text-[var(--muted)] line-clamp-2">
                          {p.summary}
                        </p>

                        {isExpanded && (
                          <div className="mt-3 pt-2 border-t border-white/5 space-y-2 animate-fade-in">
                            <p className="text-xs font-body text-white/80">
                              {p.description}
                            </p>
                            {p.bullets && (
                              <ul className="space-y-1 text-[11px] font-body text-[var(--soft)] list-disc pl-4">
                                {p.bullets.map((b, i) => (
                                  <li key={i}>{b}</li>
                                ))}
                              </ul>
                            )}
                            <div className="flex flex-wrap gap-1 pt-1">
                              {p.tech.map((t) => (
                                <span
                                  key={t}
                                  className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-white/60"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedCatalogId(isExpanded ? null : p.id)
                          }
                          className="text-white/60 hover:text-white flex items-center gap-1 cursor-pointer"
                        >
                          <span>{isExpanded ? "Less" : "Details"}</span>
                          {isExpanded ? (
                            <ChevronUp className="w-3 h-3" />
                          ) : (
                            <ChevronDown className="w-3 h-3" />
                          )}
                        </button>

                        <div className="flex items-center gap-2">
                          {p.launchUrl && (
                            <a
                              href={p.launchUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:text-cyan-300 inline-flex items-center gap-0.5"
                            >
                              <span>Launch</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                          {p.githubUrl && (
                            <a
                              href={p.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-white/60 hover:text-white inline-flex items-center gap-0.5"
                            >
                              <span>Source</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
