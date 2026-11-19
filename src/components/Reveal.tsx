"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

<<<<<<< Updated upstream
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
=======
export function Eyebrow({
  children,
  number,
  className = "",
}: {
  children: ReactNode;
  number?: string;
  className?: string;
}) {
  return (
    <div className={`inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#1F382B] ${className}`}>
      {number ? (
        <span className="font-mono text-[10px] text-[#4E6B5A]">[{number}]</span>
      ) : (
        <span className="h-1.5 w-1.5 rounded-full bg-[#1F382B]" aria-hidden="true" />
      )}
      <span>{children}</span>
    </div>
  );
}

export function SkandicTag({
  children,
  code,
  className = "",
}: {
  children: ReactNode;
  code?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#1F382B]/15 bg-[#EAF0EB]/60 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-[#1F382B] ${className}`}
    >
      {code ? <span className="text-[#4E6B5A]">{code} {"//"}</span> : null}
      <span>{children}</span>
    </span>
>>>>>>> Stashed changes
  );
}
