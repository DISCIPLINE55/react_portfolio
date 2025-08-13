import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { track } from "@/lib/analytics";

export default function CTASection() {
  return (
    <section
      id="hire-me-cta"
      className="py-16 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white"
      aria-label="Hire Me Call to Action"
    >
      <motion.div
        className="container text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-semibold tracking-tight">
          Ready to bring your ideas to life?
        </h2>
        <p className="mt-2 text-white/80 max-w-2xl mx-auto leading-relaxed">
          Whether you need a developer, a creative designer, or an insightful writer,
          I’m here to help. Let’s collaborate and build something impactful together.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Button
            variant="secondary"
            size="pill"
            className="flex items-center gap-2 bg-white text-orange-700 hover:bg-orange-100"
            onClick={() => {
              track("cta_hire_click");
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <Briefcase className="w-4 h-4" />
            Hire Ismail
          </Button>
          <Button
            asChild
            variant="secondary"
            size="pill"
            className="bg-white text-orange-700 hover:bg-orange-100"
          >
            <a
              href="https://calendly.com/ismail-ibrahim-mensah/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a 30-minute call with Ismail Ibrahim Mensah"
              onClick={() => track("cta_calendly_click")}
            >
              Book a Call
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
