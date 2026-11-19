import type { Metadata } from "next";
<<<<<<< Updated upstream
import { Inter } from "next/font/google";
=======
>>>>>>> Stashed changes
import { MotionConfig } from "framer-motion";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

<<<<<<< Updated upstream
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

=======
>>>>>>> Stashed changes
export const metadata: Metadata = {
  metadataBase: new URL("https://villas.example"),
  title: "Skandic — Home Rental in Lofoten, Norway",
  description:
    "A house that knows how to be quiet. A direct rental in Lofoten, Norway with wood stove, private sauna, and room for six.",
  openGraph: {
    title: "Skandic — Home Rental in Lofoten, Norway",
    description:
      "A house that knows how to be quiet. A direct rental in Lofoten, Norway with wood stove, private sauna, and room for six.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
        width: 1600,
        height: 900,
        alt: "Skandic cabin overlooking the mountain fjord",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Skandic",
  description: "A house that knows how to be quiet. A direct rental in Lofoten, Norway.",
  url: "https://villas.example",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Lofoten",
    addressCountry: "Norway",
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Wood-Fired Sauna", value: true },
    { "@type": "LocationFeatureSpecification", name: "Whole House Rental", value: true },
    { "@type": "LocationFeatureSpecification", name: "Fireplace", value: true },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<<<<<<< Updated upstream
    <html lang="en" className={inter.variable}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-black focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white"
=======
    <html lang="en">
      <body className="bg-[#FAF9F6] text-[#1E201E] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-[#1F382B] focus:px-5 focus:py-2.5 focus:font-semibold focus:text-white"
>>>>>>> Stashed changes
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
