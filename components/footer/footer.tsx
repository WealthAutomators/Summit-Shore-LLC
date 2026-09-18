import Link from "next/link";
import Image from "next/image";
import { company } from "@/data/company";
import { footerLinks, paymentMethods } from "@/data/navigation";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <p className="font-serif text-2xl font-medium tracking-[0.12em]">SUMMIT &amp; SHORE</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-primary">LLC</p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">{company.description}</p>
            <div className="mt-6 text-sm leading-relaxed text-muted-foreground">
              <p>{company.address.street}</p>
              <p>
                {company.address.city}, {company.address.state} {company.address.zip}
              </p>
              <a href={`mailto:${company.email}`} className="mt-3 inline-block transition-colors hover:text-primary">
                {company.email}
              </a>
            </div>
          </div>
          <FooterCol title="Shop" links={footerLinks.shop} />
          <FooterCol title="Collections" links={footerLinks.collections} />
          <FooterCol title="Customer Care" links={footerLinks.customerCare} />
          <div>
            <FooterCol title="About" links={footerLinks.about} />
            <div className="mt-8">
              <FooterCol title="Policies" links={footerLinks.legal} />
            </div>
          </div>
        </div>
      </Container>
      <Separator />
      <Container className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
        <p className="text-xs text-muted-foreground">{company.copyright}</p>
        <div className="flex items-center gap-2">
          {paymentMethods.map((method) => (
            <Image key={method.name} src={method.icon} alt={method.name} width={40} height={28} />
          ))}
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em]">{title}</h3>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
