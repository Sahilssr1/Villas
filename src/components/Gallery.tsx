"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/data/villas";
import Reveal, { Eyebrow, SkandicTag } from "./Reveal";

const categories = ["All", "Architecture", "Interiors", "Wellness", "Surroundings"] as const;

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [index, setIndex] = useState<number | null>(null);

  const displayedImages =
    activeCategory === "All"
      ? gallery
      : gallery.filter((item) => item.category === activeCategory);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setIndex((i) => (i === null ? i : (i + dir + displayedImages.length) % displayedImages.length)),
    [displayedImages.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, step]);

  return (
    <section id="gallery" className="scroll-mt-24 border-t border-[#1F382B]/10 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <Eyebrow number="04">Perspectives</Eyebrow>
                <SkandicTag code="PHOTO ARCHIVE">LIGHT &middot; TIMBER &middot; HORIZON</SkandicTag>
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-5xl">
                A visual journey through the archipelago
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setActiveCategory(cat);
                    setIndex(null);
                  }}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition ${
                    activeCategory === cat
                      ? "bg-[#1F382B] text-white shadow-xs"
                      : "border border-[#1F382B]/15 bg-white text-[#59635D] hover:border-[#1F382B]/40 hover:text-[#171B18]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-base text-[#59635D]">
            Tap any photograph to launch the full-screen architectural gallery. Use keyboard arrows
            or on-screen controls to navigate.
          </p>
        </Reveal>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {displayedImages.map((g, i) => (
            <Reveal
              key={g.src}
              delay={(i % 4) * 0.05}
              className={i === 0 || i === 5 ? "col-span-2 row-span-2" : ""}
            >
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl border border-[#1F382B]/15 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1F382B]"
                aria-label={`Open photo: ${g.title || g.alt}`}
              >
                <span
                  className={`relative block w-full overflow-hidden ${
                    i === 0 || i === 5 ? "aspect-square" : "aspect-[4/3]"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </span>

                {/* Overlay Badge */}
                <span className="absolute inset-0 flex flex-col justify-between bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="self-end rounded-full bg-white/20 p-2 text-white backdrop-blur-md">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-left text-white">
                    <span className="block font-mono text-[10px] uppercase tracking-wider text-[#8FA89B]">
                      {g.category}
                    </span>
                    <span className="font-display text-sm font-semibold">{g.title || g.alt}</span>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {index !== null && displayedImages[index] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo viewer: ${displayedImages[index].title || displayedImages[index].alt}`}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-[#15271E]/95 p-4 backdrop-blur-md"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close gallery"
            className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3.5 text-white transition hover:bg-white/25 sm:left-8"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>

          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <span className="relative block h-[70vh] w-[90vw] max-w-5xl overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={displayedImages[index].src}
                alt={displayedImages[index].alt}
                fill
                sizes="90vw"
                className="object-contain"
              />
            </span>
            <figcaption className="mt-4 flex items-center justify-between text-xs font-mono text-white/80">
              <span>{displayedImages[index].title || displayedImages[index].alt}</span>
              <span>
                PERSPECTIVE [{index + 1} / {displayedImages.length}]
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3.5 text-white transition hover:bg-white/25 sm:right-8"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
