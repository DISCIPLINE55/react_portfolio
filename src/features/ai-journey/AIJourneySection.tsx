import SectionHeading from "@/components/common/SectionHeading";
import { aiJourneyData } from "@/data/ai-journey";
import { Sparkles, Terminal, BookOpen, ShieldCheck, Cpu } from "lucide-react";
import TechBadge from "@/components/common/TechBadge";

export default function AIJourneySection() {
  return (
    <section id="ai-journey" aria-label="AI and Machine Learning Journey" className="py-16 sm:py-24 bg-card/30 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Growth Trajectory"
          badgeVariant="gold"
          title="AI & Machine Learning Journey"
          subtitle="Actively expanding my software engineering foundation into machine learning through structured study with Next Path Ghana and practical application in education technology."
        />

        {/* Framing Banner */}
        <div className="mb-10 rounded-2xl border border-gold/40 bg-gold/5 p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-gold/20 text-gold border border-gold/30">
                  {aiJourneyData.organization}
                </span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-card border text-foreground">
                  {aiJourneyData.cohort}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Structured AI/ML Foundation Track
              </h3>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
                {aiJourneyData.framing}
              </p>
            </div>

            <div className="flex-shrink-0 text-left md:text-right space-y-1 text-xs">
              <span className="text-muted-foreground block">Current Stage</span>
              <span className="font-mono font-bold text-primary dark:text-gold block">
                Active Learning & Prototyping
              </span>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {aiJourneyData.modules.map((module, i) => (
            <div
              key={module.title}
              className="rounded-2xl border border-border/80 bg-card p-6 flex flex-col justify-between hover:border-gold/40 transition-colors shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-gold">
                    MODULE 0{i + 1}
                  </span>
                  <Terminal className="w-4 h-4 text-muted-foreground" />
                </div>

                <h4 className="text-base font-bold text-foreground mb-2">
                  {module.title}
                </h4>

                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {module.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                  {module.topics.map((t) => (
                    <TechBadge key={t} name={t} variant="outline" size="sm" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Principles & Practical Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border/80 bg-card p-6 space-y-3">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>Ethical AI & Educational Guardrails</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {aiJourneyData.ethicalPrinciples.map((principle, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{principle}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border/80 bg-card p-6 space-y-3">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
              <Cpu className="w-4 h-4 text-gold" />
              <span>Active Experimentation & Applied Research</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              {aiJourneyData.experimentationProjects.map((exp, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-gold mt-0.5">•</span>
                  <span>{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
