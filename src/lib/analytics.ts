declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, unknown> }) => void;
  }
}

export function track(event: string, data?: Record<string, unknown>) {
  try {
    const detail = { event, data, ts: Date.now() };
    window.dispatchEvent(new CustomEvent("app:track", { detail }));

    if (typeof window !== "undefined" && window.plausible) {
      window.plausible(event, { props: data });
    }

    if (import.meta.env.DEV) {
      console.debug("track:", detail);
    }
  } catch {
    // ignore
  }
}
