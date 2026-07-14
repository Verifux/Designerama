import { RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { about } from "@/lib/content/designerama";

export function About() {
  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-container grid-cols-1 gap-8 px-6 py-16 sm:gap-14 sm:px-8 sm:py-24 lg:grid-cols-[220px_1fr]">
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
              <p className={`text-[15px] leading-[1.7] ${i === 0 ? "text-[16px] text-ink" : "text-ink-dim"}`}>{p}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
