"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { skandicFaqs } from "@/data/skandic";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
              10—Questions
            </p>
            <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-4xl">
              The things you would otherwise have to ask.
            </h2>
            <p className="mt-3 text-xs leading-relaxed text-[#5E655F]">
              If it is not here, write to us. We answer the same day.
            </p>
          </div>

          <div className="divide-y divide-black/10 border-y border-black/10 lg:col-span-7">
            {skandicFaqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 text-left font-display text-base font-normal text-[#1E201E] transition hover:text-black"
                  >
                    <span>{faq.question}</span>
                    <span className="p-1 text-[#5E655F]">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="mt-3 text-xs leading-relaxed text-[#5E655F]">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

