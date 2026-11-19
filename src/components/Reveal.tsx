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
 * Section label, Skandic style: "01 — INTRODUCTION" — a forest-green
 * number, an em-dash separator, and a wide-tracked small-caps label.
 * Mirrors SkandicEyebrow in FeaturedLanding.tsx. The light variant is
 * kept for dark backgrounds (light-green number on white/70 text).
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
      className={`text-xs font-semibold uppercase tracking-[0.3em] ${
        light ? "text-white/70" : "text-[#5b6770]"
      }`}
    >
      {number ? (
        <>
          <span style={{ color: light ? "#8fbf9a" : "#2e5b3a" }}>{number}</span>
          <span aria-hidden="true" className="mx-2">
            —
          </span>
        </>
      ) : null}
      {children}
    </p>
  );
}
