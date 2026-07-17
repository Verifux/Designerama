"use client";

import Link from "next/link";
import { usePointerGlow } from "./usePointerGlow";
import { useMagnetic } from "./useMagnetic";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
  magnetic?: boolean;
  onClick?: () => void;
};

export function Button({ href, children, variant = "solid", className = "", magnetic = true, onClick }: Props) {
  const glow = usePointerGlow<HTMLAnchorElement>();
  const mag = useMagnetic<HTMLAnchorElement>(magnetic ? { strength: 0.35, max: 12 } : { strength: 0 });

  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = `${variant === "solid" ? "btn--solid" : "btn--ghost"} ${
    mag.active ? "transition-transform duration-300 ease-reveal" : ""
  } ${className}`;

  const onPointerMove = (e: React.PointerEvent) => {
    glow.onPointerMove(e);
    mag.onPointerMove(e);
  };

  const setRef = (el: HTMLAnchorElement | null) => {
    glow.ref.current = el;
    mag.ref.current = el;
  };

  if (isExternal) {
    return (
      <a
        ref={setRef}
        href={href}
        onPointerMove={onPointerMove}
        onPointerLeave={mag.onPointerLeave}
        onClick={onClick}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link ref={setRef} href={href} onPointerMove={onPointerMove} onPointerLeave={mag.onPointerLeave} onClick={onClick} className={classes}>
      {children}
    </Link>
  );
}
