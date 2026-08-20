import { Link } from "react-router-dom";
import { siteConfig } from "@/config/site";
import { flagshipRoutes } from "@/config/navigation";
import SocialLinks from "@/components/common/SocialLinks";
import BrandLogo from "@/components/common/BrandLogo";
import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-card/40 mt-20" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size={40} />
              <div>
                <span className="text-base sm:text-lg font-bold text-foreground tracking-tight block">
                  {siteConfig.name}
                </span>
                <p className="text-xs font-mono text-primary dark:text-gold uppercase tracking-wider">
                  {siteConfig.brand}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-md">
              {siteConfig.headline}
            </p>

            <div className="space-y-1.5 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>{siteConfig.institution.program} — {siteConfig.institution.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                <span>{siteConfig.aiJourney.program} ({siteConfig.aiJourney.cohort})</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>{siteConfig.location.city}, {siteConfig.location.country}</span>
              </div>
            </div>

            <div className="pt-2">
              <SocialLinks iconSize="sm" />
            </div>
          </div>

          {/* Flagship Case Studies */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              Flagship Projects
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {flagshipRoutes.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/projects/${item.slug}`}
                    className="hover:text-primary hover:underline transition-colors inline-flex items-center gap-1"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exploration Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              Explore
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a href="/#about" className="hover:text-primary transition-colors">
                  About & Story
                </a>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">
                  All Projects Directory
                </Link>
              </li>
              <li>
                <a href="/#how-i-build" className="hover:text-primary transition-colors">
                  How I Build (Architecture)
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-primary transition-colors">
                  Skills & Tech Stack
                </a>
              </li>
              <li>
                <a href="/#ai-journey" className="hover:text-primary transition-colors">
                  AI & ML Journey
                </a>
              </li>
              <li>
                <a href="/#education" className="hover:text-primary transition-colors">
                  Academic Background
                </a>
              </li>
              <li>
                <Link to="/articles" className="hover:text-primary transition-colors">
                  Notes & Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Resume */}
          <div className="space-y-3">
            <p className="text-xs font-mono font-semibold uppercase tracking-wider text-foreground">
              Career & Actions
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              <a
                href={siteConfig.resume.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary dark:text-wine-light hover:underline font-medium"
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <p className="text-xs text-muted-foreground">
                Updated for {siteConfig.resume.lastUpdated}
              </p>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                className="inline-block px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20 text-xs font-semibold transition-colors"
              >
                Discuss an Opportunity →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {siteConfig.name}.</span>
            <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-muted">
              {siteConfig.brand}
            </span>
          </div>

          <p className="text-center sm:text-right">
            Built with React, TypeScript & Tailwind CSS • Focused on HCI & EdTech
          </p>
        </div>
      </div>
    </footer>
  );
}
