"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Waves } from "lucide-react";

const links = [
  { href: "#story", label: "Our story" },
  { href: "#villas", label: "Villas" },
  { href: "#inside", label: "Inside" },
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
  const linkCls = solid
    ? "text-[#1e1b18]/80 hover:text-[#1e1b18]"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-[#b08d57]/30 bg-[#faf7f1]/95 shadow-sm backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 ${
          solid ? "text-[#1e1b18]" : "text-white"
        }`}
      >
        <Link href="#top" className="flex items-center gap-2" aria-label="Villas home">
          <Waves className="h-7 w-7 text-[#b08d57]" aria-hidden="true" />
          <span className="font-display text-2xl font-semibold tracking-tight">Villas</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className={`text-sm font-medium transition hover:underline hover:underline-offset-4 ${linkCls}`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="#enquiry"
            className="lift hidden rounded-full bg-[#b08d57] px-5 py-2.5 text-sm font-semibold text-[#1e1b18] transition hover:bg-[#c9a06a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9a06a] sm:inline-block"
          >
            Check availability
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-[#c9a06a] lg:hidden"
          >
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#b08d57]/25 bg-[#faf7f1] px-4 pb-6 pt-2 text-[#1e1b18] lg:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-black/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-[#b08d57] px-5 py-3 text-center text-sm font-semibold text-[#1e1b18]"
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
