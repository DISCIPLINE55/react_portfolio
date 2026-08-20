import React from "react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function StatCard({
  label,
  value,
  description,
  icon,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border/80 bg-card/60 p-5 shadow-sm hover:border-primary/30 transition-all",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        {icon && <div className="text-primary">{icon}</div>}
      </div>
      <div className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
        {value}
      </div>
      {description && (
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
