import { includedAmenities } from "@/data/skandic";

export default function Amenities() {
  return (
    <section id="amenities" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* 05—Before you pack */}
        <div className="max-w-3xl border-b border-black/10 pb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
            05—Before you pack
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-5xl">
            Everything you would have packed, already in a cupboard.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#5E655F] sm:text-base">
            Towels, robes, soap and slippers. A laundry room that works. A door that opens with a
            code, so nobody has to drive out to meet you with a key.
          </p>
        </div>

        {/* 06—Included in every stay */}
        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
                06—Included in every stay
              </p>
              <h2 className="mt-2 font-display text-2xl font-normal text-[#1E201E] sm:text-3xl">
                The useful things, already thought through.
              </h2>
            </div>
            <p className="text-xs text-[#5E655F]">
              The details that make a remote house easy: warmth, access, proper equipment.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {includedAmenities.map((item) => (
              <div
                key={item.number}
                className="flex flex-col border-t border-black/10 pt-4"
              >
                <span className="font-mono text-xs text-[#5E655F]">{item.number}</span>
                <h3 className="mt-2 text-sm font-medium text-[#1E201E]">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#5E655F]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

