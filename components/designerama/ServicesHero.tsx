import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { hero } from "@/lib/content/services";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden border-b border-line pb-16 pt-[150px] sm:pb-24 sm:pt-[180px]">
      <div className="relative z-10 mx-auto max-w-container px-6 sm:px-8">
        <p className="eyebrow mb-6">{hero.eyebrow}</p>
        <RevealOnScroll y={16} duration={0.6}>
          <h1 className="max-w-3xl text-[clamp(32px,5vw,56px)] font-bold leading-[1.05] tracking-[-0.01em]">{hero.heading}</h1>
        </RevealOnScroll>
        <RevealOnScroll y={16} duration={0.6} delay={0.05}>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">{hero.lede}</p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
