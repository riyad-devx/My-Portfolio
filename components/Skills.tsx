"use client";

import React from "react";
import {
  Layout,
  Server,
  Database,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { personalData, SkillCategory } from "@/data/personal";

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
            presented without arbitrary percentages.
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
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/skill flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-violet-400 group-hover/skill:text-cyan-400 transition-colors shrink-0" />
                        <span className="text-sm font-semibold text-slate-200 group-hover/skill:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-xs text-slate-400 group-hover/skill:text-slate-300 font-mono bg-slate-800/60 px-2 py-0.5 rounded-md text-right">
                        {skill.level}
                      </span>
                    </div>
                  ))}
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

