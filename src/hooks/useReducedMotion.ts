/**
 * useReducedMotion
 * Reads the user's `prefers-reduced-motion` OS-level preference.
 * Components should use this to skip or simplify animations
 * when the user has opted for reduced motion.
 *
 * @returns true if the user prefers reduced motion, false otherwise.
 */
export function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
