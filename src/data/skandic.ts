export interface RoomSpace {
  id: string;
  title: string;
  description: string;
  image: string;
  tag?: string;
}

export interface AmenityItem {
  number: string;
  title: string;
  description: string;
}

export interface LocalAreaSpot {
  category: string;
  distance: string;
  title: string;
  description: string;
  image: string;
}

export interface RateItem {
  season: string;
  period: string;
  minStay: string;
  perNight: string;
  description: string;
}

export interface GuestReview {
  quote: string;
  author: string;
  location: string;
  stayDate?: string;
}

export interface JournalPost {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

export const skandicProperty = {
  name: "Skandic",
  location: "Lofoten, Norway",
  tagline: "A house that knows how to be quiet.",
  heroHeadline: "Wake up on the far edge of the world.",
  heroSubheadline: "Wake up in the middle of the fjord.",
  introH2: "A cabin above the fjord, where the road runs out.",
  narrative:
    "We rebuilt it in 2019. Kept the frame, the stove and the low windows, replaced everything that had given up. It sleeps six without anyone being in the way, and we rent it out about twenty weeks a year, directly, to people who write to us first.",
  stats: [
    {
      label: "Sleeps",
      value: "6",
      detail: "Three bedrooms, two bathrooms and one long table.",
    },
    {
      label: "Size",
      value: "140 m²",
      detail: "Plus a deck that runs the whole south side.",
    },
    {
      label: "Built",
      value: "1974",
      detail: "Rebuilt by us in 2019, keeping the original frame.",
    },
    {
      label: "From",
      value: "€210",
      detail: "Per night, all in, when you book with us direct.",
    },
  ],
  hosts: {
    names: "Marte & Anders",
    note: "We answer every message ourselves, usually the same day. Tell us roughly when you want to be here.",
    rating: "4.6 / 5",
    staysCount: "Across 9 stays",
  },
};

const unsplash = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=80`;

export const spaces: RoomSpace[] = [
  {
    id: "living-room",
    title: "The Living Room",
    description: "Curved sofa and wooden coffee tables beside a fireplace and forest-facing windows.",
    image: unsplash("1600585154340-be6161a56a0c"),
    tag: "LIVING",
  },
  {
    id: "kitchen",
    title: "The Kitchen & Dining",
    description: "Timber kitchen with a stone worktop, dark cabinets, sharp knives and a table long enough for six.",
    image: unsplash("1600607687939-ce8a6c25118c"),
    tag: "COOKING",
  },
  {
    id: "bedroom",
    title: "The Bedrooms",
    description: "Warm timber bedrooms with soft bedside lighting, linen sheets and views of the mountain fjord.",
    image: unsplash("1582719478250-c89cae4dc85b"),
    tag: "SLEEPING",
  },
  {
    id: "sauna-bath",
    title: "Sauna & Deep Bath",
    description: "Private wood-fired cedar sauna, freestanding soaking tub, and fluffy towels ready after the weather.",
    image: unsplash("1544816155-12df9643f363"),
    tag: "WELLNESS",
  },
  {
    id: "terrace",
    title: "The South Deck",
    description: "Outdoor lounge chairs on a timber terrace stepping directly toward the still fjord waters.",
    image: unsplash("1540541338287-41700207dee6"),
    tag: "OUTDOORS",
  },
];

export const includedAmenities: AmenityItem[] = [
  {
    number: "01",
    title: "Let yourself in",
    description: "Your door code arrives the morning you travel.",
  },
  {
    number: "02",
    title: "Warm before you unpack",
    description: "The stove is laid and the firewood is stacked.",
  },
  {
    number: "03",
    title: "A sauna after the weather",
    description: "Wood-fired, private, and ready for slow evenings.",
  },
  {
    number: "04",
    title: "A proper deep bath",
    description: "Hot water, towels, robes, soap and slippers included.",
  },
  {
    number: "05",
    title: "A kitchen for real dinners",
    description: "Cookware, sharp knives and a table long enough for six.",
  },
  {
    number: "06",
    title: "Laundry that works",
    description: "Washer, drying space and the basics already in the cupboard.",
  },
  {
    number: "07",
    title: "Connected when you want to be",
    description: "Reliable Wi‑Fi without making the house feel less remote.",
  },
  {
    number: "08",
    title: "Beds made for six",
    description: "Three bedrooms, fresh linen and room for everyone to disappear.",
  },
  {
    number: "09",
    title: "Park beside the house",
    description: "Unload at the door—no long carry up a path.",
  },
  {
    number: "10",
    title: "Ready for winter",
    description: "The road is cleared early and the house is built for January.",
  },
  {
    number: "11",
    title: "Our routes, not generic ones",
    description: "A printed map marks walks worth taking in every kind of weather.",
  },
  {
    number: "12",
    title: "The hosts answer",
    description: "Marte or Anders replies directly, usually the same day.",
  },
];

export const areaSpots: LocalAreaSpot[] = [
  {
    category: "Village",
    distance: "12 min drive",
    title: "Reine harbour",
    description: "A bakery, one small shop and the ferry across to Vindstad. Cash still works here.",
    image: unsplash("1580587771525-78b9dba3b914"),
  },
  {
    category: "Walking",
    distance: "25 min drive",
    title: "The Ryten trail",
    description: "Four hours return over the shoulder of the mountain. The beach at the far end is worth every one of them.",
    image: unsplash("1507525428034-b723cf961d3e"),
  },
  {
    category: "Water",
    distance: "2 min walk",
    title: "The fjord",
    description: "Cold, deep and unreasonably clear. There is a rowing boat in the shed if you want to use it.",
    image: unsplash("1512917774080-9991f1c4c750"),
  },
  {
    category: "Winter",
    distance: "Starts at the door",
    title: "The ski track",
    description: "Groomed from January. Twelve kilometres of it before you meet a road again.",
    image: unsplash("1510798831971-661eb04b3739"),
  },
];

export const seasonalRatesList: RateItem[] = [
  {
    season: "Winter",
    period: "November to March",
    minStay: "3 nights minimum",
    perNight: "€240",
    description: "Northern lights season. Firewood and the sauna are included.",
  },
  {
    season: "Spring",
    period: "April to May",
    minStay: "2 nights minimum",
    perNight: "€210",
    description: "The quietest months. Long light, snow still on the tops.",
  },
  {
    season: "Summer",
    period: "June to August",
    minStay: "5 nights minimum",
    perNight: "€310",
    description: "Midnight sun. Five nights minimum, and it books a year ahead.",
  },
  {
    season: "Autumn",
    period: "September to October",
    minStay: "2 nights minimum",
    perNight: "€225",
    description: "Storm season, and our own favourite time to be in the house.",
  },
];

export const guestReviewsList: GuestReview[] = [
  {
    quote:
      "We came for the lights and ended up inside most of the week, which turned out to be the point. The stove holds all night if you bank it properly, Marte left a note explaining exactly how.",
    author: "Johanna & Piet",
    location: "Utrecht, Netherlands",
  },
  {
    quote:
      "Booked directly, got an answer the same afternoon, and the door code arrived the morning we flew. No app, no lockbox, no cheerful stranger waiting in the drive. Exactly right.",
    author: "Tomas L.",
    location: "Copenhagen, Denmark",
  },
  {
    quote:
      "Three generations, six people, and nobody was ever in anybody’s way. The second bedroom and the snug did a lot of quiet work there.",
    author: "The Aaltos",
    location: "Helsinki, Finland",
  },
  {
    quote:
      "I have stayed in a lot of cabins that photograph better than they live in. This one is the other way round.",
    author: "Sarah M.",
    location: "Edinburgh, Scotland",
  },
  {
    quote:
      "We have rented a lot of cabins in this country. This is the first one where the firewood was dry, the knives were sharp and the wifi worked. All three.",
    author: "Nils & Ingrid",
    location: "Bergen, Norway",
  },
];

export const journalPosts: JournalPost[] = [
  {
    slug: "a-road-that-ends-and-what-it-costs",
    date: "Sep 15, 2025",
    title: "A road that ends, and what it costs",
    excerpt:
      "Getting here takes most of a day from almost anywhere. That is the price of the view, and it is worth being honest about it.",
    image: unsplash("1510798831971-661eb04b3739"),
  },
  {
    slug: "the-case-for-the-small-window",
    date: "Feb 11, 2026",
    title: "The case for the small window",
    excerpt:
      "Why northern houses frame the view instead of surrendering to it, and what that does to a room in February.",
    image: unsplash("1582719478250-c89cae4dc85b"),
  },
  {
    slug: "how-to-pack-for-a-week-of-nothing",
    date: "Jan 24, 2026",
    title: "How to pack for a week of nothing",
    excerpt:
      "A short list, tested over four winters. Most of it is wool. None of it is a laptop stand.",
    image: unsplash("1544816155-12df9643f363"),
  },
];

export const skandicFaqs: { question: string; answer: string; category?: string }[] = [
  {
    question: "How do we book?",
    answer:
      "Write to us with your dates and how many of you there are. We answer the same day and hold the dates for 48 hours while you decide. There is no account to make and no instant-book button.",
  },
  {
    question: "What is the cancellation policy?",
    answer:
      "Cancel more than 30 days out and the deposit comes back in full. Inside 14 days we keep it, unless we manage to re-let the week — if we do, you get it back.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer:
      "Check in from 16:00, out by 11:00. The door code arrives the morning you travel, so there is nobody to meet and nothing to collect.",
  },
  {
    question: "Can we arrive late at night?",
    answer:
      "Yes. The door code works from 16:00 and does not expire, so a delayed flight is not a problem. Tell us roughly when and we will leave a light on.",
  },
  {
    question: "Do we need a rental car?",
    answer:
      "Essential. The road is cleared from early morning through the winter but it is not gritted, so take the tyres the hire company offers.",
  },
  {
    question: "Is the house accessible?",
    answer:
      "One step at the door, then the whole main floor is level — including the second bedroom and a full bathroom. The loft is a steep stair.",
  },
  {
    question: "Can we bring children?",
    answer:
      "Welcome. There is a cot and a high chair in the store cupboard. The loft stair is steep, and we would think twice with a toddler.",
  },
  {
    question: "Are dogs allowed?",
    answer:
      "One well behaved dog is fine — ask us first. There is a boot room and an outside tap for the muddy end of a walk.",
  },
  {
    question: "Is smoking allowed?",
    answer:
      "Not indoors, and not in the sauna. There is a bench and an ashtray at the east end of the deck.",
  },
  {
    question: "Is there Wi-Fi and a television?",
    answer:
      "Yes, and it is fast enough to work on. There is no television. Most people stop checking their phone somewhere in the second day.",
  },
  {
    question: "Where do we buy groceries?",
    answer:
      "There is a shop in the village, eleven minutes down the road, open until 20:00. Come with the first evening's dinner in the car — after that you have time.",
  },
  {
    question: "Can we see the Northern Lights from the house?",
    answer:
      "Between late September and March, on a clear night, often. We cannot promise weather, but the deck faces north, which helps.",
  },
];
