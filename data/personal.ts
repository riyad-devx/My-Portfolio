export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    level: string; // e.g. "Practicing", "Core Focus", "Building Projects" - no fake percentages!
    tag?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  currentStatus: string;
  period: string;
  description: string;
  highlights: string[];
}

export const personalData = {
  name: "Tamim mia Riyad",
  shortName: "Riyad",
  designation: "Aspiring Full Stack Developer",
  statusBadge: "Available for Junior Roles & Learning Opportunities",
  email: "mdriyadmia01766@gmail.com",
  phone: "01747379373",
  phoneFormatted: "+880 1747-379373",
  location: "Moulvibazar, Sylhet, Bangladesh",
  whatsappUrl: "https://wa.me/8801747379373",
  socialLinks: {
    github: "https://github.com/riyad-devx",
    email: "mailto:mdriyadmia01766@gmail.com",
    whatsapp: "https://wa.me/8801747379373",
    linkedin: "https://www.linkedin.com/in/md-riyad32/",
  },
  hero: {
    tagline: "Building Clean, Responsive & Scalable Web Applications",
    bio: "Hi, I'm Tamim mia Riyad, a passionate developer pursuing a Diploma in Computer Science & Technology. I specialize in building responsive frontends and full-stack JavaScript applications with React, Next.js, Node.js, and MongoDB.",
  },
  about: {
    intro:
      "I am an Aspiring Full Stack Developer based in Bangladesh, currently pursuing my Diploma in Computer Science and Technology (CST) at Moulvibazar Government Polytechnic Institute. My journey into web development began with a strong curiosity about how interactive websites work beneath the surface.",
    paragraphs: [
      "Over the course of my studies and independent projects, I have immersed myself in modern JavaScript, React, and Next.js. I thoroughly enjoy taking an idea from a blank canvas to a fully responsive, intuitive web application with clean, maintainable code.",
      "Beyond building user interfaces with Tailwind CSS and React, I am actively honing my full-stack capabilities with Node.js, Express.js, and MongoDB. I enjoy designing RESTful API endpoints, organizing data schemas, and ensuring reliable communication between frontend clients and backend servers.",
      "My primary goal is to grow into an accomplished Full Stack Developer, contributing to real-world software products, solving practical challenges, and continuously learning from collaborative engineering teams.",
    ],
    highlights: [
      {
        title: "Dedicated Problem Solver",
        description:
          "Approaching coding challenges systematically through hands-on project creation and debugging.",
      },
      {
        title: "Responsive UI Architecture",
        description:
          "Crafting modern mobile-first interfaces that look elegant and perform smoothly across all devices.",
      },
      {
        title: "Modern JavaScript Ecosystem",
        description:
          "Focusing on React, Next.js App Router, TypeScript basics, and modern Tailwind CSS.",
      },
      {
        title: "Continuous Learner",
        description:
          "Constantly expanding knowledge through daily coding, documentation study, and version-controlled projects.",
      },
    ],
  },
  skills: [
    {
      title: "Frontend Development",
      description: "Modern, responsive, component-driven user interfaces",
      iconName: "Layout",
      skills: [
        { name: "HTML5", level: "Semantic Markup" },
        { name: "CSS3", level: "Responsive Layouts & Flex/Grid" },
        { name: "JavaScript (ES6+)", level: "Async, DOM, Modern Syntax" },
        { name: "React.js", level: "Hooks, State, Component Lifecycle" },
        {
          name: "Next.js (App Router)",
          level: "Server Components & Dynamic Routing",
        },
        { name: "Tailwind CSS", level: "Utility-First Responsive Styling" },
      ],
    },
    {
      title: "Backend Development",
      description: "Server architecture, business logic, and API design",
      iconName: "Server",
      skills: [
        { name: "Node.js", level: "Runtime Environment & Modules" },
        { name: "Express.js", level: "Middleware, Routing & Controllers" },
        { name: "REST APIs", level: "CRUD Endpoints & HTTP Conventions" },
        {
          name: "JSON & Async Handling",
          level: "API Integration & Error Handling",
        },
      ],
    },
    {
      title: "Database & Storage",
      description: "Data modeling, schema design, and querying",
      iconName: "Database",
      skills: [
        { name: "MongoDB", level: "NoSQL Collections & Documents" },
        { name: "Mongoose", level: "Schema Validation & Data Modeling" },
        {
          name: "Database Design Basics",
          level: "Relationships & Query Optimization",
        },
      ],
    },
    {
      title: "Tools & Workflow",
      description: "Version control, editor tooling, and deployment pipelines",
      iconName: "Wrench",
      skills: [
        { name: "Git", level: "Branching, Merging & Commit Workflow" },
        { name: "GitHub", level: "Repository Management & Collaboration" },
        { name: "VS Code", level: "Primary Development Environment" },
        { name: "Postman", level: "API Testing & Endpoint Verification" },
        { name: "Vercel", level: "Frontend CI/CD & Deployment" },
        { name: "npm", level: "Package & Dependency Management" },
      ],
    },
  ] as SkillCategory[],
  education: [
    {
      degree: "Diploma in Engineering",
      field: "Computer Science and Technology (CST)",
      institution: "",
      location: "Moulvibazar, Sylhet, Bangladesh",
      currentStatus: "Diploma in Engineering — In Progress",
      period: "Currently Pursuing",
      description:
        "Building a solid academic foundation in computer science fundamentals, computer systems, and programming, complemented by intensive self-directed web development.",
      highlights: [
        "Core Coursework: Programming Fundamentals, Web Development Basics, Computer Hardware & Systems, Database Foundations",
        "Active technical practice in developing web projects and practicing algorithm fundamentals",
        "Participating in student peer learning and coding problem-solving sessions",
      ],
    },
  ] as EducationItem[],
};
