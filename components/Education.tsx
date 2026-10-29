import React from "react";
import { GraduationCap, Calendar, MapPin, Sparkles, BookOpen, CheckCircle } from "lucide-react";
import { personalData, EducationItem } from "@/data/personal";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education &amp; <span className="gradient-text-purple">Foundation</span>
          </h2>
          <p className="mt-3 max-w-xl text-slate-300 text-sm sm:text-base">
            Formal technical education grounding my software development skills.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {personalData.education.map((item: EducationItem, idx: number) => (
            <div
              key={idx}
              className="relative rounded-3xl border border-violet-500/20 bg-gradient-to-b from-[#0d1326] to-[#0a0e1c] p-7 sm:p-10 shadow-2xl shadow-black/40 overflow-hidden"
            >
              {/* Corner decorative gradient */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-violet-600/15 via-transparent to-transparent pointer-events-none" />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30 text-violet-300 shadow-md shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {item.currentStatus}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      {item.degree} in {item.field}
                    </h3>
                    <h4 className="text-base font-semibold text-cyan-300 mt-0.5">
                      {item.institution}
                    </h4>
                  </div>
                </div>

                <div className="flex sm:flex-col items-start sm:items-end gap-2 text-xs sm:text-sm text-slate-400 sm:text-right shrink-0">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-violet-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Coursework & Focus Areas */}
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-violet-400" />
                  <span>Curriculum &amp; Technical Engagement</span>
                </h5>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Semester Progress indicator */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
                  <span>Diploma Progression</span>
                  <span className="text-violet-300 font-semibold">Semester 3 of 8</span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full"
                    style={{ width: "37.5%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

