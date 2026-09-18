"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { heroSlides } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function HeroBanner() {
  const slide = heroSlides[0];

  return (
    <section className="relative min-h-[78vh] w-full overflow-hidden md:min-h-[88vh]">
      <Image
        src={slide.image}
        alt={slide.headline}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
      <div className="relative flex min-h-[78vh] items-end md:min-h-[88vh]">
        <div className="mx-auto w-full max-w-[1400px] px-4 pb-12 sm:px-6 md:pb-20 lg:px-8">
          <motion.div
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/80">
              East Coast contemporary living
            </p>
            <h1 className="mt-4 font-serif text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {slide.headline}
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
              {slide.description}
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-white text-foreground hover:bg-sand">
                <Link href={slide.ctaLink}>{slide.ctaText}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
