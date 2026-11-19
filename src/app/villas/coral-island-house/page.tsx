import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { formatPrice, testimonials, villas, type GalleryImage } from "@/data/villas";
import { experiences } from "@/components/Sections";
import { EnquiryForm } from "@/components/Forms";
import Reveal from "@/components/Reveal";
import {
  FeaturedCarousel,
  FeaturedFaq,
  FeaturedHero,
  FeaturedHouseGrid,
  FeaturedNav,
  FeaturedStrip,
  SkandicEyebrow,
  StarRow,
} from "@/components/FeaturedLanding";

const villa = villas.find((v) => v.id === "coral-island-house") ?? villas[0];

/* Photos from the free Skandic template by Pixco, stored locally under
   public/skandic/. See skandic-assets-inventory.md for the source URLs. */
const SK = "/skandic";
const foundImages: GalleryImage[] = [
  { src: `${SK}/found-01.jpeg`, alt: "Outdoor lounge under the roof" },
  { src: `${SK}/found-02.jpeg`, alt: "The house, as found" },
  { src: `${SK}/found-03.jpeg`, alt: "The house, as found" },
  { src: `${SK}/found-04.jpeg`, alt: "Bedroom opening onto a furnished terrace" },
  { src: `${SK}/found-05.jpeg`, alt: "The house, as found" },
  { src: `${SK}/found-06.jpeg`, alt: "The house, as found" },
  { src: `${SK}/found-07.jpeg`, alt: "The house, as found" },
];
const houseImages: GalleryImage[] = [
  { src: `${SK}/house-01.jpeg`, alt: "Living space by the fireplace" },
  { src: `${SK}/house-02.jpeg`, alt: "A quiet corner of the house" },
  { src: `${SK}/house-03.jpeg`, alt: "Small details, ready for arrival" },
  { src: `${SK}/house-04.jpeg`, alt: "Fresh towels, ready for guests" },
  { src: `${SK}/house-05.jpeg`, alt: "The bath" },
  { src: `${SK}/house-06.jpeg`, alt: "Kitchen and dining table over the water" },
  { src: `${SK}/house-07.jpeg`, alt: "The kitchen" },
  { src: `${SK}/house-08.png`, alt: "Bedroom opening onto the terrace" },
];
const packImages: GalleryImage[] = [
  { src: `${SK}/pack-01.jpeg`, alt: "The kitchen, stocked and ready" },
  { src: `${SK}/pack-02.jpg`, alt: "Glasses on the shelf" },
  { src: `${SK}/pack-03.jpeg`, alt: "Towels and slippers, ready for arrival" },
  { src: `${SK}/pack-04.jpeg`, alt: "Laundry, taken care of" },
  { src: `${SK}/pack-05.jpeg`, alt: "Toiletries and a rolled towel" },
  { src: `${SK}/pack-06.jpeg`, alt: "A hair dryer in the drawer" },
];
const aroundImages = [
  { src: `${SK}/around-01.png`, alt: "Harbour with timber buildings reflected in dark water" },
  { src: `${SK}/around-02.png`, alt: "Coastal path through golden grass" },
  { src: `${SK}/around-03.png`, alt: "Wooden rowing boat by a jetty" },
  { src: `${SK}/around-04.png`, alt: "Tracks through snowy forest by a lit cabin" },
];

const OG_IMAGE = "https://villas.example/skandic/hero-poster.png";

export const metadata: Metadata = {
  title: `${villa.name} — ${villa.location} | Villas`,
  description: `${villa.name}: ${villa.tagline} ${villa.type} stay on ${villa.location} for up to ${villa.guests} guests — ${formatPrice(villa.pricePerNight)} per night.`,
  openGraph: {
    title: `${villa.name} — ${villa.location} | Villas`,
    description: villa.tagline,
    type: "website",
    images: [{ url: OG_IMAGE, width: 1672, height: 941, alt: `${villa.name} in ${villa.location}` }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: villa.name,
  description: villa.tagline,
  url: "https://villas.example/villas/coral-island-house",
  image: OG_IMAGE,
  address: { "@type": "PostalAddress", addressLocality: villa.location },
  priceRange: `${formatPrice(villa.pricePerNight)} per night`,
};

const weeklySaving = villa.pricePerNight * 7 - villa.pricePerWeek;
const areaHighlights = experiences.slice(0, 4);

const GREEN = "#2e5b3a";
const INK = "#171a1c";
const GREY = "#5b6770";
const WARM = "#f5f3f0";

export default function CoralIslandHousePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <FeaturedNav name={villa.name} location={villa.location} />

      <FeaturedHero
        name={villa.name}
        location={villa.location}
        type={villa.type}
        guests={villa.guests}
        tagline={villa.tagline}
      />

      {/* 01 — Introduction */}
      <section id="house" aria-labelledby="house-heading" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/#villas"
            className="inline-flex items-center gap-2 text-sm font-semibold hover:underline focus-visible:outline-2 focus-visible:outline-black"
            style={{ color: INK }}
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> All villas
          </Link>
          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SkandicEyebrow number="01">Introduction</SkandicEyebrow>
              <h2
                id="house-heading"
                className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
                style={{ color: INK }}
              >
                {villa.tagline}
              </h2>
              <p className="mt-6 text-lg leading-relaxed" style={{ color: GREY }}>
                {villa.name} is a {villa.type.toLowerCase()} stay on {villa.location}, made for groups of
                up to {villa.guests}. {villa.bedrooms} bedrooms and {villa.bathrooms} bathrooms across{" "}
                {villa.areaSqFt.toLocaleString()} sq ft give everyone room of their own, while the shared
                spaces — and the island itself — are yours alone.
              </p>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: GREY }}>
                Included with the house: {villa.amenities.join(", ")}.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={`${SK}/intro-kitchen.jpeg`}
                  alt="Timber kitchen inside the house"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>

          {/* Stats bar — data only, from villas.ts */}
          <Reveal delay={0.1} className="mt-16">
            <dl className="grid grid-cols-2 gap-y-8 border-y border-black/10 py-8 sm:grid-cols-3 lg:grid-cols-5">
              {[
                { label: "Sleeps", value: `Up to ${villa.guests}` },
                { label: "Bedrooms", value: `${villa.bedrooms}` },
                { label: "Bathrooms", value: `${villa.bathrooms}` },
                { label: "Living space", value: `${villa.areaSqFt.toLocaleString()} sq ft` },
                { label: "From", value: `${formatPrice(villa.pricePerNight)} / night` },
              ].map((s) => (
                <div key={s.label} className="pr-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                    {s.label}
                  </dt>
                  <dd className="mt-2 font-display text-2xl font-light tracking-tight sm:text-3xl" style={{ color: INK }}>
                    {s.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 02 — As Found */}
      <section aria-labelledby="found-heading" className="py-20 sm:py-28" style={{ backgroundColor: WARM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SkandicEyebrow number="02">As found</SkandicEyebrow>
            <h2
              id="found-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              See the house as it really is.
            </h2>
          </Reveal>
        </div>
        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal delay={0.1}>
            <FeaturedStrip images={foundImages} />
          </Reveal>
        </div>
      </section>

      {/* 03 — The House */}
      <section aria-labelledby="house-photos-heading" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SkandicEyebrow number="03">The house</SkandicEyebrow>
            <h2
              id="house-photos-heading"
              className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              Inside the house
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <FeaturedHouseGrid images={houseImages} />
          </Reveal>
        </div>
      </section>

      {/* 04 — Guest Book */}
      <section aria-labelledby="guest-book-heading" className="py-20 sm:py-28" style={{ backgroundColor: WARM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SkandicEyebrow number="04">Guest book</SkandicEyebrow>
            <h2
              id="guest-book-heading"
              className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              What guests say
            </h2>
            <p className="mt-4 text-sm" style={{ color: GREY }}>
              Sample content for this demo site — replace with real, permissioned guest reviews before launch.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <figure className="flex h-full flex-col rounded-3xl bg-white p-7 ring-1 ring-black/5">
                  <StarRow />
                  <blockquote
                    className="mt-4 flex-1 font-display text-xl font-light leading-snug tracking-tight"
                    style={{ color: INK }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-black/10 pt-4">
                    <p className="font-semibold" style={{ color: INK }}>
                      {t.name}
                    </p>
                    <p className="text-sm" style={{ color: GREY }}>
                      {t.title} · Stayed {t.stay}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Before You Pack */}
      <section aria-labelledby="pack-heading" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SkandicEyebrow number="05">Before you pack</SkandicEyebrow>
            <h2
              id="pack-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              Small things, already taken care of.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <FeaturedCarousel images={packImages} />
          </Reveal>
        </div>
      </section>

      {/* 06 — Included in Every Stay */}
      <section id="space" aria-labelledby="space-heading" className="scroll-mt-24 py-20 sm:py-28" style={{ backgroundColor: WARM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SkandicEyebrow number="06">Included in every stay</SkandicEyebrow>
            <h2
              id="space-heading"
              className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              What comes with the house
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {villa.amenities.map((a, i) => (
              <Reveal key={a} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-black/5">
                  <p className="font-display text-4xl font-light" style={{ color: GREEN }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-lg font-medium" style={{ color: INK }}>
                    {a}
                  </h3>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <dl className="grid grid-cols-2 gap-y-6 rounded-3xl bg-white px-7 py-6 ring-1 ring-black/5 sm:grid-cols-4">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                  Bedrooms
                </dt>
                <dd className="mt-1 text-lg font-medium" style={{ color: INK }}>
                  {villa.bedrooms}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                  Bathrooms
                </dt>
                <dd className="mt-1 text-lg font-medium" style={{ color: INK }}>
                  {villa.bathrooms}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                  Sleeps
                </dt>
                <dd className="mt-1 text-lg font-medium" style={{ color: INK }}>
                  Up to {villa.guests}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                  Living space
                </dt>
                <dd className="mt-1 text-lg font-medium" style={{ color: INK }}>
                  {villa.areaSqFt.toLocaleString()} sq ft
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 07 — What Is Around It (existing Experiences content only) */}
      <section id="area" aria-labelledby="area-heading" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SkandicEyebrow number="07">What is around it</SkandicEyebrow>
            <h2
              id="area-heading"
              className="mt-4 max-w-3xl font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              Days around the island
            </h2>
            <p className="mt-4 max-w-2xl text-lg" style={{ color: GREY }}>
              Every villa includes the house and its amenities. Everything else is optional, quoted in
              advance, and arranged locally.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {areaHighlights.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.05}>
                <article className="h-full overflow-hidden rounded-3xl bg-white ring-1 ring-black/5">
                  <span className="relative block aspect-[4/3]">
                    <Image
                      src={aroundImages[i].src}
                      alt={aroundImages[i].alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </span>
                  <div className="p-6">
                    <span
                      className="flex h-11 w-11 items-center justify-center rounded-full"
                      style={{ backgroundColor: WARM, color: GREEN }}
                    >
                      <e.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-lg font-medium" style={{ color: INK }}>
                      {e.title}
                    </h3>
                    <p className="mt-2" style={{ color: GREY }}>
                      {e.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 08 — How Booking Works (enquiry only — no payments or door codes) */}
      <section aria-labelledby="booking-heading" className="py-20 sm:py-28" style={{ backgroundColor: WARM }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SkandicEyebrow number="08">How booking works</SkandicEyebrow>
            <h2
              id="booking-heading"
              className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              Three steps, no surprises
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Check dates",
                text: "Pick your dates in the enquiry form below and tell us about your group.",
              },
              {
                title: "Send your enquiry",
                text: "Nothing is charged by the form — it is an enquiry, not a booking.",
              },
              {
                title: "We confirm availability",
                text: "We confirm availability and send a booking summary before any payment is requested.",
              },
            ].map((s, i) => (
              <Reveal key={s.title} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-black/5">
                  <p className="font-display text-5xl font-light" style={{ color: GREEN }}>
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-4 text-xl font-medium" style={{ color: INK }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 leading-relaxed" style={{ color: GREY }}>
                    {s.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 09 — Rates (demo rates, from villas.ts only) */}
      <section id="rates" aria-labelledby="rates-heading" className="scroll-mt-24 bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <SkandicEyebrow number="09">Rates</SkandicEyebrow>
            <h2
              id="rates-heading"
              className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              Clear rates, no platform fees
            </h2>
            <p className="mt-4" style={{ color: GREY }}>
              Demo rates for {villa.name} — replace with live rates before launch.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 overflow-x-auto rounded-3xl ring-1 ring-black/10">
            <table className="w-full min-w-[520px] bg-white text-left">
              <thead>
                <tr className="border-b border-black/10">
                  <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                    Stay
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                    Price
                  </th>
                  <th scope="col" className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: GREY }}>
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black/10">
                  <th scope="row" className="px-6 py-5 font-medium" style={{ color: INK }}>
                    Per night
                  </th>
                  <td className="px-6 py-5 font-display text-2xl font-light" style={{ color: GREEN }}>
                    {formatPrice(villa.pricePerNight)}
                  </td>
                  <td className="px-6 py-5" style={{ color: GREY }}>
                    Up to {villa.guests} guests
                  </td>
                </tr>
                <tr className="border-b border-black/10">
                  <th scope="row" className="px-6 py-5 font-medium" style={{ color: INK }}>
                    Per week (7 nights)
                  </th>
                  <td className="px-6 py-5 font-display text-2xl font-light" style={{ color: GREEN }}>
                    {formatPrice(villa.pricePerWeek)}
                  </td>
                  <td className="px-6 py-5" style={{ color: GREY }}>
                    7 nights at the weekly rate
                  </td>
                </tr>
                <tr>
                  <th scope="row" className="px-6 py-5 font-medium" style={{ color: INK }}>
                    Weekly saving
                  </th>
                  <td className="px-6 py-5 font-display text-2xl font-light" style={{ color: GREEN }}>
                    {weeklySaving > 0 ? `Save ${formatPrice(weeklySaving)}` : "—"}
                  </td>
                  <td className="px-6 py-5" style={{ color: GREY }}>
                    {weeklySaving > 0
                      ? `A week costs ${formatPrice(weeklySaving)} less than 7 nights at the nightly rate.`
                      : "No weekly saving at the current rates."}
                  </td>
                </tr>
              </tbody>
            </table>
          </Reveal>
          <p className="mt-4 text-sm" style={{ color: GREY }}>
            Boat transfers are included for island villas. Private chefs, boat trips and extra services
            are optional and quoted in advance.
          </p>
        </div>
      </section>

      {/* 10 — Questions */}
      <section aria-labelledby="faq-heading" className="py-20 sm:py-28" style={{ backgroundColor: WARM }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Reveal className="text-center">
            <SkandicEyebrow number="10">Questions</SkandicEyebrow>
            <h2
              id="faq-heading"
              className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: INK }}
            >
              Before you book
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 text-left">
            <FeaturedFaq />
          </Reveal>
        </div>
      </section>

      {/* Closing CTA (black) */}
      <section aria-labelledby="cta-heading" className="bg-black py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Reveal>
            <SkandicEyebrow light>Enquire</SkandicEyebrow>
            <h2
              id="cta-heading"
              className="mt-4 font-display text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {villa.tagline}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Tell us your dates and your group — we will confirm availability and send a booking
              summary before anything is charged.
            </p>
            <Link
              href="#enquiry"
              className="mt-8 inline-flex items-center gap-1.5 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-white/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Check dates <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Enquiry, pre-selected to this villa */}
      <EnquiryForm initialVillaId="coral-island-house" />
    </>
  );
}
