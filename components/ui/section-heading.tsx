import Link from "next/link";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  viewMoreLink?: string;
  viewMoreText?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  eyebrow,
  viewMoreLink,
  viewMoreText = "View all",
  className,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        centered && "text-center sm:flex-col sm:items-center",
        className
      )}
    >
      <div className={cn(centered && "max-w-2xl")}>
        {eyebrow && (
          <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </p>
        )}
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {viewMoreLink && (
        <Link
          href={viewMoreLink}
          className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary transition-colors hover:text-foreground"
        >
          {viewMoreText}
        </Link>
      )}
    </div>
  );
}
