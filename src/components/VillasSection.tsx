"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, Bath, Users, Ruler, Check, ArrowRight } from "lucide-react";
import { villas, formatPrice, type Villa, type VillaType } from "@/data/villas";
import Reveal, { Eyebrow } from "./Reveal";

const tabs: ("All" | VillaType)[] = ["All", "Island", "Coastal", "Beachfront"];

function Spec({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <li className="flex items-center gap-1.5">
      <span className="text-[#b08d57]">{icon}</span>
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
    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl">
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
              className="pointer-events-none bg-[#faf7f1]"
            />
          );
        })}
      </div>
      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#1e1b18]">
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
    <section id="villas" className="scroll-mt-24 bg-[#faf7f1] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow number="02">The collection</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#1e1b18] sm:text-5xl">Choose your villa</h2>
          <p className="mt-4 max-w-2xl text-lg text-[#6f675e]">
            Every stay is the whole house — never a room in a shared resort.
            Pick a setting, then a villa, and watch its details unfold below.
          </p>
        </Reveal>

        {/* Proper tabs with an underline indicator. */}
        <div
          role="tablist"
          aria-label="Filter villas by type"
          onKeyDown={onTabKeyDown}
          className="mt-8 flex flex-wrap gap-6 border-b border-[#b08d57]/25"
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
                className={`-mb-px border-b-2 px-1 pb-3 text-sm font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57] ${
                  active ? "border-[#b08d57] text-[#1e1b18]" : "border-transparent text-[#6f675e] hover:text-[#1e1b18]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Price toggle, shared by the featured panel and the cards. */}
        <div className="mt-6 flex items-center gap-3" role="group" aria-label="Price period">
          <span className="text-sm font-semibold text-[#1e1b18]">Prices:</span>
          {(["nightly", "weekly"] as const).map((mode) => (
            <button
              key={mode}
              type="button"
              aria-pressed={priceMode === mode}
              onClick={() => setPriceMode(mode)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57] ${
                priceMode === mode ? "bg-[#1e1b18] text-white" : "bg-white text-[#6f675e] ring-1 ring-[#b08d57]/40 hover:text-[#1e1b18]"
              }`}
            >
              {mode === "nightly" ? "Nightly" : "Weekly"}
            </button>
          ))}
        </div>

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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b08d57]">
                Featured · {featured.type} · {featured.location}
              </p>
              <h3 className="mt-3 font-display text-4xl font-semibold text-[#1e1b18]">{featured.name}</h3>
              <p className="mt-3 text-lg leading-relaxed text-[#6f675e]">{featured.tagline}</p>
              <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#6f675e]" aria-label="Featured villa details">
                <Spec icon={<Users className="h-4 w-4" aria-hidden="true" />} label={`Up to ${featured.guests} guests`} />
                <Spec icon={<BedDouble className="h-4 w-4" aria-hidden="true" />} label={`${featured.bedrooms} bedrooms`} />
                <Spec icon={<Bath className="h-4 w-4" aria-hidden="true" />} label={`${featured.bathrooms} bathrooms`} />
                <Spec icon={<Ruler className="h-4 w-4" aria-hidden="true" />} label={`${featured.areaSqFt.toLocaleString()} sq ft`} />
              </ul>
              <ul className="mt-5 grid gap-1.5 sm:grid-cols-2">
                {featured.amenities.map((a) => (
                  <li key={a} className="flex items-center gap-2 text-sm text-[#1e1b18]">
                    <Check className="h-4 w-4 shrink-0 text-[#b08d57]" aria-hidden="true" />{a}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-[#b08d57]/25 pt-6">
                <p>
                  <span className="font-display text-3xl font-semibold text-[#1e1b18]">{price(featured).amount}</span>
                  <span className="text-sm text-[#6f675e]"> {price(featured).unit}</span>
                  <span className="block text-sm text-[#6f675e]">
                    {priceMode === "nightly"
                      ? `${formatPrice(featured.pricePerWeek)} / week`
                      : `${formatPrice(featured.pricePerNight)} / night`}
                  </span>
                </p>
                <Link href="#enquiry" className="lift inline-flex items-center gap-2 rounded-full bg-[#b08d57] px-6 py-3 text-sm font-semibold text-[#1e1b18] transition hover:bg-[#c9a06a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57]">
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
                className={`group cursor-pointer overflow-hidden rounded-3xl bg-white shadow-md ring-1 transition-shadow hover:shadow-xl ${
                  isFeatured ? "ring-2 ring-[#b08d57]" : "ring-[#b08d57]/20"
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
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#1e1b18]">
                    {villa.type} · {villa.location}
                  </span>
                  {isFeatured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-[#b08d57] px-3 py-1 text-xs font-semibold text-[#1e1b18]">
                      Featured
                    </span>
                  ) : null}
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-[#1e1b18]">{villa.name}</h3>
                  <p className="mt-2 text-[#6f675e]">{villa.tagline}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#6f675e]" aria-label="Villa details">
                    <Spec icon={<Users className="h-4 w-4" aria-hidden="true" />} label={`Up to ${villa.guests} guests`} />
                    <Spec icon={<BedDouble className="h-4 w-4" aria-hidden="true" />} label={`${villa.bedrooms} bedrooms`} />
                    <Spec icon={<Bath className="h-4 w-4" aria-hidden="true" />} label={`${villa.bathrooms} bathrooms`} />
                    <Spec icon={<Ruler className="h-4 w-4" aria-hidden="true" />} label={`${villa.areaSqFt.toLocaleString()} sq ft`} />
                  </ul>
                  <div className="mt-6 flex items-end justify-between border-t border-[#b08d57]/25 pt-5">
                    <p>
                      <span className="font-display text-2xl font-semibold text-[#1e1b18]">{price(villa).amount}</span>
                      <span className="text-sm text-[#6f675e]"> {price(villa).unit}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setFeaturedId(villa.id)}
                      className="flex items-center gap-1 text-sm font-semibold text-[#b08d57] hover:text-[#1e1b18] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57]"
                    >
                      View details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                    <Link href="#enquiry" className="inline-block rounded-full bg-[#1e1b18] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b08d57] hover:text-[#1e1b18] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57]">
                      Enquire
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        {shown.length === 0 && <p className="mt-10 text-[#6f675e]">No villas match this filter yet.</p>}
      </div>
    </section>
  );
}
