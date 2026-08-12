"use client";

import { motion, useReducedMotion } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/shared/Button";
import { hero } from "@/lib/content/designerama";

const EASE = [0.22, 1, 0.36, 1] as const;
const STAGGER = 0.14;
const BASE_DELAY = 0.1;

export function Hero() {
  const reduce = useReducedMotion();

  const lines = [
    { text: hero.headline, accent: false },
    { text: hero.headlineLine2, accent: false },
    { text: hero.headlineAccent, accent: true },
  ];

  return (
    <section id="top" className="relative overflow-hidden border-b border-line pb-20 pt-[150px] sm:pb-28 sm:pt-[180px]">
      <div className="relative z-10 mx-auto max-w-container px-6 sm:px-8">
        <div className="hero-ambient" aria-hidden="true" />

        <div className="relative z-[1]">
        <p className="eyebrow mb-6">{hero.eyebrow}</p>

        <h1 className="max-w-3xl text-[clamp(38px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.01em]">
          {lines.map((line, i) => {
            const delay = BASE_DELAY + i * STAGGER;
            return (
              <span key={i} className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
                <motion.span
                  className={`block ${line.accent ? "text-accent" : ""}`}
                  initial={reduce ? false : { y: "115%", rotate: 4 }}
                  animate={
                    reduce
                      ? { y: "0%", rotate: 0, scale: 1 }
                      : line.accent
                        ? { y: "0%", rotate: 0, scale: [1, 1, 1.02, 1] }
                        : { y: "0%", rotate: 0 }
                  }
                  transition={
                    reduce
                      ? { duration: 0 }
                      : line.accent
                        ? {
                            y: { duration: 0.85, ease: EASE, delay },
                            rotate: { duration: 0.85, ease: EASE, delay },
                            scale: { duration: 1.5, ease: "easeInOut", times: [0, 0.55, 0.78, 1], delay: delay + 0.55 },
                          }
                        : { duration: 0.7, ease: EASE, delay }
                  }
                >
                  {line.text}
                </motion.span>
              </span>
            );
          })}
        </h1>

        <RevealOnScroll y={16} duration={0.6} delay={0.05}>
          <p className="mt-8 max-w-xl text-[19px] leading-[1.8] tracking-[0.005em] text-ink-dim">{hero.lede}</p>
        </RevealOnScroll>

        <RevealOnScroll y={16} duration={0.6} delay={0.1}>
          <div className="mt-9 flex flex-wrap gap-4">
            {hero.actions.map((a) => (
              <Button key={a.label} href={a.href} variant={a.variant}>
                {a.label}
              </Button>
            ))}
          </div>
        </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
