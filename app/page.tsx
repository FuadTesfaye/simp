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

        {/* Prologue */}
        <section className="relative mt-8 sm:mt-12 lg:mt-14 pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pb-10">
          <div className="grid grid-cols-[4rem_minmax(0,46rem)] sm:grid-cols-[5rem_minmax(0,50rem)] gap-x-4 sm:gap-x-6">
            <p className="font-body italic text-xs sm:text-sm text-[var(--dim)] pt-1.5 select-none tracking-widest">
              prologue
            </p>
            <div className="font-body text-[clamp(1.05rem,1.35vw,1.3rem)] leading-[1.8] text-[#f1f5f9] space-y-[1.6em]">
              <p>
                In certain cultures, there is a tradition of renewing commitments every new milestone to remember why we began in the first place. For me, engineering is that enduring craft—an obsession with how distributed systems, event streams, and autonomous intelligences weave together into seamless human experiences.
              </p>
              <p>
                I’m Fuad Tesfaye, a Full-Stack AI Engineer based in Addis Ababa. Over the past several years, I’ve built mission-critical national platforms (telemetry-driven fleet management and procurement systems at INSA), spearheaded enterprise healthcare architecture at Zion, and won the global Vercel v0 Hackathon among 8,000+ developers worldwide.
              </p>
              <p>
                Why do I build what I build? What keeps me up late optimizing Kafka partitions, designing resilient Spring Boot &amp; .NET microservices, and orchestrating multi-agent LLM systems? It is the conviction that elegant code can quietly carry the weight of real human lives.
              </p>
              <p>
                For a long time I thought I was simply the one typing keystrokes into a terminal—the engineer crafting the machine. But looking back across every line shipped, I realized engineering has shaped me far more than I could have imagined. It taught me patience, architectural humility, and how to think in first principles.
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

        {/* Author + link */}
        <footer className="relative pl-[6vw] sm:pl-[14vw] lg:pl-[18vw] pr-6 pt-10 sm:pt-12 pb-36 sm:pb-40">
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
          <p className="font-body italic text-xs sm:text-sm text-[var(--muted)] mt-4 ml-[calc(4rem+1rem+1.5rem)] sm:ml-[calc(5rem+1.5rem+2rem)] underline decoration-[var(--dim)] underline-offset-4">
            Fuad Tesfaye · He’s not verified on Twitter.
          </p>
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
