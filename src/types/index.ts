export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  techStack: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;
  category: "Web App" | "Landing Page" | "Mobile" | "Lainnya";
}

export interface TechStackItem {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
  level: "Pemula" | "Menengah" | "Mahir";
  levelPct: number;
}

export interface Service {
  title: string;
  description: string;
  tag: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}
