import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { cta } from "@/lib/content/designerama";

export function Cta() {
  return (
    <section id="cta" className="border-t border-line">
      <div className="mx-auto max-w-container px-6 py-20 sm:px-8 sm:py-28">
        <RevealOnScroll y={16} duration={0.6}>
          <p className="eyebrow mb-5">{cta.eyebrow}</p>
          <h2 className="max-w-3xl text-[clamp(30px,5vw,56px)] leading-[1.04] tracking-[-0.01em]">
            {cta.heading} <span className="text-accent">{cta.headingAccent}</span>
          </h2>
          <div className="mt-9 flex w-fit border border-line">
            <a href={cta.action.href} className="btn btn--solid rounded-none">
              {cta.action.label}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
