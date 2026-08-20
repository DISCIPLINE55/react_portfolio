import SectionHeading from "@/components/common/SectionHeading";
import { educationData, verifiedCredentials } from "@/data/education";
import { GraduationCap, ExternalLink, Award, CheckCircle, BookOpen } from "lucide-react";
import TechBadge from "@/components/common/TechBadge";

export default function EducationSection() {
  return (
    <section id="education" aria-label="Education and Academic Journey" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Background"
          badgeVariant="wine"
          title="Education & Verified Credentials"
          subtitle="Combining university-level computer science and pedagogical training with globally verified professional certifications."
        />

        {/* Main Degree Card */}
        <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 lg:p-10 mb-12 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-border/80">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-medium text-primary dark:text-wine-light">
                    {educationData.institution}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 max-w-3xl">
                {educationData.description}
              </p>
            </div>

            <div className="flex-shrink-0 flex flex-wrap lg:flex-col gap-2 text-xs">
              <span className="px-3 py-1 rounded-full font-mono font-semibold bg-primary/10 text-primary border border-primary/20 w-fit">
                {educationData.level}
              </span>
              <span className="px-3 py-1 rounded-full font-mono bg-muted text-muted-foreground border w-fit">
                {educationData.duration}
              </span>
              <span className="px-3 py-1 rounded-full font-mono bg-muted text-muted-foreground border w-fit">
                {educationData.location}
              </span>
            </div>
          </div>

          {/* Core Curriculum Areas */}
          <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Key Curriculum & Coursework
              </h4>
              <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-muted-foreground">
                {educationData.coreAreas.map((area, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border/80 bg-muted/30 p-5 space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-foreground">
                Pedagogical & HCI Philosophy
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {educationData.pedagogicalPhilosophy}
              </p>
            </div>
          </div>
        </div>

        {/* Verified Credentials Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-bold text-foreground tracking-tight flex items-center gap-2">
              <Award className="w-5 h-5 text-gold" />
              <span>Verified Professional Certifications</span>
            </h3>
            <span className="text-xs font-mono text-muted-foreground">
              04 Verified Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verifiedCredentials.map((cert) => (
              <article
                key={cert.id}
                className="rounded-xl border border-border/80 bg-card p-5 sm:p-6 flex flex-col justify-between hover:border-gold/40 transition-colors shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-gold">
                      {cert.issuer}
                    </span>
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Verify credential for ${cert.title}`}
                    >
                      <span>Verify</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h4 className="text-base font-bold text-foreground mb-2">
                    {cert.title}
                  </h4>

                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <TechBadge key={skill} name={skill} variant="outline" size="sm" />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
