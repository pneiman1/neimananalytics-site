import { Counter } from "@/components/Counter";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";

/**
 * PLACEHOLDER FIGURES — swap these for real numbers before publishing.
 * Nothing here is derived from measured results.
 */
const STATS = [
  { value: 12, suffix: "+", decimals: 0, label: "Years in analytics" },
  { value: 40, suffix: "+", decimals: 0, label: "dbt models in production" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Pipeline uptime" },
];

const CAPABILITIES = [
  {
    title: "Data platform architecture",
    body: "Warehouse design, ELT orchestration, and the contracts between them. Built to survive schema drift and staff turnover.",
    stack: ["Snowflake", "Airflow", "dbt"],
  },
  {
    title: "Analytics engineering",
    body: "Dimensional models and metric layers that give one answer to one question — tested, documented, and versioned.",
    stack: ["SQL", "dbt", "Python"],
  },
  {
    title: "Product surfaces",
    body: "The last mile most data teams skip: APIs and interfaces that put the model in front of the person making the call.",
    stack: ["FastAPI", "Next.js", "TypeScript"],
  },
  {
    title: "Applied AI",
    body: "LLM features grounded in your own warehouse — natural-language exploration and narrative summaries over governed data.",
    stack: ["Claude", "RAG", "Evals"],
  },
];

/**
 * The three live demos, each a complete vertical on the same platform: warehouse
 * through dbt models through API through interface. Screenshots in
 * public/verticals are captured from the live Overview of each
 * (scripts/capture-verticals.sh), so what a visitor sees here is what they get
 * when they click through — including the palette.
 */
const VERTICALS = [
  {
    name: "Regimen",
    domain: "Dermatology",
    href: "https://regimen.neimananalytics.com/executive",
    shot: "/verticals/regimen.png",
    blurb:
      "Provider performance, channel attribution and recall for a cosmetic dermatology practice — the vertical the platform was first built for.",
  },
  {
    name: "Yield",
    domain: "Coffee",
    href: "https://yield.neimananalytics.com/overview",
    shot: "/verticals/yield.png",
    blurb:
      "Extraction yield, roast loss and three-state inventory for a specialty roaster and its cafés — measured in pounds, from green lot to the cup.",
  },
  {
    name: "Barrel",
    domain: "Beer",
    href: "https://barrel.neimananalytics.com/overview",
    shot: "/verticals/barrel.png",
    blurb:
      "Fermenter capacity, yield loss by stage and TTB reconciliation for a production brewery with a taproom — built on the constraint that binds it.",
  },
];

const WORK = [
  {
    name: "Regimen",
    tag: "Product",
    summary:
      "Analytics intelligence for cosmetic dermatology practices — provider performance, channel attribution, recall and no-show risk, from raw practice-management data through to a dashboard clinicians actually open. The first of the three verticals below, and the one the shared platform was factored out of.",
    stack: ["Snowflake", "dbt", "Airflow", "FastAPI", "Next.js", "Fly.io"],
    featured: true,
  },
  {
    name: "platform-core",
    tag: "Infrastructure",
    summary:
      "The shared Python foundation underneath the products — config, connections, and pipeline primitives factored out so a new data product starts at week three instead of week one.",
    stack: ["Python", "Pytest", "Ruff"],
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* ---- Stats ---------------------------------------------------- */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rule" />
        <div className="grid gap-10 py-14 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <p className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
              </p>
              <p className="mt-3 text-sm text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
        <div className="rule" />
      </section>

      {/* ---- Work ----------------------------------------------------- */}
      <section id="work" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Selected work
          </p>
          <h2 className="text-silver mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Things I built end to end.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {WORK.map((project, i) => (
            <Reveal
              key={project.name}
              delay={i * 110}
              className={project.featured ? "lg:col-span-3" : "lg:col-span-2"}
            >
              <article className="card flex h-full flex-col p-8">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                    {project.tag}
                  </span>
                </div>

                <p className="mt-5 flex-1 leading-relaxed text-muted">
                  {project.summary}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Live demos ------------------------------------------------ */}
      <section id="demos" className="mx-auto max-w-6xl scroll-mt-24 px-6 pb-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Live demos
          </p>
          <h2 className="text-silver mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            One platform, three industries.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-muted">
            The same warehouse, modelling and API layer, pointed at three
            different businesses. Each one answers the questions its operator
            actually opens a laptop to ask — in that industry&rsquo;s own units.
            All three are live and running on generated data.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VERTICALS.map((v, i) => (
            <Reveal key={v.name} delay={i * 110}>
              <a
                href={v.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group card flex h-full flex-col overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              >
                <div className="relative overflow-hidden border-b border-line bg-white">
                  {/* Wide dashboard crop. The intrinsic size is the capture
                      size, so the browser reserves the right box before the
                      image lands and the card never jumps. */}
                  <img
                    src={v.shot}
                    alt={`The ${v.name} dashboard — its Overview page, captured from the live site`}
                    width={1440}
                    height={640}
                    loading="lazy"
                    decoding="async"
                    className="block w-full transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">
                      {v.name}
                    </h3>
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      {v.domain}
                    </span>
                  </div>

                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {v.blurb}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors group-hover:text-white">
                    Open the demo
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                      &rarr;
                    </span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Capabilities --------------------------------------------- */}
      <section
        id="capabilities"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28"
      >
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Capabilities
          </p>
          <h2 className="text-silver mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            The whole stack, not a slice of it.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((cap, i) => (
            <Reveal key={cap.title} delay={i * 90}>
              <article className="card h-full p-8">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {cap.title}
                </h3>
                <p className="mt-4 leading-relaxed text-muted">{cap.body}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {cap.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-muted"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- About ---------------------------------------------------- */}
      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28">
        <div className="rule" />
        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 className="text-silver font-display text-4xl font-semibold tracking-tight">
              About
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-6 text-lg leading-relaxed text-muted">
              <p>
                Most analytics work dies in the gap between a correct number and
                a decision someone actually makes. I build across that gap —
                warehouse through interface — because the handoffs are where the
                value leaks out.
              </p>
              <p>
                Right now that means three vertical analytics products —{" "}
                <span className="text-foreground">Regimen</span> for
                dermatology, <span className="text-foreground">Yield</span> for
                coffee and <span className="text-foreground">Barrel</span> for
                beer — and the shared platform underneath them.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="rule" />
      </section>

      {/* ---- Contact -------------------------------------------------- */}
      <section
        id="contact"
        className="mx-auto max-w-6xl scroll-mt-24 px-6 py-28 text-center"
      >
        <Reveal>
          <h2 className="text-chromatic mx-auto max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Have data that isn&rsquo;t earning its keep?
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-7 max-w-lg text-lg text-muted">
            Tell me what decision you&rsquo;re trying to make. I&rsquo;ll tell
            you what it would take to support it.
          </p>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-11 flex flex-wrap justify-center gap-4">
            <a href="mailto:pneiman1@gmail.com" className="btn btn-primary">
              pneiman1@gmail.com
            </a>
            <a href="#work" className="btn btn-secondary">
              See the work
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
