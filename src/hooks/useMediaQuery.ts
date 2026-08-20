import { useEffect, useState } from "react";

/**
 * useMediaQuery
 * Reactively evaluates a CSS media query against the current viewport.
 * Returns true when the query matches.
 *
 * @param query - CSS media query string, e.g. "(min-width: 768px)"
 * @returns boolean indicating if the media query currently matches
 *
 * @example
 * const isDesktop = useMediaQuery("(min-width: 1024px)");
 * const isTablet = useMediaQuery("(min-width: 768px)");
 * const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQueryList = window.matchMedia(query);

    const handleChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQueryList.addEventListener("change", handleChange);

    return () => mediaQueryList.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

// Semantic breakpoint helpers
export const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  "2xl": "(min-width: 1536px)",
} as const;
