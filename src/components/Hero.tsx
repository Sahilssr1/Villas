"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { skandicProperty } from "@/data/skandic";

/**
 * Skandic hero: rotating headline/subheadline with a full-colour
 * architectural image and a key-details row.
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

  return (
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
    </section>
  );
}
