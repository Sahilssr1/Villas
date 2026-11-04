"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Waves } from "lucide-react";

const links = [
  { href: "#story", label: "Our story" },
  { href: "#villas", label: "Villas" },
  { href: "#gallery", label: "Gallery" },
  { href: "#experiences", label: "Experiences" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? "bg-[#0c2226]/95 shadow-lg backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link href="#top" className="flex items-center gap-2 text-white" aria-label="Villas home">
          <Waves className="h-7 w-7 text-amber-300" aria-hidden="true" />
          <span className="font-display text-2xl font-semibold tracking-tight">Villas</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-medium text-white/90 transition hover:text-white hover:underline hover:underline-offset-4">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#enquiry"
            className="hidden rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#0c2226] transition hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300 sm:inline-block"
          >
            Check availability
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-amber-300 lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0c2226] px-4 pb-6 pt-2 lg:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white hover:bg-white/10"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-semibold text-[#0c2226]"
              >
                Check availability
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
