import React from "react";
import { Github, Linkedin, Twitter, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  className?: string;
  iconSize?: "sm" | "md" | "lg";
  showLabels?: boolean;
}

export default function SocialLinks({
  className,
  iconSize = "md",
  showLabels = false,
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  const buttonSizeClasses = {
    sm: "p-1.5",
    md: "p-2",
    lg: "p-2.5",
  };

  const links = [
    {
      name: "GitHub",
      href: siteConfig.socialLinks.github,
      icon: Github,
      label: "DISCIPLINE55",
    },
    {
      name: "LinkedIn",
      href: siteConfig.socialLinks.linkedin,
      icon: Linkedin,
      label: "Ismail Ibrahim Mensah",
    },
    {
      name: "Twitter / X",
      href: siteConfig.socialLinks.twitter,
      icon: Twitter,
      label: "@MensahIsmail",
    },
    {
      name: "Email",
      href: `mailto:${siteConfig.contact.email}`,
      icon: Mail,
      label: siteConfig.contact.email,
    },
  ];

  return (
    <div className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Ismail on ${link.name}`}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg border border-border/80 bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/40 hover:bg-muted/80 transition-all",
              buttonSizeClasses[iconSize]
            )}
          >
            <Icon className={sizeClasses[iconSize]} aria-hidden="true" />
            {showLabels && (
              <span className="text-xs font-medium">{link.label}</span>
            )}
          </a>
        );
      })}
    </div>
  );
}
