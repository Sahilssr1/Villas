"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { faqs, testimonials } from "@/data/villas";
import Reveal, { Eyebrow, SkandicTag } from "./Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const step = (dir: 1 | -1) =>
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="scroll-mt-24 border-t border-[#1F382B]/10 bg-[#F4F2EC] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <div className="flex items-center justify-center gap-3">
            <Eyebrow number="GUEST NOTES">Guest Reflections</Eyebrow>
            <SkandicTag code="REVIEWS">VERIFIED STAYS</SkandicTag>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-5xl">
            Notes left in the timber guest book
          </h2>
          <p className="mt-3 text-xs font-mono text-[#59635D]">
            Illustrative sample guest feedback for this portfolio &middot; Real guest reviews configured prior to launch.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 overflow-hidden rounded-3xl border border-[#1F382B]/15 bg-white p-8 shadow-md sm:p-14">
          <div aria-live="polite">
            {/* Stars */}
            <div className="flex justify-center gap-1.5" aria-label="Rated 5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-[#C89446] text-[#C89446]" aria-hidden="true" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-6 font-display text-2xl font-medium leading-relaxed text-[#171B18] sm:text-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            {/* Author info */}
            <div className="mt-8 border-t border-[#1F382B]/10 pt-6">
              <p className="font-display text-lg font-semibold text-[#171B18]">{t.name}</p>
              <p className="mt-1 text-xs text-[#59635D]">
                <span className="font-semibold text-[#1F382B]">{t.villa}</span> &middot; Stayed {t.stay}
              </p>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous testimonial"
              className="rounded-full border border-[#1F382B]/20 bg-[#FAF9F5] p-3 text-[#1F382B] transition hover:bg-[#1F382B] hover:text-white focus-visible:outline-2 focus-visible:outline-[#1F382B]"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex gap-2" role="tablist" aria-label="Select guest reflection">
              {testimonials.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  role="tab"
                  aria-selected={index === i}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-[#1F382B] ${
                    index === i ? "w-8 bg-[#1F382B]" : "w-2 bg-[#1F382B]/20 hover:bg-[#1F382B]/40"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next testimonial"
              className="rounded-full border border-[#1F382B]/20 bg-[#FAF9F5] p-3 text-[#1F382B] transition hover:bg-[#1F382B] hover:text-white focus-visible:outline-2 focus-visible:outline-[#1F382B]"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-[#1F382B]/10 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-3">
            <Eyebrow number="07">Common Questions</Eyebrow>
            <SkandicTag code="ESSENTIALS">ARRIVAL &middot; SAUNA &middot; POLICIES</SkandicTag>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-[#59635D]">
            Everything you need to know about arrival, private boat transfers, sauna preparation, and
            group gatherings.
          </p>
        </Reveal>

        <div className="mt-12 space-y-3.5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question} delay={i * 0.03}>
                <div className="overflow-hidden rounded-2xl border border-[#1F382B]/15 bg-white transition hover:border-[#1F382B]/35">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-display text-base font-semibold text-[#171B18] transition hover:bg-[#FAF9F5] focus-visible:outline-2 focus-visible:outline-[#1F382B]"
                  >
                    <span className="flex items-center gap-3">
                      {f.category && (
                        <span className="hidden font-mono text-[10px] uppercase tracking-wider text-[#4E6B5A] sm:inline-block">
                          [{f.category}]
                        </span>
                      )}
                      <span>{f.question}</span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-[#1F382B] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-panel-${i}`}
                      className="border-t border-[#1F382B]/10 bg-[#FAF9F5] px-6 py-5 text-sm leading-relaxed text-[#59635D]"
                    >
                      {f.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
