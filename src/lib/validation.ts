/**
 * lib/validation.ts
 * Shared, reusable validation utilities.
 * Domain-specific schemas belong in their respective hook files
 * (e.g. useContactForm.ts for contact validation).
 */

/**
 * Checks if a string is a well-formed absolute URL.
 */
export function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Checks if a string is a valid email address using a practical regex.
 * For full server-side validation, always verify independently.
 */
export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

/**
 * Sanitizes user input to prevent XSS in display contexts.
 * Use encodeURIComponent for URL parameters instead.
 */
export function sanitizeString(value: string): string {
  return value.replace(/[<>"'&]/g, "").trim();
}

/**
 * Clamps a number between a minimum and maximum value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}
