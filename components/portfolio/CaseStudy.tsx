import Link from "next/link";
import Image from "next/image";
import { RevealOnScroll, RevealGroup, RevealItem } from "@/components/shared/RevealOnScroll";
import type { CaseStudyData } from "@/lib/content/work";
import { withBasePath } from "@/lib/basePath";

function FramePlaceholder({ caption }: { caption: string }) {
  return (
    <RevealOnScroll y={20}>
      <div
        className="flex aspect-video items-center justify-center rounded-card border border-line px-8 text-center"
        style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--accent) 6%, var(--paper)), var(--paper))" }}
      >
        <span className="font-mono text-[0.78rem] text-ink-dim">Placeholder · {caption}</span>
      </div>
    </RevealOnScroll>
  );
}

function ImageGallery({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <RevealGroup className="flex flex-wrap items-end justify-center gap-4" amount={0.1}>
      {images.map((img) => (
        <RevealItem key={img.src} y={20} className="overflow-hidden rounded-card border border-line bg-paper">
          <Image src={withBasePath(img.src)} alt={img.alt} width={540} height={1400} className="h-[420px] w-auto object-contain" />
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

function Media({ images, caption }: { images?: { src: string; alt: string }[]; caption: string }) {
  if (images && images.length > 0) return <ImageGallery images={images} />;
  return <FramePlaceholder caption={caption} />;
}

export function CaseStudy({ data, next }: { data: CaseStudyData; next?: { label: string; title: string; href: string } }) {
  return (
    <div className="pt-36">
      <section className="border-b border-line pb-10">
        <div className="mx-auto max-w-container px-5 sm:px-8">
          <RevealOnScroll className="eyebrow mb-5">{data.eyebrow}</RevealOnScroll>
          <RevealOnScroll y={20} delay={0.05}>
            <h1 className="max-w-3xl text-[clamp(2.2rem,5vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.02em]">
              {data.headline}
            </h1>
          </RevealOnScroll>
          <RevealOnScroll y={20} delay={0.1}>
            <p className="mt-6 max-w-2xl text-[1.05rem] text-ink-muted">{data.intro}</p>
          </RevealOnScroll>
        </div>
      </section>

      <div className="mx-auto max-w-container px-5 sm:px-8">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-6 border-b border-line py-9 sm:grid-cols-4">
          {data.meta.map((m) => (
            <RevealItem key={m.label}>
              <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-dim">{m.label}</p>
              <p className="mt-2 font-semibold">{m.value}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        <section className="max-w-2xl border-b border-line py-16">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">{data.situation.heading}</h2>
            <div className="mt-5 space-y-4 text-ink-muted">
              {data.situation.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        <div className="border-b border-line py-16">
          <Media images={data.situationImages} caption={data.situationFrameCaption} />
        </div>

        <section className="max-w-2xl border-b border-line py-16">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">{data.approach.heading}</h2>
            <div className="mt-5 space-y-4 text-ink-muted">
              {data.approach.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        <div className="border-b border-line py-16">
          <Media images={data.approachImages} caption={data.approachFrameCaption} />
        </div>

        <section className="max-w-2xl border-b border-line py-16">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)]">{data.outcome.heading}</h2>
            <div className="mt-5 space-y-4 text-ink-muted">
              {data.outcome.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </RevealOnScroll>
        </section>

        <RevealGroup className="grid grid-cols-1 gap-8 border-b border-line py-14 sm:grid-cols-3">
          {data.proof.map((p) => (
            <RevealItem key={p.label} className="text-center sm:text-left">
              <p className="text-[clamp(2rem,4vw,2.8rem)] font-extrabold text-accent">{p.num}</p>
              <p className="mt-1 text-[0.9rem] text-ink-muted">{p.label}</p>
            </RevealItem>
          ))}
        </RevealGroup>

        {next && (
          <RevealOnScroll className="py-20 text-center">
            <p className="eyebrow mb-3">{next.label}</p>
            <Link href={next.href} className="text-[1.6rem] font-bold tracking-[-0.02em] text-ink hover:text-accent">
              {next.title}
            </Link>
          </RevealOnScroll>
        )}
      </div>
    </div>
  );
}
