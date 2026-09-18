import Image from "next/image";
import Link from "next/link";
import { aboutSection } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section className="bg-card py-16 md:py-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
            <Image
              src={aboutSection.image}
              alt={aboutSection.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-primary">Philosophy</p>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight md:text-5xl">{aboutSection.title}</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{aboutSection.description}</p>
            <ul className="mt-8 space-y-3">
              {aboutSection.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="mt-2 h-px w-6 shrink-0 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" variant="outline" className="mt-10">
              <Link href={aboutSection.buttonLink}>{aboutSection.buttonText}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
