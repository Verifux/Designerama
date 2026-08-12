import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { withBasePath } from "@/lib/basePath";
import { trust } from "@/lib/content/portfolio";

export function TrustStrip() {
  return (
    <RevealOnScroll className="border-b border-line">
      <div className="mx-auto max-w-container px-5 py-12 sm:px-8">
        <p className="eyebrow mb-6">{trust.label}</p>
        <ul
          aria-label="Trusted by"
          className="flex flex-wrap items-center gap-x-10 gap-y-6"
        >
          {trust.logos.map((logo) => (
            <li key={logo.id}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(logo.file)}
                alt={logo.label}
                className="trust-logo"
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </RevealOnScroll>
  );
}
