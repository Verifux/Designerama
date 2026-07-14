import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { arc } from "@/lib/content/portfolio";

export function Arc() {
  return (
    <section id="approach" className="border-b border-line py-32">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">{arc.eyebrow}</p>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)]">{arc.heading}</h2>
        </RevealOnScroll>

        <RevealGroup className="relative border-l-2 border-accent/30 pl-10" amount={0.1}>
          <div className="space-y-14">
            {arc.items.map((item) => (
              <RevealItem key={item.era} className="relative">
                <span className="absolute -left-[3.05rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg" />
                <p className="font-mono text-[0.78rem] text-accent">{item.era}</p>
                <h3 className="mt-2 text-[1.3rem] font-bold tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-2 max-w-2xl text-ink-muted">{item.body}</p>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
