import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, HelpCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#060913] text-slate-100 p-4 text-center">
      <div className="max-w-md w-full glass-panel rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30 text-violet-400 mx-auto">
          <HelpCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-white">Page Not Found</h1>
          <p className="text-sm text-slate-300">
            The page or project you are looking for doesn&apos;t exist or may have been moved.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all shadow-md shadow-violet-900/40"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 font-semibold text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>View Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

