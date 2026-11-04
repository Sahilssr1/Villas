# Villas — Private Island & Coastal Villas

A premium, FloridaIsland-inspired villa-rental website built fresh in this
repo. The repo was empty when work started (created 2026-11-04, no commits),
so there was no existing codebase, backend, API or content to preserve — this
is a new build, not a redesign of an existing site. The pattern is translated,
not copied: no FloridaIsland branding, text, prices or photos are used.

## What was built

A single-page Next.js site with:

- Sticky header that is transparent over the hero and solid on scroll, plus
  an accessible mobile menu that closes on link click
- Full-screen hero with Framer Motion parallax, headline, and calls to action
- Trust strip, story section, and alternating experience section
- Villa collection (6 villas) with a working filter by Island / Coastal /
  Beachfront, detail lists, and nightly + weekly pricing
- Interactive gallery (8 photos) with a lightbox supporting Esc and
  left/right arrow keys
- Honest comparison table (whole villa vs. resort suite vs. other rentals)
- Testimonials slider with prev/next buttons and dots
- FAQ accordion with `aria-expanded`
- Booking-enquiry form with client-side validation, posting to
  `POST /api/enquiry`
- Newsletter form with a success state
- Polished footer with navigation and contact information
- SEO: page metadata, Open Graph, `sitemap.ts`, `robots.ts`, semantic
  headings, alt text, and JSON-LD for the site
- Accessibility: skip link, focus-visible styles, real `<button>` elements
  for interactive controls, and `MotionConfig reducedMotion="user"`

## Stack

Next.js 15 App Router + TypeScript + Tailwind CSS v4 + Framer Motion +
lucide-react only. No other dependencies were added.

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint    # eslint
npm run typecheck
```

Images are served from `images.unsplash.com` (configured in
`next.config.ts`); the site needs network access to load them.

## What the enquiry API does — and does not do

`src/app/api/enquiry/route.ts` validates the villa, name, email, dates and
guest count and returns `{ ok: true }` on success. It does **not** send an
email, create a booking, charge a payment, or store anything in a database.
Wire it to a real mailbox/CRM and a booking system before launch.

The newsletter form is likewise a front-end success state only — it does not
subscribe anyone to a real mailing list.

## Sample / placeholder content — replace before launch

- **Testimonials** are sample quotes, labelled as such on the page. Replace
  them with real, permissioned guest reviews.
- **Contact** uses the clearly placeholder address `hello@villas.example`.
  Replace it with the real business email, phone and address.
- **Villa names, locations, prices and stats** are generic demo content.
  Replace them with the real portfolio, rates and availability.
- The canonical URL in metadata, sitemap and robots (`villas.example`) is a
  placeholder domain — point it at the real domain before launch.

## Project structure

```
src/
  app/
    layout.tsx            # metadata, fonts, skip link, JSON-LD
    page.tsx              # home page section composition
    globals.css           # Tailwind v4 theme
    api/enquiry/route.ts  # enquiry validation endpoint
    sitemap.ts robots.ts  # SEO routes
  components/
    Header.tsx Hero.tsx VillasSection.tsx Gallery.tsx
    Sections.tsx          # trust strip, story, experiences, comparison
    TestimonialsFaq.tsx Forms.tsx  # enquiry + newsletter
    Footer.tsx Reveal.tsx # scroll-reveal helper
  data/
    villas.ts             # villas, gallery, testimonials, FAQs
```

## Status

Work is left **uncommitted in the working tree** for review, as requested.
Nothing has been pushed to GitHub and the site is **not live**. Not yet
tested: live deployment, real email delivery, and visual/browser checking
on real devices (build verification only — see the delivery report).

## Luxury rebuild (2026-11-05, uncommitted)

Pattern-level inspiration only — no Jiro template code, assets, or
purchase was used; everything here is original code in this repo.

- Visual system: ivory/cream backgrounds, charcoal-ink text
  (#1e1b18), bronze accent (#b08d57), Playfair Display + Inter,
  hairline rules, uppercase eyebrow labels, numbered editorial headers
  (01 Story, 02 Collection, 03 Inside, 04 Gallery, 05 Experiences,
  06 Comparison, 07 Reviews, 08 FAQ, 09 Enquiry). Header turns ivory
  with a bronze hairline when solid.
- Hero cursor-reveal (original): on fine-pointer devices a circular
  spotlight follows the mouse and reveals the full-colour hero image
  over a muted version; touch and reduced-motion users always see the
  full image.
- Villa catalog: proper tabs (All / Island / Coastal / Beachfront,
  aria-selected, underline indicator, arrow-key navigation), a
  featured-villa panel above the grid (large photo, tagline, specs,
  amenities, price), a Nightly / Weekly toggle that updates featured
  and card prices, and a 5×5 tile reveal when the featured photo
  changes. Clicking a card or its View details button selects it.
- "Inside the villas": a panoramic drag viewer with Living / Bedroom /
  Pool terrace tabs, drag-to-pan (Framer Motion drag="x"), a drag
  hint, and prev/next buttons. It is labelled as a panoramic drag
  viewer, NOT a 360° viewer — no 360° asset exists. Photos reuse only
  existing Unsplash IDs from src/data/villas.ts.
- Gallery lightbox, Experiences, Comparison, Testimonials, FAQ,
  Enquiry and Newsletter forms, and Footer are restyled only — no
  fields or sections removed, no new dependencies.
