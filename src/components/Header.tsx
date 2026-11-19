"use client";

import Link from "next/link";
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
