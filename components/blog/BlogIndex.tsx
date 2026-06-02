"use client";

import Link from "next/link";
import { BlogCard } from "./BlogCard";
import { ScrollReveal, StaggerReveal, StaggerItem } from "../ui/ScrollReveal";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  readingTime: string;
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogIndex({ posts }: { posts: Post[] }) {
  const featured = posts[0];
  const recent = posts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
        {/* Page header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.35em] font-semibold text-gold">
            News &amp; Insights
          </p>
          <h1 className="mt-4 text-5xl font-bold text-navy sm:text-6xl lg:text-7xl">
            LexSuite Blog
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-grey-500">
            AI law, NDPA compliance, IP protection, and startup legal best
            practices for Nigerian founders and legal teams.
          </p>
        </div>

        {/* Featured article */}
        {featured && (
          <ScrollReveal direction="up" distance={30}>
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-20">
              <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-gradient-to-br from-gold/10 to-gold/5">
                  <div className="absolute inset-0 flex items-center justify-center text-7xl font-serif font-bold text-gold/15 select-none">
                    {featured.title.charAt(0)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-grey-500 mb-3">
                    <time dateTime={featured.date}>
                      {formatDate(featured.date)}
                    </time>
                    <span className="text-grey-300">|</span>
                    <span className="uppercase tracking-[0.15em] text-gold">
                      {featured.category}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy transition-colors duration-300 group-hover:text-gold sm:text-4xl lg:text-5xl leading-[1.15]">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="mt-4 text-lg leading-relaxed text-grey-500 line-clamp-3">
                      {featured.excerpt}
                    </p>
                  )}
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-gold transition-all group-hover:gap-3">
                    <span>Read article</span>
                    <span aria-hidden="true" className="text-lg">&rarr;</span>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        )}

        {/* Recent articles header */}
        <div className="mb-10 flex items-center justify-between border-b border-grey-100 pb-5">
          <h2 className="text-xl font-bold text-navy sm:text-2xl">
            Recent articles
          </h2>
          <span className="text-sm font-medium text-grey-400">
            {recent.length} {recent.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {/* Recent articles grid */}
        <StaggerReveal className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {recent.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard
                variant="standard"
                image={post.coverImage}
                date={post.date}
                category={post.category}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
              />
            </StaggerItem>
          ))}
        </StaggerReveal>
      </div>
    </div>
  );
}
