import Image from "next/image";

import { Reveal } from "@/components/Reveal";
import { StackStrip } from "@/components/StackStrip";
import { TechStrip } from "@/components/TechStrip";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-6 pb-24 pt-64"
    >
      {/* Pinned to the hero's top-left so it tucks directly under the nav
          wordmark — left-6 matches the nav's px-6 inside the same max-w-6xl,
          so the photo and the wordmark share a left edge. The stack strip
          runs across the top on the portrait's centerline. */}
      <Reveal className="absolute inset-x-6 top-20">
        <div className="flex items-center gap-8">
          <div className="h-36 w-36 shrink-0 overflow-hidden rounded-2xl border border-line">
            <Image
              src="/profilephoto.png"
              alt="Phillip Neiman"
              width={288}
              height={288}
              sizes="144px"
              priority
              className="h-full w-full object-cover object-top"
            />
          </div>
          <StackStrip />
        </div>
      </Reveal>

      <Reveal delay={40}>
        <p className="font-mono text-xs tracking-tight text-muted">
          <span className="text-foreground/70">~/</span>neiman-analytics
          <span className="ml-1 inline-block h-4 w-[8px] translate-y-[2px] animate-blink bg-white align-middle" />
        </p>
      </Reveal>

      <Reveal delay={80}>
        <h1 className="text-silver mt-8 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          Operational data,
          <br />
          turned into decisions.
        </h1>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          I&rsquo;m Phillip Neiman. I design and build the full analytics
          stack&nbsp;&mdash; ingestion, modeling, API, and interface&nbsp;&mdash;
          so teams stop arguing about numbers and start acting on them.
        </p>
      </Reveal>

      <Reveal delay={240}>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          {/* Points at the demos section rather than a single product: there
              are three live now, and derm-iq.io is a redirect to one of them. */}
          <a href="#demos" className="btn btn-primary">
            See the live demos
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in touch
          </a>
        </div>
      </Reveal>

      <Reveal delay={300}>
        <div className="mt-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted/70">
            Built with
          </p>
          <div className="mt-5">
            <TechStrip />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
