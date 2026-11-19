import Image from "next/image";
import { areaSpots } from "@/data/skandic";

export default function TheArea() {
  return (
    <section id="area" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
            07—What is around it
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-5xl">
            Two minutes to water, twelve to the harbour.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5E655F]">
            There is a printed map in the hall with our own routes marked on it, including the ones
            that are only worth doing in bad weather.
          </p>
        </div>

        {/* 4 Area Highlights Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areaSpots.map((spot) => (
            <div key={spot.title} className="group flex flex-col justify-between">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={spot.image}
                    alt={spot.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-[#5E655F]">
                  <span className="font-mono uppercase">{spot.category}</span>
                  <span>{spot.distance}</span>
                </div>
                <h3 className="mt-1 font-display text-lg font-normal text-[#1E201E]">
                  {spot.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#5E655F]">
                  {spot.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

