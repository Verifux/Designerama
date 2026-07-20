"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/shared/Button";
import { hero } from "@/lib/content/portfolio";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, (v) => Math.min(v * 0.18, 140));
  const scale = useTransform(scrollY, (v) => 1 + Math.min(v * 0.00025, 0.06));

  return (
    <section className="relative flex min-h-[96vh] flex-col justify-center overflow-hidden border-b border-line pb-16 pt-36">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute bottom-[-4rem] right-[clamp(-6rem,0vw,0rem)] hidden w-[min(42vw,520px)] sm:block"
          aria-hidden="true"
          style={{
            background: "radial-gradient(closest-side, color-mix(in srgb, var(--accent) 14%, transparent), transparent 72%)",
            filter: "blur(40px)",
            transform: "scale(1.15)",
          }}
        />
        <motion.div
          className="absolute bottom-[-2rem] right-[clamp(-4rem,2vw,2rem)] hidden w-[min(38vw,460px)] sm:block"
          style={
            reduce
              ? undefined
              : {
                  y,
                  scale,
                  maskImage:
                    "radial-gradient(95% 78% at 74% 32%, black 40%, transparent 82%), linear-gradient(to bottom, black 55%, transparent 96%), linear-gradient(to left, black 58%, transparent 100%)",
                  WebkitMaskImage:
                    "radial-gradient(95% 78% at 74% 32%, black 40%, transparent 82%), linear-gradient(to bottom, black 55%, transparent 96%), linear-gradient(to left, black 58%, transparent 100%)",
                  maskComposite: "intersect",
                  WebkitMaskComposite: "source-in",
                }
          }
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -9, 0], scale: [1, 1.012, 1] }}
            transition={reduce ? undefined : { duration: 9, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src={withBasePath("/images/kishan-portrait.webp")}
              alt=""
              width={900}
              height={1574}
              className="w-full opacity-70 grayscale [mix-blend-mode:multiply] [filter:contrast(1.04)_saturate(0.9)]"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-dim">
          {hero.metaRow.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </RevealOnScroll>

        <RevealOnScroll y={34}>
          <h1 className="max-w-4xl text-[clamp(3rem,9.5vw,7.6rem)] font-extrabold leading-[0.96] tracking-[-0.035em]">
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
