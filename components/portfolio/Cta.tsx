import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/shared/Button";
import { cta } from "@/lib/content/portfolio";

export function Cta() {
  return (
    <section id="contact" className="py-32 pb-36 text-center">
      <RevealOnScroll className="mx-auto max-w-container px-5 sm:px-8">
        <p className="eyebrow mb-5">{cta.eyebrow}</p>
        <h2 className="mx-auto max-w-3xl text-[clamp(2rem,4.4vw,3rem)]">{cta.heading}</h2>
        <p className="mt-5 text-ink-muted">{cta.body}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          {cta.actions.map((a) => (
            <Button key={a.label} href={a.href} variant={a.variant}>
              {a.label}
            </Button>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}
