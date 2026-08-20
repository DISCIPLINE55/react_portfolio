import React from "react";
import { cn } from "@/lib/utils";

interface ProjectFiltersProps {
  categories: readonly string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function ProjectFilters({
  categories,
  selectedCategory,
  onSelectCategory,
}: ProjectFiltersProps) {
  return (
    <div
      role="group"
      aria-label="Filter projects by category"
      className="flex flex-wrap gap-1.5 pt-2 border-t border-border/60"
    >
      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onSelectCategory(category)}
            aria-pressed={isSelected}
            className={cn(
              "px-3 py-1 rounded-lg text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              isSelected
                ? "bg-primary text-primary-foreground font-semibold shadow-sm"
                : "bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
