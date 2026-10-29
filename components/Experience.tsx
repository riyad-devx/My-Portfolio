import React from "react";
import { Briefcase, Calendar, CheckCircle2, Sparkles, Layers, Terminal } from "lucide-react";
import { personalData, ExperienceItem } from "@/data/personal";

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience &amp; <span className="gradient-text-purple">Project Practice</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 text-sm sm:text-base">
            Transparent, project-grounded learning without invented employment history.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {personalData.experience.map((item: ExperienceItem, idx: number) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-7 sm:p-10 border border-slate-800/80 hover:border-violet-500/40 transition-all duration-300 shadow-xl shadow-black/30"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-slate-700/80 text-cyan-400 shrink-0 shadow-md">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.role}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-violet-300">
                      {item.context}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 self-start sm:self-center">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-950/40 text-violet-300 border border-violet-500/30 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mb-5 inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{item.statusTag}</span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Core Execution Highlights */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>Key Project Deliverables &amp; Practices</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {item.responsibilities.map((resp, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-5 border-t border-slate-800/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-violet-400" />
                  <span>Technologies Regularly Exercised</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900 border border-slate-700/70 text-slate-300 hover:text-white hover:border-violet-500/50 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Hiring / Internship readiness callout */}
          <div className="rounded-2xl border border-dashed border-violet-500/30 bg-violet-950/10 p-6 text-center">
            <h4 className="text-sm font-bold text-violet-200 mb-1">
              Looking for a disciplined, fast-learning junior developer or intern?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
              I am motivated, eager to learn production codebases, and ready to contribute to real-world frontend and full-stack software teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

