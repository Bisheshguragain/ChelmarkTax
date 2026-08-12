import type { MetadataRoute } from "next";
import { seoData } from "@/data/seoData";
import { problems } from "@/data/problems";
import { hmrcProblems } from "@/data/hmrcProblems";
import { industries } from "@/data/industries";
import { blogPosts } from "@/data/blogPosts";

const BASE_URL = "https://www.chelmarktax.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/knowledge-hub`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/knowledge-hub/guides`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/knowledge-hub/problems`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/knowledge-hub/industries`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/knowledge-hub/questions`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/knowledge-hub/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/local-help`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/terms-of-business`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const localHelpRoutes: MetadataRoute.Sitemap = seoData.map((entry) => ({
    url: `${BASE_URL}/local-help/${entry.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const guideRoutes: MetadataRoute.Sitemap = problems.map((p) => ({
    url: `${BASE_URL}/knowledge-hub/guides/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const problemRoutes: MetadataRoute.Sitemap = hmrcProblems.map((p) => ({
    url: `${BASE_URL}/knowledge-hub/problems/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industries.map((i) => ({
    url: `${BASE_URL}/knowledge-hub/industries/${i.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/knowledge-hub/blog/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...guideRoutes,
    ...problemRoutes,
    ...industryRoutes,
    ...blogRoutes,
    ...localHelpRoutes,
  ];
}
