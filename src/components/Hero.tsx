"use client";

import Image from "next/image";
import Link from "next/link";
<<<<<<< Updated upstream
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, MapPin, Star } from "lucide-react";
=======
import { useEffect, useState } from "react";
import { skandicProperty } from "@/data/skandic";
>>>>>>> Stashed changes

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80";

/**
 * Original cursor-reveal hero: a muted, desaturated image sits underneath
 * and a full-colour, sharp copy is clipped to a circle that follows the
 * mouse (springs for smoothness). Fine pointers only; touch devices and
 * reduced-motion users always see the full-colour image.
 */
export default function Hero() {
  const headlines = [skandicProperty.heroHeadline, skandicProperty.heroSubheadline];
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % headlines.length);
        setVisible(true);
      }, 400);
    }, 5000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  const [spotlight, setSpotlight] = useState(false);
  const rawX = useMotionValue(-1000);
  const rawY = useMotionValue(-1000);
  const x = useSpring(rawX, { stiffness: 120, damping: 20, mass: 0.4 });
  const yPos = useSpring(rawY, { stiffness: 120, damping: 20, mass: 0.4 });
  const clipPath = useMotionTemplate`circle(200px at ${x}px ${yPos}px)`;

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setSpotlight(fine && !reduced);
  }, []);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    if (!spotlight || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    rawX.set(e.clientX - rect.left);
    rawY.set(e.clientY - rect.top);
  }

  return (
<<<<<<< Updated upstream
    <section
      ref={ref}
      id="top"
      onMouseMove={onMouseMove}
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-black"
    >
      <motion.div style={{ y }} className="absolute inset-0" aria-hidden="true">
        {spotlight ? (
          <>
            {/* Muted base layer. */}
            <Image
              src={HERO_IMAGE}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover saturate-[0.25] brightness-[0.8] contrast-[0.95]"
            />
            {/* Full-colour layer, revealed only inside the cursor circle. */}
            <motion.div style={{ clipPath }} className="absolute inset-0">
              <Image src={HERO_IMAGE} alt="" fill sizes="100vw" className="object-cover" />
            </motion.div>
          </>
        ) : (
          <Image src={HERO_IMAGE} alt="" fill priority sizes="100vw" className="object-cover" />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" aria-hidden="true" />

      <motion.div style={{ opacity }} className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-medium text-white/90">
          <MapPin className="h-4 w-4 text-[#8fbf9a]" aria-hidden="true" />
          Private island &amp; coastal villas
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="font-light text-white/70">A whole villa, </span>
          <span className="font-light">all yours.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          No neighbours, no shared pool, no lobby. Just your group, a private
          house by the water, and days that move at your pace.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="#villas" className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Explore the villas
          </Link>
          <Link href="#enquiry" className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Check availability
          </Link>
          <span className="flex items-center gap-1.5 text-sm font-medium text-white">
            <Star className="h-4 w-4 fill-[#8fbf9a] text-[#8fbf9a]" aria-hidden="true" />
            4.9 — sample guest rating
          </span>
        </div>
        {spotlight ? (
          <p className="mt-6 hidden text-sm text-white/70 md:block">
            Move your cursor over the photo to reveal it in full colour.
          </p>
        ) : null}
        <a href="#story" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white" aria-label="Scroll to our story">
          Scroll to explore <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
=======
    <section id="top" className="relative min-h-[92vh] w-full pt-28 pb-16 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top Headline & Intro Narrative */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1
              className={`font-display text-4xl font-normal leading-[1.12] tracking-tight text-[#1E201E] transition-opacity duration-500 sm:text-6xl lg:text-7xl ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {headlines[index]}
            </h1>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm leading-relaxed text-[#5E655F]">
              {skandicProperty.narrative}
            </p>
            <div className="mt-6">
              <Link
                href="#enquiry"
                className="inline-flex rounded-full bg-[#1E201E] px-6 py-2.5 text-xs font-medium text-white transition hover:bg-black"
              >
                Ask about dates
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Architectural Image */}
        <div className="mt-10 overflow-hidden rounded-2xl sm:mt-14">
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2400&q=85"
              alt="Skandic timber cabin on a rocky shore beneath mountains beside a still fjord"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* 4-Item Key Details Row */}
        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-black/10 pt-8 sm:grid-cols-4 sm:gap-8">
          {skandicProperty.stats.map((stat) => (
            <div key={stat.label}>
              <div className="flex items-baseline gap-2">
                <span className="text-xs uppercase tracking-wider text-[#5E655F]">
                  {stat.label}
                </span>
                <span className="font-display text-lg font-medium text-[#1E201E]">
                  {stat.value}
                </span>
              </div>
              <p className="mt-1 text-xs leading-relaxed text-[#5E655F]">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
>>>>>>> Stashed changes
    </section>
  );
}
