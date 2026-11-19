# Villas — Skandic Sanctuary Collection

A luxury Scandinavian-inspired villa rental website built in Next.js 15 App Router, TypeScript, Tailwind CSS v4, Framer Motion, and lucide-react.

<<<<<<< Updated upstream
## Aerra-inspired rebuild (uncommitted, pattern only)

A later restyle, built from a generic pattern description only — no demo
code, text, images, branding, or assets were downloaded, copied, or reused:
clean sans-serif display type (Inter for headings and body), a cold dusk
palette (deep slate/blue-teal dark sections, off-white/pale grey light
sections, charcoal text, warm amber only as a small accent, black pill
buttons), a floating frosted pill navigation bar on desktop that collapses
to a translucent top bar with a hamburger on narrower screens, dot-marked
section labels, and flat cards with thin rules and generous padding. The
cursor-reveal hero and drag-to-pan panoramic viewer were kept and restyled;
the viewer is still honestly labelled as a panoramic photo, not a 360° tour.
No extra "Who this is for" strip was added: the existing Experiences section
already covers those ideas, and a new strip would have risked inventing
audience claims about the villas. No active-section nav state was shipped:
it was skipped rather than risk a broken active indicator.

## What was built
=======
Updated to the **Skandic** design — inspired by Nordic slow-living architecture, minimalist coastal retreats, and the archipelago landscape.
>>>>>>> Stashed changes

## The Skandic Design System

<<<<<<< Updated upstream
- Floating frosted pill header on desktop, translucent top bar with
  hamburger on narrower screens, plus an accessible mobile menu that closes
  on link click
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
=======
- **Palette**:
  - Warm linen / pale sand background (`#FAF9F5`, `#F4F2EC`, `#EBE7DF`)
  - Signature deep Nordic pine green (`#1F382B`, hover `#15271E`)
  - Soft sage & moss accents (`#4E6B5A`, `#EAF0EB`, `#8FA89B`)
  - Deep charcoal body text (`#171B18`) with muted slate (`#59635D`)
  - Warm birch / amber accent highlights (`#C89446`)
- **Typography & Details**:
  - Neo-grotesque Scandinavian typography (Switzer / Inter system fallbacks) with crisp letter tracking
  - Bracketed index kickers: `[ 01 / PHILOSOPHY ]`, `[ 02 / RESIDENCES ]`, `[ 03 / LIVING WELL ]`, `[ 04 / PERSPECTIVES ]`, `[ 05 / SEASONAL RATES ]`, `[ 06 / JOURNAL ]`, `[ 07 / COMMON QUESTIONS ]`, `[ 08 / RESERVATIONS ]`
  - Subtle hairline borders (`border-[#1F382B]/12`) and rounded-3xl organic containers
>>>>>>> Stashed changes

## What Was Built

1. **Atmospheric Ambient Header**:
   - Live archipelago coordinates (`60°12'N 24°55'E // ARCHIPELAGO COAST`)
   - Floating frosted glass header with brand mark `SKANDIC` and pine compass icon
   - Clean navigation links with underline indicator and responsive mobile drawer
   - Direct `Reserve Villa` action pill

2. **Scandinavian Sanctuary Hero**:
   - Immersive high-resolution architectural photography with subtle scroll parallax
   - Headline: *"Architecture rooted in nature. Designed for stillness."*
   - Property quick-bar (location, wood-fired sauna & plunge, 100% whole-house privacy, 4.98 guest rating)
   - Dual action CTAs: `Explore Residences` & `Check Availability`

3. **Guarantees Strip & Philosophy (`[ 01 / PHILOSOPHY ]`)**:
   - 4 foundational guarantees (100% whole house privacy, private wood-fired sauna, boat transfers, direct transparent rates)
   - Story of slow living (*Friluftsliv* & *Lagom*) with architectural photography and key stats

4. **Villa Collection (`[ 02 / RESIDENCES ]`)**:
   - 6 architectural villas with preserved IDs:
     - `azure-palm-villa`: Villa Fjord & Sol (South Fjord)
     - `coral-island-house`: Archipelago Island House (Private Atoll)
     - `sunset-bay-villa`: Nordic Shoreline Pavilion (West Cape)
     - `palm-court-residence`: Pine Grove Timber Villa (Pine Bluffs)
     - `lagoon-view-villa`: Lagoon Sound Estate (East Sound)
     - `seaside-garden-villa`: Coastal Meadow Cabin (East Meadow)
   - Filter by All / Coastal / Island / Beachfront
   - Nightly vs. Weekly pricing toggle (~15% weekly discount)
   - Featured villa spotlight inspector panel with full architectural profile, specs, and instant reservation trigger

5. **Inside The Sanctuary (`InsideVillas.tsx`)**:
   - Interactive interior space inspector:
     - The Great Room & Kitchen (limestone heated floors, Siberian larch slats)
     - Wood-Fired Sauna Pavilion (Finnish cedar benches, ocean plunge)
     - The Master Horizon Suite (Hästens mattress, limestone soaking tub)
     - Granite Plunge & Stargazing Deck (locally quarried granite, heated mineral plunge)

6. **Living Well Experiences (`[ 03 / LIVING WELL ]`)**:
   - Wood-fired sauna & cold sea immersion
   - Private archipelago timber launch boat days
   - Forest trails & wild foraging
   - Private Nordic chef hearth dinners

7. **Perspectives Gallery (`[ 04 / PERSPECTIVES ]`)**:
   - Category filtering (All, Architecture, Interiors, Wellness, Surroundings)
   - Interactive full-screen Lightbox with keyboard navigation (Esc, Arrow Left, Arrow Right) and photo counter

8. **Seasonal Rates Calendar (`[ 05 / SEASONAL RATES ]`)**:
   - Spring Awakening (Apr – May): $720/night, 3n min
   - Midsummer Solstice (Jun – Aug): $1,250/night, 7n min
   - Golden Autumn & Harvest (Sep – Oct): $850/night, 3n min
   - Winter Aurora & Stillness (Nov – Mar): $690/night, 2n min
   - Detailed seasonal inclusions and direct booking jump

9. **The Journal (`[ 06 / JOURNAL ]`)**:
   - Editorial essays on Nordic sauna rituals, timber architecture, and wild coastal gastronomy

10. **The Skandic Distinction (Honest Comparison)**:
    - Side-by-side comparison between Skandic Villa Sanctuary vs. Luxury Resort Suite vs. Standard Vacation Rental

11. **Guest Reflections & FAQ Accordion**:
    - Notes from verified stays with villa context and star ratings
    - Expandable accessible FAQ accordion with categorized questions

12. **Direct Booking Reservation Form (`[ 08 / RESERVATIONS ]`)**:
    - International country-code calling selector (US/CA, SE, NO, FI, UK, DE, FR, CH, NL, AU)
    - Villa selection, check-in & check-out date pickers, guest count, and concierge requests
    - Validated client-side and server-side, posting to `POST /api/enquiry` with full feedback state

13. **Skandic Gazette Newsletter & Footer**:
    - Minimalist quarterly dispatch subscription
    - Coordinated footer with marina coordinates, season links, and direct contact desk

## Commands

```bash
pnpm run typecheck  # TypeScript verification
pnpm run lint       # ESLint verification
pnpm run build      # Next.js production build
pnpm run dev        # Local dev server at http://localhost:3000
```
<<<<<<< Updated upstream

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

## Featured landing page: Coral Island House (uncommitted)

A one-property landing page at `/villas/coral-island-house` for the
featured villa Coral Island House (Palm Island, Island, up to 10 guests,
5 bedrooms, 5 bathrooms, 6,100 sq ft, $1,250/night, $7,900/week), built
from the existing data in `src/data/villas.ts` only — no new facts, prices,
bedroom counts, amenities, places, or availability were invented. All copy
is the site's own; only the layout, motion and photography follow the
Skandic template (see below).

Design: the Skandic system (light, distinct from the home page's Aerra
dusk system) — white + pale warm-grey sections, near-black text,
forest-green accent, black closing CTA, huge light headlines, small-caps
numbered eyebrow labels ("01 — INTRODUCTION"), pill buttons. The home page
keeps its existing design; it links here from a "Featured stay" banner.

Photos and video: the EXACT assets from the free Skandic Framer template
by Pixco, downloaded from the public demo (skandic.framer.website) at the
user's explicit choice on 2026-11-19 and stored locally in
`public/skandic/` (36 images + hero.mp4, 18 MB). Full inventory with the
source URLs: `skandic-assets-inventory.md`. Note: these assets are Pixco's
template files, free to use inside Framer — reusing the exact files here
was the user's call. The three journal images
(`journal-01..03.png`) are stored but UNUSED — there is no Journal section
(no articles exist; none were invented).

Sections, in order: page-local sticky nav (inverts white-on-hero to black
on white when scrolled, hamburger on small screens; the site-wide Header
hides itself on `/villas/*` routes so the navs never double up), hero
(full-screen looping video `/skandic/hero.mp4` with 6 crossfading chapter
images, 600ms ease, manual chapter tabs, static poster for reduced-motion
users, no loader), 01 Introduction (tagline + data-only paragraph,
intro-kitchen photo, stats bar), 02 As Found (horizontal strip of 7 tall
photos), 03 The House (8-photo grid with lightbox, Esc/arrows), 04 Guest
Book (all 6 existing testimonials, still labelled sample, staggered
scroll-reveal, no host card), 05 Before You Pack (carousel, 6 photos),
06 Included in Every Stay (numbered cards from the villa's amenities only
+ rooms summary), 07 What Is Around It (existing Experiences content only,
illustrated with the 4 around-* photos), 08 How Booking Works (3 honest
enquiry-only steps — no payment, bank-transfer, or door-code claims),
09 Rates (nightly/weekly from the data, computed $850 weekly saving vs
7× nightly — labelled demo rates, no invented seasonal rates),
10 Questions (existing FAQ accordion), black closing CTA, and the enquiry
form pre-selected to this villa via the optional `initialVillaId` prop on
`EnquiryForm` (home page behaviour unchanged). The sitemap includes the
new route. The enquiry API is unchanged (validation only).
=======
>>>>>>> Stashed changes
