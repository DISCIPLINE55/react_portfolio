export interface SocialLinkItem {
  name: string;
  url: string;
  icon: string;
  ariaLabel: string;
}

export interface ContactFormPayload {
  name: string;
  email: string;
  inquiryType: string;
  subject: string;
  message: string;
  honeypot?: string;
}

export type InquiryCategory =
  | "Software Development Role"
  | "Frontend Engineering"
  | "EdTech Collaboration"
  | "Technical Product Project"
  | "UI/HCI Consultation"
  | "General Technical Inquiry";
