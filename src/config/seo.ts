import { siteConfig } from "./site";

export interface SeoProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  author?: string;
}

export const defaultSeo: SeoProps = {
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
  canonical: siteConfig.url,
  ogImage: `${siteConfig.url}${siteConfig.ogImage}`,
  ogType: "website",
  author: siteConfig.name,
};

export function buildJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteConfig.url}/#person`,
        name: siteConfig.name,
        alternateName: ["DISCIPLINE", "DISCIPLINE55", siteConfig.shortName],
        jobTitle: siteConfig.title,
        description: siteConfig.description,
        url: siteConfig.url,
        sameAs: [
          siteConfig.socialLinks.github,
          siteConfig.socialLinks.linkedin,
          siteConfig.socialLinks.twitter,
          `mailto:${siteConfig.contact.email}`,
        ],
        alumniOf: {
          "@type": "EducationalOrganization",
          name: siteConfig.institution.name,
          alternateName: siteConfig.institution.formerName,
        },
        knowsAbout: [
          "Software Engineering",
          "Frontend Development",
          "Educational Technology",
          "Human-Computer Interaction",
          "Accessibility",
          "Machine Learning Fundamentals",
          "React",
          "TypeScript",
          "Next.js",
          "Supabase",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: `${siteConfig.name} Portfolio`,
        publisher: {
          "@id": `${siteConfig.url}/#person`,
        },
      },
    ],
  };
}
