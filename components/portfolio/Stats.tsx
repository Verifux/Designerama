import { RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { stats } from "@/lib/content/portfolio";

export function Stats() {
  return (
    <section className="border-b border-line py-20">
      <RevealGroup className="mx-auto grid max-w-container grid-cols-2 gap-8 px-5 sm:px-8 lg:grid-cols-4">
        {stats.map((s) => (
          <RevealItem key={s.label}>
            <p className="text-[clamp(2.4rem,4.4vw,3.4rem)] font-extrabold text-accent">{s.num}</p>
            <p className="mt-1 text-[0.86rem] text-ink-muted">{s.label}</p>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
