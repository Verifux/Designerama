import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { trust } from "@/lib/content/portfolio";

export function TrustStrip() {
  return (
    <RevealOnScroll className="border-b border-line">
      <div className="mx-auto max-w-container px-5 py-12 sm:px-8">
        <p className="eyebrow mb-5">{trust.label}</p>
        <div className="flex flex-wrap gap-x-10 gap-y-4">
          {trust.logos.map((logo) => (
            <span key={logo} className="text-base font-semibold text-ink">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
