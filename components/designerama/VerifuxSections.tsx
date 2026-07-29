import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { Accordion } from "@/components/shared/Accordion";
import { sections, pillars } from "@/lib/content/verifux";

function SectionHeader({ eyebrow, heading, body, padRight }: { eyebrow: string; heading: string; body: string; padRight: boolean }) {
  return (
    <RevealOnScroll y={16} duration={0.6} className={`max-w-2xl ${padRight ? "pr-16 sm:pr-20" : ""}`}>
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{heading}</h2>
      <p className="mt-4 text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">{body}</p>
    </RevealOnScroll>
  );
}

export function VerifuxSections() {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="border-b border-line">
          <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
            {section.showPillars ? (
              <Accordion
                defaultOpen={section.defaultOpen}
                label={`Toggle ${section.heading}`}
                header={<SectionHeader eyebrow={section.eyebrow} heading={section.heading} body={section.body} padRight />}
              >
                <RevealGroup amount={0.12} className="mt-8">
                  {pillars.map((p, pi) => (
                    <RevealItem key={p.num} y={16}>
                      <GradientHoverCard
                        radius={360}
                        className={`grad-hover-card grid grid-cols-[72px_1fr] items-baseline gap-5 border-t border-line py-[26px] sm:grid-cols-[100px_1fr_auto] sm:gap-7 ${
                          pi === pillars.length - 1 ? "border-b" : ""
                        }`}
                      >
                        <div className="font-display text-[clamp(32px,4.2vw,44px)] font-black leading-none tracking-[-0.01em] text-accent">
                          {p.num}
                        </div>
                        <h3 className="text-[clamp(24px,3.2vw,36px)] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                          {p.title}
                        </h3>
                        <p className="col-start-2 mt-3 max-w-[56ch] text-[16.5px] leading-[1.8] tracking-[0.01em] text-ink-dim sm:col-start-2">
                          {p.body}
                        </p>
                        <div className="col-start-2 mt-1.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.06em] text-ink-dim sm:col-start-3 sm:mt-0 sm:self-start">
                          {p.tag}
                        </div>
                      </GradientHoverCard>
                    </RevealItem>
                  ))}
                </RevealGroup>
              </Accordion>
            ) : (
              <SectionHeader eyebrow={section.eyebrow} heading={section.heading} body={section.body} padRight={false} />
            )}
          </div>
        </section>
      ))}
    </>
  );
}
