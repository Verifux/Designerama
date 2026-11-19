import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { faq } from "@/lib/content/services";

export function ServicesFaq() {
  return (
    <section className="border-b border-line" aria-labelledby="services-faq-heading">
      <div className="mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll y={16} duration={0.6}>
          <p className="eyebrow mb-5">{faq.eyebrow}</p>
          <h2
            id="services-faq-heading"
            className="max-w-3xl text-[clamp(26px,3.6vw,40px)] leading-[1.1] tracking-[-0.01em]"
          >
            {faq.heading}
          </h2>
        </RevealOnScroll>
        <dl className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
          {faq.items.map((item) => (
            <div key={item.q} className="py-7">
              <dt className="text-[18px] font-semibold leading-[1.4] text-ink">{item.q}</dt>
              <dd className="mt-3 text-[16px] leading-[1.8] text-ink-dim">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
