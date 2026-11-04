"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Section label: a small dot marker, an optional number, and an
 * uppercase tracking label. On dark sections pass light so the label
 * stays readable against dusk.
 */
export function Eyebrow({
  children,
  number,
  light = false,
}: {
  children: ReactNode;
  number?: string;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-white/70" : "text-[#5b6770]"
      }`}
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#e8a33d]" />
      {number ? <span className="text-sm font-medium normal-case tracking-normal">{number}</span> : null}
      <span>{children}</span>
    </p>
  );
}
