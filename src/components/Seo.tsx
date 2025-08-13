import { useEffect } from "react";

type SeoProps = {
  title: string;
  description?: string;
  canonical?: string;
};

export default function Seo({ title, description, canonical }: SeoProps) {
  useEffect(() => {
    const truncatedTitle = title.length > 60 ? title.slice(0, 57) + "..." : title;
    document.title = truncatedTitle;

    const setMeta = (attr: "name" | "property", key: string, value: string) => {
      if (!value) return;
      // Escape the key to prevent injection attacks
      const escapedKey = key.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      let el = document.querySelector(`meta[${attr}="${escapedKey}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const desc = (description || "").slice(0, 160);
    if (desc) {
      let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", desc);
    }

    const origin = window.location.origin;
    const href = canonical || window.location.href;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    const image = `${origin}/images/og.jpg`;

    // Open Graph
    setMeta("property", "og:title", truncatedTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", href);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", truncatedTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", image);

    // JSON-LD (WebSite)
    const schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: truncatedTitle,
      url: href,
    };
    let script = document.getElementById("ld-json-website") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "ld-json-website";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, [title, description, canonical]);

  return null;
}
