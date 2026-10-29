import React from "react";
import {
  Code,
  Layout,
  Terminal,
  Compass,
  GraduationCap,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { personalData } from "@/data/personal";

export default function About() {
  const highlightIcons = [
    <Terminal key="terminal" className="w-5 h-5 text-violet-400" />,
    <Layout key="layout" className="w-5 h-5 text-cyan-400" />,
    <Code key="code" className="w-5 h-5 text-purple-400" />,
    <Compass key="compass" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="gradient-text-purple">My Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-3" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl shadow-black/20">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Aspiring Full Stack Developer &amp; CST Student</span>
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {personalData.about.intro}
              </p>

              {personalData.about.paragraphs.map((p, idx) => (
                <p key={idx} className="text-slate-300 text-base leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5 text-cyan-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Responsive Web Engineering</span>
                </div>
                <div className="flex items-center gap-1.5 text-violet-300">
                  <CheckCircle className="w-4 h-4 text-violet-400" />
                  <span>REST API Design &amp; Integration</span>
                </div>
                <div className="flex items-center gap-1.5 text-emerald-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Hands-on Project Building</span>
                </div>
              </div>
            </div>

            {/* Academic Snapshot Banner */}
            <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-950/30 via-slate-900/60 to-slate-900/40 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="h-11 w-11 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-300 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white">
                    Moulvibazar Polytechnic Institute
                  </h4>
                  <p className="text-xs text-slate-400">
                    Diploma in Computer Science &amp; Technology (CST) • 
                  </p>
                </div>
              </div>
              <a
                href="#education"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors whitespace-nowrap inline-flex items-center gap-1"
              >
                <span>View Details</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: 4 Strategic Core Pillars (5 cols) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {personalData.about.highlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/80 hover:border-violet-500/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 border border-slate-700/60 shrink-0 shadow-sm">
                    {highlightIcons[index]}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-white tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Profile Overview Stats */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 bg-slate-900/40 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Quick Profile Attributes
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-400 text-[11px]">Primary Focus</p>
                  <p className="font-semibold text-slate-200 mt-0.5">Full Stack Web</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-400 text-[11px]">Core Runtime</p>
                  <p className="font-semibold text-slate-200 mt-0.5">Node.js &amp; Browser</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-400 text-[11px]">Frontend Stack</p>
                  <p className="font-semibold text-slate-200 mt-0.5">React / Next.js</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <p className="text-slate-400 text-[11px]">Availability</p>
                  <p className="font-semibold text-emerald-400 mt-0.5">Junior &amp; Intern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

