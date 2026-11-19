import Link from "next/link";
import { skandicProperty } from "@/data/skandic";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 py-16 text-xs text-[#5E655F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand & Location */}
          <div className="md:col-span-5">
            <Link href="#top" className="font-display text-lg font-medium tracking-tight text-[#1E201E]">
              {skandicProperty.name}
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
