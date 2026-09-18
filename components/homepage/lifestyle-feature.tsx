import Image from "next/image";
import Link from "next/link";
import { lifestyleFeature } from "@/data/homepage";
import { Button } from "@/components/ui/button";

export function LifestyleFeature() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src={lifestyleFeature.image}
        alt={lifestyleFeature.title}
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative flex min-h-[70vh] items-center">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl text-white">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-white/80">
              {lifestyleFeature.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium leading-tight md:text-6xl">
              {lifestyleFeature.title}
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/85 md:text-base">
              {lifestyleFeature.description}
            </p>
            <Button asChild size="lg" className="mt-8 bg-white text-foreground hover:bg-sand">
              <Link href={lifestyleFeature.ctaLink}>{lifestyleFeature.ctaText}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
