export type Project = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  stack: string[];
  year: string;
  role: string;
  liveUrl?: string;
  codeUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-one",
    name: "Project One",
    summary: "A short one-line summary of what this project does and who it's for.",
    description:
      "Replace this with two to three sentences describing the problem, your approach, and the outcome. Mention any interesting technical decisions or constraints you worked within.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    year: "2026",
    role: "Solo project",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    slug: "project-two",
    name: "Project Two",
    summary: "A short one-line summary of what this project does and who it's for.",
    description:
      "Replace this with two to three sentences describing the problem, your approach, and the outcome. Mention any interesting technical decisions or constraints you worked within.",
    stack: ["React", "Node.js", "Redis"],
    year: "2025",
    role: "Team of 3",
    liveUrl: "#",
    codeUrl: "#",
    featured: true,
  },
  {
    slug: "project-three",
    name: "Project Three",
    summary: "A short one-line summary of what this project does and who it's for.",
    description:
      "Replace this with two to three sentences describing the problem, your approach, and the outcome. Mention any interesting technical decisions or constraints you worked within.",
    stack: ["Python", "FastAPI", "Docker"],
    year: "2025",
    role: "Solo project",
    codeUrl: "#",
  },
  {
    slug: "project-four",
    name: "Project Four",
    summary: "A short one-line summary of what this project does and who it's for.",
    description:
      "Replace this with two to three sentences describing the problem, your approach, and the outcome. Mention any interesting technical decisions or constraints you worked within.",
    stack: ["Swift", "SwiftUI"],
    year: "2024",
    role: "Solo project",
    liveUrl: "#",
  },
];
