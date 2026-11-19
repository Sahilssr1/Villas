"use client";

import Link from "next/link";
<<<<<<< Updated upstream
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Waves } from "lucide-react";

/**
 * Floating frosted pill navigation on desktop, collapsing to a
 * translucent top bar with a hamburger on narrower screens.
 * Every link points to a section that exists on the page.
 * No active-section tracking: it was skipped rather than risk a
 * broken or misleading active state.
 */
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Featured landing pages under /villas/* render their own inverting nav
  // (FeaturedNav); this pill nav would double up, and its links point at
  // home-page sections that do not exist there. Home behaviour is unchanged.
  if (pathname?.startsWith("/villas/")) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 lg:top-4 lg:px-6">
      <div className="bg-white/85 backdrop-blur-md ring-1 ring-black/10 max-lg:border-b max-lg:border-black/10 lg:mx-auto lg:max-w-6xl lg:rounded-full lg:shadow-sm">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 text-[#171a1c] sm:px-6 lg:px-6"
        >
          <Link href="#top" className="flex items-center gap-2" aria-label="Villas home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2e5b3a] text-white">
              <Waves className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="text-xl font-medium tracking-tight">Villas</span>
          </Link>

          <ul className="hidden items-center gap-6 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-[#171a1c]/80 transition hover:text-[#171a1c] hover:underline hover:underline-offset-4"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              href="#enquiry"
              className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#171a1c] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:inline-block"
            >
              Check availability
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="rounded-full p-2 transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-black lg:hidden"
            >
              {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl bg-white/95 p-3 text-[#171a1c] shadow-sm ring-1 ring-black/10 backdrop-blur-md lg:hidden">
          <ul className="space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium hover:bg-black/5"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="mt-2 block rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
=======
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { skandicProperty } from "@/data/skandic";

const navItems = [
  { href: "#house", label: "The house" },
  { href: "#space", label: "The space" },
  { href: "#amenities", label: "Included" },
  { href: "#area", label: "The area" },
  { href: "#rates", label: "Rates" },
  { href: "#journal", label: "Journal" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "border-b border-black/5 bg-[#FAF9F6]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Brand */}
        <Link href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-xl font-medium tracking-tight text-[#1E201E]">
            {skandicProperty.name}
          </span>
          <span className="text-xs text-[#5E655F]">
            {skandicProperty.location}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-normal tracking-wide text-[#5E655F] transition hover:text-[#1E201E]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Enquire CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#enquiry"
            className="inline-flex rounded-full bg-[#1E201E] px-5 py-2 text-xs font-medium text-white transition hover:bg-black"
          >
            Enquire
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-[#1E201E] hover:bg-black/5 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="border-b border-black/5 bg-[#FAF9F6] px-6 py-6 md:hidden">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-[#1E201E]"
>>>>>>> Stashed changes
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
