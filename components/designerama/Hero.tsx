"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { hero } from "@/lib/content/designerama";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => v * 0.08);

  return (
    <section id="top" className="relative overflow-hidden border-b border-line pb-20 pt-[150px] sm:pb-28 sm:pt-[180px]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div className="absolute -right-[4%] -top-[5%] w-2/5" style={reduce ? undefined : { y }}>
          <Image
            src="/images/kishan-portrait-designerama.jpg"
            alt="Kishan Rama"
            width={900}
            height={1378}
            className="h-auto w-full object-cover opacity-[0.14] grayscale [filter:contrast(1.05)]"
            priority
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-container px-6 sm:px-8">
        <p className="eyebrow mb-6">{hero.eyebrow}</p>

        <RevealOnScroll y={16} duration={0.6}>
          <h1 className="max-w-3xl text-[clamp(38px,6vw,84px)] font-bold uppercase leading-[0.98] tracking-[-0.01em]">
            {hero.headline}
            <br />
            {hero.headlineLine2}
            <br />
            <span className="text-accent">{hero.headlineAccent}</span>
          </h1>
        </RevealOnScroll>

        <RevealOnScroll y={16} duration={0.6} delay={0.05}>
          <p className="mt-8 max-w-xl text-[15px] leading-[1.7] text-ink-dim">{hero.lede}</p>
        </RevealOnScroll>

        <RevealOnScroll y={16} duration={0.6} delay={0.1}>
          <div className="mt-9 flex w-fit border border-line">
            {hero.actions.map((a) =>
              a.variant === "solid" ? (
                <a key={a.label} href={a.href} className="btn btn--solid rounded-none">
                  {a.label}
                </a>
              ) : (
                <a key={a.label} href={a.href} className="btn border-l border-line text-ink">
                  {a.label}
                </a>
              )
            )}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
