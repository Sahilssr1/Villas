"use client";

import Image from "next/image";
import Link from "next/link";
<<<<<<< Updated upstream
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, Bath, Users, Ruler, Check, ArrowRight } from "lucide-react";
import { villas, formatPrice, type Villa, type VillaType } from "@/data/villas";
import Reveal, { Eyebrow } from "./Reveal";

const tabs: ("All" | VillaType)[] = ["All", "Island", "Coastal", "Beachfront"];

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-1.5">
      <span className="text-[#2e5b3a]">{icon}</span>
      {label}
    </li>
  );
}

/**
 * Original 5x5 tile reveal: 25 cream tiles cover the featured photo and
 * fade/shrink away in a diagonal stagger, revealing the photo underneath.
 * Keyed by villa id so it replays on every featured-villa change. The
 * tiles are decorative (aria-hidden) and the photo itself keeps its alt.
 */
function TileRevealPhoto({ villa }: { villa: Villa }) {
  const tiles = Array.from({ length: 25 }, (_, i) => i);
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-none">
      <Image
        src={villa.image}
        alt={`${villa.name} in ${villa.location}`}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
      />
      <div key={villa.id} aria-hidden="true" className="absolute inset-0 grid grid-cols-5 grid-rows-5">
        {tiles.map((i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4, delay: (row + col) * 0.045, ease: "easeOut" }}
              className="pointer-events-none bg-[#f5f3f0]"
            />
          );
        })}
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#171a1c]">
        {villa.type} · {villa.location}
      </span>
    </div>
  );
}

export default function VillasSection() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All");
  const [featuredId, setFeaturedId] = useState(villas[0].id);
  const [priceMode, setPriceMode] = useState<"nightly" | "weekly">("nightly");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const shown = useMemo(
    () => (tab === "All" ? villas : villas.filter((v) => v.type === tab)),
    [tab]
=======
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
>>>>>>> Stashed changes
  );
  const featured = shown.find((v) => v.id === featuredId) ?? shown[0];

  function selectTab(next: (typeof tabs)[number]) {
    setTab(next);
    const nextList = next === "All" ? villas : villas.filter((v) => v.type === next);
    setFeaturedId(nextList[0]?.id ?? villas[0].id);
  }

  function onTabKeyDown(e: React.KeyboardEvent) {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const current = tabs.indexOf(tab);
    const next = (current + (e.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next]);
    tabRefs.current[next]?.focus();
  }

  function price(v: Villa) {
    return priceMode === "nightly"
      ? { amount: formatPrice(v.pricePerNight), unit: "/ night" }
      : { amount: formatPrice(v.pricePerWeek), unit: "/ week" };
  }

  return (
<<<<<<< Updated upstream
    <section id="villas" className="scroll-mt-24 bg-[#f5f3f0] py-20 sm:py-24">
=======
    <section id="villas" className="scroll-mt-24 bg-[#FAF9F5] py-20 sm:py-28">
>>>>>>> Stashed changes
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal>
<<<<<<< Updated upstream
          <Eyebrow number="02">The collection</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c] sm:text-5xl">Choose your villa</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#5b6770]">
            Every stay is the whole house — never a room in a shared resort.
            Pick a setting, then a villa, and watch its details unfold below.
          </p>
        </Reveal>

        {/* Proper tabs with an underline indicator. */}
        <div
          role="tablist"
          aria-label="Filter villas by type"
          onKeyDown={onTabKeyDown}
          className="mt-8 flex flex-wrap gap-6 border-b border-black/10"
        >
          {tabs.map((t, i) => {
            const active = tab === t;
            return (
              <button
                key={t}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => selectTab(t)}
                className={`-mb-px border-b-2 px-1 pb-3 text-sm font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e5b3a] ${
                  active ? "border-[#2e5b3a] text-[#171a1c]" : "border-transparent text-[#5b6770] hover:text-[#171a1c]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Price toggle, shared by the featured panel and the cards. */}
        <div className="mt-6 flex items-center gap-3" role="group" aria-label="Price period">
          <span className="text-sm font-semibold text-[#171a1c]">Prices:</span>
          {(["nightly", "weekly"] as const).map((mode) => (
=======
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
>>>>>>> Stashed changes
            <button
              key={mode}
              type="button"
<<<<<<< Updated upstream
              aria-pressed={priceMode === mode}
              onClick={() => setPriceMode(mode)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e5b3a] ${
                priceMode === mode ? "bg-[#171a1c] text-white" : "bg-white text-[#5b6770] ring-1 ring-black/15 hover:text-[#171a1c]"
              }`}
            >
              {mode === "nightly" ? "Nightly" : "Weekly"}
=======
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full border px-4.5 py-2 text-xs font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-[#1F382B] ${
                filter === f
                  ? "border-[#1F382B] bg-[#1F382B] text-white shadow-xs"
                  : "border-[#1F382B]/15 bg-white text-[#59635D] hover:border-[#1F382B]/40 hover:text-[#171B18]"
              }`}
            >
              {f === "All" ? "All Residences (6)" : `${f} (${villas.filter((v) => v.type === f).length})`}
>>>>>>> Stashed changes
            </button>
          ))}
        </div>

<<<<<<< Updated upstream
        {/* Featured-villa detail panel. */}
        {featured ? (
          <div aria-live="polite" className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <TileRevealPhoto villa={featured} />
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2e5b3a]">
                Featured · {featured.type} · {featured.location}
              </p>
              <h3 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c]">{featured.name}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[#5b6770]">{featured.tagline}</p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#5b6770]" aria-label="Featured villa details">
                <Spec icon={<Users className="h-4 w-4" aria-hidden="true" />} label={`Up to ${featured.guests} guests`} />
                <Spec icon={<BedDouble className="h-4 w-4" aria-hidden="true" />} label={`${featured.bedrooms} bedrooms`} />
                <Spec icon={<Bath className="h-4 w-4" aria-hidden="true" />} label={`${featured.bathrooms} bathrooms`} />
                <Spec icon={<Ruler className="h-4 w-4" aria-hidden="true" />} label={`${featured.areaSqFt.toLocaleString()} sq ft`} />
              </ul>
              <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                {featured.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-[#171a1c]">
                    <Check className="h-4 w-4 shrink-0 text-[#2e5b3a]" aria-hidden="true" />{a}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-black/10 pt-6">
                <p>
                  <span className="font-display text-3xl font-medium tracking-tight text-[#171a1c]">{price(featured).amount}</span>
                  <span className="text-sm text-[#5b6770]"> {price(featured).unit}</span>
                  <span className="block text-sm text-[#5b6770]">
                    {priceMode === "nightly"
                      ? `${formatPrice(featured.pricePerWeek)} / week`
                      : `${formatPrice(featured.pricePerNight)} / night`}
                  </span>
                </p>
                <Link href="#enquiry" className="lift inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                  Enquire about {featured.name} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </motion.div>
          </div>
        ) : null}

        {/* Cards: clicking a card selects it as the featured villa. */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((villa, i) => {
            const isFeatured = featured?.id === villa.id;
            return (
              <motion.article
                key={villa.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                onClick={() => setFeaturedId(villa.id)}
                className={`group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-none ring-1 transition-shadow hover:shadow-none ${
                  isFeatured ? "ring-2 ring-[#2e5b3a]" : "ring-black/10"
                }`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={villa.image}
                    alt={`${villa.name} in ${villa.location}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#171a1c]">
                    {villa.type} · {villa.location}
                  </span>
                  {isFeatured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-[#2e5b3a] px-3 py-1 text-xs font-semibold text-white">
                      Featured
                    </span>
                  ) : null}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-medium tracking-tight text-[#171a1c]">{villa.name}</h3>
                  <p className="mt-2 text-[#5b6770]">{villa.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#5b6770]" aria-label="Villa details">
                    <Spec icon={<Users className="h-4 w-4" aria-hidden="true" />} label={`Up to ${villa.guests} guests`} />
                    <Spec icon={<BedDouble className="h-4 w-4" aria-hidden="true" />} label={`${villa.bedrooms} bedrooms`} />
                    <Spec icon={<Bath className="h-4 w-4" aria-hidden="true" />} label={`${villa.bathrooms} bathrooms`} />
                    <Spec icon={<Ruler className="h-4 w-4" aria-hidden="true" />} label={`${villa.areaSqFt.toLocaleString()} sq ft`} />
                  </ul>
                  <div className="mt-6 flex items-end justify-between border-t border-black/10 pt-5">
                    <p>
                      <span className="font-display text-2xl font-medium tracking-tight text-[#171a1c]">{price(villa).amount}</span>
                      <span className="text-sm text-[#5b6770]"> {price(villa).unit}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setFeaturedId(villa.id)}
                      className="flex items-center gap-1 text-sm font-semibold text-[#2e5b3a] hover:text-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e5b3a]"
                    >
                      View details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                    <Link href="#enquiry" className="inline-block rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#171a1c] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                      Enquire
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        {shown.length === 0 && <p className="mt-10 text-[#5b6770]">No villas match this filter yet.</p>}
=======
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
>>>>>>> Stashed changes
      </div>
    </section>
  );
}
