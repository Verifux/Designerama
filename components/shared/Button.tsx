"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "solid", className = "" }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = `${variant === "solid" ? "btn--solid" : "btn--ghost"} ${className}`;

  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        onPointerMove={onPointerMove}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link ref={ref} href={href} onPointerMove={onPointerMove} className={classes}>
      {children}
    </Link>
  );
}
