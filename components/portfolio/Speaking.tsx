import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { speaking } from "@/lib/content/portfolio";

export function Speaking() {
  return (
    <section id="speaking" className="border-b border-line py-32">
      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealOnScroll className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">{speaking.eyebrow}</p>
          <h2 className="text-[clamp(1.9rem,3.4vw,2.7rem)]">{speaking.heading}</h2>
        </RevealOnScroll>

        <RevealGroup className="grid grid-cols-1 gap-8 md:grid-cols-2" amount={0.1}>
          {speaking.items.map((item) => (
            <RevealItem key={item.event} className="rounded-lg2 border border-line p-7 sm:p-9">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold">{item.event}</p>
                <p className="font-mono text-[0.76rem] text-ink-dim">{item.date}</p>
              </div>
              <h3 className="mt-3 text-[1.15rem] font-bold tracking-[-0.01em]">{item.title}</h3>
              <p className="mt-3 text-ink-muted">{item.body}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
