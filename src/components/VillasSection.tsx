"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { BedDouble, Bath, Users, Ruler, Check } from "lucide-react";
import { villas, formatPrice, type VillaType } from "@/data/villas";
import Reveal, { Eyebrow } from "./Reveal";

const filters: ("All" | VillaType)[] = ["All", "Island", "Coastal", "Beachfront"];

export default function VillasSection() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown = useMemo(
    () => (filter === "All" ? villas : villas.filter((v) => v.type === filter)),
    [filter]
  );

  return (
    <section id="villas" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>The collection</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#0c2226] sm:text-5xl">Choose your villa</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Every stay is the whole house — never a room in a shared resort.
            Filter by setting, then enquire about the one that fits your group.
          </p>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter villas by type">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 ${
                filter === f ? "bg-[#0c2226] text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((villa, i) => (
            <motion.article
              key={villa.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group overflow-hidden rounded-3xl bg-white shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={villa.image}
                  alt={`${villa.name} in ${villa.location}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#0c2226]">
                  {villa.type} · {villa.location}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-[#0c2226]">{villa.name}</h3>
                <p className="mt-2 text-slate-600">{villa.tagline}</p>
                <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-600" aria-label="Villa details">
                  <li className="flex items-center gap-1.5"><Users className="h-4 w-4 text-teal-700" aria-hidden="true" />Up to {villa.guests} guests</li>
                  <li className="flex items-center gap-1.5"><BedDouble className="h-4 w-4 text-teal-700" aria-hidden="true" />{villa.bedrooms} bedrooms</li>
                  <li className="flex items-center gap-1.5"><Bath className="h-4 w-4 text-teal-700" aria-hidden="true" />{villa.bathrooms} bathrooms</li>
                  <li className="flex items-center gap-1.5"><Ruler className="h-4 w-4 text-teal-700" aria-hidden="true" />{villa.areaSqFt.toLocaleString()} sq ft</li>
                </ul>
                <ul className="mt-4 space-y-1.5">
                  {villa.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />{a}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-end justify-between border-t border-slate-200 pt-5">
                  <p>
                    <span className="font-display text-2xl font-semibold text-[#0c2226]">{formatPrice(villa.pricePerNight)}</span>
                    <span className="text-sm text-slate-500"> / night</span>
                    <span className="block text-sm text-slate-500">{formatPrice(villa.pricePerWeek)} / week</span>
                  </p>
                  <Link href="#enquiry" className="rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
                    Enquire
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        {shown.length === 0 && <p className="mt-10 text-slate-600">No villas match this filter yet.</p>}
      </div>
    </section>
  );
}
