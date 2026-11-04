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
      <span className="text-[#0f1e2a]">{icon}</span>
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
              className="pointer-events-none bg-[#f7f8f7]"
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
    <section id="villas" className="scroll-mt-24 bg-[#f7f8f7] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
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
          className="mt-8 flex flex-wrap gap-6 border-b border-[#0f1e2a]/25"
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
                className={`-mb-px border-b-2 px-1 pb-3 text-sm font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a] ${
                  active ? "border-[#0f1e2a] text-[#171a1c]" : "border-transparent text-[#5b6770] hover:text-[#171a1c]"
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
            <button
              key={mode}
              type="button"
              aria-pressed={priceMode === mode}
              onClick={() => setPriceMode(mode)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a] ${
                priceMode === mode ? "bg-[#171a1c] text-white" : "bg-white text-[#5b6770] ring-1 ring-[#0f1e2a]/40 hover:text-[#171a1c]"
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0f1e2a]">
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
                    <Check className="h-4 w-4 shrink-0 text-[#0f1e2a]" aria-hidden="true" />{a}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap items-center gap-5 border-t border-[#0f1e2a]/25 pt-6">
                <p>
                  <span className="font-display text-3xl font-medium tracking-tight text-[#171a1c]">{price(featured).amount}</span>
                  <span className="text-sm text-[#5b6770]"> {price(featured).unit}</span>
                  <span className="block text-sm text-[#5b6770]">
                    {priceMode === "nightly"
                      ? `${formatPrice(featured.pricePerWeek)} / week`
                      : `${formatPrice(featured.pricePerNight)} / night`}
                  </span>
                </p>
                <Link href="#enquiry" className="lift inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0f1e2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a]">
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
                  isFeatured ? "ring-2 ring-[#0f1e2a]" : "ring-[#0f1e2a]/20"
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
                    <span className="absolute right-4 top-4 rounded-full bg-[#0f1e2a] px-3 py-1 text-xs font-semibold text-white">
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
                  <div className="mt-6 flex items-end justify-between border-t border-[#0f1e2a]/25 pt-5">
                    <p>
                      <span className="font-display text-2xl font-medium tracking-tight text-[#171a1c]">{price(villa).amount}</span>
                      <span className="text-sm text-[#5b6770]"> {price(villa).unit}</span>
                    </p>
                    <button
                      type="button"
                      onClick={() => setFeaturedId(villa.id)}
                      className="flex items-center gap-1 text-sm font-semibold text-[#0f1e2a] hover:text-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a]"
                    >
                      View details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                    <Link href="#enquiry" className="inline-block rounded-full bg-[#171a1c] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0f1e2a] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a]">
                      Enquire
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
        {shown.length === 0 && <p className="mt-10 text-[#5b6770]">No villas match this filter yet.</p>}
      </div>
    </section>
  );
}
