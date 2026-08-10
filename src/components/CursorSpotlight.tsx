"use client";

import { useEffect, useRef } from "react";

/**
 * A soft white radial gradient that trails the cursor. Positioned via a ref
 * and rAF rather than React state so pointer movement never triggers a render.
 * Hidden on touch/coarse pointers, where there is no cursor to follow.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const draw = () => {
      frame = 0;
      el.style.transform = `translate3d(${x - 400}px, ${y - 400}px, 0)`;
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      // Stay hidden until the pointer actually moves, so the spotlight never
      // sits parked in the middle of the hero on first paint.
      el.style.opacity = "1";
      if (!frame) frame = requestAnimationFrame(draw);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    draw();

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 h-[800px] w-[800px] opacity-0 transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%)",
      }}
    />
  );
}
