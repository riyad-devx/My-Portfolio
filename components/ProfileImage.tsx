"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProfileImageProps {
  className?: string;
}

export default function ProfileImage({ className = "" }: ProfileImageProps) {
  // Uses /profile.jpg, falling back seamlessly to /images/avatar-placeholder.svg
  const [imageSrc, setImageSrc] = useState<string>("/profile.jpg");
  const [hasError, setHasError] = useState<boolean>(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImageSrc("/images/avatar-placeholder.svg");
    }
  };

  return (
    <div className={`relative group ${className}`}>
      {/* Outer ambient glow rings */}
      <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-violet-600 via-indigo-500 to-cyan-400 opacity-40 blur-xl group-hover:opacity-65 transition-opacity duration-500 animate-pulse" />

      {/* Border Ring Container */}
      <div className="relative rounded-full p-1 bg-gradient-to-br from-violet-500 via-purple-600 to-cyan-400 shadow-2xl shadow-violet-950/80">
        <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden bg-[#0d1224] border-2 border-[#1e293b]">
          <Image
            src={imageSrc}
            alt="Riyad Mia - Aspiring Full Stack Developer"
            fill
            sizes="(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px"
            priority
            onError={handleError}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Graceful Overlay Hint only if using fallback avatar */}
          {hasError && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-center">
              <span className="text-[11px] font-medium text-slate-300 drop-shadow">
                Profile Placeholder (RM)
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Floating Status Pill */}
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d1326]/90 border border-violet-500/30 backdrop-blur-md shadow-lg shadow-black/50 text-xs font-semibold text-slate-200">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
        </span>
        <span className="whitespace-nowrap">Open to Junior Roles</span>
      </div>
    </div>
  );
}
