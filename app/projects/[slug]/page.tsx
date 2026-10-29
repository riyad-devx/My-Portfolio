import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ExternalLink,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Layers,
  ArrowRight,
  Code2,
  Calendar,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  getProjectBySlug,
  getAllProjectSlugs,
  projectsData,
} from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// Generate static params for all project slugs
export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate dynamic metadata for SEO
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Tamim Mia Riyad Portfolio`,
      description: project.summary,
      images: [
        {
          url: project.image,
          width: 800,
          height: 500,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Find next and previous projects for navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projectsData.length - 1
      ? projectsData[currentIndex + 1]
      : null;

  const isLive = Boolean(project.liveUrl);
  const hasGithub = Boolean(project.githubUrl);

  return (
    <div className="min-h-screen flex flex-col bg-[#060913] text-slate-100 relative selection:bg-purple-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1 w-full pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            className="flex items-center gap-2 text-xs text-slate-400 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-violet-300 transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link
              href="/#projects"
              className="hover:text-violet-300 transition-colors"
            >
              Projects
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-violet-300 font-semibold truncate">
              {project.title}
            </span>
          </nav>

          {/* Back to Projects button */}
          <div className="mb-6">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="space-y-4 mb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold uppercase tracking-wider bg-violet-950/60 text-violet-300 border border-violet-500/30">
                {project.category}
              </span>

              {isLive ? (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950/90 text-emerald-300 border border-emerald-500/40">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live &amp; Deployed
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-amber-300 border border-amber-500/40">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  {project.status}
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-cyan-400 font-medium max-w-3xl">
              {project.tagline}
            </p>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {project.summary}
            </p>

            {/* CTAs Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              {isLive ? (
                <a
                  href={project.liveUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-violet-950/50 transition-all hover:scale-105"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Project</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 text-slate-400 border border-slate-700/60 text-sm font-medium cursor-not-allowed">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Live URL Coming Soon</span>
                </div>
              )}

              {hasGithub ? (
                <a
                  href={project.githubUrl!}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-800 hover:border-slate-700 font-semibold text-sm transition-all shadow-md"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 text-slate-400 border border-slate-800 text-sm font-medium cursor-not-allowed">
                  <GithubIcon className="w-4 h-4" />
                  <span>Repository Coming Soon</span>
                </div>
              )}
            </div>
          </div>

          {/* Project Visual Showcase */}
          <div className="relative w-full h-64 sm:h-96 md:h-[450px] rounded-3xl overflow-hidden border border-slate-800/80 bg-slate-950 shadow-2xl mb-12">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover object-top"
            />
          </div>

          {/* Project Details Grid */}
          <div className="space-y-12">
            {/* Overview & Motivation */}
            <section className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800/80">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2.5">
                  <Sparkles className="w-5 h-5 text-violet-400" />
                  <span>Project Overview</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-cyan-400" />
                  <span>Motivation &amp; Background</span>
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {project.motivation}
                </p>
              </div>
            </section>

            {/* Key Features */}
            <section className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800/80">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Features Implemented</span>
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {project.keyFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Tech Stack Breakdown */}
            <section className="glass-panel rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-800/80">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2.5">
                <Layers className="w-5 h-5 text-violet-400" />
                <span>Technology Stack Breakdown</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Frontend */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                    Frontend
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techBreakdown.frontend.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend (if available) */}
                {project.techBreakdown.backend && (
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                      Backend
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techBreakdown.backend.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Database (if available) */}
                {project.techBreakdown.database && (
                  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      Database
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techBreakdown.database.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Styling */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
                    Styling &amp; Design
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techBreakdown.styling.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Tools &amp; Pipeline
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techBreakdown.tools.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Architecture Details */}
            <section className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800/80">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2.5">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>Architecture &amp; Implementation Details</span>
              </h2>

              <ul className="space-y-3">
                {project.architectureDetails.map((detail, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                  >
                    <span className="h-2 w-2 rounded-full bg-violet-400 mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges & Solutions */}
            <section className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800/80">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                <span>Development Challenges &amp; Solutions</span>
              </h2>

              <div className="grid grid-cols-1 gap-4">
                {project.challenges.map((c, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-3"
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                        Challenge #{idx + 1}
                      </span>
                      <p className="text-sm font-semibold text-slate-200">
                        {c.challenge}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-800 space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                        Solution Implemented
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Future Improvements */}
            <section className="glass-panel rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800/80">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-violet-400" />
                <span>Future Improvements &amp; Roadmap</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.futureImprovements.map((imp, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="h-5 w-5 rounded-md bg-violet-600/20 text-violet-300 flex items-center justify-center font-mono text-[11px] shrink-0 font-bold">
                      {idx + 1}
                    </span>
                    <span>{imp}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Project Pagination / Previous - Next Navigation */}
          <div className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group flex flex-col p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-all text-left"
              >
                <span className="text-xs text-slate-400 flex items-center gap-1 group-hover:text-violet-300">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Project</span>
                </span>
                <span className="text-sm font-bold text-white mt-1 group-hover:text-violet-200">
                  {prevProject.title}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextProject && (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group flex flex-col p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-all text-right sm:col-start-2"
              >
                <span className="text-xs text-slate-400 flex items-center justify-end gap-1 group-hover:text-violet-300">
                  <span>Next Project</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="text-sm font-bold text-white mt-1 group-hover:text-violet-200">
                  {nextProject.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
