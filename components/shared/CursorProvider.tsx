"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useMotionValue, useSpring, useReducedMotion, type MotionValue } from "framer-motion";

type CursorVariant = "default" | "link";

type CursorContextValue = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
  enabled: boolean;
};

const CursorContext = createContext<CursorContextValue | null>(null);

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { damping: 28, stiffness: 320, mass: 0.4 });
  const y = useSpring(rawY, { damping: 28, stiffness: 320, mass: 0.4 });

  useEffect(() => {
    if (reduce) {
      setEnabled(false);
      return;
    }
    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (coarse) {
      setEnabled(false);
      return;
    }

    setEnabled(true);
    document.documentElement.dataset.customCursor = "true";

    const onMove = (e: PointerEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove);

    return () => {
      window.removeEventListener("pointermove", onMove);
      delete document.documentElement.dataset.customCursor;
    };
  }, [reduce, rawX, rawY]);

  return <CursorContext.Provider value={{ x, y, variant, setVariant, enabled }}>{children}</CursorContext.Provider>;
}

export function useCursor() {
  const ctx = useContext(CursorContext);
  if (!ctx) throw new Error("useCursor must be used within a CursorProvider");
  return ctx;
}
