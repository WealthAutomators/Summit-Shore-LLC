"use client";

import { useState } from "react";
import { newsletter } from "@/data/homepage";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="border-t border-border py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-4xl font-medium tracking-tight md:text-5xl">{newsletter.title}</h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">{newsletter.description}</p>
          {submitted ? (
            <p className="mt-8 text-sm text-primary">Thank you. You are on the list.</p>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={newsletter.placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
                className="flex-1 rounded-sm bg-card"
              />
              <Button type="submit" size="lg" className="shrink-0">
                {newsletter.buttonText}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
