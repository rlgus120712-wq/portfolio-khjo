export interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
    icon?: string;
  }[];
}

export const skills: Skill[] = [
  {
    category: "Frontend Core",
    items: [
      { name: "Vue 3 (Composition API)", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "React", level: 85 },
    ],
  },
  {
    category: "UI & Styling",
    items: [
      { name: "Vuetify", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "SCSS/SASS", level: 85 },
      { name: "Design System", level: 85 },
      { name: "Framer Motion", level: 80 },
      { name: "Component-Driven Development", level: 95 },
    ],
  },
  {
    category: "Architecture & Build Tools",
    items: [
      { name: "Feature-Sliced Design (FSD)", level: 90 },
      { name: "NX Monorepo", level: 85 },
      { name: "Vite", level: 90 },
      { name: "Module Federation", level: 85 },
      { name: "Micro-Frontend", level: 80 },
      { name: "pnpm", level: 90 },
      { name: "Webpack", level: 85 },
    ],
  },
  {
    category: "State & Data Management",
    items: [
      { name: "Pinia", level: 90 },
      { name: "TanStack Query (Vue Query)", level: 85 },
      { name: "Axios", level: 95 },
      { name: "REST API", level: 90 },
      { name: "Vuex", level: 80 },
      { name: "GraphQL", level: 70 },
    ],
  },
];