import React from "react";
import { ArrowDown, ArrowRight, ShieldCheck, Cpu, Database, Smartphone, CheckCircle } from "lucide-react";
import { ProjectArchitectureLayer } from "@/types/project";
import TechBadge from "./TechBadge";

interface ArchitectureFlowProps {
  layers: ProjectArchitectureLayer[];
  governancePrinciple?: {
    principle: string;
    implementation: string;
  };
}

export default function ArchitectureFlow({
  layers,
  governancePrinciple,
}: ArchitectureFlowProps) {
  const getLayerIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Smartphone className="w-5 h-5 text-primary" />;
      case 1:
        return <Database className="w-5 h-5 text-gold" />;
      case 2:
        return <Cpu className="w-5 h-5 text-primary" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-gold" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
        {layers.map((layer, index) => (
          <div
            key={layer.title}
            className="flex flex-col rounded-xl border border-border/80 bg-card p-5 relative shadow-sm hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                {getLayerIcon(index)}
              </div>
              <span className="text-xs font-mono font-bold text-muted-foreground">
                LAYER 0{index + 1}
              </span>
            </div>

            <h4 className="text-sm font-semibold text-foreground mb-2">
              {layer.title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-grow">
              {layer.description}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
              {layer.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} size="sm" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {governancePrinciple && (
        <div className="rounded-xl border border-gold/40 bg-gold/5 p-5">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-gold/20 text-gold flex-shrink-0 mt-0.5">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase text-gold">
                  Governance Principle
                </span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-gold/20 text-gold font-semibold">
                  {governancePrinciple.principle}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {governancePrinciple.implementation}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
