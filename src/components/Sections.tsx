import Image from "next/image";
import { ChefHat, Sailboat, ShieldCheck, Sparkles, Sun, Waves } from "lucide-react";
import Reveal, { Eyebrow } from "./Reveal";

export function TrustStrip() {
  const items = ["Private, whole-house stays", "Boat transfers for island villas", "Concierge on every booking", "Clear pricing, no platform fees"];
  return (
    <section aria-label="Why book with Villas" className="border-b border-white/10 bg-[#0f1e2a] py-10">
      <ul className="mx-auto grid max-w-7xl gap-6 px-4 text-center sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map((item) => (
          <li key={item} className="flex items-center justify-center gap-2 text-sm font-medium text-white/90">
            <ShieldCheck className="h-5 w-5 shrink-0 text-[#e8a33d]" aria-hidden="true" />{item}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Story() {
  return (
    <section id="story" className="scroll-mt-24 bg-[#f7f8f7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
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
          <dl className="mt-8 grid grid-cols-3 gap-6 border-t border-[#0f1e2a]/25 pt-8">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const experiences = [
  { icon: Sailboat, title: "Boat days", text: "Island transfers, snorkelling trips and sunset sails, arranged by the local team." },
  { icon: ChefHat, title: "Private dining", text: "A chef at your villa, a barbecue on the terrace, or a table booked in town." },
  { icon: Sun, title: "Slow mornings", text: "Coffee on the terrace, a pool to yourself, and no schedule unless you want one." },
  { icon: Sparkles, title: "Celebrations", text: "Birthdays, reunions and small weddings in houses big enough to hold everyone." },
];

export function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-24 bg-[#f7f8f7] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-2xl shadow-none">
            <span className="relative block aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80" alt="Clear water and white sand at a tropical beach" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </span>
          </div>
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <Eyebrow number="05">Experiences</Eyebrow>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-[#171a1c] sm:text-5xl">Relaxing or adventurous — your call</h2>
          <p className="mt-4 text-lg text-[#5b6770]">Every villa includes the house and its amenities. Everything else is optional, quoted in advance, and arranged locally.</p>
          <ul className="mt-8 space-y-6">
            {experiences.map((e) => (
              <li key={e.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f3ede2] text-[#0f1e2a]"><e.icon className="h-6 w-6" aria-hidden="true" /></span>
                <span><span className="block font-semibold text-[#171a1c]">{e.title}</span><span className="text-[#5b6770]">{e.text}</span></span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Comparison() {
  const rows = [
    { label: "What you rent", villas: "The entire villa, exclusively", resort: "A room or suite", other: "Usually a shared house" },
    { label: "Neighbours", villas: "None — your group only", resort: "Other guests throughout", other: "Often next door" },
    { label: "Pool", villas: "Private, yours alone", resort: "Shared", other: "Sometimes shared" },
    { label: "Boat transfer", villas: "Included for island villas", resort: "Not included", other: "Rarely included" },
    { label: "Booking", villas: "Direct, no platform fees", resort: "Through the resort", other: "Platform-dependent" },
  ];
  return (
    <section aria-labelledby="compare-heading" className="bg-[#0f1e2a] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow number="06" light>Honest comparison</Eyebrow>
          <h2 id="compare-heading" className="mt-3 font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">How a villa stay compares</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-10 overflow-x-auto rounded-2xl bg-white shadow-none ring-1 ring-slate-200">
          <table className="w-full min-w-[640px] text-left">
            <thead>
              <tr className="border-b border-[#0f1e2a]/25">
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#5b6770]"></th>
                <th scope="col" className="px-6 py-4 font-display text-lg font-medium tracking-tight text-[#171a1c]">Villas</th>
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#5b6770]">A resort suite</th>
                <th scope="col" className="px-6 py-4 text-sm font-semibold text-[#5b6770]">Other rentals</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-b border-[#0f1e2a]/20 last:border-0">
                  <th scope="row" className="px-6 py-4 text-sm font-semibold text-[#171a1c]">{r.label}</th>
                  <td className="px-6 py-4 font-medium text-[#0f1e2a]">{r.villas}</td>
                  <td className="px-6 py-4 text-[#5b6770]">{r.resort}</td>
                  <td className="px-6 py-4 text-[#5b6770]">{r.other}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
        <p className="mt-4 flex items-center gap-2 text-sm text-white/70"><Waves className="h-4 w-4 text-[#e8a33d]" aria-hidden="true" />Island villas are reached by a short boat ride; the transfer is part of the stay, not an extra to arrange.</p>
      </div>
    </section>
  );
}
