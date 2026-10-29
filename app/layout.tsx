import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#060913",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://riyad-portfolio.vercel.app"),
  title: {
    default: "Riyad Mia | Aspiring Full Stack Developer",
    template: "%s | Riyad Mia",
  },
  description:
    "Portfolio of Riyad Mia, Aspiring Full Stack Developer & CST Diploma student at Moulvibazar Polytechnic Institute. Building responsive, accessible web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Riyad Mia",
    "Aspiring Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js",
    "MongoDB",
    "Moulvibazar Polytechnic Institute",
    "Bazar Dor",
    "Frontend Developer",
    "Portfolio",
    "Bangladesh Developer",
  ],
  authors: [{ name: "Riyad Mia", url: "https://github.com/riyad-devx" }],
  creator: "Riyad Mia",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://riyad-portfolio.vercel.app",
    title: "Riyad Mia | Aspiring Full Stack Developer",
    description:
      "Aspiring Full Stack Developer & CST Diploma student building responsive, modern web applications with React, Next.js, and Node.js.",
    siteName: "Riyad Mia Portfolio",
    images: [
      {
        url: "/images/avatar-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "Riyad Mia - Aspiring Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyad Mia | Aspiring Full Stack Developer",
    description:
      "Aspiring Full Stack Developer building responsive, modern web applications with React, Next.js, and Node.js.",
    images: ["/images/avatar-placeholder.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#060913] text-slate-100 antialiased selection:bg-purple-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
