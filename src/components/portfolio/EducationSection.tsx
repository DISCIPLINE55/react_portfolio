import { GraduationCap } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-3 sm:mb-4">
              Education
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Academic background and ongoing learning journey
            </p>
          </div>
          
          <article className="group rounded-2xl border p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 bg-card hover:border-primary/30 hover:-translate-y-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
              
              <div className="flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors mb-1 sm:mb-2">
                  BSc in Information Technology Education
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
                  Akenten Appiah-Menka University of Skills Training and Entrepreneurship  Development (AAMUSTED)
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2">
                  <p className="text-xs sm:text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full w-fit">
                    Expected Graduation: 2027
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Currently in Year 2 of 4
                  </p>
                </div>
              </div>
            </div>
            
            <div className="border-t pt-4 sm:pt-6">
              <h4 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 text-foreground">
                Key Areas of Study
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Core IT principles and practices</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Software Development Methodologies</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Database Management Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Network Infrastructure and Security</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>IT Project Management</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  <span>Educational Technology</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3 text-foreground">
                Academic Philosophy
              </h4>
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed">
                Combining theoretical knowledge with practical application to bridge the gap between technology and education. 
                Focused on creating inclusive, accessible learning environments through innovative tech solutions.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
