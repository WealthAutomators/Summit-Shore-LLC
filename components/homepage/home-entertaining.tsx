"use client";

import { homepageEntertainingSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProductCard } from "@/components/product/product-card";

export function HomeEntertaining() {
  const products = getProductsBySlugs(homepageEntertainingSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Home & entertaining"
          title="The table, set."
          subtitle="Stoneware, glass, and serving pieces for dinners that last."
          viewMoreLink="/categories/entertaining"
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
