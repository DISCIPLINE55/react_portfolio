import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { track } from "@/lib/analytics";

export default function ResumeSection() {
  return (
    <section id="resume" className="py-16">
      <div className="container text-center">
        <h2 className="text-3xl font-semibold">My Professional Resume</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Download my latest resume to get a comprehensive overview of my experience, skills, and achievements.
        </p>
        <div className="mt-6">
          <Button asChild variant="hero">
            <a
              href="/docs/Ismail_Ibrahim_Mensah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("resume_download_click")}
            >
              <Download /> Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
