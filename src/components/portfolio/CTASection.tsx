import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { track } from "@/lib/analytics";

export default function CTASection() {
  return (
    <section
      id="hire-me-cta"
      className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white relative overflow-hidden"
      aria-label="Hire Me Call to Action"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white_0.5px,transparent_1px),radial-gradient(circle_at_70%_80%,white_0.5px,transparent_1px)] [background-size:50px_50px]" />
      </div>
      
      <motion.div
        className="container px-4 sm:px-6 lg:px-8 text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-tight mb-4 sm:mb-6 lg:mb-8">
            Ready to bring your ideas to life?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed px-4">
            Whether you need a developer, a creative designer, or an insightful writer,
            I'm here to help. Let's collaborate and build something impactful together.
          </p>
          
          <div className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Button
              variant="secondary"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold bg-white text-orange-700 hover:bg-orange-50 hover:text-orange-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => {
                track("cta_hire_click");
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Hire Ismail
            </Button>
            
            <Button
              asChild
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold border-white/30 text-orange hover:bg-white/10 hover:border-white/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
            >
              <a
                href="https://calendly.com/ismail-ibrahim-mensah/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book a 30-minute call with Ismail Ibrahim Mensah"
                onClick={() => track("cta_calendly_click")}
                className="inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book a Call
              </a>
            </Button>
          </div>
          
          {/* Additional Contact Options */}
          <div className="mt-8 sm:mt-12 lg:mt-16">
            <p className="text-xs sm:text-sm text-white/70 mb-4">
              Prefer a different way to connect?
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8">
              <a 
                href="mailto:ismail.mensah.info@gmail.com" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white transition-colors hover:underline"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/ismail-ibrahim-mensah-81a920312" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white transition-colors hover:underline"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                LinkedIn
              </a>
              <a 
                href="tel:+233536478673" 
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/80 hover:text-white transition-colors hover:underline"
              >
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Me
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
