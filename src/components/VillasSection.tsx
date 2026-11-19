"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BedDouble,
  Bath,
  Users,
  Ruler,
  Check,
  ArrowRight,
} from "lucide-react";
import { villas, formatPrice, type VillaType } from "@/data/villas";
import Reveal, { Eyebrow, SkandicTag } from "./Reveal";

const filterOptions: ("All" | VillaType)[] = ["All", "Coastal", "Island", "Beachfront"];

export default function VillasSection() {
  const [filter, setFilter] = useState<(typeof filterOptions)[number]>("All");
  const [billing, setBilling] = useState<"nightly" | "weekly">("nightly");
  const [selectedVillaId, setSelectedVillaId] = useState<string>(villas[0].id);

  const filteredVillas = useMemo(() => {
    if (filter === "All") return villas;
    return villas.filter((v) => v.type === filter);
  }, [filter]);

  const featuredVilla = useMemo(
    () => villas.find((v) => v.id === selectedVillaId) || villas[0],
    [selectedVillaId]
  );

  return (
    <section id="villas" className="scroll-mt-24 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <Eyebrow number="02">The Residences</Eyebrow>
                <SkandicTag code="SANCTUARIES">AUTUMN / WINTER / SUMMER</SkandicTag>
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-5xl">
                Choose your private residence
              </h2>
            </div>

            {/* Nightly vs Weekly Pricing Toggle */}
            <div className="flex items-center rounded-full border border-[#1F382B]/15 bg-white p-1 text-xs shadow-xs">
              <button
                type="button"
                onClick={() => setBilling("nightly")}
                className={`rounded-full px-4 py-2 font-medium transition ${
                  billing === "nightly"
                    ? "bg-[#1F382B] text-white"
                    : "text-[#59635D] hover:text-[#171B18]"
                }`}
              >
                Nightly Rate
              </button>
              <button
                type="button"
                onClick={() => setBilling("weekly")}
                className={`flex items-center gap-1.5 rounded-full px-4 py-2 font-medium transition ${
                  billing === "weekly"
                    ? "bg-[#1F382B] text-white"
                    : "text-[#59635D] hover:text-[#171B18]"
                }`}
              >
                <span>7-Night Weekly</span>
                <span className="rounded-full bg-[#EAF0EB] px-1.5 py-0.5 text-[10px] font-semibold text-[#1F382B]">
                  Save ~15%
                </span>
              </button>
            </div>
          </div>

          <p className="mt-4 max-w-2xl text-base text-[#59635D]">
            Each stay grants exclusive whole-property access. Every residence includes private wood
            saunas, heated outdoor plunges or private docks, and dedicated island coordination.
          </p>
        </Reveal>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-2" role="group" aria-label="Filter villas by setting">
          {filterOptions.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4.5 py-2 text-xs font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-[#1F382B] ${
                filter === f
                  ? "border-[#1F382B] bg-[#1F382B] text-white shadow-xs"
                  : "border-[#1F382B]/15 bg-white text-[#59635D] hover:border-[#1F382B]/40 hover:text-[#171B18]"
              }`}
            >
              {f === "All" ? "All Residences (6)" : `${f} (${villas.filter((v) => v.type === f).length})`}
            </button>
          ))}
        </div>

        {/* Featured Villa Architectural Spotlight Panel */}
        {featuredVilla && (
          <Reveal delay={0.1} className="mt-10">
            <div className="overflow-hidden rounded-3xl border border-[#1F382B]/15 bg-white shadow-md">
              <div className="grid lg:grid-cols-12">
                <div className="relative min-h-[340px] lg:col-span-7">
                  <Image
                    src={featuredVilla.image}
                    alt={`${featuredVilla.name} in ${featuredVilla.location}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-[#171B18]/80 px-3 py-1 font-mono text-[11px] text-white backdrop-blur-md">
                      {featuredVilla.type.toUpperCase()} &middot; {featuredVilla.location}
                    </span>
                    {featuredVilla.coordinates && (
                      <span className="hidden rounded-full bg-white/90 px-3 py-1 font-mono text-[11px] text-[#1F382B] backdrop-blur-md sm:inline-block">
                        {featuredVilla.coordinates}
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3.5 py-1 text-xs font-semibold text-[#1F382B] backdrop-blur-md">
                    Featured Spotlight &middot; {featuredVilla.nordicName}
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#4E6B5A]">
                        [ ARCHITECTURAL PROFILE ]
                      </span>
                      <span className="text-xs font-medium text-[#59635D]">ID // {featuredVilla.id}</span>
                    </div>

                    <h3 className="mt-2 font-display text-2xl font-semibold text-[#171B18] sm:text-3xl">
                      {featuredVilla.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#59635D]">
                      {featuredVilla.description || featuredVilla.tagline}
                    </p>

                    {/* Specifications */}
                    <div className="mt-6 grid grid-cols-2 gap-3 border-y border-[#1F382B]/10 py-4 text-xs text-[#59635D]">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#1F382B]" aria-hidden="true" />
                        <span>Up to {featuredVilla.guests} guests</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BedDouble className="h-4 w-4 text-[#1F382B]" aria-hidden="true" />
                        <span>{featuredVilla.bedrooms} master suites</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bath className="h-4 w-4 text-[#1F382B]" aria-hidden="true" />
                        <span>{featuredVilla.bathrooms} stone baths</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Ruler className="h-4 w-4 text-[#1F382B]" aria-hidden="true" />
                        <span>{featuredVilla.areaSqFt.toLocaleString()} sq ft interior</span>
                      </div>
                    </div>

                    {/* Key Amenities */}
                    <ul className="mt-5 grid grid-cols-2 gap-2 text-xs text-[#171B18]">
                      {featuredVilla.amenities.slice(0, 4).map((amenity) => (
                        <li key={amenity} className="flex items-center gap-1.5">
                          <Check className="h-3.5 w-3.5 shrink-0 text-[#1F382B]" aria-hidden="true" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-[#1F382B]/10 pt-5">
                    <div>
                      <p className="font-display text-2xl font-semibold text-[#1F382B]">
                        {billing === "nightly"
                          ? formatPrice(featuredVilla.pricePerNight)
                          : formatPrice(featuredVilla.pricePerWeek)}
                      </p>
                      <p className="text-xs text-[#59635D]">
                        {billing === "nightly" ? "/ night (taxes & boat incl.)" : "/ 7-night week (save 15%)"}
                      </p>
                    </div>

                    <Link
                      href={`#enquiry`}
                      className="inline-flex items-center gap-2 rounded-full bg-[#1F382B] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white transition hover:bg-[#15271E]"
                    >
                      <span>Reserve This Stay</span>
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Villa Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredVillas.map((villa, idx) => {
              const isSelected = selectedVillaId === villa.id;
              const displayRate =
                billing === "nightly"
                  ? { amount: formatPrice(villa.pricePerNight), unit: "/ night" }
                  : { amount: formatPrice(villa.pricePerWeek), unit: "/ week" };

              return (
                <motion.article
                  key={villa.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.45, delay: idx * 0.05 }}
                  onClick={() => setSelectedVillaId(villa.id)}
                  className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border bg-white p-2.5 transition-all duration-300 hover:shadow-lg ${
                    isSelected
                      ? "border-[#1F382B] ring-2 ring-[#1F382B]/20"
                      : "border-[#1F382B]/15 hover:border-[#1F382B]/40"
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative h-60 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={villa.image}
                      alt={`${villa.name} in ${villa.location}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-3 top-3 flex items-center gap-1.5">
                      <span className="rounded-full bg-[#171B18]/75 px-3 py-1 font-mono text-[10px] text-white backdrop-blur-md">
                        {villa.type} &middot; {villa.location.split("·")[0]}
                      </span>
                    </div>

                    {isSelected && (
                      <span className="absolute right-3 top-3 rounded-full bg-[#1F382B] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                        Inspecting
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#4E6B5A]">
                          {villa.nordicName || "SCANDINAVIAN DESIGN"}
                        </span>
                        <span className="text-[11px] text-[#59635D]">{villa.guests} guests max</span>
                      </div>

                      <h3 className="mt-1 font-display text-xl font-semibold text-[#171B18]">
                        {villa.name}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#59635D]">
                        {villa.tagline}
                      </p>

                      {/* Specs */}
                      <ul className="mt-4 flex flex-wrap gap-x-3.5 gap-y-1.5 border-t border-[#1F382B]/10 pt-3 text-xs text-[#59635D]">
                        <li className="flex items-center gap-1">
                          <BedDouble className="h-3.5 w-3.5 text-[#1F382B]" aria-hidden="true" />
                          <span>{villa.bedrooms} beds</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Bath className="h-3.5 w-3.5 text-[#1F382B]" aria-hidden="true" />
                          <span>{villa.bathrooms} baths</span>
                        </li>
                        <li className="flex items-center gap-1">
                          <Ruler className="h-3.5 w-3.5 text-[#1F382B]" aria-hidden="true" />
                          <span>{villa.areaSqFt.toLocaleString()} sq ft</span>
                        </li>
                      </ul>
                    </div>

                    {/* Price and Action */}
                    <div className="mt-5 flex items-end justify-between border-t border-[#1F382B]/10 pt-4">
                      <div>
                        <span className="font-display text-xl font-semibold text-[#1F382B]">
                          {displayRate.amount}
                        </span>
                        <span className="text-xs text-[#59635D]"> {displayRate.unit}</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVillaId(villa.id);
                        }}
                        className="inline-flex items-center gap-1 rounded-full border border-[#1F382B]/20 bg-[#FAF9F5] px-3.5 py-1.5 text-xs font-semibold text-[#1F382B] transition hover:bg-[#1F382B] hover:text-white"
                      >
                        <span>Details</span>
                        <ArrowRight className="h-3 w-3" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
