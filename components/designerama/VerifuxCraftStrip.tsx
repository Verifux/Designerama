import Image from "next/image";
import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { withBasePath } from "@/lib/basePath";
import { craftStrip } from "@/lib/content/verifux";

export function VerifuxCraftStrip() {
  return (
    <section className="border-b border-line">
      <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <RevealOnScroll y={16} duration={0.6} className="max-w-2xl">
          <p className="eyebrow mb-4">{craftStrip.eyebrow}</p>
          <h2 className="text-[clamp(26px,3.6vw,44px)] leading-[1.04] tracking-[-0.01em]">{craftStrip.heading}</h2>
          <p className="mt-4 text-[17px] leading-[1.8] tracking-[0.01em] text-ink-dim">{craftStrip.body}</p>
        </RevealOnScroll>
        <RevealGroup amount={0.12} className="mt-10 flex flex-wrap items-start justify-center gap-6 sm:mt-12 sm:gap-8">
          {craftStrip.images.map((img) => (
            <RevealItem key={img.src} y={20} className="flex flex-col items-center gap-3">
              <div className="overflow-hidden rounded-card border border-line bg-paper">
                <Image
                  src={withBasePath(img.src)}
                  alt={img.alt}
                  width={360}
                  height={360}
                  className="h-[280px] w-auto object-contain sm:h-[340px]"
                />
              </div>
              <span className="font-sans text-[0.72rem] uppercase tracking-[0.06em] text-ink-dim">{img.note}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
