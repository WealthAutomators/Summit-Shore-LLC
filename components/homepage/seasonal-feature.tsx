import Image from "next/image";
import Link from "next/link";
import { seasonalFeature } from "@/data/homepage";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function SeasonalFeature() {
  return (
    <section className="bg-card py-16 md:py-24">
      <Container>
        <div className="grid overflow-hidden md:grid-cols-2">
          <div className="relative min-h-[420px] md:min-h-[560px]">
            <Image
              src={seasonalFeature.image}
              alt={seasonalFeature.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center bg-muted px-8 py-12 md:px-14 md:py-16">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
              {seasonalFeature.eyebrow}
            </p>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight md:text-5xl">
              {seasonalFeature.title}
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">{seasonalFeature.description}</p>
            <Button asChild size="lg" className="mt-8 w-fit">
              <Link href={seasonalFeature.ctaLink}>{seasonalFeature.ctaText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
