"use client";

import React from "react";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
} from "lucide-react";
import {
  SiHtml5,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiNpm,
} from "react-icons/si";
import { FaCss3Alt, FaExchangeAlt, FaDatabase, FaCode } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";
import { personalData, SkillCategory } from "@/data/personal";

interface SkillBrandConfig {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  bgColor: string;
  borderColor: string;
  hoverGlow: string;
}

const skillBrandMap: Record<string, SkillBrandConfig> = {
  HTML5: {
    icon: SiHtml5,
    color: "#E34F26",
    bgColor: "bg-[#E34F26]/10",
    borderColor: "border-[#E34F26]/25 group-hover/skill:border-[#E34F26]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(227,79,38,0.35)]",
  },
  CSS3: {
    icon: FaCss3Alt,
    color: "#1572B6",
    bgColor: "bg-[#1572B6]/10",
    borderColor: "border-[#1572B6]/25 group-hover/skill:border-[#1572B6]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(21,114,182,0.35)]",
  },
  "JavaScript (ES6+)": {
    icon: SiJavascript,
    color: "#F7DF1E",
    bgColor: "bg-[#F7DF1E]/10",
    borderColor: "border-[#F7DF1E]/25 group-hover/skill:border-[#F7DF1E]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(247,223,30,0.35)]",
  },
  "React.js": {
    icon: SiReact,
    color: "#61DAFB",
    bgColor: "bg-[#61DAFB]/10",
    borderColor: "border-[#61DAFB]/25 group-hover/skill:border-[#61DAFB]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(97,218,251,0.35)]",
  },
  "Next.js (App Router)": {
    icon: SiNextdotjs,
    color: "#F8FAFC",
    bgColor: "bg-white/10",
    borderColor: "border-white/20 group-hover/skill:border-white/50",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(255,255,255,0.25)]",
  },
  "Tailwind CSS": {
    icon: SiTailwindcss,
    color: "#06B6D4",
    bgColor: "bg-[#06B6D4]/10",
    borderColor: "border-[#06B6D4]/25 group-hover/skill:border-[#06B6D4]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(6,182,212,0.35)]",
  },
  "Node.js": {
    icon: SiNodedotjs,
    color: "#5FA04E",
    bgColor: "bg-[#5FA04E]/10",
    borderColor: "border-[#5FA04E]/25 group-hover/skill:border-[#5FA04E]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(95,160,78,0.35)]",
  },
  "Express.js": {
    icon: SiExpress,
    color: "#E2E8F0",
    bgColor: "bg-slate-700/30",
    borderColor: "border-slate-600/30 group-hover/skill:border-slate-400/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(226,232,240,0.25)]",
  },
  "REST APIs": {
    icon: TbApi,
    color: "#38BDF8",
    bgColor: "bg-[#38BDF8]/10",
    borderColor: "border-[#38BDF8]/25 group-hover/skill:border-[#38BDF8]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(56,189,248,0.35)]",
  },
  "JSON & Async Handling": {
    icon: FaExchangeAlt,
    color: "#A78BFA",
    bgColor: "bg-[#A78BFA]/10",
    borderColor: "border-[#A78BFA]/25 group-hover/skill:border-[#A78BFA]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(167,139,250,0.35)]",
  },
  MongoDB: {
    icon: SiMongodb,
    color: "#47A248",
    bgColor: "bg-[#47A248]/10",
    borderColor: "border-[#47A248]/25 group-hover/skill:border-[#47A248]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(71,162,72,0.35)]",
  },
  Mongoose: {
    icon: SiMongoose,
    color: "#EF4444",
    bgColor: "bg-[#EF4444]/10",
    borderColor: "border-[#EF4444]/25 group-hover/skill:border-[#EF4444]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(239,68,68,0.35)]",
  },
  "Database Design Basics": {
    icon: FaDatabase,
    color: "#10B981",
    bgColor: "bg-[#10B981]/10",
    borderColor: "border-[#10B981]/25 group-hover/skill:border-[#10B981]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(16,185,129,0.35)]",
  },
  Git: {
    icon: SiGit,
    color: "#F05032",
    bgColor: "bg-[#F05032]/10",
    borderColor: "border-[#F05032]/25 group-hover/skill:border-[#F05032]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(240,80,50,0.35)]",
  },
  GitHub: {
    icon: SiGithub,
    color: "#F8FAFC",
    bgColor: "bg-slate-800/70",
    borderColor: "border-slate-700/80 group-hover/skill:border-slate-400",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(255,255,255,0.25)]",
  },
  "VS Code": {
    icon: VscVscode,
    color: "#007ACC",
    bgColor: "bg-[#007ACC]/10",
    borderColor: "border-[#007ACC]/25 group-hover/skill:border-[#007ACC]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(0,122,204,0.35)]",
  },
  Postman: {
    icon: SiPostman,
    color: "#FF6C37",
    bgColor: "bg-[#FF6C37]/10",
    borderColor: "border-[#FF6C37]/25 group-hover/skill:border-[#FF6C37]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(255,108,55,0.35)]",
  },
  Vercel: {
    icon: SiVercel,
    color: "#F8FAFC",
    bgColor: "bg-white/10",
    borderColor: "border-white/20 group-hover/skill:border-white/50",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(255,255,255,0.25)]",
  },
  npm: {
    icon: SiNpm,
    color: "#CB3837",
    bgColor: "bg-[#CB3837]/10",
    borderColor: "border-[#CB3837]/25 group-hover/skill:border-[#CB3837]/60",
    hoverGlow: "group-hover/skill:shadow-[0_0_12px_rgba(203,56,55,0.35)]",
  },
};

export default function Skills() {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-violet-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "Wrench":
      default:
        return <Wrench className="w-5 h-5 text-amber-400" />;
    }
  };

  const getCategoryAccent = (index: number) => {
    switch (index) {
      case 0:
        return "border-cyan-500/20 hover:border-cyan-500/50 shadow-cyan-950/20";
      case 1:
        return "border-violet-500/20 hover:border-violet-500/50 shadow-violet-950/20";
      case 2:
        return "border-emerald-500/20 hover:border-emerald-500/50 shadow-emerald-950/20";
      case 3:
      default:
        return "border-amber-500/20 hover:border-amber-500/50 shadow-amber-950/20";
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="gradient-text-purple">Technologies</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 text-sm sm:text-base">
            Practiced hands-on through project creation and coursework — transparently
            presented with recognizable industry tooling.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {personalData.skills.map((category: SkillCategory, index: number) => (
            <div
              key={category.title}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 border ${getCategoryAccent(
                index
              )} transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-700/80 shadow-md">
                    {getCategoryIcon(category.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-3 mt-5">
                  {category.skills.map((skill) => {
                    const brand = skillBrandMap[skill.name] || {
                      icon: FaCode,
                      color: "#94A3B8",
                      bgColor: "bg-slate-800/60",
                      borderColor: "border-slate-700/80 group-hover/skill:border-slate-500",
                      hoverGlow: "",
                    };
                    const SkillIcon = brand.icon;

                    return (
                      <div
                        key={skill.name}
                        className="group/skill flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all duration-200"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          {/* Dedicated Brand Icon Container */}
                          <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-all duration-300 shrink-0 ${brand.bgColor} ${brand.borderColor} ${brand.hoverGlow}`}
                            aria-hidden="true"
                          >
                            <SkillIcon
                              className="w-4 h-4 transition-transform duration-200 group-hover/skill:scale-110"
                              style={{ color: brand.color }}
                            />
                          </div>
                          <span className="text-sm font-semibold text-slate-200 group-hover/skill:text-white transition-colors truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] sm:text-xs text-slate-400 group-hover/skill:text-slate-300 font-mono bg-slate-800/60 px-2.5 py-1 rounded-md text-right shrink-0 ml-2 border border-slate-800">
                          {skill.level}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Card Footer note */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Practiced in Projects</span>
                <span className="text-violet-400 font-medium">Ready for real workflows</span>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Workflow Commitment */}
        <div className="mt-12 rounded-2xl border border-violet-500/20 bg-slate-900/40 backdrop-blur-md p-6 text-center max-w-3xl mx-auto">
          <p className="text-sm text-slate-300 leading-relaxed">
            💡 <strong className="text-white">Learning Philosophy:</strong> Rather than
            claiming arbitrary 99% mastery, I prioritize deep conceptual understanding,
            reading official documentation, debugging systematically, and building real projects.
          </p>
        </div>
      </div>
    </section>
  );
}
