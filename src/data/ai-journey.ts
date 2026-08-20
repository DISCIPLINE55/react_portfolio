import { AIJourneyItem } from "@/types/journey";

export const aiJourneyData: AIJourneyItem = {
  track: "AI & Machine Learning",
  organization: "Next Path Ghana",
  cohort: "Cohort 1 — 2026",
  status: "Active Learning & Practical Experimentation",
  framing:
    "Positioning my AI/ML journey honestly: as an emerging practitioner building strong foundations through structured coursework, mathematical concepts, Python data workflows, and assistive applications in education technology.",
  modules: [
    {
      title: "Python for Data Science & AI",
      description: "Writing clean, algorithmic Python for data structures, matrix operations, and dataset preparation.",
      topics: ["Python Fundamentals & OOP", "NumPy & Pandas for Data Manipulation", "Data Cleaning & Preprocessing", "Exploratory Data Analysis"],
    },
    {
      title: "Machine Learning Fundamentals",
      description: "Understanding core learning paradigms, regression, classification, loss functions, and model evaluation.",
      topics: ["Supervised & Unsupervised Learning", "Feature Engineering & Scaling", "Cross-Validation & Metrics (Precision, Recall, F1)", "Overfitting vs. Generalization"],
    },
    {
      title: "Practical AI & EdTech Applications",
      description: "Connecting AI models to web applications with a focus on assistive educational tools and audio workflows.",
      topics: ["Speech & Audio Processing Basics", "Phonetic Alignment Concepts for Arabic", "API Integration & Rate Limiting", "Offline Model Inference Tradeoffs"],
    },
    {
      title: "Responsible AI & Educational Governance",
      description: "Studying algorithmic bias, privacy, and human-in-the-loop validation frameworks in classroom environments.",
      topics: ["'AI assists. Teachers decide.' Architecture", "Student Privacy & Data Protection", "Bias Mitigation in Non-English Languages", "Pedagogical Guardrails"],
    },
  ],
  ethicalPrinciples: [
    "Human-in-the-loop decision making: AI should never autonomously grade or penalize students without educator oversight.",
    "Data sovereignty & privacy: Student voice recordings and academic records must be protected with strict access control.",
    "Transparency: Explaining why an assistive flag was raised rather than using opaque black-box scoring.",
  ],
  experimentationProjects: [
    "EduArabic Audio Review Pipeline: Exploring speech recognition and phonetic alignment cues for Arabic recitation.",
    "Student Retention Modeling: Analyzing educational data factors that influence student engagement and completion.",
  ],
};
