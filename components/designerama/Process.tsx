import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { process } from "@/lib/content/designerama";

export function Process() {
  return (
    <section id="process" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll y={16} duration={0.6} className="mb-8 max-w-2xl">
          <p className="eyebrow mb-4">{process.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{process.heading}</h2>
        </RevealOnScroll>

        <RevealGroup className="grid grid-cols-1 border-t border-line sm:grid-cols-3" amount={0.12}>
          {process.steps.map((step, i) => (
            <RevealItem
              key={step.num}
              y={16}
              className={`border-line p-6 sm:p-8 ${i < process.steps.length - 1 ? "border-b sm:border-b-0 sm:border-r" : ""}`}
            >
              <div className="font-display text-[44px] font-black text-accent">{step.num}</div>
              <h3 className="mt-2 text-[19px] font-semibold uppercase">{step.title}</h3>
              <p className="mt-3 max-w-[280px] text-[13.5px] leading-[1.6] text-ink-dim">{step.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
