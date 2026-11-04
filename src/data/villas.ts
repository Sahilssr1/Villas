export type VillaType = "Island" | "Coastal" | "Beachfront";

export type Villa = {
  id: string;
  name: string;
  location: string;
  type: VillaType;
  pricePerNight: number;
  pricePerWeek: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  areaSqFt: number;
  tagline: string;
  image: string;
  amenities: string[];
};

const img = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const villas: Villa[] = [
  {
    id: "azure-palm-villa",
    name: "Azure Palm Villa",
    location: "Coral Bay",
    type: "Coastal",
    pricePerNight: 850,
    pricePerWeek: 5400,
    guests: 8,
    bedrooms: 4,
    bathrooms: 4,
    areaSqFt: 5200,
    tagline: "A light-filled coastal house with a pool made for slow evenings.",
    image: img("1613490493576-7fde63acd811"),
    amenities: ["Private pool", "Sea-view terrace", "Chef on request", "Fast Wi-Fi"],
  },
  {
    id: "coral-island-house",
    name: "Coral Island House",
    location: "Palm Island",
    type: "Island",
    pricePerNight: 1250,
    pricePerWeek: 7900,
    guests: 10,
    bedrooms: 5,
    bathrooms: 5,
    areaSqFt: 6100,
    tagline: "The whole island, just for your group — no neighbours, no shared spaces.",
    image: img("1600596542815-ffad4c1539a9"),
    amenities: ["Private island", "Boat transfer", "Snorkelling gear", "Outdoor dining"],
  },
  {
    id: "sunset-bay-villa",
    name: "Sunset Bay Villa",
    location: "Sunset Bay",
    type: "Beachfront",
    pricePerNight: 980,
    pricePerWeek: 6200,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    areaSqFt: 4800,
    tagline: "Step from the living room onto the sand and watch the day end over the water.",
    image: img("1512917774080-9991f1c4c750"),
    amenities: ["Direct beach access", "Sunset deck", "Pool", "Barbecue area"],
  },
  {
    id: "palm-court-residence",
    name: "Palm Court Residence",
    location: "Azure Coast",
    type: "Coastal",
    pricePerNight: 720,
    pricePerWeek: 4600,
    guests: 6,
    bedrooms: 3,
    bathrooms: 3,
    areaSqFt: 3900,
    tagline: "Calm, modern and easy to live in — a family base with room to breathe.",
    image: img("1600585154340-be6161a56a0c"),
    amenities: ["Private pool", "Family rooms", "Work corner", "Covered parking"],
  },
  {
    id: "lagoon-view-villa",
    name: "Lagoon View Villa",
    location: "Palm Island",
    type: "Island",
    pricePerNight: 1420,
    pricePerWeek: 8900,
    guests: 12,
    bedrooms: 5,
    bathrooms: 6,
    areaSqFt: 6800,
    tagline: "A larger island retreat for reunions, weddings and long celebrations.",
    image: img("1600607687939-ce8a6c25118c"),
    amenities: ["Guest house", "Event lawn", "Private dock", "Concierge"],
  },
  {
    id: "seaside-garden-villa",
    name: "Seaside Garden Villa",
    location: "Coral Bay",
    type: "Beachfront",
    pricePerNight: 690,
    pricePerWeek: 4400,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    areaSqFt: 3400,
    tagline: "A quiet garden villa a short walk from the beach, with a shaded courtyard.",
    image: img("1600566753086-00f18fb6b3ea"),
    amenities: ["Garden courtyard", "Pool", "Beach walk", "Bicycles"],
  },
];

export type GalleryImage = { src: string; alt: string };

export const gallery: GalleryImage[] = [
  { src: img("1580587771525-78b9dba3b914"), alt: "Modern villa exterior with pool at dusk" },
  { src: img("1571896349842-33c89424de2d"), alt: "Resort pool surrounded by palm trees" },
  { src: img("1520250497591-112f2f40a3f4"), alt: "Hotel-style pool and lounge chairs by the sea" },
  { src: img("1540541338287-41700207dee6"), alt: "Pool and villa terrace in warm evening light" },
  { src: img("1582719478250-c89cae4dc85b"), alt: "Bright villa bedroom with a view of the water" },
  { src: img("1507525428034-b723cf961d3e"), alt: "Clear water and white sand at a tropical beach" },
  { src: img("1613490493576-7fde63acd811"), alt: "Luxury villa and pool lit up at night" },
  { src: img("1600596542815-ffad4c1539a9"), alt: "Spacious villa living area opening to a pool" },
];

export type Testimonial = { quote: string; name: string; stay: string; title: string };

export const testimonials: Testimonial[] = [
  { quote: "The house felt private in a way a hotel never does. We cooked together, swam at sunset, and never once felt rushed.", name: "Maya R.", stay: "March 2025", title: "A week that slowed us down" },
  { quote: "Booking was simple, the transfer was waiting for us, and the villa looked exactly like the photos.", name: "Daniel K.", stay: "January 2025", title: "Exactly as promised" },
  { quote: "Our parents had a ground-floor room, the kids had the pool, and everyone had space. Rare, and worth it.", name: "Priya S.", stay: "November 2024", title: "Three generations, one house" },
  { quote: "We came for a birthday and stayed for the mornings — coffee on the terrace, nobody else around.", name: "Alex M.", stay: "June 2025", title: "Best mornings of the year" },
  { quote: "The concierge arranged a boat trip and a private dinner without any fuss. It felt looked after, not sold to.", name: "Sara L.", stay: "February 2025", title: "Quietly well organised" },
  { quote: "We have rented villas before. This is the first time we rebooked before we even left.", name: "Tom and Elena H.", stay: "April 2025", title: "Already booked again" },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  { question: "How do I book a villa?", answer: "Choose a villa, pick your dates in the enquiry form below, and tell us about your group. We confirm availability and send a booking summary before any payment is requested. Nothing is charged by this form." },
  { question: "What are check-in and check-out times?", answer: "Check-in is from 3:00 pm and check-out is by 11:00 am. Early check-in and late check-out depend on the villa and the day, so ask in your enquiry and we will confirm what is possible." },
  { question: "Do island villas include boat transfers?", answer: "Yes — island stays include a scheduled boat transfer for your group. Your transfer time is confirmed with your booking, and extra trips can usually be arranged through the concierge." },
  { question: "What is the cancellation policy?", answer: "As a starting point, cancellations more than 30 days before arrival receive a full refund of any deposit, and cancellations within 30 days are handled case by case. The exact terms for your villa and dates are stated in your booking summary." },
  { question: "Are pets allowed?", answer: "Some villas welcome well-behaved pets and some do not, because of gardens, pools and neighbouring properties. Tell us about your pet in the enquiry and we will match you with a villa that allows it." },
  { question: "Can I host a wedding or celebration?", answer: "Larger villas, including Lagoon View Villa, can host small private celebrations. Events need advance approval so we can arrange staffing, music hours and any extra setup — mention it in your enquiry." },
  { question: "What is included in the price?", answer: "Your stay, utilities, Wi-Fi, linens and the amenities listed for the villa are included. Boat transfers are included for island villas. Private chefs, boat trips and extra services are optional and quoted in advance." },
];

export const formatPrice = (n: number) => `$${n.toLocaleString("en-US")}`;
