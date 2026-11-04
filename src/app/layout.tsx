import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://villas.example"),
  title: "Villas — Private Island & Coastal Villas",
  description:
    "A whole villa, all yours. Private island and coastal villas for groups, families and celebrations — with boat transfers, concierge and clear pricing.",
  openGraph: {
    title: "Villas — Private Island & Coastal Villas",
    description:
      "A whole villa, all yours. Private island and coastal villas for groups, families and celebrations.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Luxury villa and pool at dusk",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Villas",
  description: "Private island and coastal villas.",
  url: "https://villas.example",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-black focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <MotionConfig reducedMotion="user">
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionConfig>
      </body>
    </html>
  );
}
