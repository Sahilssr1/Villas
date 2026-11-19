"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal, { Eyebrow, SkandicTag } from "./Reveal";

const rooms = [
  {
    id: "great-room",
    title: "The Great Room & Kitchen",
    subtitle: "Vaulted ceilings, natural birch joinery, and triple-glazed panoramic sea exposure.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=80",
    materials: [
      "Bleached Siberian larch acoustic ceiling slats",
      "Honed Gotland limestone radiant heated floors",
      "Danish minimalist induction cooking island",
      "Panoramic sliding glass wall opening to terrace",
    ],
    orientation: "South-West Horizon // 180° Water View",
  },
  {
    id: "sauna-pavilion",
    title: "Wood-Fired Sauna Pavilion",
    subtitle: "Detached cedar pavilion with panoramic glass window over the bathing pier.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1800&q=80",
    materials: [
      "Kiln-dried Finnish cedar bench seating",
      "Harvia wood-burning stove with olivine diabase stones",
      "Cold-water plunge tub & brass rainfall shower",
      "Aromatic organic birch & pine essential oils",
    ],
    orientation: "Waterfront Pier // Steps to Ocean Plunge",
  },
  {
    id: "master-suite",
    title: "The Master Horizon Suite",
    subtitle: "A silent retreat oriented toward sunrise mist and evening tides.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1800&q=80",
    materials: [
      "Handmade Swedish Hästens pocket-sprung mattress",
      "Organic washed Belgian linen sheets & down duvets",
      "En-suite limestone soaking tub overlooking the water",
      "Blackout acoustic timber louvre shutters",
    ],
    orientation: "East-Facing Sunrise // Silent Pine Glade",
  },
  {
    id: "granite-deck",
    title: "Granite Plunge & Stargazing Deck",
    subtitle: "Expansive heated terrace stepping directly into coastal nature.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1800&q=80",
    materials: [
      "Locally quarried granite pavers & weathered cedar decking",
      "Heated mineral plunge pool (38°C in winter / 12°C in summer)",
      "Recessed fire pit with reindeer hides & wool blankets",
      "Zero light pollution dark-sky stargazing zone",
    ],
    orientation: "Direct Shoreline // Unobstructed Open Sea",
  },
];

export default function InsideVillas() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const room = rooms[activeRoomIndex];

  return (
    <section className="border-t border-[#1F382B]/10 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <Eyebrow number="INTERIORS">Inside The Sanctuary</Eyebrow>
            <SkandicTag code="MATERIAL HONESTY">STONE &middot; WOOD &middot; LIGHT</SkandicTag>
          </div>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-5xl">
            Spaces designed to quiet the mind
          </h2>
          <p className="mt-4 max-w-2xl text-base text-[#59635D]">
            Explore the interior architecture of our residences. Every fixture, stone surface, and
            window orientation is calibrated for thermal comfort, acoustic peace, and light.
          </p>
        </Reveal>

        {/* Room Navigation Tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {rooms.map((r, idx) => (
            <button
              key={r.id}
              type="button"
              onClick={() => setActiveRoomIndex(idx)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition ${
                activeRoomIndex === idx
                  ? "bg-[#1F382B] text-white shadow-xs"
                  : "border border-[#1F382B]/15 bg-white text-[#59635D] hover:border-[#1F382B]/40 hover:text-[#171B18]"
              }`}
            >
              {r.title}
            </button>
          ))}
        </div>

        {/* Room Showcase Box */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-[#1F382B]/15 bg-white p-2 shadow-md">
          <AnimatePresence mode="wait">
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 lg:grid-cols-12"
            >
              {/* Large Image Frame */}
              <div className="relative min-h-[380px] overflow-hidden rounded-2xl lg:col-span-8">
                <Image
                  src={room.image}
                  alt={room.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-[#171B18]/80 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur-md">
                  {room.orientation}
                </div>
              </div>

              {/* Material Details and Notes */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#4E6B5A]">
                    [ ROOM SPECIFICATION ]
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-semibold text-[#171B18]">
                    {room.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#59635D]">
                    {room.subtitle}
                  </p>

                  <div className="mt-6 border-t border-[#1F382B]/10 pt-5">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1F382B]">
                      Curated Natural Materials
                    </h4>
                    <ul className="mt-3 space-y-2.5 text-xs text-[#59635D]">
                      {room.materials.map((m) => (
                        <li key={m} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F382B]" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t border-[#1F382B]/10 pt-4 text-xs font-mono text-[#59635D]">
                  SKANDIC INTERIOR ARCHITECTURE // STUDIO DESIGN
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
