"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const EASE = [0.16, 0.84, 0.24, 1] as const;

export function RevealOnScroll({
  children,
  className,
  style,
  y = 24,
  amount = 0.15,
  duration = 0.8,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
  amount?: number;
  duration?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      initial={reduce ? undefined : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: reduce ? 0.01 : duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const itemVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: EASE },
  },
});

export function RevealGroup({
  children,
  className,
  amount = 0.15,
}: {
  children: React.ReactNode;
  className?: string;
  amount?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={reduce ? undefined : groupVariants}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div className={className} variants={reduce ? undefined : itemVariants(y)}>
      {children}
    </motion.div>
  );
}
