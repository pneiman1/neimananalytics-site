"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#demos", label: "Demos" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        // Opaque enough to stand on its own where backdrop-filter is
        // unsupported, so scrolled content never bleeds through the bar.
        scrolled && "border-b border-line bg-black/80 backdrop-blur-xl",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="#top"
          className="text-wordmark font-display text-sm font-extrabold tracking-[0.18em]"
        >
          NEIMANANALYTICS
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-secondary !px-5 !py-2">
            Get in touch
          </a>
        </div>

        <a href="#contact" className="btn btn-secondary !px-4 !py-2 md:hidden">
          Contact
        </a>
      </nav>
    </header>
  );
}
