import { RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import { GradientHoverCard } from "@/components/shared/GradientHoverCard";
import { Button } from "@/components/shared/Button";
import { tiers, listIntro } from "@/lib/content/services";

export function ServicesList() {
  return (
    <section className="border-b border-line">
      <div className="relative mx-auto max-w-container px-6 py-16 sm:px-8 sm:py-24">
        <p className="mb-10 max-w-xl text-[15px] leading-[1.7] text-ink-dim sm:mb-14">{listIntro}</p>

        <RevealGroup amount={0.12}>
          {tiers.map((tier, i) => (
            <RevealItem key={tier.slug} y={16}>
              <GradientHoverCard
                radius={420}
                className={`grad-hover-card grid grid-cols-1 gap-7 border-t border-line py-11 sm:grid-cols-[248px_1fr] sm:gap-16 sm:py-14 ${
                  i === tiers.length - 1 ? "border-b" : ""
                }`}
              >
                <div>
                  <div className="mb-3 font-sans text-[12px] tracking-[0.1em] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="text-[clamp(23px,2.6vw,31px)] font-bold uppercase leading-[1.14] tracking-[-0.005em]">
                    {tier.title}
                  </h2>
                  <p className="mt-4 max-w-[32ch] text-[14px] leading-[1.75] text-ink-dim">{tier.startingPoint}</p>
                  <p className="mt-3 max-w-[32ch] font-sans text-[0.8rem] leading-[1.6] text-ink-dim">
                    {tier.pricingHint ?? "Scoped in conversation"}
                  </p>
                </div>
                <div>
                  <p className="max-w-2xl text-[17px] leading-[1.85] tracking-[0.005em] text-ink-dim">{tier.forWho}</p>
                  <ul className="mt-6 max-w-2xl space-y-3.5">
                    {tier.whatYouGet.map((item) => (
                      <li key={item} className="flex gap-3.5 text-[16px] leading-[1.7] text-ink-dim">
                        <span aria-hidden="true" className="mt-[9px] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
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
