import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: "wine" | "gold";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  badgeVariant = "wine",
  title,
  subtitle,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-12",
        isCenter && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-3 flex", isCenter && "justify-center")}>
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-1 text-xs font-semibold rounded-full tracking-wider uppercase",
              badgeVariant === "wine"
                ? "bg-primary/10 text-primary dark:text-wine-light border border-primary/25"
                : "bg-gold/15 text-gold dark:text-gold-light border border-gold/30"
            )}
          >
            {badge}
          </span>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
