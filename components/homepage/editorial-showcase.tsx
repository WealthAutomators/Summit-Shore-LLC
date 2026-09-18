"use client";

import Image from "next/image";
import Link from "next/link";
import { editorialShowcase, homepageEditorialSlugs } from "@/data/homepage";
import { getProductsBySlugs } from "@/data/products";
import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/product-card";
import { Button } from "@/components/ui/button";

export function EditorialShowcase() {
  const products = getProductsBySlugs(homepageEditorialSlugs);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="relative aspect-[4/5] overflow-hidden lg:col-span-5">
            <Image
              src={editorialShowcase.image}
              alt={editorialShowcase.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              {editorialShowcase.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {editorialShowcase.title}
            </h2>
            <p className="mt-4 max-w-xl text-muted-foreground">{editorialShowcase.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <Button asChild variant="outline" className="mt-8" size="lg">
              <Link href={editorialShowcase.ctaLink}>{editorialShowcase.ctaText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
