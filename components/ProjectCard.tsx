import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight, Clock } from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isLive = Boolean(project.liveUrl);
  const hasGithub = Boolean(project.githubUrl);

  return (
    <article className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-slate-800/80 hover:border-violet-500/50 flex flex-col justify-between group transition-all duration-300 shadow-xl shadow-black/30">
      <div>
        {/* Project Visual Banner */}
        <div className="relative w-full h-52 sm:h-56 bg-slate-950 overflow-hidden border-b border-slate-800/80">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />

          {/* Status Badge overlay */}
          <div className="absolute top-3.5 right-3.5 z-10">
            {isLive ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 backdrop-blur-md shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live on Vercel
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-amber-300 border border-amber-500/40 backdrop-blur-md shadow-md">
                <Clock className="w-3 h-3 text-amber-400" />
                {project.status}
              </span>
            )}
          </div>

          {/* Category Tag overlay */}
          <div className="absolute bottom-3 left-3.5 z-10">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-semibold uppercase tracking-wider bg-black/75 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-7 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs font-medium text-cyan-400 mt-1">
              {project.tagline}
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {project.summary}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-900/90 text-slate-300 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-violet-950/40 text-violet-300 border border-violet-500/30">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Buttons Footer */}
      <div className="p-6 sm:p-7 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between gap-3">
        {/* Dynamic Detail Link */}
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-violet-400 hover:text-cyan-300 transition-colors group/link"
        >
          <span>View Details</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
        </Link>

        {/* External Links (Live & GitHub) */}
        <div className="flex items-center gap-2">
          {hasGithub ? (
            <a
              href={project.githubUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors"
              aria-label={`GitHub repository for ${project.title}`}
              title="View GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : (
            <span
              className="p-2 rounded-xl bg-slate-900/50 text-slate-400 border border-slate-800 cursor-not-allowed"
              title="Repository Coming Soon"
              aria-label="Repository Coming Soon"
            >
              <GithubIcon className="w-4 h-4" />
            </span>
          )}

          {isLive ? (
            <a
              href={project.liveUrl!}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs shadow-md shadow-violet-900/30 transition-all hover:scale-105"
              aria-label={`Live demo for ${project.title}`}
            >
              <span>Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-slate-800/60 text-slate-400 border border-slate-700/60 font-medium text-xs cursor-default"
              title="Live link will be available upon deployment"
            >
              <span>Soon</span>
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
