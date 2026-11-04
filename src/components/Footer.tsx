import Link from "next/link";
import { Mail, Waves } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c2226] pb-10 pt-16 text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="#top" className="flex items-center gap-2 text-white">
              <Waves className="h-7 w-7 text-amber-300" aria-hidden="true" />
              <span className="font-display text-2xl font-semibold">Villas</span>
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed">Private island &amp; coastal villas — the whole house, just for your group.</p>
          </div>
          <nav aria-label="Footer navigation">
            <h2 className="font-semibold text-white">Explore</h2>
            <ul className="mt-4 space-y-2">
              {[
                ["#story", "Our story"],
                ["#villas", "Villas"],
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
            <p className="mt-4 flex items-center gap-2"><Mail className="h-4 w-4 text-amber-300" aria-hidden="true" /><a href="mailto:hello@villas.example" className="hover:text-white hover:underline">hello@villas.example</a></p>
            <p className="mt-3 text-sm leading-relaxed">Placeholder contact for this demo. Replace with the real business email, phone and address before launch.</p>
            <Link href="#enquiry" className="mt-5 inline-block rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-[#0c2226] transition hover:bg-amber-300">Check availability</Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} Villas. Demo site — content is illustrative.</p>
          <p>Testimonials and contact details are sample/placeholder content.</p>
        </div>
      </div>
    </footer>
  );
}
