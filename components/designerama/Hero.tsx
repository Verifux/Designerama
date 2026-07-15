import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/shared/Button";
import { hero } from "@/lib/content/designerama";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line pb-20 pt-[150px] sm:pb-28 sm:pt-[180px]">
      <div className="relative z-10 mx-auto max-w-container px-6 sm:px-8">
        <p className="eyebrow mb-6">{hero.eyebrow}</p>

        <RevealOnScroll y={16} duration={0.6}>
          <h1 className="max-w-3xl text-[clamp(38px,6vw,84px)] font-bold leading-[0.98] tracking-[-0.01em]">
            {hero.headline}
            <br />
            {hero.headlineLine2}
            <br />
            <span className="text-accent">{hero.headlineAccent}</span>
          </h1>
        </RevealOnScroll>

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
    </section>
  );
}
