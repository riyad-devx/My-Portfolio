"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Send,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personalData } from "@/data/personal";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isCopiedEmail, setIsCopiedEmail] = useState(false);
  const [isCopiedPhone, setIsCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
      setIsCopiedEmail(true);
      setTimeout(() => setIsCopiedEmail(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalData.phone);
      setIsCopiedPhone(true);
      setTimeout(() => setIsCopiedPhone(false), 2500);
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Prepare encoded mailto link
    const subject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalData.email}?subject=${subject}&body=${body}`;

    // Open user's email client
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-950/20 text-xs font-semibold text-violet-300 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build <span className="gradient-text-purple">Together</span>
          </h2>
          <p className="mt-3 max-w-2xl text-slate-300 text-sm sm:text-base">
            I am actively seeking junior developer roles, internships, and collaborative
            projects. Reach out directly through any preferred channel below.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-violet-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Email Address
                  </h3>
                  <a
                    href={personalData.socialLinks.email}
                    className="text-sm font-semibold text-white hover:text-violet-300 transition-colors break-all mt-0.5 inline-block"
                  >
                    {personalData.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Fast response within 24 hours
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-violet-500 text-slate-400 hover:text-white transition-colors shrink-0"
                aria-label="Copy email address"
                title="Copy Email"
              >
                {isCopiedEmail ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-600/20 border border-cyan-500/30 text-cyan-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Phone / Direct Line
                  </h3>
                  <a
                    href={`tel:+88${personalData.phone}`}
                    className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors mt-0.5 inline-block font-mono"
                  >
                    {personalData.phoneFormatted}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Available for phone interviews &amp; inquiries
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-500 text-slate-400 hover:text-white transition-colors shrink-0"
                aria-label="Copy phone number"
                title="Copy Phone"
              >
                {isCopiedPhone ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* WhatsApp Card */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex items-start justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 shrink-0">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    WhatsApp Chat
                  </h3>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Instant Messaging
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Quick messaging &amp; project discussions
                  </p>
                </div>
              </div>

              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors shrink-0"
              >
                <span>Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Social Quick Box */}
            <div className="space-y-3 pt-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                <div className="flex items-center gap-2 text-violet-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold text-slate-200">Location</span>
                </div>
                <p className="text-xs text-slate-400">{personalData.location}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <GithubIcon className="w-4 h-4" />
                    <span className="text-xs font-bold text-slate-200">GitHub</span>
                  </div>
                  <a
                    href={personalData.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-white underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>@riyad-devx</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <LinkedinIcon className="w-4 h-4" />
                    <span className="text-xs font-bold text-slate-200">LinkedIn</span>
                  </div>
                  <a
                    href={personalData.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 hover:text-white underline underline-offset-2 flex items-center gap-1"
                  >
                    <span>md-riyad32</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Composer Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800/80 shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in your message below to send an email inquiry directly to my inbox.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-semibold text-emerald-200">
                      Message client triggered!
                    </p>
                    <p className="text-xs text-emerald-400/90 mt-0.5">
                      Your default mail program should open with the prepared details. You can also message me directly on WhatsApp!
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                    >
                      Your Email <span className="text-violet-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Junior Developer Role / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                  >
                    Your Message <span className="text-violet-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity, project requirements, or question..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700/80 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all resize-y"
                  />
                </div>

                {/* Submit CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 shadow-lg shadow-violet-900/40 transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>

                  <span className="text-[11px] text-slate-400 text-center sm:text-right">
                    Zero spam. Direct communication only.
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
