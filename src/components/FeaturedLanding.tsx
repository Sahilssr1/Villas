"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  Star,
  X,
} from "lucide-react";
import { faqs, formatPrice, villas, type GalleryImage } from "@/data/villas";
import Reveal, { Eyebrow } from "./Reveal";

/* ------------------------------------------------------------------ */
/* Skandic design tokens (local to the featured landing page).         */
/* White + pale warm-grey, near-black text, forest-green accent.       */
/* ------------------------------------------------------------------ */

const GREEN = "#2e5b3a";
const INK = "#171a1c";
const GREY = "#5b6770";

/** Small-caps numbered section label, Skandic style: "01 — INTRODUCTION". */
export function SkandicEyebrow({
  number,
  children,
  light = false,
}: {
  number?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.3em] ${
        light ? "text-white/70" : "text-[#5b6770]"
      }`}
    >
      {number ? (
        <>
          <span style={{ color: light ? "#8fbf9a" : GREEN }}>{number}</span>
          <span aria-hidden="true" className="mx-2">
            —
          </span>
        </>
      ) : null}
      {children}
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Featured stay banner, shown on the home page only (the landing page */
/* never renders it). Light Skandic styling, matching the rest of the  */
/* home page after the 2026-11-19 restyle.                             */
/* ------------------------------------------------------------------ */

export function FeaturedStay() {
  const villa = villas.find((v) => v.id === "coral-island-house") ?? villas[0];
  return (
    <section aria-labelledby="featured-stay-heading" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid items-center gap-10 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 lg:grid-cols-2">
            <div className="relative block aspect-[16/10] w-full overflow-hidden lg:aspect-auto lg:h-full lg:min-h-[280px]">
              <Image
                src={villa.image}
                alt={`${villa.name} in ${villa.location}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-8 sm:p-10">
              <Eyebrow>Featured stay</Eyebrow>
              <h2 id="featured-stay-heading" className="mt-3 font-display text-3xl font-medium tracking-tight text-[#171a1c] sm:text-4xl">
                {villa.name}
              </h2>
              <p className="mt-3 text-lg text-[#5b6770]">{villa.tagline}</p>
              <p className="mt-4 text-sm font-semibold text-[#171a1c]">
                {villa.location} · {villa.type} · Up to {villa.guests} guests · {formatPrice(villa.pricePerNight)} / night
              </p>
              <Link
                href="/villas/coral-island-house"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                See the featured stay <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <p className="mt-3 text-xs text-[#5b6770]">A full landing page for one house — photos, rates, reviews and enquiry.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page-local sticky nav for the featured landing page.                */
/* White text over the hero, inverting to black on white once scrolled;*/
/* hamburger menu on small screens. The site-wide Header hides itself  */
/* on /villas/* routes so the two navs never double up.                */
/* ------------------------------------------------------------------ */

const navLinks = [
  { href: "#house", label: "The house" },
  { href: "#space", label: "The space" },
  { href: "#area", label: "The area" },
  { href: "#rates", label: "Rates" },
];

export function FeaturedNav({ name, location }: { name: string; location: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const inverted = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        inverted ? "border-b border-black/10 bg-white/90 text-[#171a1c] backdrop-blur-md" : "bg-transparent text-white"
      }`}
    >
      <nav aria-label="Featured stay navigation" className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="#top" className="leading-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current" aria-label="Back to top of this page">
          <span className="block text-lg font-medium tracking-tight">{name}</span>
          <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.28em] opacity-70">
            {location}
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-sm font-medium opacity-80 transition hover:opacity-100 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#enquiry"
            className={`hidden items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 sm:inline-flex ${
              inverted ? "bg-black text-white hover:bg-[#171a1c] focus-visible:outline-black" : "bg-white text-black hover:bg-white/85 focus-visible:outline-white"
            }`}
          >
            Enquire <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-full p-2.5 transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/10 bg-white px-4 pb-6 pt-2 text-[#171a1c] lg:hidden">
          <ul className="divide-y divide-black/10">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-lg font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Enquire <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero: full-screen looping video + crossfading chapter images.       */
/* Chapter 1 is the video; the rest are stills. Reduced-motion users   */
/* get the static poster and manual chapter tabs, no video, no         */
/* auto-advance. Crossfades are 600ms ease, as in the template.        */
/* ------------------------------------------------------------------ */

type HeroChapter =
  | { id: string; label: string; kind: "video" }
  | { id: string; label: string; kind: "image"; src: string; alt: string };

const HERO_VIDEO = "/skandic/hero.mp4";
const HERO_POSTER = "/skandic/hero-poster.png";

const heroChapters: HeroChapter[] = [
  { id: "cabin", label: "The Cabin", kind: "video" },
  {
    id: "bedroom",
    label: "The Bedroom",
    kind: "image",
    src: "/skandic/hero-bedroom.jpeg",
    alt: "Bedroom with floor-to-ceiling windows facing the water",
  },
  { id: "sky", label: "The Sky", kind: "image", src: "/skandic/hero-02.jpeg", alt: "View of the house and its setting" },
  { id: "isles", label: "The Isles", kind: "image", src: "/skandic/hero-03.png", alt: "View of the house and its setting" },
  { id: "quiet", label: "The Quiet", kind: "image", src: "/skandic/hero-04.png", alt: "View of the house and its setting" },
  { id: "light", label: "The Light", kind: "image", src: "/skandic/hero-05.png", alt: "View of the house and its setting" },
];

export function FeaturedHero({
  name,
  location,
  type,
  guests,
  tagline,
}: {
  name: string;
  location: string;
  type: string;
  guests: number;
  tagline: string;
}) {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setAnimate(!reduced);
  }, []);

  // Auto-advance chapters, resetting the timer on every manual change.
  useEffect(() => {
    if (!animate) return;
    const t = window.setTimeout(() => setIndex((i) => (i + 1) % heroChapters.length), 6000);
    return () => window.clearTimeout(t);
  }, [animate, index]);

  // Pause the video while an image chapter is showing.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (animate && heroChapters[index].kind === "video") {
      video.play().catch(() => undefined);
    } else {
      video.pause();
    }
  }, [animate, index]);

  const active = heroChapters[index];

  return (
    <section id="top" className="relative flex min-h-svh items-end overflow-hidden bg-black">
      {/* Base layer: poster still (also the reduced-motion fallback). */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image src={HERO_POSTER} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      {/* Video layer (chapter 1), only when motion is allowed. */}
      {animate && (
        <div
          className={`absolute inset-0 transition-opacity duration-[600ms] ease-in-out ${
            active.kind === "video" ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden="true"
        >
          <video
            ref={videoRef}
            src={HERO_VIDEO}
            poster={HERO_POSTER}
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      {/* Crossfading chapter images. */}
      <div className="absolute inset-0" aria-hidden="true">
        {heroChapters.map((c, i) =>
          c.kind === "image" ? (
            <Image
              key={c.id}
              src={c.src}
              alt=""
              fill
              priority={i === 1}
              sizes="100vw"
              className={`object-cover transition-opacity duration-[600ms] ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ) : null
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-40 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          {type} · {location} · Up to {guests} guests
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-6xl font-light leading-[1.02] tracking-tight text-white sm:text-7xl lg:text-8xl">
          {name}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">{tagline}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href="#enquiry"
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Check dates <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          <Link
            href="#rates"
            className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            See rates
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-6" role="tablist" aria-label="Choose hero chapter">
          {heroChapters.map((c, i) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={index === i}
              onClick={() => setIndex(i)}
              className={`pb-1 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white ${
                index === i ? "border-b-2 border-white text-white" : "border-b-2 border-transparent text-white/60 hover:text-white"
              }`}
            >
              <span className="mr-2 text-xs opacity-70">{String(i + 1).padStart(2, "0")}</span>
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Shared lightbox (Esc/arrows), used by the house grid.               */
/* ------------------------------------------------------------------ */

function Lightbox({
  images,
  index,
  onClose,
  onStep,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onStep(1);
      if (e.key === "ArrowLeft") onStep(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onStep]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo viewer: ${images[index].alt}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-white"
      >
        <span aria-hidden="true" className="block text-xl leading-none">
          ×
        </span>
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onStep(-1);
        }}
        aria-label="Previous photo"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:left-6"
      >
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      </button>
      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <span className="relative block h-[70vh] w-[90vw] max-w-5xl overflow-hidden rounded-2xl">
          <Image src={images[index].src} alt={images[index].alt} fill sizes="90vw" className="object-contain" />
        </span>
        <figcaption className="mt-3 text-center text-sm text-white/90">
          {images[index].alt} — {index + 1} of {images.length}
        </figcaption>
      </figure>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onStep(1);
        }}
        aria-label="Next photo"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 sm:right-6"
      >
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* "As Found": horizontal-scrolling strip of tall photos, running     */
/* past the viewport edges.                                            */
/* ------------------------------------------------------------------ */

export function FeaturedStrip({ images }: { images: GalleryImage[] }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const scrollStrip = (dir: 1 | -1) => {
    const el = stripRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.8, 720), behavior: "smooth" });
  };

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm" style={{ color: GREY }}>
          Scroll sideways to see the house as it is.
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => scrollStrip(-1)}
            aria-label="Scroll photos left"
            className="rounded-full border border-black/15 p-3 transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black"
            style={{ color: INK }}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollStrip(1)}
            aria-label="Scroll photos right"
            className="rounded-full border border-black/15 p-3 transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black"
            style={{ color: INK }}
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
      <div
        ref={stripRef}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:thin]"
        aria-label="As found photo strip"
      >
        {images.map((g) => (
          <figure
            key={g.src}
            className="group relative h-[360px] w-[72vw] shrink-0 snap-start overflow-hidden rounded-3xl sm:h-[440px] sm:w-[320px]"
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 640px) 72vw, 320px"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-5 pb-4 pt-10 text-sm font-medium text-white">
              {g.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* "The House": 8-photo clickable grid with lightbox.                  */
/* ------------------------------------------------------------------ */

export function FeaturedHouseGrid({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length]
  );

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {images.map((g, i) => (
          <button
            key={g.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Open photo: ${g.alt}`}
            className="group relative block aspect-[16/10] overflow-hidden rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-4 pb-3 pt-8 text-left text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {g.alt}
            </span>
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm" style={{ color: GREY }}>
        Tap any photo to open it full-screen — use the arrow keys to move between photos, Esc to close.
      </p>
      {index !== null && <Lightbox images={images} index={index} onClose={close} onStep={step} />}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* "Before You Pack": carousel with Previous/Next arrows.              */
/* ------------------------------------------------------------------ */

export function FeaturedCarousel({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);
  const step = (dir: 1 | -1) => setIndex((i) => (i + dir + images.length) % images.length);

  return (
    <div>
      <div className="relative overflow-hidden rounded-3xl bg-black">
        <div className="relative aspect-[16/9] sm:aspect-[16/7]" aria-live="polite">
          {images.map((g, i) => (
            <Image
              key={g.src}
              src={g.src}
              alt={i === index ? g.alt : ""}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className={`object-cover transition-opacity duration-[600ms] ease-in-out ${i === index ? "opacity-100" : "opacity-0"}`}
            />
          ))}
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-6 pb-5 pt-12 text-sm font-medium text-white">
            {images[index].alt}
          </span>
        </div>
        <button
          type="button"
          onClick={() => step(-1)}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-black shadow transition hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => step(1)}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-3 text-black shadow transition hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm font-medium" style={{ color: INK }}>
          <span style={{ color: GREEN }}>{String(index + 1).padStart(2, "0")}</span>
          <span style={{ color: GREY }}> / {String(images.length).padStart(2, "0")}</span>
        </p>
        <div className="flex gap-2" role="tablist" aria-label="Choose photo">
          {images.map((g, i) => (
            <button
              key={g.src}
              type="button"
              role="tab"
              aria-selected={index === i}
              aria-label={`Show photo ${i + 1}: ${g.alt}`}
              onClick={() => setIndex(i)}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-black ${
                index === i ? "w-8 bg-black" : "w-2.5 bg-black/20 hover:bg-black/40"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ accordion for the featured page (same data as the home page).   */
/* ------------------------------------------------------------------ */

export function FeaturedFaq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-black/10 border-y border-black/10">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`featured-faq-panel-${i}`}
              className="flex w-full items-center justify-between gap-4 py-6 text-left text-lg font-medium transition hover:text-black focus-visible:outline-2 focus-visible:outline-black"
              style={{ color: INK }}
            >
              {f.question}
              <ChevronDown
                className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                style={{ color: GREEN }}
                aria-hidden="true"
              />
            </button>
            {isOpen && (
              <div id={`featured-faq-panel-${i}`} className="pb-6 pr-8 leading-relaxed" style={{ color: GREY }}>
                {f.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Guest Book: sample testimonials in staggered cards. Re-exports the  */
/* star row so the page keeps its markup small.                        */
/* ------------------------------------------------------------------ */

export function StarRow() {
  return (
    <p className="flex gap-1" aria-label="Rated 5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, s) => (
        <Star key={s} className="h-4 w-4" style={{ color: GREEN, fill: GREEN }} aria-hidden="true" />
      ))}
    </p>
  );
}
