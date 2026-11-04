"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { gallery } from "@/data/villas";
import Reveal, { Eyebrow } from "./Reveal";

export default function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + gallery.length) % gallery.length)),
    []
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
    <section id="gallery" className="scroll-mt-24 bg-[#f5efe4] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow number="04">Gallery</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-semibold text-[#1e1b18] sm:text-5xl">See it before you book it</h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">Tap any photo to open it full-size. Use the arrow keys or the on-screen buttons to move through the set.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {gallery.map((g, i) => (
            <Reveal key={g.src} delay={(i % 4) * 0.05} className={i === 0 || i === 5 ? "col-span-2 row-span-2" : ""}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block h-full w-full overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b08d57]"
                aria-label={`Open photo: ${g.alt}`}
              >
                <span className={`relative block w-full overflow-hidden ${i === 0 || i === 5 ? "aspect-square" : "aspect-[4/3]"}`}>
                  <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </span>
                <span className="absolute inset-0 flex items-end justify-end bg-black/0 p-3 transition group-hover:bg-black/20">
                  <Expand className="h-5 w-5 text-white opacity-0 transition group-hover:opacity-100" aria-hidden="true" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {index !== null && (
        <div role="dialog" aria-modal="true" aria-label={`Photo viewer: ${gallery[index].alt}`} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={close}>
          <button type="button" onClick={close} aria-label="Close gallery" className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white">
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6">
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <span className="relative block h-[70vh] w-[90vw] max-w-5xl overflow-hidden rounded-2xl">
              <Image src={gallery[index].src} alt={gallery[index].alt} fill sizes="90vw" className="object-contain" />
            </span>
            <figcaption className="mt-3 text-center text-sm text-white/90">{gallery[index].alt} — {index + 1} of {gallery.length}</figcaption>
          </figure>
          <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6">
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </section>
  );
}
