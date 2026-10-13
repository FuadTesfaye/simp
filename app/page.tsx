export default function Home() {
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
        <section className="relative mt-8 sm:mt-12 pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pb-6 border-t border-white/5 pt-8 sm:pt-10">
          <div className="grid grid-cols-[4rem_minmax(0,46rem)] sm:grid-cols-[5rem_minmax(0,50rem)] gap-x-4 sm:gap-x-6">
            <p className="font-body italic text-xs sm:text-sm text-[var(--dim)] pt-1.5 select-none tracking-widest">
              projects
            </p>
            <div className="font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.8] text-[#f1f5f9] space-y-[2.2em]">
              <p>
                Selected production systems, open-source utilities, and competitive engineering highlights:
              </p>

              {/* 01 AlgoWars */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.2em]">
                    01. AlgoWars: Neon Syntax
                  </span>
                  <span className="font-mono text-xs text-lime-400">
                    Global Vercel v0 Hackathon Winner (8,000+ entries)
                  </span>
                </div>
                <p className="text-[#cbd5e1] text-[0.95em] mt-2 leading-[1.75]">
                  A real-time multiplayer tactical coding strategy game where players author autonomous algorithms to command units across a dynamic neon grid. Engineered a server-authoritative deterministic simulation engine with zero-latency client prediction and integrated Google Gemini via the Vercel AI SDK to power an adaptive adversary.
                </p>
                <div className="mt-2 text-xs font-mono text-cyan-300">
                  <a href="https://github.com/FuadTesfaye" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Launch Project ↗
                  </a>
                  <span className="text-white/30 mx-2">·</span>
                  <span className="text-[var(--dim)]">Vercel AI SDK · Google Gemini · TypeScript · Game Engine</span>
                </div>
              </div>

              {/* 02 GitBridge */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.2em]">
                    02. GitBridge
                  </span>
                  <span className="font-mono text-xs text-cyan-400">
                    Open Source CLI on npm
                  </span>
                </div>
                <p className="text-[#cbd5e1] text-[0.95em] mt-2 leading-[1.75]">
                  A zero-wrapper Git context manager that automatically maps repositories to author identities, provider accounts, credentials, and SSH configurations. Engineered with 225 passing tests, 100% offline-first with zero telemetry, and secure OS keyring storage with AES-256-GCM encrypted fallbacks.
                </p>
                <div className="mt-2 text-xs font-mono text-cyan-300">
                  <a href="https://www.npmjs.com/package/gitbridge" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    npm package ↗
                  </a>
                  <span className="text-white/30 mx-2">·</span>
                  <a href="https://github.com/FuadTesfaye/gitbridge" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Source Code ↗
                  </a>
                  <span className="text-white/30 mx-2">·</span>
                  <span className="text-[var(--dim)]">TypeScript 5.8 · AES-256-GCM · Git Internals</span>
                </div>
              </div>

              {/* 03 IlmFlow State */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="s font-normal text-white text-[1.2em]">
                    03. IlmFlow State
                  </span>
                  <span className="font-mono text-xs text-amber-400">
                    Enterprise Event OS
                  </span>
                </div>
                <p className="text-[#cbd5e1] text-[0.95em] mt-2 leading-[1.75]">
                  Data-driven Islamic Event &amp; Competition Operating System for summits and Quran championships. Features proctored exams with authoritative timers, anti-cheat telemetry, negative marking, dynamic SVG QR lanyards, and real-time gate throughput velocity tracking.
                </p>
                <div className="mt-2 text-xs font-mono text-cyan-300">
                  <span className="text-[var(--dim)]">Next.js 16 · Turbopack · Drizzle ORM · Bun · PostgreSQL · Tailwind v4</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-body italic text-[var(--muted)] pt-2">
                Plus 17 more systems including Omni-MCP, INSA Fleet Management, Muwāsā, Continuity, and ARIA on GitHub.
              </p>
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
