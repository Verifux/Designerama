import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { about } from "@/lib/content/designerama";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll y={16} duration={0.6} className="mb-8 max-w-2xl">
          <p className="eyebrow mb-4">{about.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{about.heading}</h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 sm:gap-14 lg:grid-cols-[220px_1fr]">
          <RevealGroup className="space-y-8" amount={0.12}>
            {about.credentials.map((c) => (
              <RevealItem key={c.label} y={16}>
                <div className="font-display text-[34px] font-black text-accent">{c.stat}</div>
                <div className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.05em] text-ink-dim">{c.label}</div>
              </RevealItem>
            ))}
          </RevealGroup>

          <RevealGroup className="space-y-4" amount={0.12}>
            {about.copy.map((p, i) => (
              <RevealItem key={i} y={16}>
                <p className={`text-[17px] leading-[1.85] tracking-[0.01em] ${i === 0 ? "text-[18px] text-ink" : "text-ink-dim"}`}>{p}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
