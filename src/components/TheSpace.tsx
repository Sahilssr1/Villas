"use client";

import Image from "next/image";
import { useState } from "react";
import { spaces } from "@/data/skandic";

export default function TheSpace() {
  const [activeId, setActiveId] = useState(spaces[0].id);
  const currentSpace = spaces.find((s) => s.id === activeId) || spaces[0];

  return (
    <section id="space" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
            03—The space
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-5xl">
            A closer look inside, room by room.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5E655F]">
            Taken over one week in May, with long days and soft evening light. Nothing was moved, and
            nothing was borrowed.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="mt-10 flex flex-wrap gap-2 border-b border-black/10 pb-4">
          {spaces.map((space) => (
            <button
              key={space.id}
              type="button"
              onClick={() => setActiveId(space.id)}
              className={`rounded-full px-4 py-2 text-xs font-medium transition ${
                activeId === space.id
                  ? "bg-[#1E201E] text-white"
                  : "bg-black/5 text-[#5E655F] hover:bg-black/10 hover:text-[#1E201E]"
              }`}
            >
              {space.title}
            </button>
          ))}
        </div>

        {/* Space Visual & Description */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl lg:col-span-8">
            <Image
              src={currentSpace.image}
              alt={currentSpace.title}
              fill
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover"
            />
            {currentSpace.tag && (
              <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white backdrop-blur-md">
                {currentSpace.tag}
              </span>
            )}
          </div>

          <div className="flex flex-col justify-between p-2 lg:col-span-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#5E655F]">
                Details
              </span>
              <h3 className="mt-2 font-display text-2xl font-normal text-[#1E201E]">
                {currentSpace.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[#5E655F]">
                {currentSpace.description}
              </p>
            </div>
            <div className="mt-8 border-t border-black/10 pt-4 text-xs font-mono text-[#5E655F]">
              SKANDIC &middot; LOFOTEN ARCHIPELAGO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
