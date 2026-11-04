"use client";

import Image from "next/image";
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
    <section id="inside" aria-labelledby="inside-heading" className="scroll-mt-24 bg-[#eef1f2] py-20 sm:py-24">
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

        <div role="tablist" aria-label="Choose a room to view" className="mt-8 flex flex-wrap gap-6 border-b border-[#0f1e2a]/25">
          {rooms.map((r, i) => {
            const active = i === roomIndex;
            return (
              <button
                key={r.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setRoomIndex(i)}
                className={`-mb-px border-b-2 px-1 pb-3 text-sm font-semibold uppercase tracking-wider transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a] ${
                  active ? "border-[#0f1e2a] text-[#171a1c]" : "border-transparent text-[#5b6770] hover:text-[#171a1c]"
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
              <MoveHorizontal className="h-4 w-4 text-[#e8a33d]" aria-hidden="true" />
              Drag to pan · panoramic photo, not a 360° tour
            </p>
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
              <p className="rounded-full bg-[#171a1c]/80 px-4 py-2 text-sm text-white">{room.caption}</p>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Pan view left"
                  className="rounded-full bg-white/95 p-3 text-[#171a1c] shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a]"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Pan view right"
                  className="rounded-full bg-white/95 p-3 text-[#171a1c] shadow transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0f1e2a]"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
