"use client";

import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { Button } from "@/components/shared/Button";
import { nav } from "@/lib/content/designerama";

const navLinkClasses =
  "font-mono text-[11px] uppercase tracking-[0.08em] text-[color-mix(in_srgb,var(--ink)_82%,transparent)] transition-colors hover:text-accent";

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-line bg-bg/80 px-6 py-4 backdrop-blur-md sm:px-8">
      <a href="#top" className="flex items-center gap-4" aria-label="Designerama home">
        <Logo height={45} priority />
      </a>

      <ul className="hidden items-center gap-8 md:flex">
        {nav.links.map((l) => {
          const external = l.href.startsWith("http");
          return (
            <li key={l.href}>
              <a
                href={l.href}
                className={navLinkClasses}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                {l.label}
              </a>
            </li>
          );
        })}
      </ul>

      <div className="flex items-center gap-5">
        <Link href={nav.portfolioLink.href} className={`hidden md:inline ${navLinkClasses}`}>
          {nav.portfolioLink.label}
        </Link>
        <Button href={nav.cta.href} variant="solid" className="hidden text-[11px] sm:inline-flex">
          {nav.cta.label}
        </Button>
      </div>
    </nav>
  );
}
