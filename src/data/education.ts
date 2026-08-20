import { EducationItem, CredentialItem } from "@/types/journey";

export const educationData: EducationItem = {
  degree: "BSc in Information Technology Education",
  institution: "University of Skills Training and Entrepreneurial Development (USTED)",
  formerInstitutionName: "Akenten Appiah-Menka University of Skills Training and Entrepreneurial Development (AAMUSTED)",
  location: "Kumasi / Mankessim, Ghana",
  duration: "2023 — 2027",
  level: "Level 300 / Final-Year Progression",
  status: "In Progress (Year 3 of 4)",
  description:
    "A rigorous dual-discipline academic program uniting core computer science, software engineering principles, database systems, and networking with pedagogical theory, instructional design, and educational psychology.",
  coreAreas: [
    "Software Engineering & Object-Oriented Programming",
    "Database Management Systems & Relational Schema Design",
    "Human-Computer Interaction & Instructional Design",
    "Data Structures, Algorithms & System Analysis",
    "Computer Networks & Information Security",
    "Educational Technology & Curriculum Integration",
    "Psychology of Learning & Assessment in Education",
  ],
  pedagogicalPhilosophy:
    "Technology in education should remove friction between the learner and understanding. By understanding how students learn, retain information, and experience cognitive load, I engineer software that makes complex concepts intuitive and accessible to learners across diverse socio-economic contexts.",
};

export const verifiedCredentials: CredentialItem[] = [
  {
    id: "google-it-support",
    title: "Google IT Support Professional Certificate",
    issuer: "Google (via Coursera)",
    description:
      "Comprehensive 5-course professional program covering technical support fundamentals, computer networking (TCP/IP, DNS), operating systems administration (Linux & Windows), system administration, and IT security.",
    credentialUrl: "https://www.credly.com/badges/3b244d7f-b96f-4f3b-ba6d-309cfdb09ab0/linked_in_profile",
    skills: ["System Administration", "Networking & TCP/IP", "Linux CLI", "Troubleshooting", "IT Security"],
  },
  {
    id: "alx-foundations",
    title: "ALX Professional Foundations",
    issuer: "ALX Africa",
    description:
      "Intensive leadership, critical thinking, remote collaboration, and problem-solving program developing global workplace professionalism and agile communication.",
    credentialUrl: "https://savanna.alxafrica.com/certificates/mSTGypNsfF",
    skills: ["Remote Collaboration", "Agile Mindset", "Critical Problem Solving", "Professional Communication"],
  },
  {
    id: "alison-system-analysis",
    title: "Understanding System Analysis",
    issuer: "Alison",
    description:
      "Study of end-to-end systems analysis, software requirements engineering, feasibility analysis, data flow modeling (DFD), and structural system design.",
    credentialUrl: "https://cdn01.alison-static.net/parchment-previews/7450f267d5a5f7b044d093f3592bb624.jpg",
    skills: ["Requirements Engineering", "System Architecture", "Feasibility Studies", "Data Flow Diagrams"],
  },
  {
    id: "sololearn-mysql",
    title: "MySQL Intermediate Certificate",
    issuer: "SoloLearn",
    description:
      "Intermediate relational database development covering table joins, grouping aggregations, subqueries, view creation, and query optimization.",
    credentialUrl: "https://www.sololearn.com/certificates/CC-UMAEUZ7Y",
    skills: ["MySQL", "Relational Databases", "Complex Queries & Joins", "Index Optimization"],
  },
];
