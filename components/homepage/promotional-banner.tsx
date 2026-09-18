import Link from "next/link";
import Image from "next/image";
import { promotionalBanner } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function PromotionalBanner() {
  return (
    <section className="py-8 md:py-12">
      <Container>
        <div className="relative min-h-[320px] overflow-hidden md:min-h-[380px]">
          <Image
            src={promotionalBanner.image}
            alt={promotionalBanner.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative flex min-h-[320px] items-center px-8 py-12 md:min-h-[380px] md:px-16">
            <div className="max-w-lg text-white">
              <h2 className="font-serif text-4xl font-medium md:text-5xl">{promotionalBanner.title}</h2>
              <p className="mt-4 text-white/85">{promotionalBanner.description}</p>
              <Button asChild size="lg" className="mt-8 bg-white text-foreground hover:bg-sand">
                <Link href={promotionalBanner.buttonLink}>{promotionalBanner.buttonText}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
