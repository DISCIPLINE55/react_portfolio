import { useEffect } from "react";
import { siteConfig } from "@/config/site";

interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

export default function Seo({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.shortName}`
      : `${siteConfig.name} — ${siteConfig.title}`;
    document.title = fullTitle;

    const setMeta = (attr: "name" | "property", key: string, value: string) => {
      if (!value) return;
      const escapedKey = key.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
      let el = document.querySelector(`meta[${attr}="${escapedKey}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    const desc = (description || siteConfig.description).slice(0, 160);
    setMeta("name", "description", desc);

    const href = canonical
      ? `${siteConfig.url}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
      : window.location.href;

    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    const image = ogImage || `${siteConfig.url}${siteConfig.ogImage}`;

    // Open Graph
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", desc);
    setMeta("property", "og:type", ogType);
    setMeta("property", "og:image", image);
    setMeta("property", "og:url", href);

    // Twitter / X
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", desc);
    setMeta("name", "twitter:image", image);
    setMeta("name", "twitter:site", "@MensahIsmail");

    // Dynamic Route JSON-LD Injection
    let jsonLdScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.type = "application/ld+json";
      jsonLdScript.setAttribute("data-route-jsonld", "true");
      jsonLdScript.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      if (jsonLdScript && jsonLdScript.parentNode) {
        jsonLdScript.parentNode.removeChild(jsonLdScript);
      }
    };
  }, [title, description, canonical, ogImage, ogType, jsonLd]);

  return null;
}
