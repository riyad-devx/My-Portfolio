"use client";

import React, { useState } from "react";
import {
  Mail,
  FileText,
  ArrowRight,
  Sparkles,
  MapPin,
  Code2,
  Database,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import ProfileImage from "./ProfileImage";
import ResumeNoticeModal from "./ResumeNoticeModal";
import { personalData } from "@/data/personal";

export default function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [showLinkedInNotice, setShowLinkedInNotice] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-violet-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-[300px] h-[300px] bg-purple-700/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet-500/30 bg-violet-950/30 backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-medium text-violet-200">
                {personalData.statusBadge}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-semibold tracking-wide uppercase text-cyan-400">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                <span className="gradient-text-hero">{personalData.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-violet-300">
                {personalData.designation}
              </h2>
            </div>

            {/* Short Introduction */}
            <p className="max-w-xl text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {personalData.hero.bio}
            </p>

            {/* Micro Details (Location & Studies) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{personalData.location}</span>
              </div>
              <span className="hidden sm:inline text-slate-600">•</span>
              <div className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Diploma in CST (3rd Sem) • Moulvibazar Polytechnic</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              {/* View Projects Primary */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-lg shadow-violet-900/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Resume Button with "Soon" Indicator */}
              <button
                type="button"
                onClick={() => setIsResumeModalOpen(true)}
                className="relative group inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-violet-500/50 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                aria-label="Download technical resume (Notice: under final update)"
              >
                <FileText className="w-4 h-4 text-violet-400 group-hover:text-cyan-400 transition-colors" />
                <span>Download Resume</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Soon
                </span>
              </button>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Connect:
              </span>

              {/* GitHub */}
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-violet-500 hover:bg-violet-950/40 text-slate-300 hover:text-white transition-all hover:-translate-y-0.5 shadow-sm"
                aria-label="Visit Riyad Mia's GitHub profile"
                title="GitHub: @riyad-devx"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              {/* Email */}
              <a
                href={personalData.socialLinks.email}
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 transition-all hover:-translate-y-0.5 shadow-sm"
                aria-label="Send email to Riyad Mia"
                title="Email: mdriyadmia01766@gmail.com"
              >
                <Mail className="w-5 h-5" />
              </a>

              {/* LinkedIn Placeholder with friendly prompt */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setShowLinkedInNotice(!showLinkedInNotice)}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-blue-500 hover:bg-blue-950/40 text-slate-400 hover:text-blue-300 transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="LinkedIn profile status"
                  title="LinkedIn: Coming Soon"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </button>

                {showLinkedInNotice && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-12 w-52 p-2.5 rounded-lg bg-slate-900 border border-blue-500/40 text-xs text-slate-200 shadow-xl z-20 text-center animate-in fade-in">
                    <p className="font-semibold text-blue-300 mb-0.5">LinkedIn Profile</p>
                    <p className="text-[11px] text-slate-400">
                      Currently being configured. In the meantime, connect via GitHub or Email!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Profile Photo Area & Tech Highlights (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative">
              {/* Profile Photo component with graceful local fallback */}
              <ProfileImage />

              {/* Floating Tech Pill 1: React / Next.js */}
              <div className="absolute -top-4 -left-4 sm:-left-6 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0d1326]/90 border border-violet-500/30 backdrop-blur-md shadow-lg shadow-black/40 text-xs font-semibold text-violet-300 animate-bounce duration-1000">
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Next.js &amp; React</span>
              </div>

              {/* Floating Tech Pill 2: Node.js & MongoDB */}
              <div className="absolute bottom-6 -right-4 sm:-right-8 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#0d1326]/90 border border-cyan-500/30 backdrop-blur-md shadow-lg shadow-black/40 text-xs font-semibold text-cyan-300">
                <Database className="w-4 h-4 text-emerald-400" />
                <span>Node &amp; MongoDB</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Notice Modal */}
      <ResumeNoticeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </section>
  );
}
