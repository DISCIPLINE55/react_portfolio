import { useEffect, useState } from "react";

/**
 * useScrollProgress
 * Tracks the vertical scroll progress of the page as a 0–100 percentage.
 * Useful for scroll progress indicators, parallax effects, and analytics.
 *
 * @returns scroll progress from 0 (top) to 100 (bottom)
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculate = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setProgress(100);
        return;
      }
      setProgress(Math.min(Math.round((scrollTop / docHeight) * 100), 100));
    };

    window.addEventListener("scroll", calculate, { passive: true });
    calculate(); // initialize on mount

    return () => window.removeEventListener("scroll", calculate);
  }, []);

  return progress;
}
