import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { track } from "@/lib/analytics";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6">
              My Professional Resume
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4 leading-relaxed">
              Download my latest resume to get a comprehensive overview of my experience, skills, and achievements.
            </p>
          </div>
          
          {/* Resume Preview Card */}
          <div className="group rounded-2xl border bg-card p-6 sm:p-8 lg:p-10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:border-primary/30 hover:-translate-y-1 mb-8 sm:mb-12">
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
              <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                <Download className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" />
              </div>
              
              <div className="text-center sm:text-left flex-grow">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  Professional Resume PDF
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed mb-4">
                  Complete professional profile including work experience, technical skills, projects, education, and certifications.
                </p>
                
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
                  <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    PDF Format
                  </span>
                  <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    ATS Friendly
                  </span>
                  <span className="flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Updated 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Download Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button 
              asChild 
              variant="hero" 
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <a
                href="/docs/Ismail_Ibrahim_Mensah.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("resume_download_click")}
                className="inline-flex items-center gap-2 sm:gap-3"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </a>
            </Button>
            
            <button 
              onClick={() => window.open('/docs/Ismail_Ibrahim_Mensah.pdf', '_blank')}
              className="text-xs sm:text-sm text-primary hover:text-primary/80 hover:underline transition-colors font-medium"
            >
              View Online
            </button>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-muted/30 rounded-xl border">
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <strong>Note:</strong> This resume is regularly updated to reflect my latest projects, skills, and achievements. 
              For the most current information, feel free to connect with me directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
