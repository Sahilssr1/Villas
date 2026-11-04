"use client";

import Image from "next/image";
import Link from "next/link";
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80";

/**
 * Original cursor-reveal hero: a muted, desaturated image sits underneath
 * and a full-colour, sharp copy is clipped to a circle that follows the
 * mouse (springs for smoothness). Fine pointers only; touch devices and
 * reduced-motion users always see the full-colour image.
 */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

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
    <section
      ref={ref}
      id="top"
      onMouseMove={onMouseMove}
      className="relative flex min-h-[92vh] items-end overflow-hidden bg-[#0f1e2a]"
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
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1e2a] via-[#0f1e2a]/35 to-[#0f1e2a]/25" aria-hidden="true" />

      <motion.div style={{ opacity }} className="relative mx-auto w-full max-w-7xl px-4 pb-20 pt-36 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-medium text-white/90">
          <MapPin className="h-4 w-4 text-[#e8a33d]" aria-hidden="true" />
          Private island &amp; coastal villas
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          <span className="font-light text-white/70">A whole villa, </span>
          <span className="font-bold">all yours.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          No neighbours, no shared pool, no lobby. Just your group, a private
          house by the water, and days that move at your pace.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link href="#villas" className="lift rounded-full bg-black px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0f1e2a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8a33d]">
            Explore the villas
          </Link>
          <Link href="#enquiry" className="lift rounded-full border border-white/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white hover:text-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            Check availability
          </Link>
          <span className="flex items-center gap-1.5 text-sm font-medium text-white">
            <Star className="h-4 w-4 fill-[#e8a33d] text-[#e8a33d]" aria-hidden="true" />
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
    </section>
  );
}
