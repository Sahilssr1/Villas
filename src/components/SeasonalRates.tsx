"use client";

import Link from "next/link";
import { Check, Calendar, ArrowRight } from "lucide-react";
import { seasonalRates, formatPrice } from "@/data/villas";
import Reveal, { Eyebrow, SkandicTag } from "./Reveal";

export default function SeasonalRates() {
  return (
    <section id="rates" className="scroll-mt-24 border-t border-[#1F382B]/10 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <Eyebrow number="05">Seasonal Calendar</Eyebrow>
            <SkandicTag code="TRANSPARENCY">ALL-INCLUSIVE RESIDENCE RATES</SkandicTag>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-5xl">
            Seasonal rates &amp; availability
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#59635D]">
            Pricing is transparent, seasonal, and whole-house inclusive. There are never resort fees,
            check-out cleaning charges, or third-party booking commissions.
          </p>
        </Reveal>

        {/* Seasonal Cards Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {seasonalRates.map((season, idx) => (
            <Reveal
              key={season.season}
              delay={idx * 0.08}
              className="flex flex-col justify-between rounded-3xl border border-[#1F382B]/15 bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#1F382B]/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] font-semibold text-[#4E6B5A]">
                    {season.code}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[#EAF0EB] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[#1F382B]">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    <span>{season.minStayNights}n min</span>
                  </span>
                </div>

                <h3 className="mt-3 font-display text-xl font-semibold text-[#171B18]">
                  {season.season}
                </h3>
                <p className="mt-1 font-mono text-xs text-[#59635D]">{season.dates}</p>
                <p className="mt-3 text-xs leading-relaxed text-[#59635D]">{season.tagline}</p>

                {/* Rate Display */}
                <div className="mt-6 border-y border-[#1F382B]/10 py-4">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-semibold text-[#1F382B]">
                      {formatPrice(season.nightlyRate)}
                    </span>
                    <span className="text-xs text-[#59635D]">/ night</span>
                  </div>
                  <p className="mt-1 text-[11px] text-[#4E6B5A]">
                    or {formatPrice(season.weeklyRate)} / full 7-night week
                  </p>
                </div>

                {/* Seasonal Inclusions */}
                <div className="mt-5">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#1F382B]">
                    Included in this season:
                  </h4>
                  <ul className="mt-3 space-y-2 text-xs text-[#59635D]">
                    {season.inclusions.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1F382B]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 border-t border-[#1F382B]/10 pt-4">
                <Link
                  href="#enquiry"
                  className="flex w-full items-center justify-center gap-1.5 rounded-full border border-[#1F382B]/20 bg-[#FAF9F5] py-2.5 text-xs font-semibold text-[#1F382B] transition hover:bg-[#1F382B] hover:text-white"
                >
                  <span>Request {season.season.split(" ")[0]} Dates</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
