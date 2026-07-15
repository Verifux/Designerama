import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Accordion } from "@/components/shared/Accordion";
import { whyItMatters } from "@/lib/content/designerama";

export function WhyItMatters() {
  return (
    <section
      className="relative border-t border-line backdrop-blur-[2px]"
      style={{ background: "color-mix(in srgb, var(--paper) 68%, transparent)" }}
    >
      <div className="relative mx-auto max-w-container px-6 py-20 sm:px-8 sm:py-28">
        <Accordion
          defaultOpen={false}
          header={
            <RevealOnScroll y={16} duration={0.6} className="max-w-2xl pr-16 sm:pr-20">
              <p className="eyebrow mb-4 !text-accent">{whyItMatters.eyebrow}</p>
              <h2 className="text-[clamp(28px,4vw,48px)] font-bold leading-[1.08] tracking-[-0.01em]">
                {whyItMatters.heading}{" "}
                <span className="text-accent">{whyItMatters.headingAccent}</span>
              </h2>
            </RevealOnScroll>
          }
        >
          <p className="mt-6 max-w-xl text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">{whyItMatters.body}</p>
        </Accordion>
      </div>
    </section>
  );
}
