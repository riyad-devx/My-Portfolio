import type { MetadataRoute } from "next";
import { projectsData } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://riyad-portfolio.vercel.app";
  const currentDate = new Date("2026-10-29");

  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}
