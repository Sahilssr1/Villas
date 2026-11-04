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
 * Editorial section label: an optional number, a hairline rule, and an
 * uppercase tracking label. On dark sections pass light so the label
 * stays readable against ink.
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
      className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${
        light ? "text-[#c9a06a]" : "text-[#b08d57]"
      }`}
    >
      {number ? <span className="font-display text-base font-semibold normal-case tracking-normal">{number}</span> : null}
      <span aria-hidden="true" className="h-px w-10 bg-[#b08d57]/50" />
      <span>{children}</span>
    </p>
  );
}
