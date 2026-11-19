"use client";

import Image from "next/image";
<<<<<<< Updated upstream
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight, MoveHorizontal } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";

/**
 * Panoramic drag viewer — honestly labelled. This is a wide photograph
 * you drag sideways, NOT a true 360° viewer: there is no 360° asset.
 * Photos are reused from the existing gallery/villa images only.
 * Prev/next buttons move the same view for keyboard and non-drag users.
 */
const rooms = [
  {
    id: "living",
    label: "Living",
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80",
    alt: "Spacious villa living area opening to a pool",
    caption: "Living spaces that open straight onto the terrace and pool.",
  },
  {
    id: "bedroom",
    label: "Bedroom",
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2400&q=80",
    alt: "Bright villa bedroom with a view of the water",
    caption: "Calm bedrooms with water views and room to unpack properly.",
  },
  {
    id: "pool",
    label: "Pool terrace",
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2400&q=80",
    alt: "Resort pool surrounded by palm trees",
    caption: "The terrace in the evening — pool, shade, and space for everyone.",
  },
] as const;

export default function InsideVillas() {
  const [roomIndex, setRoomIndex] = useState(0);
  const [overflow, setOverflow] = useState(400);
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const room = rooms[roomIndex];

  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      setOverflow(Math.max(0, track.offsetWidth - container.clientWidth));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [roomIndex]);

  useEffect(() => {
    x.set(0);
  }, [roomIndex, x]);

  function step(dir: 1 | -1) {
    // Next moves the view left (more negative); previous moves it right.
    const next = Math.min(0, Math.max(-overflow, x.get() - dir * 240));
    x.set(next);
  }

  return (
    <section id="inside" aria-labelledby="inside-heading" className="scroll-mt-24 bg-[#f5f3f0] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow number="03">Inside the villas</Eyebrow>
          <h2 id="inside-heading" className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c] sm:text-5xl">
            Step inside, room by room
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-[#5b6770]">
            A panoramic drag viewer — drag the wide photo sideways to look
            across each room. This is not a 360° tour; it is a wide photograph
            you can pan across, with buttons if you prefer not to drag.
          </p>
        </Reveal>

        <div role="tablist" aria-label="Choose a room to view" className="mt-8 flex flex-wrap gap-6 border-b border-black/10">
          {rooms.map((r, i) => {
            const active = i === roomIndex;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setRoomIndex(i)}
                className={`-mb-px border-b-2 px-1 pb-3 text-sm font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e5b3a] ${
                  active ? "border-[#2e5b3a] text-[#171a1c]" : "border-transparent text-[#5b6770] hover:text-[#171a1c]"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div
            ref={containerRef}
            className="relative overflow-hidden rounded-2xl shadow-none"
            aria-label={`Panoramic drag viewer: ${room.label}`}
          >
            <div className="relative aspect-[16/9] sm:aspect-[21/9]">
              <motion.div
                ref={trackRef}
                drag="x"
                style={{ x, width: "160%", height: "100%" }}
                dragConstraints={{ left: -overflow, right: 0 }}
                dragElastic={0.05}
                className="relative cursor-grab touch-pan-y active:cursor-grabbing"
              >
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="160vw"
                  className="object-cover"
                  draggable={false}
                />
              </motion.div>
            </div>
            <p className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-[#171a1c]/80 px-4 py-2 text-sm font-medium text-white">
              <MoveHorizontal className="h-4 w-4 text-[#8fbf9a]" aria-hidden="true" />
              Drag to pan · panoramic photo, not a 360° tour
            </p>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
              <p className="rounded-full bg-[#171a1c]/80 px-4 py-2 text-sm text-white">{room.caption}</p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Pan view left"
                  className="rounded-full bg-white/95 p-3 text-[#171a1c] shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Pan view right"
                  className="rounded-full bg-white/95 p-3 text-[#171a1c] shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
=======
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
>>>>>>> Stashed changes
      </div>
    </section>
  );
}
