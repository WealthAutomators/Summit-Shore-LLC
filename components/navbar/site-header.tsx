"use client";

import { Navbar } from "@/components/navbar/navbar";

export function SiteHeader() {
  return (
    <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <Navbar />
    </div>
  );
}
