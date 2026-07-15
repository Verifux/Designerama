import { footer } from "@/lib/content/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto flex max-w-container flex-wrap items-center justify-between gap-4 px-5 text-[0.84rem] text-ink-dim sm:px-8">
        <span>{footer.copyright}</span>
        <div className="flex gap-6">
          {footer.links.map((l) => {
            const external = l.href.startsWith("http");
            return (
              <a
                key={l.label}
                href={l.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
