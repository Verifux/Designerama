import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { workSection, workItems } from "@/lib/content/work";

export function WorkGrid() {
  const featured = workItems.filter((w) => w.featured);

  return (
    <section id="work" className="border-b border-line py-32">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">{workSection.eyebrow}</p>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)]">{workSection.heading}</h2>
        </RevealOnScroll>

        <RevealGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-card bg-line sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item) => {
            const href = item.caseStudy ? `/portfolio/${item.slug}` : item.href;
            const goto = item.caseStudy ? "View case study →" : item.href ? "About Verifux →" : undefined;

            return (
              <RevealItem key={item.slug}>
                <GradientHoverCard
                  href={href}
                  radius={360}
                  className={`grad-hover-card group block h-full bg-bg p-8 ${!href ? "opacity-60" : ""}`}
                >
                  <p className="font-mono text-[0.72rem] uppercase tracking-[0.08em] text-ink-dim">{item.tag}</p>
                  <h3 className="mt-3 text-[1.2rem] font-bold">{item.title}</h3>
                  <p className="mt-2 text-ink-muted">{item.summary}</p>
                  {goto && (
                    <span className="mt-5 inline-flex items-center font-mono text-[0.78rem] text-accent transition-transform group-hover:translate-x-1">
                      {goto}
                    </span>
                  )}
                </GradientHoverCard>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
