"use client";

import { useEffect, useState } from "react";

export function BgStripe() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    let target = 0;
    let current = 0;

    const onScroll = () => {
      target = window.scrollY * 0.08;
    };

    const tick = () => {
      current += (target - current) * 0.06;
      setOffset(current);
      raf = requestAnimationFrame(tick);
    };

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) {
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="bg-stripe-layer" aria-hidden="true">
      <div
        className="stripe-inner"
        style={{ transform: `rotate(-35deg) translateY(${-offset}px)` }}
      />
    </div>
  );
}
