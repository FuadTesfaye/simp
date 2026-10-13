"use client";

import { useState, useRef } from "react";

interface ProjectItem {
  number: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  category: string;
  year: string;
  description: string;
  tech: string;
  launchUrl?: string;
  sourceUrl?: string;
  packageUrl?: string;
}

interface ProjectBatch {
  id: string;
  name: string;
  range: string;
  summary: string;
  projects: ProjectItem[];
}

const PROJECT_BATCHES: ProjectBatch[] = [
  {
    id: "flagship",
    name: "Flagship Systems",
    range: "01—03",
    summary: "AlgoWars, GitBridge, IlmFlow State",
    projects: [
      {
        number: "01",
        title: "AlgoWars: Neon Syntax",
        category: "SYSTEMS",
        year: "2026",
        badge: "Global Vercel v0 Hackathon Winner (8,000+ entries)",
        badgeColor: "text-lime-400",
        description:
          "A real-time multiplayer tactical coding strategy game where players author autonomous algorithms to command units across a dynamic neon grid. Engineered a server-authoritative deterministic simulation engine with zero-latency client prediction and integrated Google Gemini via the Vercel AI SDK to power an adaptive adversary.",
        tech: "Vercel AI SDK · Google Gemini · TypeScript · Game Engine",
        launchUrl: "https://github.com/FuadTesfaye",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "02",
        title: "GitBridge",
        category: "SYSTEMS",
        year: "2026",
        badge: "Open Source CLI on npm",
        badgeColor: "text-cyan-400",
        description:
          "A zero-wrapper Git context manager that automatically maps repositories to author identities, provider accounts, credentials, and SSH configurations. Engineered with 225 passing tests, 100% offline-first with zero telemetry, and secure OS keyring storage with AES-256-GCM encrypted fallbacks.",
        tech: "TypeScript 5.8 · AES-256-GCM · Git Internals",
        packageUrl: "https://www.npmjs.com/package/gitbridge",
        sourceUrl: "https://github.com/FuadTesfaye/gitbridge",
      },
      {
        number: "03",
        title: "IlmFlow State",
        category: "PLATFORMS",
        year: "2026",
        badge: "Enterprise Event OS",
        badgeColor: "text-amber-400",
        description:
          "Data-driven Islamic Event & Competition Operating System for summits and Quran championships. Features proctored exams with authoritative timers, anti-cheat telemetry, negative marking, dynamic SVG QR lanyards, and real-time gate throughput velocity tracking.",
        tech: "Next.js 16 · Turbopack · Drizzle ORM · Bun · PostgreSQL · Tailwind v4",
        sourceUrl: "https://github.com/FuadTesfaye/ilmflow-state",
      },
    ],
  },
  {
    id: "ai",
    name: "AI & Autonomous",
    range: "04—08",
    summary: "Continuity, ARIA, Muwāsā, AIQA, Omni-MCP",
    projects: [
      {
        number: "04",
        title: "Continuity",
        category: "AI",
        year: "2026",
        badge: "Stateful Agent Orchestrator",
        badgeColor: "text-purple-400",
        description:
          "Autonomous memory and continuity agent platform maintaining stateful memory and autonomous task pipelines across distributed sessions with conversational vector recall and fault-tolerant tool invocation loops.",
        tech: "Python · FastAPI · OpenAI · LangChain · Redis",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "05",
        title: "ARIA — Resort Intelligence Layer",
        category: "AI",
        year: "2025",
        badge: "Hospitality Intelligence",
        badgeColor: "text-cyan-400",
        description:
          "Autonomous multi-agent intelligence layer orchestrating luxury hospitality logistics and guest concierge automation with sub-second LLM streaming and spatial room resource dispatching.",
        tech: "Next.js · Python · Groq · PostgreSQL · Tailwind CSS",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "06",
        title: "Muwāsā (مُوَاسَاة)",
        category: "AI",
        year: "2026",
        badge: "Culturally-Grounded Wellness",
        badgeColor: "text-emerald-400",
        description:
          "Empathetic emotional support AI platform grounded in contextual understanding, cultural nuances, and ethical reasoning with privacy-first session sandboxing.",
        tech: "TypeScript · Next.js · OpenRouter · Drizzle ORM",
        sourceUrl: "https://github.com/FuadTesfaye/Muwasa",
      },
      {
        number: "07",
        title: "AIQA — Autonomous QA Runtime",
        category: "AI",
        year: "2026",
        badge: "Autonomous QA Runtime",
        badgeColor: "text-blue-400",
        description:
          "Self-healing test generation runtime that continuously explores web applications, detects regression states, and authors robust E2E test suites with zero human intervention.",
        tech: "Playwright · TypeScript · Node.js · Claude API",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "08",
        title: "Omni-MCP",
        category: "AI",
        year: "2026",
        badge: "Unified MCP Server",
        badgeColor: "text-pink-400",
        description:
          "Model Context Protocol server connecting developer tools, local file trees, and cloud telemetry directly into LLM runtimes with strict permission boundaries and semantic tool routing.",
        tech: "Model Context Protocol · TypeScript · Node.js · CLI",
        sourceUrl: "https://github.com/FuadTesfaye/omni-mcp",
      },
    ],
  },
  {
    id: "systems",
    name: "Systems & Cloud",
    range: "09—14",
    summary: "INSA Fleet, INSA Procurement, Keyshare, Dagmawi Dispatch, web2app, BioMatch",
    projects: [
      {
        number: "09",
        title: "INSA Fleet-Management Platform",
        category: "SYSTEMS",
        year: "2025",
        badge: "Nationwide Telemetry Dispatch",
        badgeColor: "text-sky-400",
        description:
          "Core backend services and real-time operator tracking views for nationwide transit. Integrates Spring Boot microservices with Apache Kafka for vehicle telemetry streaming and PostgreSQL persistence.",
        tech: "Spring Boot · Apache Kafka · PostgreSQL · Next.js · Microservices",
      },
      {
        number: "10",
        title: "INSA Procurement Management System",
        category: "SYSTEMS",
        year: "2026",
        badge: "National Agency Workflows",
        badgeColor: "text-amber-400",
        description:
          "Mission-critical government procurement platform securing multi-party approval chains. Built on C# / .NET microservices with RabbitMQ event propagation and strict ACID verification.",
        tech: "C# / .NET · RabbitMQ · PostgreSQL · Next.js · Event-Driven",
      },
      {
        number: "11",
        title: "Keyshare",
        category: "SYSTEMS",
        year: "2025",
        badge: "Zero-Knowledge Secrets CLI",
        badgeColor: "text-teal-400",
        description:
          "Lightweight zero-knowledge CLI for exchanging sensitive tokens and credentials via one-time encrypted links and temporary symmetric keys.",
        tech: "Node.js · CLI · AES-256 · Native Crypto",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "12",
        title: "The Dagmawi Dispatch",
        category: "AI",
        year: "2026",
        badge: "Editorial Synthesizer",
        badgeColor: "text-orange-400",
        description:
          "Automated historical analysis and editorial synthesizer producing deep geopolitical digests using collaborative multi-agent researcher swarms.",
        tech: "Next.js · Python · OpenAI · Supabase",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "13",
        title: "web2app",
        category: "SYSTEMS",
        year: "2026",
        badge: "Desktop Binary Packager",
        badgeColor: "text-violet-400",
        description:
          "Automated packaging CLI converting progressive web applications into native desktop binaries with offline cache fallbacks and system tray integrations.",
        tech: "Rust · Tauri · TypeScript · Vite",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "14",
        title: "BioMatch",
        category: "AI",
        year: "2025",
        badge: "Talent & Architecture Alignment",
        badgeColor: "text-rose-400",
        description:
          "AI-driven talent and role alignment engine analyzing developer commit graphs, architectural samples, and open-source contributions via vector embeddings.",
        tech: "Python · FastAPI · Vector Embeddings · PostgreSQL",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
    ],
  },
  {
    id: "platforms",
    name: "Platforms & Web",
    range: "15—20",
    summary: "SafeHire, Portfolio, Ahl Al-Shir, AgentAvis, COMPUTE, Sovereign OS",
    projects: [
      {
        number: "15",
        title: "SafeHire Ethiopia",
        category: "PLATFORMS",
        year: "2025",
        badge: "Verified Employment Trust",
        badgeColor: "text-cyan-400",
        description:
          "National verified employment marketplace featuring cryptographic credential verification and tamper-evident background records.",
        tech: "Next.js · Express.js · PostgreSQL · Tailwind CSS",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "16",
        title: "Modern Developer Portfolio",
        category: "PLATFORMS",
        year: "2024",
        badge: "Interactive UI/UX Craft",
        badgeColor: "text-yellow-400",
        description:
          "High-performance portfolio with interactive GSAP animations, particle physics, and 3D scenes highlighting typographic discipline and craft.",
        tech: "React · GSAP · Three.js · Tailwind CSS",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "17",
        title: "Ahl Al-Shir (أهل الشعر)",
        category: "PLATFORMS",
        year: "2026",
        badge: "Classical Arabic Archive",
        badgeColor: "text-emerald-400",
        description:
          "Digital archive preserving classical Arabic literature and poetic meters with typographic ligature rendering and meter scanning algorithms.",
        tech: "Next.js · TypeScript · Tailwind CSS · Amiri Typography",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "18",
        title: "AgentAvis Insights",
        category: "AI",
        year: "2025",
        badge: "Customer Feedback Synthesizer",
        badgeColor: "text-blue-400",
        description:
          "Autonomous enterprise intelligence engine transforming thousands of unstructured customer reviews and support transcripts into prioritized engineering actions.",
        tech: "Python · LLM Pipelines · Redis · Next.js",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "19",
        title: "COMPUTE",
        category: "AI",
        year: "2025",
        badge: "Spot Inference Broker",
        badgeColor: "text-indigo-400",
        description:
          "Distributed compute broker scheduling spot AI inference workloads across decentralized serverless worker nodes with automated failover.",
        tech: "Go · Docker · WebSockets · TypeScript",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
      {
        number: "20",
        title: "Sovereign OS",
        category: "PLATFORMS",
        year: "2025",
        badge: "Browser Desktop Workstation",
        badgeColor: "text-lime-400",
        description:
          "Browser-based desktop workstation environment providing sandbox window management, virtual filesystem, and in-browser terminal runtime.",
        tech: "Next.js · React Windowing · TypeScript · Tailwind CSS",
        sourceUrl: "https://github.com/FuadTesfaye",
      },
    ],
  },
];

export default function Home() {
  const [activeBatch, setActiveBatch] = useState(0);
  const projectsRef = useRef<HTMLElement>(null);

  const openBatch = (index: number) => {
    setActiveBatch(index);
    if (projectsRef.current) {
      const rect = projectsRef.current.getBoundingClientRect();
      if (rect.top < 0 || rect.top > 250) {
        projectsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const currentBatch = PROJECT_BATCHES[activeBatch] || PROJECT_BATCHES[0];
  const hasNextBatch = activeBatch < PROJECT_BATCHES.length - 1;
  const nextBatch = hasNextBatch ? PROJECT_BATCHES[activeBatch + 1] : null;

  return (
    <div className="p-2 sm:p-3 animate-fade-in">
      <main className="card grain rounded-[1.75rem] sm:rounded-[2.5rem] min-h-[calc(100vh-1rem)]">
        {/* Hero */}
        <header className="relative pt-8 sm:pt-12 lg:pt-14 pl-[6vw] sm:pl-[10vw] pr-6">
          <h1 className="hero relative font-medium text-white">
            <span
              className="l s inline-block"
              style={{
                fontSize: ".92em",
                transform: "rotate(-2deg)",
                transformOrigin: "left bottom",
              }}
            >
              the
            </span>
            <span className="l">musings of</span>
            <span className="l">fuad tesfaye on</span>
            <span className="l">
              what he{" "}
              <span className="s" style={{ fontSize: "1.08em", marginLeft: ".1em" }}>
                loves
              </span>
            </span>
            <span className="l">about code and</span>
            <span className="l">
              what he&apos;s{" "}
              <span className="s" style={{ fontSize: "1.08em", marginLeft: ".08em" }}>
                learned
              </span>
            </span>
            <span className="l">along the way</span>

            {/* hand-drawn annotations (units scale with the heading) */}
            <svg
              className="doodle"
              viewBox="0 0 760 544"
              aria-hidden="true"
              style={{ top: "-.16em" }}
            >
              <g stroke="#4a7cf0">
                <path
                  className="doodle-draw"
                  style={{ animationDelay: "150ms" }}
                  d="M338 14c0-17 14-30 31-29 17 1 27 16 25 33-2 17-17 27-33 24-15-3-23-14-23-28z"
                />
                <path
                  className="doodle-draw"
                  style={{ animationDelay: "280ms" }}
                  d="M304 36c10-6 24 2 24 14 0 12-12 20-22 15-9-5-10-23-2-29z"
                />
                <path
                  className="doodle-draw"
                  style={{ animationDelay: "400ms" }}
                  d="M293 72c7-4 16 2 16 10 0 8-8 13-14 10-6-3-8-16-2-20z"
                />
              </g>
              <path
                className="doodle-draw"
                style={{ animationDelay: "550ms" }}
                stroke="#c5e04a"
                strokeWidth="2.6"
                d="M0 166c18-12 34-14 52-6s34 4 52-6 38-4 58 2 36-8 58-10 40 6 66 0c14-3 28-8 50-10"
              />
              <path
                className="doodle-draw"
                style={{ animationDelay: "750ms" }}
                stroke="#e5522a"
                d="M300 240c40-34 150-40 192-8 40 32 8 74-60 88-72 14-168-6-182-52-8-28 30-52 80-60 60-10 120 4 150 28"
              />
              <path
                className="doodle-draw"
                style={{ animationDelay: "950ms" }}
                stroke="#d95fd0"
                strokeWidth="3.2"
                d="M338 358l332-8c8 0 12 4 10 12l-4 70c-1 8-6 14-14 14l-322 4c-8 0-10-6-10-14z"
              />
              <path
                className="doodle-draw"
                style={{ animationDelay: "1150ms" }}
                stroke="#e8a030"
                d="M493 496c10-14 24-20 34-10s20 14 32 2 28-14 42 2M598 474l26 14-24 16"
              />
            </svg>
          </h1>
        </header>

        {/* 01 About */}
        <section className="relative mt-10 sm:mt-14 pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pb-6">
          <div className="grid grid-cols-[4rem_minmax(0,46rem)] sm:grid-cols-[5rem_minmax(0,50rem)] gap-x-4 sm:gap-x-6">
            <p className="font-body italic text-xs sm:text-sm text-[var(--dim)] pt-1.5 select-none tracking-widest">
              about
            </p>
            <div className="font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.8] text-[#f1f5f9] space-y-[1.6em]">
              <p>
                I’m Fuad Tesfaye, a Full-Stack AI Engineer based in Addis Ababa, Ethiopia. For the past several years, I’ve been designing and shipping production-grade, distributed, and AI-native systems across microservices, event-driven architectures, and high-concurrency cloud environments.
              </p>
              <p>
                My day-to-day spans two fronts: as Founding Engineer at Zion Software Agency, I guide technical strategy, client scoping, and enterprise healthcare architectures; while at INSA (Information Network Security Administration), I engineer nationwide fleet telemetry and procurement systems handling thousands of transactions.
              </p>
              <p>
                Recently, I had the privilege of winning the global Vercel v0 Hackathon (AlgoWars: Neon Syntax) out of 8,000+ submissions worldwide—building a server-authoritative deterministic simulation engine powered by Google Gemini and the Vercel AI SDK.
              </p>
              <p>
                I believe that the best software is built at the intersection of architectural discipline and creative intuition. Distributed systems, message queues, and neural models aren’t just tools—they are the modern infrastructure of human progress.
              </p>
              <p>I thought I was just an engineer building systems.</p>
              <p>
                Turns out I am a{" "}
                <span className="relative italic text-white inline-block">
                  product of
                  <svg
                    className="absolute left-[-2%] bottom-[-.35em] w-[104%] h-[.5em] overflow-visible"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="doodle-draw"
                      style={{ animationDelay: "1350ms" }}
                      d="M0 5c20 2 50 1 100-2"
                      fill="none"
                      stroke="#c5e04a"
                      strokeWidth="2"
                      strokeLinecap="round"
                      vectorEffect="non-scaling-stroke"
                    />
                  </svg>
                </span>{" "}
                engineering.
              </p>
            </div>
          </div>
        </section>

        {/* 02 Stack */}
        <section className="relative mt-8 sm:mt-12 pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pb-6 border-t border-white/5 pt-8 sm:pt-10">
          <div className="grid grid-cols-[4rem_minmax(0,46rem)] sm:grid-cols-[5rem_minmax(0,50rem)] gap-x-4 sm:gap-x-6">
            <p className="font-body italic text-xs sm:text-sm text-[var(--dim)] pt-1.5 select-none tracking-widest">
              stack
            </p>
            <div className="font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.8] text-[#f1f5f9] space-y-[1.6em]">
              <p>
                A craftsman is only as versatile as their fluency across the full stack. Over hundreds of thousands of lines of code and 2,680+ contributions this year alone, my core technical palette revolves around:
              </p>
              <div className="space-y-4 pt-1">
                <div>
                  <span className="s font-normal text-white text-[1.15em] block">
                    Frontend &amp; Interfaces
                  </span>
                  <p className="text-[#cbd5e1] text-[0.95em] mt-1 leading-[1.7]">
                    React, Next.js (App Router), TypeScript, Tailwind CSS, Vite, JavaScript, GSAP, and Three.js for interactive spatial visualizations.
                  </p>
                </div>
                <div>
                  <span className="s font-normal text-white text-[1.15em] block">
                    Backend &amp; Distributed Systems
                  </span>
                  <p className="text-[#cbd5e1] text-[0.95em] mt-1 leading-[1.7]">
                    Node.js, Express.js, Spring Boot, ASP.NET Core (C#), Python, PostgreSQL, MongoDB, Redis, Apache Kafka, RabbitMQ, and microservices architecture.
                  </p>
                </div>
                <div>
                  <span className="s font-normal text-white text-[1.15em] block">
                    AI &amp; Autonomous Runtime
                  </span>
                  <p className="text-[#cbd5e1] text-[0.95em] mt-1 leading-[1.7]">
                    Multi-agent AI orchestration, Google Gemini, OpenAI API, Groq, Anthropic Claude, Hugging Face, OpenRouter, and the Vercel AI SDK.
                  </p>
                </div>
                <div>
                  <span className="s font-normal text-white text-[1.15em] block">
                    Infrastructure &amp; Tooling
                  </span>
                  <p className="text-[#cbd5e1] text-[0.95em] mt-1 leading-[1.7]">
                    Docker, AWS, Google Cloud, Vercel, Git, Bun, Linux, and secure OS keyring cryptographic architectures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 Experience */}
        <section className="relative mt-8 sm:mt-12 pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pb-6 border-t border-white/5 pt-8 sm:pt-10">
          <div className="grid grid-cols-[4rem_minmax(0,46rem)] sm:grid-cols-[5rem_minmax(0,50rem)] gap-x-4 sm:gap-x-6">
            <p className="font-body italic text-xs sm:text-sm text-[var(--dim)] pt-1.5 select-none tracking-widest">
              experience
            </p>
            <div className="font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.8] text-[#f1f5f9] space-y-[2.2em]">
              {/* Zion */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.25em]">
                    Zion Software Agency
                  </span>
                  <span className="font-mono text-xs text-lime-400">
                    01.2026—Present · Founding Engineer
                  </span>
                </div>
                <p className="text-xs font-mono text-[var(--dim)] mt-0.5">
                  Addis Ababa, Ethiopia · Hybrid
                </p>
                <p className="text-[#cbd5e1] text-[0.95em] mt-2 leading-[1.75]">
                  Lead technical strategy, system architecture, and enterprise client scoping. Spearheaded the technical architecture proposal for Teklehaimanot General Hospital’s next-generation Health Information Management System (HIMS/EHR), designing FHIR-aligned data schemas, role-based access control (RBAC), and HL7 integration pathways. Mentoring a cohort of 30 software interns across PERN-stack finance systems and the agency&apos;s Zion ERP flagship product.
                </p>
              </div>

              {/* INSA */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.25em]">
                    INSA (Information Network Security Administration)
                  </span>
                  <span className="font-mono text-xs text-cyan-400">
                    06.2025—Present · Full-Stack Developer
                  </span>
                </div>
                <p className="text-xs font-mono text-[var(--dim)] mt-0.5">
                  Fleet-Management &amp; Procurement · Addis Ababa, Ethiopia · On-site
                </p>
                <p className="text-[#cbd5e1] text-[0.95em] mt-2 leading-[1.75]">
                  Engineered core backend services for a nationwide fleet-management platform using Spring Boot and microservices architecture, integrating Kafka for real-time telemetry streaming and PostgreSQL for persistence. Built high-performance, accessible frontend dashboards with Next.js (App Router), TypeScript, and Tailwind CSS. Architected a mission-critical procurement system for national agency workflows using C# / .NET microservices, RabbitMQ for asynchronous event propagation, and PostgreSQL, ensuring ACID compliance across multi-party approval chains.
                </p>
              </div>

              {/* Fusion IT */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.25em]">
                    Fusion IT Consultancy
                  </span>
                  <span className="font-mono text-xs text-[var(--muted)]">
                    08.2025—05.2026 · Full-Stack Developer
                  </span>
                </div>
                <p className="text-xs font-mono text-[var(--dim)] mt-0.5">
                  Addis Ababa, Ethiopia · Hybrid
                </p>
                <p className="text-[#cbd5e1] text-[0.95em] mt-2 leading-[1.75]">
                  Developed scalable web applications with Express.js and modern frontend frameworks. Engineered CRM systems and role-based access control with clean relational query optimization and maintainable Tailwind CSS components.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 04 Projects */}
        <section
          ref={projectsRef}
          id="projects"
          className="relative mt-8 sm:mt-12 pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pb-6 border-t border-white/5 pt-8 sm:pt-10 scroll-mt-6"
        >
          <div className="grid grid-cols-[4rem_minmax(0,46rem)] sm:grid-cols-[5rem_minmax(0,50rem)] gap-x-4 sm:gap-x-6">
            <p className="font-body italic text-xs sm:text-sm text-[var(--dim)] pt-1.5 select-none tracking-widest">
              projects
            </p>
            <div className="font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.8] text-[#f1f5f9] space-y-[2em]">
              <div>
                <p>
                  Selected production systems, open-source utilities, and competitive engineering highlights across 20 cataloged systems:
                </p>
                {/* Batch chapter links */}
                <div className="mt-3 flex flex-wrap items-center gap-1.5 text-xs font-mono">
                  <span className="text-[var(--dim)] select-none mr-1">chapters:</span>
                  {PROJECT_BATCHES.map((b, idx) => {
                    const isActive = activeBatch === idx;
                    return (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => openBatch(idx)}
                        className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                          isActive
                            ? "bg-white/10 text-white border border-white/25 font-semibold"
                            : "text-[var(--dim)] hover:text-white border border-transparent hover:border-white/10"
                        }`}
                      >
                        {b.range}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Collapsed earlier batches (reopen buttons) */}
              {activeBatch > 0 && (
                <div className="space-y-2 pt-1">
                  {PROJECT_BATCHES.slice(0, activeBatch).map((prevBatch, prevIdx) => (
                    <button
                      key={prevBatch.id}
                      type="button"
                      onClick={() => openBatch(prevIdx)}
                      className="group w-full py-2.5 px-3.5 rounded-lg border border-white/10 hover:border-white/25 bg-white/[0.02] hover:bg-white/[0.06] flex items-center justify-between font-mono text-xs text-[var(--muted)] hover:text-white transition-all text-left cursor-pointer"
                      title={`Reopen ${prevBatch.name}`}
                    >
                      <span className="flex items-center gap-2 truncate pr-2">
                        <span className="text-cyan-400 font-bold">↑</span>
                        <span className="text-white/85 font-medium">{prevBatch.range}: {prevBatch.name}</span>
                        <span className="hidden sm:inline text-[var(--dim)] truncate">
                          · {prevBatch.summary}
                        </span>
                      </span>
                      <span className="text-[var(--dim)] group-hover:text-cyan-300 text-[11px] underline underline-offset-2 shrink-0">
                        reopen ↗
                      </span>
                    </button>
                  ))}
                </div>
              )}

              {/* Active Batch Header (if not on batch 0) */}
              {activeBatch > 0 && (
                <div className="flex items-center justify-between text-xs font-mono text-[var(--dim)] border-b border-white/5 pb-2">
                  <span className="text-white/80 font-medium">
                    Chapter {activeBatch + 1}: {currentBatch.name} ({currentBatch.range})
                  </span>
                  <span>{currentBatch.projects.length} systems in this view</span>
                </div>
              )}

              {/* Projects in the Active Batch */}
              <div key={currentBatch.id} className="space-y-[2.2em] animate-fade-in">
                {currentBatch.projects.map((item) => (
                  <div key={item.number}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className="s font-normal text-white text-[1.2em]">
                        {item.number}. {item.title}
                      </span>
                      {item.badge && (
                        <span className={`font-mono text-xs ${item.badgeColor || "text-cyan-400"}`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-[#cbd5e1] text-[0.95em] mt-2 leading-[1.75]">
                      {item.description}
                    </p>
                    <div className="mt-2 text-xs font-mono text-cyan-300 flex flex-wrap items-center gap-x-2 gap-y-1">
                      {item.launchUrl && (
                        <a
                          href={item.launchUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Launch Project ↗
                        </a>
                      )}
                      {item.launchUrl && (item.packageUrl || item.sourceUrl) && (
                        <span className="text-white/30">·</span>
                      )}
                      {item.packageUrl && (
                        <a
                          href={item.packageUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          npm package ↗
                        </a>
                      )}
                      {item.packageUrl && item.sourceUrl && (
                        <span className="text-white/30">·</span>
                      )}
                      {item.sourceUrl && (
                        <a
                          href={item.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Source Code ↗
                        </a>
                      )}
                      {(item.launchUrl || item.packageUrl || item.sourceUrl) && (
                        <span className="text-white/30">·</span>
                      )}
                      <span className="text-[var(--dim)]">{item.tech}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Load More & Navigation Bar */}
              <div className="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/5">
                {hasNextBatch && nextBatch ? (
                  <button
                    type="button"
                    onClick={() => openBatch(activeBatch + 1)}
                    className="group inline-flex items-center gap-2.5 font-mono text-xs sm:text-sm text-white/90 hover:text-white px-5 py-2.5 rounded-full border border-white/15 hover:border-cyan-400/40 bg-white/[0.03] hover:bg-cyan-950/20 transition-all duration-300 active:scale-[0.98] cursor-pointer"
                  >
                    <span className="text-cyan-400 transition-transform group-hover:translate-y-0.5">↓</span>
                    <span>
                      load more systems{" "}
                      <span className="text-[var(--dim)] group-hover:text-cyan-300/80 transition-colors">
                        ({nextBatch.range} · {nextBatch.name})
                      </span>
                    </span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => openBatch(0)}
                    className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-cyan-300 hover:text-white px-5 py-2.5 rounded-full border border-white/15 hover:border-white/35 bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer"
                  >
                    <span>↑ back to flagship works (01—03)</span>
                  </button>
                )}

                <div className="flex items-center gap-3 text-xs font-mono text-[var(--dim)]">
                  {activeBatch > 0 && (
                    <button
                      type="button"
                      onClick={() => openBatch(activeBatch - 1)}
                      className="hover:text-white transition-colors cursor-pointer"
                    >
                      ← previous ({PROJECT_BATCHES[activeBatch - 1].range})
                    </button>
                  )}
                  <span>
                    chapter {activeBatch + 1} of {PROJECT_BATCHES.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 Education */}
        <section className="relative mt-8 sm:mt-12 pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pb-6 border-t border-white/5 pt-8 sm:pt-10">
          <div className="grid grid-cols-[4rem_minmax(0,46rem)] sm:grid-cols-[5rem_minmax(0,50rem)] gap-x-4 sm:gap-x-6">
            <p className="font-body italic text-xs sm:text-sm text-[var(--dim)] pt-1.5 select-none tracking-widest">
              education
            </p>
            <div className="font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.8] text-[#f1f5f9] space-y-[1.8em]">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.2em]">
                    Ethiopian Public Service University
                  </span>
                  <span className="font-mono text-xs text-[var(--dim)]">
                    2022—2026 (Expected)
                  </span>
                </div>
                <p className="text-[#cbd5e1] text-[0.95em] mt-1 leading-[1.75]">
                  Software Engineering Coursework emphasizing distributed systems, algorithm design, data structures, and enterprise application architecture.
                </p>
              </div>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.2em]">
                    INSA Cyber Talent Summer Camp
                  </span>
                  <span className="font-mono text-xs text-[var(--dim)]">
                    07.2025—09.2025
                  </span>
                </div>
                <p className="text-[#cbd5e1] text-[0.95em] mt-1 leading-[1.75]">
                  National competitive intensive on cybersecurity, defensive system architectures, networking protocols, penetration testing, and security audits.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Author + link */}
        <footer className="relative pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pt-10 sm:pt-12 pb-36 sm:pb-40 border-t border-white/5">
          <div
            className="relative ml-[calc(4rem+1rem)] sm:ml-[calc(5rem+1.5rem)] w-36 h-32 sm:w-44 sm:h-36 overflow-hidden rounded-md transition-transform duration-500 hover:scale-[1.02] shadow-2xl border border-white/10"
            style={{
              background:
                "linear-gradient(160deg, #e8622a, #9c2a12 70%, #2b0f08)",
            }}
            role="img"
            aria-label="Portrait of Fuad Tesfaye"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://avatars.githubusercontent.com/u/155218084?v=4"
              alt="Fuad Tesfaye"
              className="w-full h-full object-cover mix-blend-luminosity opacity-90 hover:opacity-100 transition-opacity"
            />
          </div>
          <svg
            className="absolute left-[calc(6vw-1.5rem)] sm:left-[calc(14vw-2.5rem)] lg:left-[calc(18vw-3rem)] top-[1.2rem] w-[18rem] h-[5.5rem] overflow-visible pointer-events-none"
            viewBox="0 0 260 80"
            fill="none"
            stroke="#e5522a"
            strokeWidth="5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path
              className="doodle-draw"
              style={{ animationDelay: "1500ms" }}
              d="M8 52c30-22 110-26 150-12 22 8 10 26-30 30-50 6-110 0-118-20-3-8 30-16 90-14"
            />
            <path
              className="doodle-draw"
              style={{ animationDelay: "1700ms" }}
              d="M180 70l30-26 14 22 18-30"
            />
          </svg>
          <div className="mt-4 ml-[calc(4rem+1rem+1.5rem)] sm:ml-[calc(5rem+1.5rem+2rem)]">
            <p className="font-body italic text-xs sm:text-sm text-[var(--muted)] underline decoration-[var(--dim)] underline-offset-4">
              Fuad Tesfaye · He’s not verified on Twitter.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--dim)] mt-2">
              <a href="mailto:fuadtesfaye24@gmail.com" className="text-cyan-400 hover:text-cyan-300">
                fuadtesfaye24@gmail.com
              </a>
              <span>·</span>
              <a href="https://github.com/FuadTesfaye" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                GitHub ↗
              </a>
              <span>·</span>
              <a href="https://www.linkedin.com/in/fuad-tesfaye/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                LinkedIn ↗
              </a>
              <span>·</span>
              <a href="https://x.com/FuadTesfaye" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                X ↗
              </a>
            </div>
          </div>
        </footer>

        {/* Floating link pill */}
        <a
          href="https://github.com/FuadTesfaye"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            bottom: "max(1.25rem, calc(env(safe-area-inset-bottom, 0px) + 0.75rem))",
          }}
          className="fixed z-20 left-1/2 -translate-x-1/2 flex items-center gap-4 sm:gap-5 whitespace-nowrap rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-7 sm:px-9 py-3.5 sm:py-4 font-mono text-[0.95rem] sm:text-[1.15rem] text-white shadow-[0_15px_50px_rgba(0,0,0,.7)] transition-all duration-300 hover:scale-[1.03] hover:border-white/25 hover:bg-black/80 hover:shadow-[0_20px_60px_rgba(0,0,0,.9)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white group"
        >
          <span className="text-[var(--muted)] transition-colors duration-200 group-hover:text-white">
            GitHub
          </span>
          <span>https://github.com/FuadTesfaye</span>
        </a>
      </main>
    </div>
  );
}
