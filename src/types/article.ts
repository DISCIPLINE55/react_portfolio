export interface ArticleItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "EdTech" | "Architecture" | "Accessibility" | "AI & Governance" | "Engineering";
  readTime: string;
  publishedDate: string;
  content: string;
  keyTakeaways: string[];
}
