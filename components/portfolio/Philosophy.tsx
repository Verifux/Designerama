import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { philosophy } from "@/lib/content/portfolio";

export function Philosophy() {
  return (
    <section className="border-b border-line py-36 text-center">
      <RevealOnScroll className="mx-auto max-w-container px-5 sm:px-8">
        <blockquote className="text-[clamp(1.7rem,3.6vw,2.6rem)] font-bold leading-tight">
          &ldquo;{philosophy.quote}&rdquo;
        </blockquote>
        <cite className="mt-5 block font-mono text-[0.82rem] not-italic text-ink-dim">{philosophy.cite}</cite>
      </RevealOnScroll>
    </section>
  );
}
