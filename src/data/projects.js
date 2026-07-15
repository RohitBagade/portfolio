// Rohit's real, shipped projects. Live URLs verified this session.
export const PROJECTS = [
  {
    name: "APEX",
    tagline: "Full-stack supplement store with payments",
    description:
      "A production e-commerce platform I built end to end — storefront, admin panel, and a hardened REST API. Server-side re-pricing, JWT auth with RBAC, and Stripe checkout.",
    stack: ["React", "Node/Express", "MongoDB", "Stripe", "Fly.io"],
    live: "https://frontend-drab-seven-89.vercel.app",
    github: "https://github.com/RohitBagade/ProteinEcomSite",
    featured: true,
  },
  {
    name: "CHRONUS",
    tagline: "Distributed job scheduler",
    description:
      "A backend-heavy scheduler: submit one-time or recurring jobs over a REST API; it runs them, retries failures with exponential backoff, and keeps an immutable execution log. Spring Boot + Quartz, JWT/RBAC, React ops dashboard.",
    stack: ["Java 17", "Spring Boot", "Quartz", "React", "MySQL"],
    live: "https://chronos-ui-gold.vercel.app",
    github: "https://github.com/RohitBagade/Chronus",
    featured: true,
  },
  {
    name: "CalorieCounter.ai",
    tagline: "AI nutrition estimator with voice input",
    description:
      "Describe a meal by text or voice and get calories + macros back. GPT-4o-mini with JSON mode behind a rate-limited, CORS-locked API; Web Speech mic input on the frontend.",
    stack: ["React", "OpenAI", "Node", "Web Speech"],
    live: "https://caloriecounter-ai-rohit-bagades-projects.vercel.app",
    github: "https://github.com/RohitBagade/CalorieCounter.ai",
    featured: true,
  },
  {
    name: "VANTA",
    tagline: "Personal AGI assistant (private)",
    description:
      "A JARVIS-style assistant spanning voice, Telegram, and a web console on one brain — an LLM router with 160+ free models, shared live memory, and a project-aware context engine.",
    stack: ["Python", "LLM routing", "Flask", "Upstash"],
    live: null,
    github: null,
    featured: false,
  },
  {
    name: "Rental Platform",
    tagline: "Premium car-rental web app",
    description:
      "A polished multi-tenant rental site — vehicle catalog, detail pages, and a booking flow, built on the modern App Router stack with a custom design system.",
    stack: ["Next.js 16", "Tailwind v4", "shadcn"],
    live: "https://rental-platform-ashen.vercel.app",
    github: null,
    featured: false,
  },
  {
    name: "LemmeDeliver",
    tagline: "My AI & software agency",
    description:
      "The studio I ship client work under — AI agents, automations, and high-converting websites. Dark, animated brand site with a bespoke SVG identity.",
    stack: ["Next.js", "Framer Motion", "Web3Forms"],
    live: "https://lemmedeliver.com",
    github: null,
    featured: false,
  },
  {
    name: "Saarthi",
    tagline: "WhatsApp assistant for small businesses",
    description:
      "A 24/7 WhatsApp bot for restaurants and SMBs — takes orders and answers questions, with Google Sheets logging. Live SaaS product on Twilio + Fly.io.",
    stack: ["Python", "Twilio", "Flask", "Fly.io"],
    live: null,
    github: "https://github.com/RohitBagade/saathi-landing",
    featured: false,
  },
];

export const SOCIALS = {
  github: "https://github.com/RohitBagade",
  email: "rohitbagde535@gmail.com",
  agency: "https://lemmedeliver.com",
  resume: "/Rohit_Bagade_Resume.pdf",
};

// Real credentials (from résumé) — credibility, not fabrication.
export const STATS = [
  { value: "3.5+ yrs", label: "shipping production systems" },
  { value: "SDE-1 → SDE-2", label: "promoted at Accelya" },
  { value: "350+", label: "DSA problems solved" },
  { value: "144", label: "tests on the LLM platform" },
];

export const EXPERIENCE = {
  role: "Software Development Engineer (SDE-2)",
  company: "Accelya Solutions",
  period: "Sep 2022 — Present",
  context: "Enterprise platform processing high-volume financial transactions",
  points: [
    "Own ~80% of end-to-end development for two core platform modules — design, implementation, testing, delivery.",
    "Led modernization: migrated enterprise services Java 8 → 17 and JBoss → standalone Tomcat.",
    "Designed a Spring Boot microservice to mask sensitive PII across Oracle & PostgreSQL for privacy compliance.",
    "Resolved complex production defects via structured root-cause analysis, shipped with minimal business impact.",
  ],
  education: "B.E. Electronics — Ramrao Adik Institute of Technology (D. Y. Patil University), 2022 · GPA 7.66/10",
};
