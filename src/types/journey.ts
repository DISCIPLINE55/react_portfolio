export interface EducationItem {
  degree: string;
  institution: string;
  formerInstitutionName?: string;
  location: string;
  duration: string;
  level: string;
  status: string;
  description: string;
  coreAreas: string[];
  pedagogicalPhilosophy: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  credentialUrl: string;
  verificationId?: string;
  skills: string[];
}

export interface AIJourneyItem {
  track: string;
  organization: string;
  cohort: string;
  status: string;
  framing: string;
  modules: {
    title: string;
    description: string;
    topics: string[];
  }[];
  ethicalPrinciples: string[];
  experimentationProjects: string[];
}
