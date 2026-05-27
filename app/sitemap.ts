import { getAllPosts } from "../lib/mdx";

export default function sitemap() {
  const postUrls = getAllPosts().map((post) => ({
    url: `https://lexsuite.com.ng/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const staticPages = [
    { url: "https://lexsuite.com.ng", priority: 1.0 },
    { url: "https://lexsuite.com.ng/services", priority: 0.9 },
    { url: "https://lexsuite.com.ng/about", priority: 0.8 },
    { url: "https://lexsuite.com.ng/contact", priority: 0.8 },
    { url: "https://lexsuite.com.ng/health-check", priority: 0.9 },
    { url: "https://lexsuite.com.ng/blog", priority: 0.8 },
  ];

  return [...staticPages, ...postUrls];
}
