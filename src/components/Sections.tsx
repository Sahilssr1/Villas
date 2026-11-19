import Image from "next/image";
import {
  Flame,
  Sailboat,
  ShieldCheck,
  Sparkles,
  TreePine,
  Check,
} from "lucide-react";
import Reveal, { Eyebrow, SkandicTag } from "./Reveal";

export function TrustStrip() {
  const items = [
    {
      icon: ShieldCheck,
      title: "100% Whole-House Privacy",
      subtitle: "Never a room in a resort. Your group holds the entire key.",
    },
    {
      icon: Flame,
      title: "Private Wood-Fired Sauna",
      subtitle: "Authentic Nordic sauna with unlimited birch logs & cold plunge.",
    },
    {
      icon: Sailboat,
      title: "Archipelago Boat Transfers",
      subtitle: "Private scheduled timber launch included for island stays.",
    },
    {
      icon: Sparkles,
      title: "Direct & Transparent Rates",
      subtitle: "All amenities, firewood, linens & boat trips clearly quoted.",
    },
  ];

  return (
    <section aria-label="Skandic Guarantees" className="border-b border-[#1F382B]/10 bg-[#FAF9F5] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3.5 rounded-2xl border border-[#1F382B]/10 bg-white p-5 shadow-xs transition hover:border-[#1F382B]/25"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF0EB] text-[#1F382B]">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#171B18]">{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#59635D]">{item.subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <Eyebrow number="01">The Philosophy</Eyebrow>
            <SkandicTag code="NORDIC ARCHITECTURE">FRILUFTSLIV &amp; LAGOM</SkandicTag>
          </div>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#171B18] sm:text-5xl">
            A sanctuary should feel like yours &mdash; because the landscape belongs to no one else.
          </h2>

          <p className="mt-6 text-base leading-relaxed text-[#59635D]">
            Skandic was born from a simple Scandinavian observation: the greatest luxury is not
            ostentation, but space, silence, and honest materials. We gathered a curated collection
            of modern architectural villas along the archipelago, crafted from Siberian larch,
            granite bedrock, and floor-to-ceiling glass.
          </p>

          <p className="mt-4 text-base leading-relaxed text-[#59635D]">
            Here, days follow the rhythm of the water and the sun. Wake to steaming coffee on the
            granite deck, heat the cedar wood sauna in the late afternoon, take a cold ocean plunge,
            and gather around a cast-iron hearth as twilight settles over the pines.
          </p>

          {/* Stats Grid */}
          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-[#1F382B]/10 pt-8">
            <div>
              <dt className="text-xs uppercase tracking-wider text-[#59635D]">Residences</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-[#1F382B]">6</dd>
              <p className="text-[11px] text-[#59635D]">Architect-designed</p>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[#59635D]">Guest Rating</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-[#1F382B]">4.98</dd>
              <p className="text-[11px] text-[#59635D]">Sample guest reviews</p>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-wider text-[#59635D]">Whole House</dt>
              <dd className="mt-1 font-display text-3xl font-semibold text-[#1F382B]">100%</dd>
              <p className="text-[11px] text-[#59635D]">Zero shared spaces</p>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative overflow-hidden rounded-3xl border border-[#1F382B]/15 bg-white p-2 shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80"
                alt="Minimalist Scandinavian interior opening to an outdoor granite terrace and water"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-[#171B18]/80 px-3.5 py-1 text-[11px] font-mono text-white backdrop-blur-md">
                ARCHIPELAGO ISLAND HOUSE // LIVING PAVILION
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// Exported: the Coral Island House landing page imports `experiences` for
// its "What Is Around It" cards (it reads icon/title/text only; the `tag`
// field is ignored there).
export const experiences = [
  {
    icon: Flame,
    title: "Wood-Fired Sauna & Cold Sea Immersion",
    text: "Experience authentic Nordic contrast therapy. Each villa features a dedicated cedar or birch sauna steps from a bathing pier or private plunge pool.",
    tag: "WELLNESS RITUAL",
  },
  {
    icon: Sailboat,
    title: "Private Archipelago Timber Launches",
    text: "Private scheduled boat transfers, island hopping through granite skerries, and secluded sunset cruises coordinated by your personal island host.",
    tag: "COASTAL SEAFARING",
  },
  {
    icon: TreePine,
    title: "Forest Trails & Wild Foraging",
    text: "Explore quiet pine paths, forage for wild lingonberries and chanterelles, or set out on our complimentary electric all-terrain bicycles.",
    tag: "OUTDOOR HARVEST",
  },
  {
    icon: Sparkles,
    title: "Private Nordic Chef Dinners",
    text: "Feast on smoked Baltic sea trout, juniper-glazed venison, fresh sourdough, and wild herb reductions prepared at your villa hearth.",
    tag: "GASTRONOMY",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-24 border-y border-[#1F382B]/10 bg-[#F4F2EC] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-3xl border border-[#1F382B]/15 bg-white p-2 shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80"
                alt="Wood-fired sauna deck and heated swimming pool overlooking coastal waters"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-[#171B18]/80 px-3.5 py-1 text-[11px] font-mono text-white backdrop-blur-md">
                SOLVIKEN SAUNA DECK // DUSK BATHING
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <Eyebrow number="03">Living Well</Eyebrow>
            <SkandicTag code="EXPERIENCES">REST &amp; RENEWAL</SkandicTag>
          </div>

          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-[#171B18] sm:text-5xl">
            Unrushed days. Restorative Nordic rituals.
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[#59635D]">
            Every Skandic booking grants total dominion over the property and its grounds.
            Additional experiences are tailored to your desires, quoted clearly in advance, and
            guided by local experts who respect your tranquility.
          </p>

          <ul className="mt-8 space-y-5">
            {experiences.map((e) => (
              <li
                key={e.title}
                className="group flex gap-4 rounded-2xl border border-[#1F382B]/10 bg-white p-4.5 transition hover:border-[#1F382B]/30 hover:shadow-xs"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF0EB] text-[#1F382B] transition group-hover:bg-[#1F382B] group-hover:text-white">
                  <e.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] font-semibold text-[#4E6B5A]">[{e.tag}]</span>
                  </div>
                  <h3 className="mt-0.5 text-base font-semibold text-[#171B18]">{e.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#59635D]">{e.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Comparison() {
  const features = [
    {
      feature: "Property Exclusivity",
      skandic: "100% private residence & entire grounds",
      resort: "Room or suite within shared hotel",
      rental: "Often shared house or adjoined duplex",
    },
    {
      feature: "Sauna & Cold Plunge",
      skandic: "Private wood-fired sauna & ocean dock",
      resort: "Shared spa with restricted hours",
      rental: "Rarely included or basic electric sauna",
    },
    {
      feature: "Archipelago Boat Transfer",
      skandic: "Private scheduled timber launch included",
      resort: "Extra fee on shared ferry",
      rental: "Guest must arrange own water taxi",
    },
    {
      feature: "Neighbour Proximity",
      skandic: "None &mdash; total seclusion & peace",
      resort: "Guests in adjacent corridors & pool",
      rental: "Neighbouring vacation homes nearby",
    },
    {
      feature: "Platform Service Fees",
      skandic: "$0 &mdash; Direct booking & transparent rates",
      resort: "Resort fees & room taxes added",
      rental: "15% - 20% third-party OTA fees",
    },
  ];

  return (
    <section className="bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <Eyebrow number="COMPARE">The Skandic Distinction</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-[#171B18] sm:text-4xl">
            Honest comparison: whole villa vs. resort vs. standard rentals
          </h2>
          <p className="mt-4 text-base text-[#59635D]">
            We believe in complete transparency. Here is how staying at a Skandic private residence
            differs from conventional luxury stays.
          </p>
        </Reveal>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[#1F382B]/15 text-xs uppercase tracking-wider text-[#59635D]">
                <th className="py-4 font-semibold text-[#171B18]">Standard of Living</th>
                <th className="bg-[#EAF0EB]/80 px-6 py-4 font-semibold text-[#1F382B]">
                  Skandic Private Villa
                </th>
                <th className="px-6 py-4 font-medium">Luxury Resort Suite</th>
                <th className="px-6 py-4 font-medium">Standard Vacation Rental</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1F382B]/10">
              {features.map((row) => (
                <tr key={row.feature} className="transition hover:bg-white/60">
                  <td className="py-4.5 font-semibold text-[#171B18]">{row.feature}</td>
                  <td className="bg-[#EAF0EB]/50 px-6 py-4.5 font-medium text-[#1F382B]">
                    <span className="flex items-center gap-2">
                      <Check className="h-4 w-4 shrink-0 text-[#1F382B]" aria-hidden="true" />
                      <span>{row.skandic}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4.5 text-[#59635D]">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#8FA89B]" aria-hidden="true" />
                      <span>{row.resort}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4.5 text-[#59635D]">
                    <span className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-300" aria-hidden="true" />
                      <span>{row.rental}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
