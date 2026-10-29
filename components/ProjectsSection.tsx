"use client";

import React, { useState } from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "./Icons";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/projects";
import { personalData } from "@/data/personal";

type FilterCategory = "All" | "Full Stack" | "Web App";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Selected <span className="gradient-text-purple">Projects</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 text-sm sm:text-base">
            Real projects built with modern web technologies. Click &apos;View Details&apos; to explore
            architecture decisions, challenges overcome, and future roadmaps.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {(["All", "Full Stack", "Web App"] as FilterCategory[]).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg shadow-violet-900/30 scale-105"
                  : "bg-slate-900/70 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* GitHub Exploration Card Footer */}
        <div className="mt-16 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-[#0d1326] to-slate-900/80 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800/80 border border-slate-700 text-white shrink-0 shadow-md">
              <GithubIcon className="w-7 h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Explore More on GitHub
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Visit my public profile to view repositories, commits, and active code experiments.
              </p>
            </div>
          </div>

          <a
            href={personalData.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 hover:border-violet-500/50 transition-all shadow-md shrink-0"
          >
            <span>Visit @riyad-devx</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
