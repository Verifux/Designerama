"use client";

import { useCallback, useRef } from "react";

type Options = {
  /** how strongly the element follows the pointer, 0 disables entirely */
  strength?: number;
  /** max pixel displacement in any direction */
  max?: number;
};

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Direct-DOM magnetic-pull effect (consistent with this codebase's existing
 * hand-rolled pointer-glow pattern — no motion-value/React-state indirection).
 * Consumers should add `transition-transform duration-300 ease-reveal` to
 * their className when `strength > 0` so the pointerleave reset animates.
 */
export function useMagnetic<T extends HTMLElement>({ strength = 0.35, max = 12 }: Options = {}) {
  const ref = useRef<T | null>(null);
  const active = strength > 0;

  const onPointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!active || e.pointerType !== "mouse" || reducedMotion()) return;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = e.clientX - (r.left + r.width / 2);
      const dy = e.clientY - (r.top + r.height / 2);
      const x = Math.max(-max, Math.min(max, dx * strength));
      const y = Math.max(-max, Math.min(max, dy * strength));
      el.style.transform = `translate(${x}px, ${y}px)`;
    },
    [active, strength, max]
  );

  const onPointerLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  return { ref, onPointerMove, onPointerLeave, active };
}
