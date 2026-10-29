export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: "Full Stack" | "Frontend" | "Web App";
  featured: boolean;
  status: "Live & Deployed" | "In Development";
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
    slug: "fitlog",
    title: "FitLog – Workout & Fitness Tracker",
    tagline: "Personal Routine Logging & Streak Tracker",
    category: "Web App",
    featured: true,
    status: "Live & Deployed",
    summary:
      "A distraction-free fitness and workout tracking web application designed to log daily gym routines, track weight/rep progression, maintain exercise streaks, and monitor personal bests.",
    image: "/images/fitlog.svg",
    imageAlt: "FitLog Workout & Fitness Tracker Preview",
    liveUrl: "https://my-fit-log-project-11nn.vercel.app/",
    githubUrl: "https://github.com/riyad-devx/my-fit-log-project",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Vercel"],
    techBreakdown: {
      frontend: ["Next.js App Router", "React State & Context", "TypeScript"],
      styling: ["Tailwind CSS", "Dark Mode Gym Theme", "Responsive Touch Targets"],
      tools: ["Git", "GitHub", "VS Code", "Vercel Deployment"],
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
      "Live Production App: Deployed on Vercel with high performance and mobile-friendly usability.",
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
  {
    slug: "bangla-news-24",
    title: "Bangla News 24 (বাংলা নিউজ ২৪)",
    tagline: "Modern Bengali News Portal & Breaking Updates Platform",
    category: "Web App",
    featured: true,
    status: "Live & Deployed",
    summary:
      "A fast, modern Bengali digital news portal delivering breaking news, categorized journalism across National, World, Tech, and Sports, clean typography, and a mobile-optimized reader experience.",
    image: "/images/bangla-news-24.svg",
    imageAlt: "Bangla News 24 - Digital News Portal Preview",
    liveUrl: "https://bangla-news-24-eight-kohl.vercel.app/",
    githubUrl: "https://github.com/riyad-devx/Bangla-News-24",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "Vercel"],
    techBreakdown: {
      frontend: ["Next.js App Router", "React Components", "TypeScript"],
      styling: ["Tailwind CSS", "Editorial Typography", "Dark/Light Contrast Grids"],
      tools: ["Git", "GitHub", "Vercel Deployment", "VS Code"],
    },
    overview:
      "Bangla News 24 is a dedicated digital journalism platform built for Bengali-speaking readers worldwide. It delivers breaking news headlines, categorized coverage, and an uncluttered, responsive layout optimized for smartphones and modern web browsers.",
    motivation:
      "Many traditional news portals are cluttered with distracting ads and sluggish layout shifts. I wanted to engineer a crisp, high-performance news reading application with modern front-end techniques, clean Bengali typography, and instant page transitions.",
    keyFeatures: [
      "Breaking News Ticker: Live ticker bar spotlighting urgent news developments in real-time.",
      "Categorized News Feed: Streamlined browsing across National, International, Technology, Sports, and Business.",
      "Editorial Bengali Typography: Carefully balanced leading, font weights, and spacing tailored for Bengali text.",
      "Responsive Article Grid: Adaptive magazine-style layout scaling smoothly across mobile phones, tablets, and wide monitors.",
      "Production Deployment: Deployed on Vercel with automated continuous delivery and optimized static page delivery.",
    ],
    architectureDetails: [
      "Modular component hierarchy separating headline banners, categorized story cards, breaking news tickers, and footer indexes.",
      "Tailwind CSS responsive grid system maintaining consistent aspect ratios for editorial imagery and headlines.",
      "Optimized Next.js routing allowing rapid navigation between news categories with minimal data overhead.",
    ],
    challenges: [
      {
        challenge:
          "Designing an editorial multi-column layout that naturally collapses into an intuitive single-column feed on smartphones without sacrificing visual hierarchy.",
        solution:
          "Leveraged Tailwind CSS CSS grid and flexbox breakpoints with responsive font sizing to maintain lead-story prominence across all device sizes.",
      },
      {
        challenge:
          "Rendering complex Bengali script smoothly without awkward line wrapping or clipped letter descenders.",
        solution:
          "Customized line-height ratios and font smoothing rules to deliver maximum reading comfort on mobile screens.",
      },
    ],
    futureImprovements: [
      "Bookmark and offline reading mode for articles using LocalStorage or Service Workers.",
      "Interactive reader comments and article reaction voting system.",
      "Category-specific push notifications for breaking national news.",
      "Integration of real-time weather and stock market tickers for Bangladesh.",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug);
}
