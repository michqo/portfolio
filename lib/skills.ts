import { PROJECTS } from "./projects";
export { PROJECTS } from "./projects";

export type SkillUsage = {
  label: string;
  projects?: string[];
  experience?: string[];
};

export type SkillCategory = {
  labelKey: "frontend" | "backend" | "devops" | "tools";
  items: SkillUsage[];
};

// Experience name constants — must match company names used in the UI
export const EXPERIENCE = {
  RESCO: "Resco",
  BACKBONE: "Backbone",
} as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    labelKey: "frontend",
    items: [
      { label: "React", experience: [EXPERIENCE.BACKBONE, EXPERIENCE.RESCO] },
      { label: "Next.js", projects: [PROJECTS.SUBNIFY, PROJECTS.SLEEP] },
      {
        label: "TypeScript",
        projects: [PROJECTS.SUBNIFY, PROJECTS.SLEEP],
        experience: [EXPERIENCE.BACKBONE, EXPERIENCE.RESCO],
      },
      { label: "Tailwind CSS", projects: [PROJECTS.SUBNIFY, PROJECTS.SLEEP] },
      { label: "Svelte", projects: [PROJECTS.WEATHER] },
      { label: "SvelteKit", projects: [PROJECTS.WEATHER] },
      { label: "Vite", experience: [EXPERIENCE.BACKBONE] },
      { label: "Redux Toolkit", experience: [EXPERIENCE.BACKBONE] },
      { label: "Redux Saga", experience: [EXPERIENCE.BACKBONE] },
      { label: "shadcn/ui", projects: [PROJECTS.SUBNIFY, PROJECTS.SLEEP] },
      { label: "SCSS", experience: [EXPERIENCE.BACKBONE] },
    ],
  },
  {
    labelKey: "backend",
    items: [
      {
        label: "Python",
        projects: [PROJECTS.WEATHER],
        experience: [EXPERIENCE.BACKBONE],
      },
      {
        label: "Django",
        projects: [PROJECTS.WEATHER],
        experience: [EXPERIENCE.BACKBONE],
      },
      {
        label: "Django REST Framework",
        projects: [PROJECTS.WEATHER],
        experience: [EXPERIENCE.BACKBONE],
      },
      {
        label: "PostgreSQL",
        projects: [PROJECTS.WEATHER],
        experience: [EXPERIENCE.BACKBONE],
      },
      { label: "FastAPI" },
      { label: "Node.js" },
      { label: "Express" },
      { label: "MongoDB" },
      { label: "Prisma" },
      { label: "Jest" },
      { label: "REST APIs", experience: [EXPERIENCE.BACKBONE] },
      { label: "Power Apps", experience: [EXPERIENCE.RESCO] },
      { label: "Dynamics 365", experience: [EXPERIENCE.RESCO] },
      { label: "Power Platform", experience: [EXPERIENCE.RESCO] },
    ],
  },
  {
    labelKey: "devops",
    items: [
      { label: "Docker", projects: [PROJECTS.WEATHER] },
      { label: "Git" },
      { label: "GitHub Actions" },
      { label: "AWS" },
      { label: "Linux" },
    ],
  },
  {
    labelKey: "tools",
    items: [
      { label: "GitHub" },
      { label: "GitLab", experience: [EXPERIENCE.BACKBONE] },
      { label: "VS Code" },
      { label: "Figma" },
      { label: "Vercel", projects: [PROJECTS.SUBNIFY, PROJECTS.SLEEP] },
      { label: "Postman" },
      { label: "Fly.io", projects: [PROJECTS.WEATHER] },
      { label: "Neovim" },
    ],
  },
];

// Flat map: label → usage, for quick lookup in TechBadge
export const SKILL_MAP: Record<string, SkillUsage> = Object.fromEntries(
  SKILL_CATEGORIES.flatMap((cat) => cat.items.map((item) => [item.label, item]))
);
