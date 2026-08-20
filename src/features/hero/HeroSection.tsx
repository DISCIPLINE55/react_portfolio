import { ArrowDown, ArrowRight, Download, FileText, Sparkles, GraduationCap, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import TechBadge from "@/components/common/TechBadge";
import profileImage from "@/assets/profile.jpg";

export default function HeroSection() {

  return (
    <section
      id="hero"
      aria-label="Hero Section"
      className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-20 lg:pb-28 overflow-hidden"
    >
      {/* Subtle brand ambient glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 -z-10 opacity-30 dark:opacity-40"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,hsl(var(--primary)/0.35),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            {/* Status & Credibility Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary dark:text-wine-light border border-primary/25">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                {siteConfig.title}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gold/15 text-gold dark:text-gold-light border border-gold/30">
                <Sparkles className="w-3 h-3" />
                {siteConfig.aiJourney.program} ({siteConfig.aiJourney.cohort})
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Engineering practical software for{" "}
                <span className="text-primary dark:text-wine-light">education</span>,{" "}
                <span className="text-foreground">usability</span>, and real-world scale.
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {siteConfig.headline} Combining BSc IT Education pedagogy from USTED with modern full-stack development, offline-first architectures, and responsible AI workflows.
              </p>
            </div>

            {/* Credibility Context Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1 max-w-xl text-xs sm:text-sm text-muted-foreground border-y border-border/80 my-4">
              <div className="flex items-center gap-2.5 py-1.5">
                <div className="p-1.5 rounded-md bg-primary/10 text-primary">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">BSc IT Education</span>
                  <span>USTED (Level 300 / Final-Year)</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5 py-1.5">
                <div className="p-1.5 rounded-md bg-gold/15 text-gold">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-semibold text-foreground block">Mankessim, Ghana</span>
                  <span>Software & EdTech Builder</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md">
                <a href="#projects">
                  Explore Projects <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="border-border hover:border-primary/40 hover:bg-muted font-medium">
                <a href="#how-i-build">
                  Architecture & Philosophy
                </a>
              </Button>

              <a
                href={siteConfig.resume.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-border/80 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                aria-label="Download Curriculum Vitae"
              >
                <Download className="w-4 h-4" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Core Tech Stack Micro-bar */}
            <div className="pt-2">
              <p className="text-xs font-mono font-medium uppercase tracking-wider text-muted-foreground mb-2.5">
                Primary Technology Focus
              </p>
              <div className="flex flex-wrap gap-2">
              {siteConfig.heroBadges.map((tech) => (
                  <TechBadge key={tech} name={tech} variant="default" size="sm" />
                ))}
              </div>
            </div>
          </div>

          {/* Profile & Identity Visual (Col 8-12) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer decorative ring */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 bg-card p-3 shadow-elevated">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-muted">
                  <img
                    src={profileImage}
                    alt="Portrait of Ismail Ibrahim Mensah"
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    width={400}
                    height={500}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Identity Tag at bottom of card */}
                <div className="pt-3 px-1 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-foreground">
                      {siteConfig.name}
                    </div>
                    <div className="text-xs text-muted-foreground font-mono">
                      {siteConfig.brand}
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-primary/10 text-primary border border-primary/20">
                    Ghana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
