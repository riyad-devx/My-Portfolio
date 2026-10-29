"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, Sparkles, Send } from "lucide-react";
import { personalData } from "@/data/personal";

const navLinks = [
  { name: "Home", href: "#home", targetId: "home" },
  { name: "About", href: "#about", targetId: "about" },
  { name: "Skills", href: "#skills", targetId: "skills" },
  { name: "Education", href: "#education", targetId: "education" },
  { name: "Projects", href: "#projects", targetId: "projects" },
  { name: "Contact", href: "#contact", targetId: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Handle scroll detection for navbar background blur
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close menu on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Construct appropriate link destination
  const getHref = (href: string) => {
    if (isHomePage) {
      return href;
    }
    return `/${href}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#060913]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link
            href={isHomePage ? "#home" : "/"}
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-violet-500 rounded-lg p-1"
            aria-label="Tamim mia Riyad Portfolio Home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-0.5 shadow-md shadow-violet-900/30 group-hover:scale-105 transition-transform">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#090d1a]">
                <Code2 className="w-5 h-5 text-violet-400 group-hover:text-cyan-400 transition-colors" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-white group-hover:text-violet-300 transition-colors">
                {personalData.name}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-cyan-400">
                Full Stack Path
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full border border-slate-800/80 bg-slate-900/40 backdrop-blur-md shadow-inner shadow-black/30"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={getHref(link.href)}
                className="px-3.5 py-1.5 text-xs xl:text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-slate-800/70 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={getHref("#contact")}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white shadow-md shadow-violet-900/30 transition-all hover:scale-[1.02]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getHref("#contact")}
              className="inline-flex items-center justify-center p-2 rounded-lg bg-violet-600/20 text-violet-300 hover:bg-violet-600/30 border border-violet-500/30 text-xs font-semibold mr-1"
              aria-label="Direct message"
            >
              <Send className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-black/75 backdrop-blur-md z-30 lg:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto bg-[#0d1326] border-l border-slate-800 h-[calc(100vh-4rem)] p-6 overflow-y-auto flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                  Navigation Menu
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Riyad Portfolio
                </span>
              </div>

              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={getHref(link.href)}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-violet-950/40 hover:border hover:border-violet-500/30 transition-all"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-slate-500">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-slate-800 space-y-3">
              <a
                href={getHref("#contact")}
                onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-violet-900/40"
              >
                <Send className="w-4 h-4" />
                <span>Contact Riyad</span>
              </a>

              <p className="text-center text-xs text-slate-400">
                Diploma in CST • Moulvibazar Polytechnic
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
