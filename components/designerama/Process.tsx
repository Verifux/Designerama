import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { Accordion } from "@/components/shared/Accordion";
import { process } from "@/lib/content/designerama";

export function Process() {
  return (
    <section id="process" className="border-t border-line">
      <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <Accordion
          defaultOpen
          header={
            <RevealOnScroll y={16} duration={0.6} className="mb-8 max-w-2xl pr-16 sm:pr-20">
              <p className="eyebrow mb-4">{process.eyebrow}</p>
              <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{process.heading}</h2>
            </RevealOnScroll>
          }
        >
          <RevealGroup className="grid grid-cols-1 border-t border-line sm:grid-cols-3" amount={0.12}>
            {process.steps.map((step, i) => (
              <RevealItem
                key={step.num}
                y={16}
                className={`border-line p-6 sm:p-8 ${i < process.steps.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""}`}
              >
                <div className="font-display text-[44px] font-black text-accent">{step.num}</div>
                <h3 className="mt-3 text-[26px] font-bold uppercase leading-[1.1] tracking-[0.015em]">{step.title}</h3>
                <p className="mt-3 max-w-[280px] text-[16.5px] leading-[1.8] tracking-[0.01em] text-ink-dim">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Accordion>
      </div>
    </section>
  );
}
