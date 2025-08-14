import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(3, "Subject is too short"),
  message: z.string().min(10, "Message should be at least 10 characters"),
  website: z.string().optional(), // honeypot
});

type ContactForm = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onSubmit = async (data: ContactForm) => {
    if (data.website) {
      toast({ title: "Blocked", description: "Spam detected." });
      return;
    }
    setSubmitting(true);
    
    // Sanitize inputs to prevent injection
    const sanitizedName = data.name.replace(/[<>"'&]/g, '').trim();
    const sanitizedEmail = data.email.replace(/[<>"'&]/g, '').trim();
    const sanitizedMessage = data.message.replace(/[<>"'&]/g, '').trim();
    
    const body = encodeURIComponent(`From: ${sanitizedName} <${sanitizedEmail}>%0D%0A%0D%0A${sanitizedMessage}`);
    const subject = encodeURIComponent(String(data.subject || "").replace(/[<>"'&]/g, '').trim());
    toast({ title: "Opening email", description: "Your email client is launching..." });
    window.location.href = `mailto:ismail.mensah.info@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section id="contact" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-semibold mb-8">Get in Touch</h2>
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            <input type="text" tabIndex={-1} aria-hidden="true" className="hidden" {...register("website")} />
            <div className="grid gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="John Doe" {...register("name")} aria-invalid={!!errors.name} />
              {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Your Email</Label>
              <Input id="email" type="email" placeholder="john.doe@example.com" {...register("email")} aria-invalid={!!errors.email} />
              {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Inquiry about a project..." {...register("subject")} aria-invalid={!!errors.subject} />
              {errors.subject && <p className="text-xs text-destructive">{errors.subject.message}</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={4} placeholder="Type your message here..." {...register("message")} aria-invalid={!!errors.message} />
              {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <div>
              <Button type="submit" variant="hero" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

            <aside className="flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                <a className="flex items-center gap-3 text-sm hover:text-primary transition-colors" href="mailto:ismail.mensah.info@gmail.com">
                  <Mail className="text-primary flex-shrink-0" /> 
                  <span>ismail.mensah.info@gmail.com</span>
                </a>
                <a className="flex items-center gap-3 text-sm hover:text-primary transition-colors" href="tel:+233536478673">
                  <Phone className="text-primary flex-shrink-0" /> 
                  <span>+233 53 647 8673</span>
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex gap-4">
                  <a 
                    href="https://www.linkedin.com/in/ismail-ibrahim-mensah-81a920312" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="LinkedIn"
                    className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://github.com/DISCIPLINE55" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="GitHub"
                    className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href="https://x.com/MensahIsmail" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label="Twitter/X"
                    className="p-2 border rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
