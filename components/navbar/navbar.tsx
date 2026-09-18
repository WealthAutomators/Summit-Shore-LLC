"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { company } from "@/data/company";
import { navigationLinks } from "@/data/navigation";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SearchBar } from "@/components/navbar/search-bar";
import { FREE_SHIPPING_THRESHOLD } from "@/lib/constants";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  return (
    <header className="border-b border-border bg-background">
      <div className="hidden border-b border-border/80 bg-muted/50 md:block">
        <Container className="flex h-9 items-center justify-between text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          <a href={`mailto:${company.email}`} className="transition-colors hover:text-foreground">
            {company.email}
          </a>
          <p>Complimentary shipping over ${FREE_SHIPPING_THRESHOLD}</p>
        </Container>
      </div>

      <Container>
        <div className="flex h-16 items-center gap-4 lg:h-[4.5rem]">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>

          <Link href="/" className="flex min-w-0 flex-col justify-center lg:w-56">
            <span className="font-serif text-lg font-medium tracking-[0.18em] text-foreground sm:text-xl">
              SUMMIT &amp; SHORE
            </span>
            <span className="hidden text-[10px] font-medium uppercase tracking-[0.32em] text-primary sm:block">
              LLC
            </span>
            <span className="sr-only">{company.name}</span>
          </Link>

          <nav className="hidden flex-1 justify-center lg:flex">
            <ul className="flex items-center gap-1">
              {navigationLinks.map((link) => (
                <li
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="block px-3 py-2 text-[12px] font-medium uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                  {link.children && activeDropdown === link.label && (
                    <div className="absolute left-0 top-full z-50 min-w-[220px] border border-border bg-card py-3 shadow-sm">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-0.5">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setSearchOpen((open) => !open)}
              aria-label="Search"
              aria-expanded={searchOpen}
            >
              <Search className="h-[18px] w-[18px]" />
            </Button>

            <Button variant="ghost" size="icon" asChild className="h-10 w-10">
              <Link href="/profile" aria-label="Account">
                <User className="h-[18px] w-[18px]" />
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
              <Link href="/wishlist" aria-label="Wishlist">
                <Heart className="h-[18px] w-[18px]" />
                {wishlist.length > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-medium text-primary-foreground">
                    {wishlist.length}
                  </span>
                )}
              </Link>
            </Button>

            <Button variant="ghost" size="icon" asChild className="relative h-10 w-10">
              <Link href="/cart" aria-label="Cart">
                <ShoppingBag className="h-[18px] w-[18px]" />
                {itemCount > 0 && (
                  <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[9px] font-medium text-primary-foreground">
                    {itemCount}
                  </span>
                )}
              </Link>
            </Button>
          </div>
        </div>
      </Container>

      {searchOpen && (
        <div className="border-t border-border bg-card">
          <Container className="py-4">
            <SearchBar onClose={() => setSearchOpen(false)} />
          </Container>
        </div>
      )}

      {mobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <Container className="py-4">
            <ul className="space-y-1">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-2 py-2.5 text-sm font-medium uppercase tracking-[0.14em]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <ul className="ml-2 space-y-0.5 border-l border-border pl-3">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
}
