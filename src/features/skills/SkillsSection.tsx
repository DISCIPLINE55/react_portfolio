import SectionHeading from "@/components/common/SectionHeading";
import { skillCategories } from "@/data/skills";
import { Code, Database, Smartphone, BrainCircuit, Eye, Wrench } from "lucide-react";
import TechBadge from "@/components/common/TechBadge";

export default function SkillsSection() {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Code className="w-4 h-4 text-primary" />;
      case "backend-data":
        return <Database className="w-4 h-4 text-gold" />;
      case "mobile":
        return <Smartphone className="w-4 h-4 text-primary" />;
      case "ai-ml":
        return <BrainCircuit className="w-4 h-4 text-gold" />;
      case "design-hci":
        return <Eye className="w-4 h-4 text-primary" />;
      default:
        return <Wrench className="w-4 h-4 text-gold" />;
    }
  };

  return (
    <section id="skills" aria-label="Skills and Technical Stack" className="py-16 sm:py-24 bg-card/30 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Technical Ecosystem"
          badgeVariant="wine"
          title="Skills Grouped by Real-World Engineering Domains"
          subtitle="A structured overview of the languages, frameworks, database architectures, and developer workflows I apply in practice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm hover:border-primary/30 transition-all hover:shadow-card"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="p-2 rounded-lg bg-muted border border-border/80">
                    {getCategoryIcon(category.id)}
                  </div>
                  <h3 className="text-base font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed mb-5">
                  {category.description}
                </p>

                {/* Skills list with contextual focus */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-foreground">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-snug">
                        {skill.focus}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag summary */}
              <div className="pt-4 mt-6 border-t border-border/60 flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <TechBadge key={skill.name} name={skill.name} size="sm" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
