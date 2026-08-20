import { Mail, Phone, MessageSquare, Send, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "@/components/common/SectionHeading";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactSection() {
  const { form, onSubmit, submitting, inquiryCategories } = useContactForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <section id="contact" aria-label="Contact Section" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          badgeVariant="wine"
          title="Let's Discuss Software Opportunities & EdTech Projects"
          subtitle="Available for software development opportunities, frontend engineering roles, educational technology collaborations, and technical discussions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="text-lg font-bold text-foreground">
                Direct Contact Channels
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/80 bg-muted/40 hover:border-primary/40 hover:bg-muted/80 transition-all text-xs sm:text-sm group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Primary Email</span>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.contact.email}
                    </span>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/80 bg-muted/40 hover:border-primary/40 hover:bg-muted/80 transition-all text-xs sm:text-sm group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">Phone Direct</span>
                    <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {siteConfig.contact.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl border border-border/80 bg-muted/40 hover:border-gold/40 hover:bg-muted/80 transition-all text-xs sm:text-sm group"
                >
                  <div className="p-2 rounded-lg bg-gold/15 text-gold">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px]">WhatsApp Direct</span>
                    <span className="font-semibold text-foreground group-hover:text-gold transition-colors">
                      {siteConfig.contact.whatsapp}
                    </span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-border/60 text-xs text-muted-foreground space-y-1.5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  <span>{siteConfig.location.city}, {siteConfig.location.region}, {siteConfig.location.country}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Timezone: GMT / UTC+0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Send a Structured Inquiry
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                {/* Honeypot — hidden from real users, traps bots */}
                <input
                  type="text"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="hidden"
                  {...register("honeypot")}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="contact-name" className="text-xs font-semibold">
                      Your Name
                    </Label>
                    <Input
                      id="contact-name"
                      placeholder="e.g. Samuel Ansah"
                      autoComplete="name"
                      {...register("name")}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "contact-name-error" : undefined}
                      className="bg-background text-xs sm:text-sm"
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="text-[11px] text-destructive" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="contact-email" className="text-xs font-semibold">
                      Your Email
                    </Label>
                    <Input
                      id="contact-email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@organization.com"
                      {...register("email")}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "contact-email-error" : undefined}
                      className="bg-background text-xs sm:text-sm"
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="text-[11px] text-destructive" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-inquiry-type" className="text-xs font-semibold">
                    Area of Opportunity / Inquiry
                  </Label>
                  <select
                    id="contact-inquiry-type"
                    {...register("inquiryType")}
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs sm:text-sm text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {inquiryCategories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-subject" className="text-xs font-semibold">
                    Subject Line
                  </Label>
                  <Input
                    id="contact-subject"
                    placeholder="Brief summary of discussion topic..."
                    {...register("subject")}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "contact-subject-error" : undefined}
                    className="bg-background text-xs sm:text-sm"
                  />
                  {errors.subject && (
                    <p id="contact-subject-error" className="text-[11px] text-destructive" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="contact-message" className="text-xs font-semibold">
                    Message Details
                  </Label>
                  <Textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe the opportunity, technical requirements, or collaboration idea..."
                    {...register("message")}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "contact-message-error" : undefined}
                    className="bg-background text-xs sm:text-sm leading-relaxed"
                  />
                  {errors.message && (
                    <p id="contact-message-error" className="text-[11px] text-destructive" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 shadow-md"
                  >
                    <Send className="mr-2 w-4 h-4" />
                    <span>{submitting ? "Launching Client..." : "Initiate Message"}</span>
                  </Button>

                  <span className="text-[11px] text-muted-foreground text-center sm:text-right">
                    Prepares an email directly to Ismail
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
