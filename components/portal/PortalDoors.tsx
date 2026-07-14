"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useRef } from "react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { PortalDivider } from "./PortalDivider";

function usePointerGlow<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const onPointerMove = useCallback((e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);
  return { ref, onPointerMove };
}

export function PortalDoors() {
  const folio = usePointerGlow<HTMLAnchorElement>();
  const rama = usePointerGlow<HTMLAnchorElement>();

  return (
    <div className="relative grid min-h-screen grid-cols-1 md:grid-cols-2">
      <PortalDivider />

      <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-bg text-center font-mono text-[0.7rem] uppercase leading-tight tracking-[0.08em] text-ink-dim md:flex">
        Pick
        <br />
        a door
      </div>

      <Link
        ref={folio.ref}
        href="/portfolio"
        onPointerMove={folio.onPointerMove}
        className="portal-panel group relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-bg px-8 py-16 sm:px-14 md:min-h-screen md:px-20"
      >
        <Image
          src="/images/kishan-portrait.webp"
          alt=""
          width={900}
          height={1574}
          className="pointer-events-none absolute -right-[6%] -bottom-[4%] z-0 w-[56%] opacity-[0.16] grayscale transition-all duration-500 group-hover:scale-[1.04] group-hover:opacity-30"
        />
        <RevealOnScroll y={20} className="relative z-[2] max-w-[480px]">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-dim">For recruiters &amp; hiring teams</p>
          <h2 className="mt-4 text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold uppercase leading-[0.95]">
            Kishan
            <br />
            Rama
          </h2>
          <p className="mt-5 text-ink-muted">
            Principal Product Designer &amp; UX Strategist. 26 years, 26 to 30 million monthly users reached. Open to
            senior roles, contract work and consulting.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Portfolio", "CV & case studies", "Hire me"].map((t) => (
              <span key={t} className="rounded-pill border border-line px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.05em]">
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 font-mono text-[0.85rem] uppercase tracking-[0.05em]">
            View my work <span>→</span>
          </p>
        </RevealOnScroll>
      </Link>

      <Link
        ref={rama.ref}
        href="/designerama"
        onPointerMove={rama.onPointerMove}
        className="portal-panel relative flex min-h-[70vh] flex-col justify-center overflow-hidden bg-[#0a0a0a] px-8 py-16 text-[#f2f0ec] sm:px-14 md:min-h-screen md:px-20"
      >
        <div className="portal-dot-pattern" />
        <RevealOnScroll y={20} className="relative z-[2] max-w-[480px]">
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-[#8a8886]">
            For businesses &amp; consulting clients
          </p>
          <h2 className="mt-4 break-words text-[clamp(2.6rem,7vw,5.2rem)] font-extrabold uppercase leading-[0.95]">
            Designer&shy;ama
          </h2>
          <p className="mt-5 text-[#c9c7c3]">
            UX consulting and Verifux, an AI-powered audit engine built on a proprietary 8-pillar, 48-checkpoint
            framework. Diagnosis before design.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Consulting", "Verifux", "Book a diagnosis"].map((t) => (
              <span
                key={t}
                className="rounded-pill border border-[#232323] px-4 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.05em]"
              >
                {t}
              </span>
            ))}
          </div>
          <p className="mt-8 font-mono text-[0.85rem] uppercase tracking-[0.05em]">
            Explore Designerama <span>→</span>
          </p>
        </RevealOnScroll>
      </Link>
    </div>
  );
}
