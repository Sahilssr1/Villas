"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin, Star } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#0c2226]">
      <motion.div style={{ y }} className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c2226] via-[#0c2226]/35 to-[#0c2226]/25" aria-hidden="true" />

      <motion.div style={{ opacity }} className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-medium text-white/90">
          <MapPin className="h-4 w-4 text-amber-300" aria-hidden="true" />
          Private island &amp; coastal villas
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
          A whole villa, <em className="text-amber-300">all yours.</em>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          No neighbours, no shared pool, no lobby. Just your group, a private
          house by the water, and days that move at your pace.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="#villas" className="rounded-full bg-amber-400 px-7 py-3.5 text-sm font-semibold text-[#0c2226] transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300">
            Explore the villas
          </Link>
          <Link href="#enquiry" className="rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#0c2226] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Check availability
          </Link>
          <span className="flex items-center gap-1.5 text-sm font-medium text-white">
            <Star className="h-4 w-4 fill-amber-300 text-amber-300" aria-hidden="true" />
            4.9 — sample guest rating
          </span>
        </div>
        <a href="#story" className="mt-12 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white" aria-label="Scroll to our story">
          Scroll to explore <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
