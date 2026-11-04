"use client";

import { useState } from "react";
import { ChevronDown, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { faqs, testimonials } from "@/data/villas";
import Reveal, { Eyebrow } from "./Reveal";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#eef1f2] py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <Eyebrow number="07">Guest stories</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c] sm:text-5xl">Hear from past guests</h2>
          <p className="mt-3 text-sm text-[#5b6770]">Sample content for this demo site — replace with real, permissioned guest reviews before launch.</p>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 rounded-2xl bg-white p-8 shadow-none ring-1 ring-slate-200 sm:p-12">
          <div aria-live="polite">
            <Quote className="mx-auto h-10 w-10 text-[#0f1e2a]" aria-hidden="true" />
            <p className="mt-2 flex justify-center gap-1" aria-label="Rated 5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-[#0f1e2a] text-[#0f1e2a]" aria-hidden="true" />
              ))}
            </p>
            <blockquote className="mt-6 font-display text-2xl font-medium leading-snug text-[#171a1c] sm:text-3xl">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-6 font-semibold text-[#171a1c]">{t.name}</p>
            <p className="text-sm text-[#5b6770]">{t.title} · Stayed {t.stay}</p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-4">
            <button type="button" onClick={() => step(-1)} aria-label="Previous testimonial" className="rounded-full border border-slate-300 p-3 text-[#171a1c] transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#0f1e2a]">
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Choose testimonial">
              {testimonials.map((item, i) => (
                <button key={item.name} type="button" role="tab" aria-selected={index === i} aria-label={`Show testimonial from ${item.name}`} onClick={() => setIndex(i)} className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-[#0f1e2a] ${index === i ? "w-8 bg-[#0f1e2a]" : "w-2.5 bg-slate-300 hover:bg-slate-400"}`} />
              ))}
            </div>
            <button type="button" onClick={() => step(1)} aria-label="Next testimonial" className="rounded-full border border-slate-300 p-3 text-[#171a1c] transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-[#0f1e2a]">
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
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
    <section id="faq" className="scroll-mt-24 bg-[#f7f8f7] py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <Eyebrow number="08">Questions, answered</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c] sm:text-5xl">Before you book</h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.question} delay={i * 0.03}>
                <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left font-semibold text-[#171a1c] transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-[#0f1e2a]"
                  >
                    {f.question}
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                  {isOpen && (
                    <div id={`faq-panel-${i}`} className="border-t border-[#0f1e2a]/20 bg-slate-50 px-6 py-5 text-[#5b6770]">
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
