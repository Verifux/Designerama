import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { method } from "@/lib/content/portfolio";

export function Method() {
  return (
    <section className="border-b border-line bg-paper py-32">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-14 max-w-2xl">
          <p className="eyebrow mb-4">{method.eyebrow}</p>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)]">{method.heading}</h2>
        </RevealOnScroll>

        <RevealGroup className="grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {method.steps.map((step) => (
            <RevealItem key={step.num}>
              <p className="font-mono text-[0.85rem] text-accent">{step.num}</p>
              <h3 className="mt-3 text-[1.2rem] font-bold">{step.title}</h3>
              <p className="mt-2 text-ink-muted">{step.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
