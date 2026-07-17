"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/shared/Logo";
import { nav } from "@/lib/content/portfolio";

export function Nav({ backLink }: { backLink?: { label: string; href: string } }) {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 sm:px-10">
        <div className="flex items-center gap-6">
          <Link href="/" aria-label="Designerama home" className="flex items-center">
            <Logo height={34} priority />
          </Link>
          {backLink && (
            <Link href={backLink.href} className="hidden font-mono text-[0.78rem] text-ink-dim transition-colors hover:text-accent sm:inline">
              {backLink.label}
            </Link>
          )}
        </div>

        <div className="hidden items-center gap-9 text-[0.88rem] text-ink-muted md:flex">
          {nav.links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <Link
            href={nav.designeramaLink.href}
            className="font-mono text-[0.78rem] text-ink-dim transition-colors hover:text-accent"
          >
            {nav.designeramaLink.label}
          </Link>
          <a href={nav.cta.href} className="btn--ghost text-[0.82rem]">
            {nav.cta.label}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25 }}
            className="block h-[1.5px] w-6 bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 0.2 }}
            className="block h-[1.5px] w-6 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25 }}
            className="block h-[1.5px] w-6 bg-ink"
          />
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduce ? { duration: 0 } : { duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5 sm:px-10">
              {nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 text-[0.95rem] text-ink-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              ))}
              {backLink && (
                <Link
                  href={backLink.href}
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-mono text-[0.82rem] text-ink-dim transition-colors hover:text-accent"
                >
                  {backLink.label}
                </Link>
              )}
              <Link
                href={nav.designeramaLink.href}
                onClick={() => setOpen(false)}
                className="py-2.5 font-mono text-[0.82rem] text-ink-dim transition-colors hover:text-accent"
              >
                {nav.designeramaLink.label}
              </Link>
              <a href={nav.cta.href} onClick={() => setOpen(false)} className="btn--ghost mt-2 justify-center text-[0.82rem]">
                {nav.cta.label}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
