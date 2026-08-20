export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Architecture", href: "#how-i-build" },
  { label: "Skills", href: "#skills" },
  { label: "AI & ML", href: "#ai-journey" },
  { label: "Education", href: "#education" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export const pageNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "All Projects", href: "/projects" },
  { label: "Notes & Insights", href: "/articles" },
  { label: "Contact", href: "/#contact" },
];

export const flagshipRoutes = [
  { slug: "edu-arabic", label: "EduArabic" },
  { slug: "khulafasco", label: "Khulafasco Digital Platform" },
  { slug: "discinet", label: "DisciNet" },
  { slug: "mobile-quran-institute", label: "Mobile Quran Institute" },
  { slug: "alkhulafau-enrollment", label: "Alkhulafau SHS Enrollment" },
  { slug: "pedagolog", label: "PedagoLog" },
] as const;
