import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { cta } from "@/lib/content/verifux";

export function VerifuxCta() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-container px-6 py-20 sm:px-8 sm:py-28">
        <RevealOnScroll y={16} duration={0.6}>
          <p className="eyebrow mb-5">{cta.eyebrow}</p>
          <h2 className="max-w-3xl text-[clamp(28px,4.4vw,48px)] leading-[1.08] tracking-[-0.01em]">{cta.heading}</h2>
          <div className="mt-9 flex w-fit border border-line">
            <a href={cta.action.href} target="_blank" rel="noopener noreferrer" className="btn btn--solid rounded-none">
              {cta.action.label}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
