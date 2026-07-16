import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { Accordion } from "@/components/shared/Accordion";
import { diagnose } from "@/lib/content/designerama";

export function CheckpointStrip() {
  return (
    <section id="diagnose" className="border-t border-line">
      <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <Accordion
          defaultOpen={false}
          header={
            <RevealOnScroll y={16} duration={0.6} className="mb-8 max-w-2xl pr-16 sm:pr-20">
              <p className="eyebrow mb-4">{diagnose.eyebrow}</p>
              <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{diagnose.heading}</h2>
              <p className="mt-4 text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">{diagnose.body}</p>
            </RevealOnScroll>
          }
        >
          <RevealGroup amount={0.12}>
            {diagnose.checkpoints.map((c, i) => (
              <RevealItem key={c.num} y={16}>
                <GradientHoverCard
                  radius={360}
                  className={`grad-hover-card grid grid-cols-[72px_1fr] items-baseline gap-5 border-t border-line py-[26px] sm:grid-cols-[100px_1fr_auto] sm:gap-7 ${
                    i === diagnose.checkpoints.length - 1 ? "border-b" : ""
                  }`}
                >
                  <div className="font-display text-[clamp(32px,4.2vw,44px)] font-black leading-none tracking-[-0.01em] text-accent">
                    {c.num}
                  </div>
                  <h3 className="text-[clamp(24px,3.2vw,36px)] font-bold uppercase leading-[1.1] tracking-[0.02em]">
                    {c.title}
                  </h3>
                  <p className="col-start-2 mt-3 max-w-[56ch] text-[16.5px] leading-[1.8] tracking-[0.01em] text-ink-dim sm:col-start-2">
                    {c.body}
                  </p>
                  <div className="col-start-2 mt-1.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.06em] text-ink-dim sm:col-start-3 sm:mt-0 sm:self-start">
                    {c.tag}
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
