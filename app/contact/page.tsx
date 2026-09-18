"use client";

import { useState } from "react";
import { company } from "@/data/company";
import { PageHero } from "@/components/ui/page-layout";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        title="Contact"
        description="Write to us with questions about an order or a product."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <Container className="pb-20">
        <div className="grid gap-12 py-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-medium">SUMMIT &amp; SHORE LLC</h2>
            <p className="mt-3 text-muted-foreground">
              We typically respond within one business day. For order-related inquiries, please include your order number.
            </p>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Email</p>
                  <a href={`mailto:${company.email}`} className="text-sm hover:text-primary">
                    {company.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-4 w-4 text-primary" />
                <div>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Address</p>
                  <p className="text-sm leading-relaxed">
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="border border-border bg-card p-6 md:p-8">
            <h2 className="font-serif text-2xl font-medium">Send a message</h2>
            {submitted ? (
              <div className="mt-8 py-8 text-center">
                <CheckCircle className="mx-auto h-10 w-10 text-primary" />
                <p className="mt-4 font-medium">Message sent</p>
                <p className="mt-2 text-sm text-muted-foreground">Thank you. We will reply as soon as we can.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required className="mt-1.5" placeholder="Your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" required className="mt-1.5" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" required className="mt-1.5" placeholder="How can we help?" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" required className="mt-1.5" placeholder="Tell us more..." rows={5} />
                </div>
                <Button type="submit" size="lg">
                  Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </>
  );
}
