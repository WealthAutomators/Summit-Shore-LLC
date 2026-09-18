import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Collections",
};

export default function CategoriesPage() {
  return (
    <Container className="py-12 md:py-16">
      <h1 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">Collections</h1>
      <p className="mt-3 max-w-xl text-muted-foreground">
        Browse home, the table, outdoor living, travel, and everyday essentials.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.id} href={`/categories/${category.slug}`} className="group overflow-hidden bg-card">
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="border border-t-0 border-border p-5">
              <h2 className="font-serif text-2xl font-medium group-hover:text-primary">{category.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                {category.productCount} products
              </p>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
}
