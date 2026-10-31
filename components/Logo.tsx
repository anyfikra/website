"use client";

import { useEffect, useRef } from "react";

// A light bulb: a fikra switching on. This is the centre line of a 5-wide
// stroke, so the same path also fills the inside of the bulb.
const BULB =
  "M27 36.5H36C36 31.5 40.5 29.5 40.5 23.5A9 9 0 0 0 22.5 23.5C22.5 29.5 27 31.5 27 36.5Z";

/** How close the mouse must be, in px, before the bulb starts to glow. */
const GLOW_REACH = 220;

/** The bulb brightens as the mouse gets closer (see .bulb-glass in globals.css). */
export function Mark({ className = "" }: Readonly<{ className?: string }>) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;
    const setGlow = (glow: number) =>
      svg.style.setProperty("--glow", glow.toFixed(3));

    let frame = 0;
    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const box = svg!.getBoundingClientRect();
        const distance = Math.hypot(
          event.clientX - (box.left + box.width / 2),
          event.clientY - (box.top + box.height / 2),
        );
        // Squared, so it stays dim until the mouse is really close.
        setGlow(Math.max(0, 1 - distance / GLOW_REACH) ** 2);
      });
    }
    function onLeave() {
      cancelAnimationFrame(frame);
      setGlow(0);
    }

    const root = document.documentElement;
    window.addEventListener("pointermove", onMove, { passive: true });
    root.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="16.5 10.5 30 30"
      aria-hidden="true"
      className={`overflow-visible ${className}`}
    >
      {/* The header and footer logos each define this; the two are identical. */}
      <defs>
        <radialGradient id="bulb-halo">
          <stop offset="0" className="[stop-color:rgb(var(--spark))]" />
          <stop
            offset="1"
            className="[stop-color:rgb(var(--spark))] [stop-opacity:0]"
          />
        </radialGradient>
      </defs>
      <circle
        cx={31.5}
        cy={24}
        r={24}
        fill="url(#bulb-halo)"
        className="bulb-halo"
      />
      <path d={BULB} className="bulb-glass fill-spark" />
      <path
        d={BULB}
        fill="none"
        stroke="currentColor"
        strokeWidth={5}
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** "anyfikra", with the dot of the i replaced by a saffron diamond. */
export function Wordmark({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <span className={`font-display leading-none tracking-[-0.02em] ${className}`}>
      <span className="sr-only">AnyFikra</span>
      <span aria-hidden="true">
        {"anyf"}
        {/* Clears the hook of the f, which would otherwise touch the diamond. */}
        <span className="relative ml-[0.05em]">
          {"ı"}
          <span className="absolute left-1/2 top-[0.23em] h-[0.16em] w-[0.16em] -translate-x-1/2 rotate-45 rounded-[1px] bg-spark" />
        </span>
        {"kra"}
      </span>
    </span>
  );
}
