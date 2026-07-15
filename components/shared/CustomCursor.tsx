"use client";

import { motion } from "framer-motion";
import { useCursor } from "./CursorProvider";

export function CustomCursor() {
  const { x, y, variant, enabled } = useCursor();

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] rounded-full mix-blend-difference"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: "#fff",
      }}
      animate={{
        width: variant === "link" ? 56 : 18,
        height: variant === "link" ? 56 : 18,
      }}
      transition={{ type: "spring", damping: 26, stiffness: 340 }}
    />
  );
}
