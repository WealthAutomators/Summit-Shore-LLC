"use client";

import { homepageTravelSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Carousel } from "@/components/ui/carousel";
import { ProductCard } from "@/components/product/product-card";

export function SecondaryCollection() {
  const products = getProductsBySlugs(homepageTravelSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Travel"
          title="Packed with intention."
          subtitle="Weekenders, totes, and small companions for the next departure."
          viewMoreLink="/categories/travel"
        />
        <Carousel slidesToShow={4} className="px-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </Container>
    </section>
  );
}
