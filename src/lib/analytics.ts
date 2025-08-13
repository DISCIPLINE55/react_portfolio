export function track(event: string, data?: Record<string, any>) {
  try {
    // Dispatch a CustomEvent for potential listeners/analytics adapters
    const detail = { event, data, ts: Date.now() };
    window.dispatchEvent(new CustomEvent("app:track", { detail }));

    // Optional: support Plausible if present
    // @ts-ignore
    if (typeof window !== "undefined" && (window as any).plausible) {
      // @ts-ignore
      (window as any).plausible(event, { props: data });
    }

    // Fallback console log for debugging
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("track:", detail);
    }
  } catch (e) {
    // ignore
  }
}
