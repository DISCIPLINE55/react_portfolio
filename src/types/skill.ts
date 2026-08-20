export interface SkillItem {
  name: string;
  focus: string;
  highlights?: string[];
  iconName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: SkillItem[];
}
