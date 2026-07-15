"use client";

import Link from "next/link";
import { usePointerGlow } from "./usePointerGlow";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  radius?: number;
  ariaLabel?: string;
  style?: React.CSSProperties;
};

export function GradientHoverCard({ children, className = "", href, radius = 360, ariaLabel, style: userStyle }: Props) {
  const glow = usePointerGlow<HTMLAnchorElement | HTMLDivElement>();

  const style = { ...userStyle, "--grad-radius": `${radius}px` } as React.CSSProperties;

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a
          href={href}
          ref={glow.ref as React.Ref<HTMLAnchorElement>}
          className={className}
          style={style}
          onPointerMove={glow.onPointerMove}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        href={href}
        ref={glow.ref as React.Ref<HTMLAnchorElement>}
        className={className}
        style={style}
        onPointerMove={glow.onPointerMove}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <div ref={glow.ref as React.Ref<HTMLDivElement>} className={className} style={style} onPointerMove={glow.onPointerMove}>
      {children}
    </div>
  );
}
