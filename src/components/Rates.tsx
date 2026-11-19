import Link from "next/link";
import { seasonalRatesList } from "@/data/skandic";

export default function Rates() {
  return (
    <section id="rates" className="scroll-mt-24 border-t border-black/10 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* 08—How booking works */}
        <div className="border-b border-black/10 pb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
            08—How booking works
          </p>
          <h2 className="mt-4 font-display text-3xl font-normal leading-tight text-[#1E201E] sm:text-4xl">
            Three steps, and no app to download.
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-xs text-[#5E655F]">Step 01</span>
              <h3 className="mt-2 text-sm font-medium text-[#1E201E]">Check the dates</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#5E655F]">
                Write to us with your dates and how many of you there are. We answer the same day and
                hold the dates for 48 hours while you decide.
              </p>
            </div>

            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-xs text-[#5E655F]">Step 02</span>
              <h3 className="mt-2 text-sm font-medium text-[#1E201E]">Confirm and pay</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#5E655F]">
                Half up front by bank transfer, the rest a fortnight before you travel. Cancel more
                than 30 days out and the deposit comes back in full; inside 14 days we keep it unless we
                can re-let the week.
              </p>
            </div>

            <div className="border-t border-black/10 pt-4">
              <span className="font-mono text-xs text-[#5E655F]">Step 03</span>
              <h3 className="mt-2 text-sm font-medium text-[#1E201E]">Arrive</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-[#5E655F]">
                The door code arrives the morning you travel. Firewood stacked, stove laid, nobody
                waiting in the drive.
              </p>
            </div>
          </div>
        </div>

        {/* 09—Rates */}
        <div className="mt-16">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-[#5E655F]">
                09—Rates
              </p>
              <h2 className="mt-2 font-display text-3xl font-normal text-[#1E201E]">
                One price, four seasons, and no cleaning fee.
              </h2>
            </div>
            <Link
              href="#enquiry"
              className="inline-flex rounded-full bg-[#1E201E] px-5 py-2 text-xs font-medium text-white transition hover:bg-black"
            >
              Ask about dates
            </Link>
          </div>

          <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
            {seasonalRatesList.map((rate) => (
              <div
                key={rate.season}
                className="grid gap-4 py-6 sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-3">
                  <h3 className="font-display text-xl font-normal text-[#1E201E]">
                    {rate.season}
                  </h3>
                  <p className="text-xs font-mono text-[#5E655F]">{rate.period}</p>
                </div>

                <div className="sm:col-span-6">
                  <p className="text-xs leading-relaxed text-[#5E655F]">{rate.description}</p>
                  <p className="mt-1 text-xs text-[#5E655F]">{rate.minStay}</p>
                </div>

                <div className="sm:col-span-3 sm:text-right">
                  <span className="font-display text-2xl font-normal text-[#1E201E]">
                    {rate.perNight}
                  </span>
                  <span className="text-xs text-[#5E655F]"> / night</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

