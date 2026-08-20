import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  withWordmark?: boolean;
  subtitle?: string;
  className?: string;
  variant?: "badge" | "minimal" | "monochrome";
}

const sizeMap = {
  xs: 20,
  sm: 28,
  md: 36,
  lg: 48,
  xl: 64,
};

export default function BrandLogo({
  size = "md",
  withWordmark = false,
  subtitle = "DISCIPLINE55",
  className,
  variant = "badge",
}: BrandLogoProps) {
  const pixelSize = typeof size === "number" ? size : sizeMap[size] || 36;

  return (
    <div className={cn("inline-flex items-center gap-2.5 select-none group", className)}>
      <svg
        width={pixelSize}
        height={pixelSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        role="img"
        aria-label="DISCIPLINE Brand Mark"
      >
        <defs>
          <linearGradient id="brandWineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8F2342" />
            <stop offset="60%" stop-color="#721832" />
            <stop offset="100%" stop-color="#581124" />
          </linearGradient>

          <linearGradient id="brandGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#F5D77F" />
            <stop offset="50%" stop-color="#D4AF37" />
            <stop offset="100%" stop-color="#B38D22" />
          </linearGradient>

          <linearGradient id="brandObsidianGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#1A1820" />
            <stop offset="100%" stop-color="#0F0E11" />
          </linearGradient>
        </defs>

        {variant === "badge" && (
          <>
            {/* Obsidian squircle container */}
            <rect width="64" height="64" rx="16" fill="url(#brandObsidianGrad)" />
            {/* Subtle Gold / Wine rim */}
            <rect
              width="62"
              height="62"
              x="1"
              y="1"
              rx="15"
              stroke="#D4AF37"
              stroke-opacity="0.3"
              stroke-width="1.2"
            />
          </>
        )}

        {/* Monogram geometry: D + I */}
        <g id="monogram">
          {/* Outer 'D' Arc */}
          <path
            d="M 25 14
               L 37 14
               C 49 14, 55 22, 55 32
               C 55 42, 49 50, 37 50
               L 25 50
               Z"
            fill="url(#brandWineGrad)"
          />

          {/* Inner 'D' Negative space */}
          <path
            d="M 29 21
               L 35 21
               C 42 21, 46 25.5, 46 32
               C 46 38.5, 42 43, 35 43
               L 29 43
               Z"
            fill={variant === "badge" ? "#0F0E11" : "currentColor"}
          />

          {/* Left 'I' Pillar */}
          <rect
            x="11"
            y="14"
            width="10"
            height="36"
            rx="2.5"
            fill="url(#brandGoldGrad)"
          />

          {/* Center Gold Node / Dot */}
          <circle cx="36" cy="32" r="3.5" fill="url(#brandGoldGrad)" />

          {/* Top & Bottom connection notches */}
          <rect x="21" y="18" width="6" height="5" fill="url(#brandGoldGrad)" opacity="0.9" />
          <rect x="21" y="41" width="6" height="5" fill="url(#brandGoldGrad)" opacity="0.9" />
        </g>
      </svg>

      {withWordmark && (
        <div className="flex flex-col text-left">
          <span className="text-sm font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors leading-tight">
            DISCIPLINE
          </span>
          <span className="text-[10px] font-mono font-medium text-muted-foreground uppercase tracking-wider leading-none mt-0.5">
            {subtitle}
          </span>
        </div>
      )}
    </div>
  );
}
