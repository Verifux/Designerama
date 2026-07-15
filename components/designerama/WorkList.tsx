import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { Accordion } from "@/components/shared/Accordion";
import { work } from "@/lib/content/designerama";

export function WorkList() {
  return (
    <section id="work" className="border-t border-line">
      <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <Accordion
          defaultOpen
          header={
            <RevealOnScroll y={16} duration={0.6} className="mb-8 max-w-2xl pr-16 sm:pr-20">
              <p className="eyebrow mb-4">{work.eyebrow}</p>
              <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{work.heading}</h2>
            </RevealOnScroll>
          }
        >
          <RevealGroup amount={0.12}>
            {work.items.map((item, i) => (
              <RevealItem key={item.idx} y={16}>
                <GradientHoverCard
                  href={item.href}
                  radius={420}
                  className={`grad-hover-card group grid grid-cols-1 gap-4 border-t border-line py-[30px] sm:grid-cols-[120px_1fr] sm:gap-7 ${
                    i === work.items.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="font-display text-[32px] font-black text-line">{item.idx}</div>
                  <div>
                    <div className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-ink-dim">{item.tag}</div>
                    <h3 className="mt-2 text-[clamp(22px,2.8vw,32px)] font-bold uppercase">{item.title}</h3>
                    <p className="mt-2 max-w-2xl text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">{item.body}</p>
                    <span className="mt-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.06em] text-ink">
                      {item.goto}
                      <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </span>
                  </div>
                </GradientHoverCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </Accordion>
      </div>
    </section>
  );
}
