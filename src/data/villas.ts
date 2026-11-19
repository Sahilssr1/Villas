import {
  skandicProperty,
  spaces,
  includedAmenities,
  seasonalRatesList,
  guestReviewsList,
  journalPosts,
  areaSpots,
  skandicFaqs,
} from "./skandic";

export type VillaType = "Island" | "Coastal" | "Beachfront";

export type Villa = {
  id: string;
  name: string;
  nordicName?: string;
  location: string;
  type: VillaType;
  pricePerNight: number;
  pricePerWeek: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  tagline: string;
  description?: string;
  coordinates?: string;
  image: string;
  amenities: string[];
};

export const formatPrice = (n: number) => `€${n.toLocaleString("en-US")}`;

export const villas: Villa[] = [
  {
    id: "skandic-house",
    name: "Skandic House",
    nordicName: "Skandic",
    location: "Lofoten, Norway",
    type: "Coastal",
    pricePerNight: 210,
    pricePerWeek: 1350,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    areaSqFt: 1500,
    tagline: "A house that knows how to be quiet.",
    description: "Rebuilt in 2019, keeping the original frame, the stove and the low windows.",
    coordinates: "68°08'N 13°04'E",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80",
    amenities: [
      "Wood-fired sauna",
      "Stove & stacked firewood",
      "Mountain fjord view",
      "Deep bath & soft robes",
      "High-speed Wi-Fi",
      "Digital keyless entry",
    ],
  },
];

export const gallery = spaces.map((s) => ({
  src: s.image,
  alt: s.title,
  category: "Architecture",
  title: s.title,
}));

export const journalArticles = journalPosts.map((j) => ({
  id: j.slug,
  title: j.title,
  category: "NOTES",
  readTime: "4 min read",
  date: j.date,
  excerpt: j.excerpt,
  image: j.image,
}));

export const seasonalRates = seasonalRatesList.map((r, i) => ({
  season: r.season,
  code: `SEASON 0${i + 1}`,
  dates: r.period,
  nightlyRate: parseInt(r.perNight.replace(/\D/g, "") || "210", 10),
  weeklyRate: parseInt(r.perNight.replace(/\D/g, "") || "210", 10) * 6,
  minStayNights: parseInt(r.minStay.replace(/\D/g, "") || "2", 10),
  tagline: r.description,
  inclusions: [
    "Firewood stacked & stove laid",
    "Private wood-fired sauna",
    "Digital door code on arrival morning",
  ],
}));

export const faqs = skandicFaqs;

export const testimonials = guestReviewsList.map((g) => ({
  quote: g.quote,
  name: g.author,
  stay: "Lofoten, Norway",
  title: g.location,
  villa: "Skandic House",
}));

export {
  skandicProperty,
  spaces,
  includedAmenities,
  seasonalRatesList,
  guestReviewsList,
  journalPosts,
  areaSpots,
  skandicFaqs,
};
