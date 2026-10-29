export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "Frontend" | "Web App";
  featured: boolean;
  status: "Live & Deployed" | "In Development" | "Backend in Progress";
  summary: string;
  image: string;
  imageAlt: string;
  liveUrl: string | null;
  githubUrl: string | null;
  technologies: string[];
  techBreakdown: {
    frontend: string[];
    backend?: string[];
    database?: string[];
    styling: string[];
    tools: string[];
  };
  overview: string;
  motivation: string;
  keyFeatures: string[];
  architectureDetails: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  futureImprovements: string[];
}

export const projectsData: Project[] = [
  {
    slug: "bazar-dor",
    title: "Bazar Dor (বাজার দর)",
    tagline: "Bengali Daily Market Price Tracking Platform",
    category: "Web App",
    featured: true,
    status: "Live & Deployed",
    summary:
      "A localized web platform providing daily market and commodity price updates in Bengali to help everyday consumers monitor inflation and budget household groceries efficiently.",
    image: "/images/bazar-dor.svg",
    imageAlt: "Bazar Dor - Daily Commodity Price Platform Preview",
    liveUrl: "https://bazar-dor-ecru-psi.vercel.app/",
    githubUrl: "https://github.com/riyad-devx/Bazar-Dor",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    techBreakdown: {
      frontend: ["Next.js App Router", "React", "TypeScript"],
      styling: ["Tailwind CSS", "Mobile-first Responsive Design", "Custom Color Tokens"],
      tools: ["Git", "GitHub", "Vercel Deployment", "VS Code"],
    },
    overview:
      "Bazar Dor is a practical web application developed to address daily price uncertainty in local Bangladeshi markets. By presenting daily grocery, vegetable, poultry, and fish rates in a clear Bengali interface, it empowers shoppers and household managers with quick access to pricing data before going to market.",
    motivation:
      "Commodity prices in local bazaars frequently fluctuate due to seasonal shifts and supply chains. As a student developer living in Bangladesh, I wanted to build a fast, mobile-friendly application that presents this essential information clearly in Bengali, demonstrating how tech can solve everyday community challenges.",
    keyFeatures: [
      "Daily Market Rates: Up-to-date pricing for essential groceries, fresh vegetables, fish, poultry, and spices.",
      "Native Bengali Interface: Full localization in Bengali with clean typography and easily readable price tags.",
      "Categorized Browsing: Intuitive filter tabs to quickly jump between grocery categories.",
      "Mobile-First Optimization: Fast, lightweight interface built for smartphone users on various mobile networks.",
      "Continuous Deployment: Deployed on Vercel with zero downtime and automated production builds.",
    ],
    architectureDetails: [
      "Structured with Next.js component hierarchy separating reusable price cards, category navigation, and summary tables.",
      "Tailwind CSS utility styling configured with an accessible color palette to ensure readable contrast on both mobile and desktop screens.",
      "Modular data layout allowing price updates and new categories to be maintained easily without rewriting UI markup.",
    ],
    challenges: [
      {
        challenge:
          "Designing an interface in Bengali that maintains visual balance, legibility, and proportional spacing on small mobile devices.",
        solution:
          "Fine-tuned font weights, leading, and card padding with Tailwind CSS, ensuring Bengali glyphs render cleanly without awkward line wrapping.",
      },
      {
        challenge:
          "Organizing volatile price categories into an easily scannable layout so users can find common items in seconds.",
        solution:
          "Implemented clear category filter tabs and visual tags showing price stability or changes at a glance.",
      },
    ],
    futureImprovements: [
      "Automated multi-district price synchronization to display rate variations across different cities in Bangladesh.",
      "Historical price trend charts showing weekly and monthly price movement graphs.",
      "Interactive shopping cart calculator estimating total market spend based on today's listed prices.",
      "Community crowd-sourced price reporting with an admin verification workflow.",
    ],
  },
  {
    slug: "user-management-crud",
    title: "User Management CRUD Application",
    tagline: "Full-Stack User Directory with REST API & MongoDB",
    category: "Full Stack",
    featured: true,
    status: "In Development",
    summary:
      "A complete full-stack web application implementing robust Create, Read, Update, and Delete operations with Express.js, MongoDB data persistence, and a modern Next.js/React frontend.",
    image: "/images/user-crud.svg",
    imageAlt: "User Management CRUD Application Preview",
    liveUrl: null, // User specified: show Coming Soon until configured
    githubUrl: null, // User specified: show Coming Soon until configured
    technologies: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    techBreakdown: {
      frontend: ["Next.js", "React Hooks", "Tailwind CSS"],
      backend: ["Node.js", "Express.js", "RESTful API Architecture", "CORS Middleware"],
      database: ["MongoDB", "Mongoose Schema Modeling"],
      styling: ["Tailwind CSS", "Modal UI components", "Responsive Data Tables"],
      tools: ["Postman", "Git", "VS Code", "MongoDB Compass"],
    },
    overview:
      "This application serves as a comprehensive full-stack benchmark project, demonstrating client-server communication, schema validation, and complete CRUD cycles. It allows administrators to register users, manage roles, update profiles, and delete inactive entries through an interactive dashboard.",
    motivation:
      "To solidify my understanding of the MERN stack architecture, I built this system to master backend API creation, error propagation, HTTP status codes, and database connection handling from the ground up.",
    keyFeatures: [
      "Complete CRUD Workflow: Seamless creation, viewing, updating, and deletion of user records.",
      "RESTful API Backend: Express.js routers and controllers adhering to standard REST guidelines.",
      "MongoDB & Mongoose Validation: Strict schema modeling with validation for required fields, unique emails, and valid roles.",
      "Search & Filter: Real-time client-side search to locate users by name, email, or role.",
      "Feedback & Confirmation Modals: Safety prompts before destructive delete actions and responsive feedback toasts.",
    ],
    architectureDetails: [
      "Decoupled architecture where the Next.js frontend interacts with Express.js API endpoints via async fetch services.",
      "Mongoose models with built-in schema constraints ensuring data sanitization before reaching the database.",
      "Centralized error handling middleware on the backend providing clear JSON error responses to the client.",
    ],
    challenges: [
      {
        challenge:
          "Handling asynchronous API states (loading, errors, success) gracefully in the UI without freezing user interactions.",
        solution:
          "Created modular status state hooks and loading skeletons that provide immediate feedback during API requests.",
      },
      {
        challenge:
          "Ensuring CORS headers and request formatting align properly between separate local development ports.",
        solution:
          "Configured Express CORS middleware with exact origin rules and standard HTTP header configurations.",
      },
    ],
    futureImprovements: [
      "JWT-based user authentication and password hashing with bcrypt.",
      "Role-Based Access Control (RBAC) separating Super Admin, Editor, and Standard User privileges.",
      "Export and Import user data to CSV / JSON format.",
      "Audit trail logging tracking who created, updated, or removed each account.",
    ],
  },
  {
    slug: "fitlog",
    title: "FitLog – Workout & Fitness Tracker",
    tagline: "Personal Routine Logging & Streak Tracker",
    category: "Web App",
    featured: true,
    status: "In Development",
    summary:
      "A distraction-free fitness and workout tracking web application designed to log daily gym routines, track weight/rep progression, maintain exercise streaks, and monitor personal bests.",
    image: "/images/fitlog.svg",
    imageAlt: "FitLog Workout & Fitness Tracker Preview",
    liveUrl: null, // In Development
    githubUrl: "https://github.com/riyad-devx/my-fit-log-project",
    technologies: ["React", "Next.js", "Tailwind CSS", "JavaScript", "LocalStorage API"],
    techBreakdown: {
      frontend: ["Next.js App Router", "React State & Context", "Tailwind CSS"],
      styling: ["Tailwind CSS", "Dark Mode Gym Theme", "Responsive Touch Targets"],
      tools: ["Git", "GitHub", "VS Code"],
    },
    overview:
      "FitLog eliminates the clutter of bloated fitness apps by providing a fast, streamlined tool for gym-goers. Users can quickly choose workout splits (Push, Pull, Legs, Full Body), record sets, weights, and repetitions in real time, and visualize their daily workout consistency.",
    motivation:
      "Many existing fitness tracking apps are overloaded with paywalls and ads. I wanted to build a clean, minimalist tool that makes it effortless to record gym sets on a phone during active workout rest periods.",
    keyFeatures: [
      "Dynamic Exercise Logging: Add exercises, dynamic sets, target weights (kg/lbs), and completed repetitions.",
      "Routine Presets & Custom Splits: Select from standard workout routines (PPL, Upper/Lower) or create custom exercise routines.",
      "Consistency Streak Tracker: Visual indicators showing consecutive workout days to promote gym habit building.",
      "Dark Theme Gym UI: High-contrast dark styling designed specifically for low-light gym floors.",
      "Persistent Storage: Automatically preserves user workout entries and personal records across sessions.",
    ],
    architectureDetails: [
      "Component-based architecture organizing individual workout sessions, exercise groups, and set rows.",
      "Robust state management handling nested array mutations (routines -> exercises -> sets) with immutability.",
      "Optimized touch targets and large numeric input fields designed for quick thumb interaction during workouts.",
    ],
    challenges: [
      {
        challenge:
          "Managing complex nested state when users dynamically add, remove, or reorder exercise sets during a live session.",
        solution:
          "Structured immutable reducer-style update actions to keep set counts, weights, and reps synchronized cleanly.",
      },
      {
        challenge:
          "Ensuring input fields on mobile keyboards don't obscure the active exercise row.",
        solution:
          "Fine-tuned viewport scrolling and spacing so mobile keyboards allow seamless quick-entry.",
      },
    ],
    futureImprovements: [
      "Interactive progress charts illustrating 1-Rep Max (1RM) estimations and weekly volume trends.",
      "Integrated rest timer with countdown sound alerts between sets.",
      "Cloud backend integration with MongoDB for cross-device workout sync.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug);
}

