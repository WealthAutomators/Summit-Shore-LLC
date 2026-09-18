import { Feature, HeroSlide, PromoBanner } from "@/types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    image: "/hero/hero-1.jpg",
    headline: "Rooms made for living well.",
    description:
      "Considered pieces for the home, table, garden, and journey — gathered with an East Coast point of view.",
    ctaText: "Shop the collection",
    ctaLink: "/shop",
  },
];

export const features: Feature[] = [
  {
    id: "1",
    icon: "truck",
    title: "Complimentary shipping",
    description: "On orders over $75 within the contiguous United States.",
  },
  {
    id: "2",
    icon: "shield",
    title: "Thoughtful checkout",
    description: "Encrypted payment and a clear, unhurried process.",
  },
  {
    id: "3",
    icon: "rotate",
    title: "Thirty-day returns",
    description: "Unused items may be returned within 30 days of delivery.",
  },
  {
    id: "4",
    icon: "headphones",
    title: "Customer care",
    description: "Write to us anytime. We respond as promptly as we can.",
  },
];

export const dealsEndTime = new Date(Date.now() + 1000 * 60 * 60 * 18).toISOString();

export const homepageDealsSlugs = [
  "harbor-linen-bedding",
  "heathered-wool-throw",
  "hammered-copper-kettle",
  "outdoor-picnic-blanket",
  "drawstring-swim-shorts",
  "wood-wick-mason-candle",
] as const;

export const homepageBestsellerSlugs = [
  "cotton-bath-towel-set",
  "everyday-ceramic-mug",
  "studio-yoga-mat",
  "clothbound-notebook",
  "slim-leather-wallet",
  "insulated-travel-tumbler",
  "cast-iron-skillet",
  "soft-linen-cushion",
] as const;

export const homepageFeaturedSlugs = [
  "harbor-linen-bedding",
  "fluted-celadon-plate",
  "stemmed-wine-glasses",
  "soft-weekender-duffel",
  "fine-knit-crew-sweater",
  "brass-table-lamp",
  "pale-celadon-vase",
  "canvas-garden-hammock",
] as const;

export const homepageNewArrivalSlugs = [
  "low-profile-side-table",
  "outdoor-picnic-blanket",
  "pour-over-coffee-set",
  "crossbody-day-bag",
  "tripod-floor-lamp",
  "arts-and-crafts-print",
  "compact-e-reader",
  "recovery-foam-roller",
] as const;

export const homepageEntertainingSlugs = [
  "fluted-celadon-plate",
  "satin-flatware-set",
  "stemmed-wine-glasses",
  "walnut-serving-board",
  "generous-serving-bowl",
  "wood-serving-tray",
] as const;

export const homepageTravelSlugs = [
  "soft-weekender-duffel",
  "canvas-day-backpack",
  "crossbody-day-bag",
  "woven-weekend-tote",
  "insulated-travel-tumbler",
  "leather-luggage-tag",
] as const;

export const homepageEditorialSlugs = [
  "sculptural-accent-chair",
  "pale-celadon-vase",
  "brass-table-lamp",
  "heathered-wool-throw",
] as const;

export const curatedCollections = [
  {
    slug: "home",
    name: "Home",
    description: "Textiles and quiet furniture.",
    image: "/categories/home.jpg",
  },
  {
    slug: "outdoor-living",
    name: "Outdoor",
    description: "Terrace and garden living.",
    image: "/categories/outdoor-living.jpg",
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Bags for the next departure.",
    image: "/categories/travel.jpg",
  },
  {
    slug: "kitchen-dining",
    name: "Kitchen",
    description: "Tools for everyday cooking.",
    image: "/categories/kitchen-dining.jpg",
  },
  {
    slug: "entertaining",
    name: "Entertaining",
    description: "The table, set with ease.",
    image: "/categories/entertaining.jpg",
  },
  {
    slug: "apparel",
    name: "Apparel",
    description: "Relaxed layers.",
    image: "/categories/apparel.jpg",
  },
];

export const promotionalBanner: PromoBanner = {
  id: "1",
  title: "A season for gathering.",
  description:
    "New linens, serving pieces, and outdoor essentials — selected for long tables and longer evenings.",
  buttonText: "Explore new arrivals",
  buttonLink: "/new-arrivals",
  image: "/banners/promo.jpg",
};

export const aboutSection = {
  title: "Considered living, quietly made.",
  description:
    "SUMMIT & SHORE LLC gathers useful, beautiful things for contemporary life: the home, the table, the garden, and the journey. We look for practical design, lasting materials, and a sense of ease.",
  checklist: [
    "Objects meant for daily use, not display alone",
    "A mix of home, entertaining, outdoor, and travel",
    "Materials chosen for feel, function, and longevity",
    "An East Coast point of view, never a costume",
  ],
  buttonText: "Read our story",
  buttonLink: "/about",
  image: "/banners/philosophy.jpg",
};

export const lifestyleFeature = {
  eyebrow: "Coastal living",
  title: "Light, air, and rooms that breathe.",
  description:
    "We favor pieces that sit easily in natural light — linen, wood, stone, and glass — and that work as well on a weekday morning as they do when guests stay late.",
  ctaText: "Shop home",
  ctaLink: "/categories/home",
  image: "/banners/lifestyle-living.jpg",
};

export const seasonalFeature = {
  eyebrow: "The season",
  title: "Open the house.",
  description:
    "Indoor-outdoor living, a set table, and the small comforts that make a weekend feel longer than it is.",
  ctaText: "Shop outdoor living",
  ctaLink: "/categories/outdoor-living",
  image: "/banners/seasonal.jpg",
};

export const editorialShowcase = {
  eyebrow: "The edit",
  title: "Pieces with presence.",
  description:
    "A chair, a lamp, a vase — objects that hold a room without asking for attention.",
  ctaText: "View the collection",
  ctaLink: "/shop",
  image: "/banners/editorial-showcase.jpg",
};

export const featuredCollection = {
  title: "Featured collection",
  description: "A current edit of home, table, travel, and dress.",
  bannerImage: "/banners/featured-home.jpg",
  categorySlug: "home",
};

export const bestSellerTabs = [
  { label: "All", slug: "all" },
  { label: "Home", slug: "home" },
  { label: "Kitchen", slug: "kitchen-dining" },
  { label: "Travel", slug: "travel" },
  { label: "Workspace", slug: "workspace" },
];

export const newsletter = {
  title: "Notes from the house.",
  description: "New arrivals, seasonal edits, and a few considered words. No noise.",
  placeholder: "Email address",
  buttonText: "Subscribe",
};

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Top Rated" },
];
