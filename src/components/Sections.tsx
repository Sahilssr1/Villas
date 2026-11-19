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
<<<<<<< Updated upstream
    <section aria-label="Why book with Villas" className="border-b border-black/10 bg-[#f5f3f0] py-10">
      <ul className="mx-auto grid max-w-7xl gap-6 px-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <li key={item} className="flex items-center justify-center gap-2 text-sm font-medium text-[#171a1c]">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#2e5b3a]" aria-hidden="true" />{item}
          </li>
        ))}
      </ul>
=======
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
>>>>>>> Stashed changes
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-[#FAF9F5] py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
<<<<<<< Updated upstream
          <Eyebrow number="01">Our story</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight leading-tight text-[#171a1c] sm:text-5xl">
            A holiday should feel like yours — because the house is.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#5b6770]">
            Villas started with a simple frustration: beautiful places that still
            felt shared. So we built a small collection of private houses where
            your group is the only group — with a local team that hands over the
            keys, shows you around, and then steps back.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[#5b6770]">
            Some villas sit on their own island, reached by boat. Others sit
            quietly on the coast, a walk from the beach. All of them are chosen
            for light, water, and room to be together.
          </p>
          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-black/10 pt-8">
            <div><dt className="text-sm text-[#5b6770]">Villas</dt><dd className="font-display text-3xl font-medium tracking-tight text-[#171a1c]">6</dd></div>
            <div><dt className="text-sm text-[#5b6770]">Guests hosted</dt><dd className="font-display text-3xl font-medium tracking-tight text-[#171a1c]">2,400+</dd></div>
            <div><dt className="text-sm text-[#5b6770]">Sample rating</dt><dd className="font-display text-3xl font-medium tracking-tight text-[#171a1c]">4.9 / 5</dd></div>
          </dl>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-2xl shadow-none">
            <span className="relative block aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80" alt="Villa living area opening onto a private pool" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </span>
=======
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
>>>>>>> Stashed changes
          </div>
        </Reveal>
      </div>
    </section>
  );
}

<<<<<<< Updated upstream
export const experiences = [
  { icon: Sailboat, title: "Boat days", text: "Island transfers, snorkelling trips and sunset sails, arranged by the local team." },
  { icon: ChefHat, title: "Private dining", text: "A chef at your villa, a barbecue on the terrace, or a table booked in town." },
  { icon: Sun, title: "Slow mornings", text: "Coffee on the terrace, a pool to yourself, and no schedule unless you want one." },
  { icon: Sparkles, title: "Celebrations", text: "Birthdays, reunions and small weddings in houses big enough to hold everyone." },
=======
const experiences = [
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
>>>>>>> Stashed changes
];

export function Experiences() {
  return (
<<<<<<< Updated upstream
    <section id="experiences" className="scroll-mt-24 bg-[#f5f3f0] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-none">
            <span className="relative block aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" alt="Clear water and white sand at a tropical beach" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </span>
=======
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
>>>>>>> Stashed changes
          </div>
        </Reveal>

        <Reveal className="order-1 lg:order-2">
<<<<<<< Updated upstream
          <Eyebrow number="05">Experiences</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c] sm:text-5xl">Relaxing or adventurous — your call</h2>
          <p className="mt-4 text-lg text-[#5b6770]">Every villa includes the house and its amenities. Everything else is optional, quoted in advance, and arranged locally.</p>
          <ul className="mt-8 space-y-6">
            {experiences.map((e) => (
              <li key={e.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[#2e5b3a] ring-1 ring-black/5"><e.icon className="h-6 w-6" aria-hidden="true" /></span>
                <span><span className="block font-semibold text-[#171a1c]">{e.title}</span><span className="text-[#5b6770]">{e.text}</span></span>
=======
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
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    <section aria-labelledby="compare-heading" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow number="06">Honest comparison</Eyebrow>
          <h2 id="compare-heading" className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c] sm:text-5xl">How a villa stay compares</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-none ring-1 ring-black/5">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-black/10">
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#5b6770]"></th>
                <th scope="col" className="px-6 py-4 font-display text-lg font-medium tracking-tight text-[#171a1c]">Villas</th>
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#5b6770]">A resort suite</th>
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#5b6770]">Other rentals</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-black/10 last:border-0">
                  <th scope="row" className="px-6 py-4 text-sm font-semibold text-[#171a1c]">{r.label}</th>
                  <td className="px-6 py-4 font-medium text-[#2e5b3a]">{r.villas}</td>
                  <td className="px-6 py-4 text-[#5b6770]">{r.resort}</td>
                  <td className="px-6 py-4 text-[#5b6770]">{r.other}</td>
=======
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
>>>>>>> Stashed changes
                </tr>
              ))}
            </tbody>
          </table>
<<<<<<< Updated upstream
        </Reveal>
        <p className="mt-4 flex items-center gap-2 text-sm text-[#5b6770]"><Waves className="h-4 w-4 text-[#2e5b3a]" aria-hidden="true" />Island villas are reached by a short boat ride; the transfer is part of the stay, not an extra to arrange.</p>
=======
        </div>
>>>>>>> Stashed changes
      </div>
    </section>
  );
}
