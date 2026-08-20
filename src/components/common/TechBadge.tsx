import React from "react";
import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "default" | "gold" | "wine" | "outline";
  size?: "sm" | "md";
  className?: string;
}

export default function TechBadge({
  name,
  variant = "default",
  size = "sm",
  className,
}: TechBadgeProps) {
  const variantStyles = {
    default:
      "bg-muted/80 text-foreground/90 border-border/80 hover:border-primary/40",
    wine: "bg-primary/10 text-primary dark:text-wine-light border-primary/25",
    gold: "bg-gold/10 text-gold dark:text-gold-light border-gold/30",
    outline: "bg-transparent text-muted-foreground border-border hover:text-foreground",
  };

  const sizeStyles = {
    sm: "text-xs px-2.5 py-0.5",
    md: "text-xs sm:text-sm px-3 py-1",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium rounded-md border transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {name}
    </span>
  );
}
