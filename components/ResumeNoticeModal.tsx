"use client";

import React, { useEffect } from "react";
import { X, FileText, Mail, MessageSquare, CheckCircle2 } from "lucide-react";
import { personalData } from "@/data/personal";

interface ResumeNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeNoticeModal({
  isOpen,
  onClose,
}: ResumeNoticeModalProps) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-violet-500/30 bg-[#0d1326] p-6 sm:p-8 shadow-2xl shadow-purple-950/50"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Ambient Top Glow */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-r from-violet-600/40 to-cyan-500/40 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-lg p-2 text-slate-400 hover:bg-slate-800/80 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 border border-violet-500/30 text-violet-400">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-1">
              Coming Soon
            </div>
            <h3
              id="resume-modal-title"
              className="text-xl font-bold text-slate-100"
            >
              Resume Under Final Update
            </h3>
          </div>
        </div>

        {/* Body Text */}
        <p className="text-sm leading-relaxed text-slate-300 mb-5">
          My technical resume is currently being finalized, highlighting my
          Diploma in Engineering coursework and latest full-stack projects.
          (including <strong className="text-violet-300">Bazar Dor</strong> on
          Vercel), and my growing Node.js / MongoDB skills.
        </p>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 mb-6 space-y-2 text-xs text-slate-300">
          <div className="flex items-center gap-2 text-slate-200 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Expected Release: Ready for upcoming junior/internship
              applications
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>
              Includes: Live project links, CST coursework & verified GitHub
              repos
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-400 mb-4">
          Need an immediate copy or have an inquiry? Feel free to reach out
          directly:
        </p>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={personalData.socialLinks.email}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm transition-all shadow-lg shadow-violet-700/25"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
          <a
            href={personalData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/40 text-emerald-300 font-medium text-sm transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-4 text-center">
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
          >
            Close window
          </button>
        </div>
      </div>
    </div>
  );
}
