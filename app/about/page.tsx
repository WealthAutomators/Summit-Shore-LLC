import { company } from "@/data/company";
import { PageHero, PageSection } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={`About ${company.name}`}
        description={company.description}
        breadcrumbs={[{ label: "About" }]}
      />

      <Container className="pb-20">
        <div className="grid items-center gap-10 py-12 md:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden bg-muted">
            <Image src="/banners/about.jpg" alt={`About ${company.name}`} fill className="object-cover" sizes="50vw" />
          </div>
          <PageSection title="A point of view">
            <p>
              SUMMIT & SHORE LLC is a contemporary lifestyle retailer for considered living — home,
              entertaining, outdoor spaces, travel, and the everyday wardrobe.
            </p>
            <p className="mt-4">
              We look for pieces that are useful, well made, and easy to live with. The East Quogue
              setting informs an atmosphere of light, ease, and understated coastal life. It is a
              point of view, not a theme.
            </p>
            <p className="mt-4">
              Quality, practical design, and a sense of quiet comfort matter more than novelty.
              The aim is a home that feels gathered rather than decorated.
            </p>
          </PageSection>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Considered living", desc: "Objects chosen for how they are used, not how loudly they appear." },
            { title: "Everyday elegance", desc: "Materials and silhouettes that belong in daily life as much as on a table set for guests." },
            { title: "Practical design", desc: "Beauty that does not get in the way of function — from the kitchen to the journey." },
          ].map(({ title, desc }) => (
            <div key={title} className="border border-border bg-card p-8">
              <h3 className="font-serif text-2xl font-medium">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Button asChild size="lg">
            <Link href="/shop">Shop the collection</Link>
          </Button>
        </div>
      </Container>
    </>
  );
}
