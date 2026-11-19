import Link from "next/link";
import { skandicProperty } from "@/data/skandic";

export default function Footer() {
  return (
<<<<<<< Updated upstream
    <footer className="bg-black pb-10 pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="#top" className="flex items-center gap-2 text-white">
              <Waves className="h-7 w-7 text-[#8fbf9a]" aria-hidden="true" />
              <span className="font-display text-2xl font-medium tracking-tight">Villas</span>
=======
    <footer className="border-t border-black/10 py-16 text-xs text-[#5E655F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand & Location */}
          <div className="md:col-span-5">
            <Link href="#top" className="font-display text-lg font-medium tracking-tight text-[#1E201E]">
              {skandicProperty.name}
>>>>>>> Stashed changes
            </Link>
            <p className="mt-1 text-xs text-[#5E655F]">
              {skandicProperty.location}
            </p>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-[#5E655F]">
              {skandicProperty.tagline}
            </p>
            <p className="mt-4 font-mono text-[11px] text-[#5E655F]">
              A direct rental by Marte &amp; Anders.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <p className="font-mono uppercase text-[#1E201E]">Explore</p>
            <ul className="mt-4 space-y-2">
<<<<<<< Updated upstream
              {[
                ["#story", "Our story"],
                ["#villas", "Villas"],
                ["#inside", "Inside"],
                ["#gallery", "Gallery"],
                ["#experiences", "Experiences"],
                ["#testimonials", "Reviews"],
                ["#faq", "FAQ"],
              ].map(([href, label]) => (
                <li key={href}><Link href={href} className="transition hover:text-white hover:underline hover:underline-offset-4">{label}</Link></li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="font-semibold text-white">Contact</h2>
            <p className="mt-4 flex items-center gap-2"><Mail className="h-4 w-4 text-[#8fbf9a]" aria-hidden="true" /><a href="mailto:hello@villas.example" className="hover:text-white hover:underline">hello@villas.example</a></p>
            <p className="mt-3 text-sm leading-relaxed">Placeholder contact for this demo. Replace with the real business email, phone and address before launch.</p>
            <Link href="#enquiry" className="lift mt-5 inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#171a1c] transition hover:bg-white/85">Check availability</Link>
=======
              <li>
                <Link href="#house" className="hover:text-[#1E201E]">
                  The house
                </Link>
              </li>
              <li>
                <Link href="#space" className="hover:text-[#1E201E]">
                  The space
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="hover:text-[#1E201E]">
                  Included in every stay
                </Link>
              </li>
              <li>
                <Link href="#area" className="hover:text-[#1E201E]">
                  What is around it
                </Link>
              </li>
              <li>
                <Link href="#rates" className="hover:text-[#1E201E]">
                  Seasonal rates
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#1E201E]">
                  Questions &amp; answers
                </Link>
              </li>
            </ul>
          </div>

          {/* Journal & Stories */}
          <div className="md:col-span-4">
            <p className="font-mono uppercase text-[#1E201E]">From the house</p>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="#journal" className="hover:text-[#1E201E]">
                  A road that ends, and what it costs
                </Link>
              </li>
              <li>
                <Link href="#journal" className="hover:text-[#1E201E]">
                  The case for the small window
                </Link>
              </li>
              <li>
                <Link href="#journal" className="hover:text-[#1E201E]">
                  How to pack for a week of nothing
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  href="#enquiry"
                  className="inline-flex rounded-full bg-[#1E201E] px-4 py-1.5 text-xs font-medium text-white transition hover:bg-black"
                >
                  Start an enquiry
                </Link>
              </li>
            </ul>
>>>>>>> Stashed changes
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-black/10 pt-8 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {skandicProperty.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <span>Privacy Policy</span>
            <span>&middot;</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
