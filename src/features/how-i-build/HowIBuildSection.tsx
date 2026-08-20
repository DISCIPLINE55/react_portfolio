import SectionHeading from "@/components/common/SectionHeading";
import { architecturePillars } from "@/data/methodology";

export default function HowIBuildSection() {
  return (
    <section id="how-i-build" aria-label="How I Build - Architecture Principles" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Engineering Principles"
          badgeVariant="wine"
          title="How I Architect & Build Software"
          subtitle="Software quality is determined by intentional decisions made before and during development. These core principles guide my engineering and product design."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {architecturePillars.map((pillar) => (
            <article
              key={pillar.number}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:border-primary/40 transition-all hover:shadow-card group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-primary dark:text-gold bg-primary/10 dark:bg-gold/15 px-2.5 py-0.5 rounded-full border border-primary/20 dark:border-gold/30">
                    {pillar.number}
                  </span>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-foreground/80 mb-3 leading-relaxed">
                  {pillar.summary}
                </p>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.details}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
