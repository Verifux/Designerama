import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { work } from "@/lib/content/portfolio";

export function WorkGrid() {
  return (
    <section id="work" className="border-b border-line py-32">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">{work.eyebrow}</p>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)]">{work.heading}</h2>
        </RevealOnScroll>

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2 lg:grid-cols-3">
          {work.cards.map((card) =>
            card.href ? (
              <RevealItem key={card.title}>
                <GradientHoverCard href={card.href} radius={360} className="grad-hover-card block h-full bg-bg p-8">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-dim">{card.tag}</p>
                  <h3 className="mt-3 text-[1.2rem] font-bold">{card.title}</h3>
                  <p className="mt-2 text-ink-muted">{card.body}</p>
                  {card.goto && (
                    <span className="mt-5 inline-flex items-center font-mono text-[0.78rem] text-accent transition-transform group-hover:translate-x-1">
                      {card.goto}
                    </span>
                  )}
                </GradientHoverCard>
              </RevealItem>
            ) : (
              <RevealItem key={card.title}>
                <GradientHoverCard radius={360} className="grad-hover-card block h-full bg-bg p-8">
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-dim">{card.tag}</p>
                  <h3 className="mt-3 text-[1.2rem] font-bold">{card.title}</h3>
                  <p className="mt-2 text-ink-muted">{card.body}</p>
                </GradientHoverCard>
              </RevealItem>
            )
          )}
        </RevealGroup>
      </div>
    </section>
  );
}
