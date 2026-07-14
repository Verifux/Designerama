"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  radius?: number;
  ariaLabel?: string;
};

export function GradientHoverCard({ children, className = "", href, radius = 360, ariaLabel }: Props) {
  const ref = useRef<HTMLAnchorElement | HTMLDivElement>(null);

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }, []);

  const style = { "--grad-radius": `${radius}px` } as React.CSSProperties;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={className}
        style={style}
        onPointerMove={onPointerMove}
        aria-label={ariaLabel}
      >
        {children}
      </Link>
    );
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={className}
      style={style}
      onPointerMove={onPointerMove}
    >
      {children}
    </div>
  );
}
