"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/shared/Button";
import { hero } from "@/lib/content/portfolio";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => Math.min(v * 0.18, 140));
  const scale = useTransform(scrollY, (v) => 1 + Math.min(v * 0.00025, 0.06));

  return (
    <section className="relative flex min-h-[96vh] flex-col justify-center overflow-hidden border-b border-line pb-16 pt-36">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute bottom-[-2rem] right-[clamp(-4rem,2vw,2rem)] hidden w-[min(38vw,460px)] sm:block"
          style={
            reduce
              ? undefined
              : {
                  y,
                  scale,
                  maskImage:
                    "linear-gradient(to bottom, black 55%, transparent 96%), linear-gradient(to left, black 65%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 55%, transparent 96%), linear-gradient(to left, black 65%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }
          }
        >
          <Image
            src="/images/kishan-portrait.webp"
            alt=""
            width={900}
            height={1574}
            className="w-full opacity-90 grayscale [mix-blend-mode:multiply] [filter:contrast(1.02)]"
            priority
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-dim">
          {hero.metaRow.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </RevealOnScroll>

        <RevealOnScroll y={34}>
          <h1 className="max-w-4xl text-[clamp(3rem,9.5vw,7.6rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.035em]">
            {hero.headline}
            <br />
            <span className="bg-gradient-to-r from-accent-deep via-accent to-accent-light bg-clip-text text-transparent">
              {hero.headlineAccent}
            </span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll y={34} delay={0.05}>
          <p className="mt-8 max-w-xl text-[1.15rem] leading-relaxed text-ink-muted">{hero.sub}</p>
        </RevealOnScroll>

        <RevealOnScroll y={34} delay={0.1}>
          <div className="mt-9 flex flex-wrap gap-4">
            {hero.actions.map((a) => (
              <Button key={a.label} href={a.href} variant={a.variant}>
                {a.label}
              </Button>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
