import Image from "next/image";

export default function TheHouse() {
  return (
    <section id="house" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* 01—Introduction */}
        <div className="max-w-3xl">
          <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
            01—Introduction
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-5xl">
            A cabin above the fjord, where the road runs out.
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#5E655F] sm:text-base">
            We rebuilt it in 2019. Kept the frame, the stove and the low windows, replaced everything
            that had given up. It sleeps six without anyone being in the way, and we rent it out about
            twenty weeks a year, directly, to people who write to us first.
          </p>
        </div>

        {/* 02—As found */}
        <div className="mt-20">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-black/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
              02—As found (2026)
            </span>
            <span className="text-xs text-[#5E655F]">
              A glimpse of the quiet moments waiting here for you.
            </span>
          </div>

          <h3 className="mt-6 max-w-2xl font-display text-2xl font-normal text-[#1E201E] sm:text-3xl">
            Small details, familiar corners, and the view that changes throughout the day.
          </h3>

          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
                  alt="Timber living room with low windows framing mountains"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-xs text-[#5E655F]">
                Curved sofa and wooden coffee table beside a fireplace and forest-facing windows.
              </p>
            </div>

            <div className="flex flex-col justify-between gap-8 md:col-span-5">
              <div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
                    alt="Linen bed facing quiet coastal light"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <p className="mt-3 text-xs text-[#5E655F]">
                  Warm timber bedroom with floor-to-ceiling windows overlooking a mountain fjord.
                </p>
              </div>

              <div className="rounded-xl border border-black/10 p-6">
                <p className="font-display text-lg font-normal text-[#1E201E]">
                  &ldquo;Taken over one week in May, with long days and soft evening light. Nothing was
                  moved, and nothing was borrowed.&rdquo;
                </p>
                <p className="mt-3 text-xs text-[#5E655F]">
                  Marte &amp; Anders &middot; Hosts of Skandic
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
