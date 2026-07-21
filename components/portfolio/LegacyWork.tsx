import Image from "next/image";
import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { legacySection, legacyWork } from "@/lib/content/work";
import { withBasePath } from "@/lib/basePath";

export function LegacyWork() {
  return (
    <section className="border-b border-line py-24">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-10 max-w-2xl">
          <p className="eyebrow mb-4">{legacySection.eyebrow}</p>
          <h2 className="text-[clamp(1.4rem,2.6vw,2rem)]">{legacySection.heading}</h2>
          <p className="mt-3 text-ink-muted">{legacySection.body}</p>
        </RevealOnScroll>

        <RevealGroup className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {legacyWork.map((item) => (
            <RevealItem key={item.title}>
              <a
                href="https://www.designerama.co.za/visual"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-card border border-line"
              >
                <Image
                  src={withBasePath(item.image)}
                  alt={`${item.title}, ${item.client}`}
                  width={1110}
                  height={807}
                  className="aspect-[16/10] w-full scale-[1.08] object-cover object-center grayscale-[30%] transition-all duration-500 hover:scale-[1.12] hover:grayscale-0"
                />
              </a>
              <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-ink-dim">{item.tag}</p>
              <h3 className="mt-2 font-bold">{item.title}</h3>
              <p className="mt-1 text-[0.9rem] text-ink-muted">{item.summary}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
