"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Code2, Mail, MessageSquare } from "lucide-react";
import { GithubIcon } from "./Icons";
import { personalData } from "@/data/personal";

export default function Footer() {
  const currentYear = 2026;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#04060d] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Decorative top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-0.5">
                <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#090d1a]">
                  <Code2 className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <span className="font-bold text-lg tracking-tight text-white">
                {personalData.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Full Stack Developer &amp; Diploma in CST student at Moulvibazar
              Polytechnic Institute. Dedicated to writing clean code and crafting responsive, accessible user interfaces.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-violet-500 hover:text-violet-400 text-slate-400 transition-colors"
                aria-label="GitHub profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socialLinks.email}
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 hover:text-cyan-400 text-slate-400 transition-colors"
                aria-label="Send email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500 hover:text-emerald-400 text-slate-400 transition-colors"
                aria-label="WhatsApp chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#home" className="text-slate-400 hover:text-violet-300 transition-colors">
                Home
              </a>
              <a href="#about" className="text-slate-400 hover:text-violet-300 transition-colors">
                About
              </a>
              <a href="#skills" className="text-slate-400 hover:text-violet-300 transition-colors">
                Skills
              </a>
              <a href="#education" className="text-slate-400 hover:text-violet-300 transition-colors">
                Education
              </a>
              <a href="#projects" className="text-slate-400 hover:text-violet-300 transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-slate-400 hover:text-violet-300 transition-colors">
                Contact
              </a>
              <Link href="/projects/bazar-dor" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Bazar Dor
              </Link>
              <Link href="/projects/bangla-news-24" className="text-slate-400 hover:text-cyan-300 transition-colors">
                Bangla News 24
              </Link>
            </div>
          </div>

          {/* Education & Status Info (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Academic Status
            </h4>
            <div className="rounded-xl border border-slate-800/80 bg-slate-900/40 p-3 space-y-1.5 text-xs">
              <p className="font-semibold text-slate-200">
                Moulvibazar Polytechnic Institute
              </p>
              <p className="text-slate-400">
                Computer Science &amp; Technology (CST)
              </p>
              <p className="text-[11px] text-emerald-400 font-medium">
                ● 3rd Semester in progress
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            &copy; {currentYear} {personalData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Built with Next.js, React &amp; Tailwind CSS
            </span>

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-violet-500 transition-colors text-xs"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
