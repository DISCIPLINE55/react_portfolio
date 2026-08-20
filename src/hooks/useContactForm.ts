import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/site";

// ─── Validation Schema ─────────────────────────────────────────────────────────

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  inquiryType: z.string().min(1, "Please select an inquiry area"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Please provide some detail in your message"),
  honeypot: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export const inquiryCategories = [
  "Software Development Role",
  "Frontend Engineering",
  "EdTech Collaboration",
  "Technical Product Project",
  "UI/HCI Consultation",
  "General Technical Inquiry",
] as const;

export type InquiryCategory = (typeof inquiryCategories)[number];

// ─── sanitize inputs to prevent XSS / injection ───────────────────────────────

function sanitize(value: string): string {
  return value.replace(/[<>"'&]/g, "").trim();
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

/**
 * useContactForm
 * Encapsulates all contact form behavior, validation, and submission logic.
 * Separates behavior from the ContactSection presentation component.
 */
export function useContactForm() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      inquiryType: "Software Development Role",
      subject: "",
      message: "",
      honeypot: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Honeypot check — bot submissions fill this invisible field
    if (data.honeypot) {
      toast({ title: "Spam detected", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    const name = sanitize(data.name);
    const email = sanitize(data.email);
    const type = sanitize(data.inquiryType);
    const subject = `[${type}] ${sanitize(data.subject)}`;
    const body = `From: ${name} (${email})\nInquiry Area: ${type}\n\n${sanitize(data.message)}`;

    const mailtoUrl = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Opening Email Client",
      description: `Directing your inquiry to ${siteConfig.contact.email}...`,
    });

    window.location.href = mailtoUrl;

    setTimeout(() => {
      setSubmitting(false);
      form.reset();
    }, 600);
  };

  return {
    form,
    onSubmit,
    submitting,
    inquiryCategories,
  };
}
