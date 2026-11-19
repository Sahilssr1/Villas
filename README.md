# Villas — Skandic Sanctuary Collection

A luxury Scandinavian-inspired villa rental website built in Next.js 15 App Router, TypeScript, Tailwind CSS v4, Framer Motion, and lucide-react.

Updated to the **Skandic** design — inspired by Nordic slow-living architecture, minimalist coastal retreats, and the archipelago landscape.

## The Skandic Design System

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
