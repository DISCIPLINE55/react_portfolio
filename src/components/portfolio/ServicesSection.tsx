import { Code2, Palette, PenTool } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    desc: "Responsive, performant web apps with modern stacks.",
    features: ["React, HTML, CSS, JS", "Responsive Design", "API Integration", "Perf Optimization"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Intuitive, accessible interfaces with strong visuals.",
    features: ["Research & Wireframes", "Prototyping", "Visual Design", "Accessibility"],
  },
  {
    icon: PenTool,
    title: "Content Writing",
    desc: "Clear, compelling technical and product content.",
    features: ["Docs", "Blogs & Articles", "Website Copy", "Editing"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4">
              What I Offer
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Comprehensive digital solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {services.map((s, index) => (
              <article 
                key={s.title} 
                className={`group rounded-2xl border p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card hover:border-primary/20 hover:-translate-y-2 ${
                  index === 1 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 mb-4 sm:mb-6">
                    <s.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed flex-grow">
                    {s.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <h4 className="text-xs sm:text-sm font-medium text-foreground mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="leading-relaxed">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Call to action */}
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Need a custom solution? Let's discuss your project.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-primary hover:text-primary-foreground border border-primary hover:bg-primary rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
