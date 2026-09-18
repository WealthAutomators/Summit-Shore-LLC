"use client";

import Image from "next/image";
import Link from "next/link";
import { curatedCollections } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function CategoryCarousel() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Collections"
          title="A considered assortment."
          subtitle="Home, outdoor, travel, and the table — edited for everyday elegance."
        />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-6">
          {curatedCollections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/categories/${collection.slug}`}
              className="group relative overflow-hidden bg-muted"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-serif text-xl text-white">{collection.name}</p>
                  <p className="mt-1 text-xs text-white/75">{collection.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
