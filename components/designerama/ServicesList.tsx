import { RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { Button } from "@/components/shared/Button";
import { tiers } from "@/lib/content/services";

export function ServicesList() {
  return (
    <section className="border-b border-line">
      <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <RevealGroup amount={0.12}>
          {tiers.map((tier, i) => (
            <RevealItem key={tier.slug} y={16}>
              <GradientHoverCard
                radius={420}
                className={`grad-hover-card grid grid-cols-1 gap-6 border-t border-line py-[34px] sm:grid-cols-[220px_1fr] sm:gap-10 ${
                  i === tiers.length - 1 ? "border-b" : ""
                }`}
              >
                <div>
                  <h2 className="text-[clamp(22px,2.6vw,30px)] font-bold uppercase leading-[1.1]">{tier.title}</h2>
                  <p className="mt-3 max-w-[26ch] font-mono text-[11px] uppercase tracking-[0.06em] text-ink-dim">
                    {tier.startingPoint}
                  </p>
                </div>
                <div>
                  <p className="max-w-2xl text-[16.5px] leading-[1.8] tracking-[0.01em] text-ink-dim">{tier.forWho}</p>
                  <ul className="mt-5 max-w-2xl space-y-2.5">
                    {tier.whatYouGet.map((item) => (
                      <li key={item} className="flex gap-3 text-[15.5px] leading-[1.7] text-ink-dim">
                        <span aria-hidden="true" className="mt-[10px] h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href={tier.cta.href} variant="ghost" className="text-[11px]" magnetic={false}>
                      {tier.cta.label}
                    </Button>
                  </div>
                </div>
              </GradientHoverCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
