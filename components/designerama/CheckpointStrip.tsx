import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { diagnose } from "@/lib/content/designerama";

export function CheckpointStrip() {
  return (
    <section id="diagnose" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll y={16} duration={0.6} className="mb-8 max-w-2xl">
          <p className="eyebrow mb-4">{diagnose.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{diagnose.heading}</h2>
          <p className="mt-4 text-[15px] leading-[1.7] text-ink-dim">{diagnose.body}</p>
        </RevealOnScroll>

        <RevealGroup amount={0.12}>
          {diagnose.checkpoints.map((c, i) => (
            <RevealItem key={c.num} y={16}>
              <GradientHoverCard
                radius={360}
                className={`grad-hover-card grid grid-cols-[32px_1fr] items-baseline gap-5 border-t border-line py-[18px] sm:grid-cols-[64px_1fr_auto] ${
                  i === diagnose.checkpoints.length - 1 ? "border-b" : ""
                }`}
              >
                <div className="font-mono text-[11px] text-accent">{c.num}</div>
                <h3 className="text-[19px] font-semibold uppercase tracking-normal">{c.title}</h3>
                <p className="col-start-2 mt-1 max-w-[56ch] text-[13.5px] leading-[1.6] text-ink-dim sm:col-start-2">
                  {c.body}
                </p>
                <div className="col-start-2 mt-0.5 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.06em] text-ink-dim sm:col-start-3 sm:mt-0 sm:self-start">
                  {c.tag}
                </div>
              </GradientHoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
