import { Category } from "@/types";

export const categories: Category[] = [
  {
    id: "1",
    slug: "home",
    name: "Home",
    image: "/categories/home.jpg",
    description: "Textiles, furniture, and quiet pieces for considered rooms.",
    productCount: 0,
  },
  {
    id: "2",
    slug: "kitchen-dining",
    name: "Kitchen & Dining",
    image: "/categories/kitchen-dining.jpg",
    description: "Everyday tools and tableware for cooking with ease.",
    productCount: 0,
  },
  {
    id: "3",
    slug: "entertaining",
    name: "Entertaining",
    image: "/categories/entertaining.jpg",
    description: "Serving pieces and rituals for gathering at home.",
    productCount: 0,
  },
  {
    id: "4",
    slug: "outdoor-living",
    name: "Outdoor Living",
    image: "/categories/outdoor-living.jpg",
    description: "Terrace, garden, and open-air essentials.",
    productCount: 0,
  },
  {
    id: "5",
    slug: "travel",
    name: "Travel",
    image: "/categories/travel.jpg",
    description: "Bags and companions for weekends and longer journeys.",
    productCount: 0,
  },
  {
    id: "6",
    slug: "apparel",
    name: "Apparel",
    image: "/categories/apparel.jpg",
    description: "Relaxed layers and everyday clothing with an easy line.",
    productCount: 0,
  },
  {
    id: "7",
    slug: "accessories",
    name: "Accessories",
    image: "/categories/accessories.jpg",
    description: "Small, useful pieces that finish a look.",
    productCount: 0,
  },
  {
    id: "8",
    slug: "personal-essentials",
    name: "Personal Essentials",
    image: "/categories/personal-essentials.jpg",
    description: "Bath, scent, and daily rituals for the home.",
    productCount: 0,
  },
  {
    id: "9",
    slug: "fitness-wellness",
    name: "Fitness & Wellness",
    image: "/categories/fitness-wellness.jpg",
    description: "Quiet movement tools for studio and home practice.",
    productCount: 0,
  },
  {
    id: "10",
    slug: "lighting",
    name: "Lighting",
    image: "/categories/lighting.jpg",
    description: "Lamps and lanterns that shape a room with warmth.",
    productCount: 0,
  },
  {
    id: "11",
    slug: "decor",
    name: "Decor",
    image: "/categories/decor.jpg",
    description: "Objects, vessels, and prints with a lasting presence.",
    productCount: 0,
  },
  {
    id: "12",
    slug: "workspace",
    name: "Workspace",
    image: "/categories/workspace.jpg",
    description: "Desk tools and quiet technology for daily work.",
    productCount: 0,
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function syncCategoryCounts(
  counts: Record<string, number>
): void {
  for (const category of categories) {
    category.productCount = counts[category.slug] ?? 0;
  }
}
