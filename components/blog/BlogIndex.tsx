"use client";

import { BlogCard } from "./BlogCard";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  coverImage: string;
  readingTime: string;
};

function NewsInsightsSidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-16 items-center justify-center bg-white z-10 hidden lg:flex">
      <div className="transform -rotate-90 whitespace-nowrap text-[10px] tracking-[0.3em] font-semibold uppercase text-grey-500">
        News & Insights
      </div>
    </div>
  );
}

function NewsInsightsHeader() {
  return (
    <div className="lg:hidden flex items-center justify-center py-6 border-b border-grey-100 mb-10">
      <h2 className="text-xs tracking-[0.3em] font-semibold uppercase text-grey-500">
        News & Insights
      </h2>
    </div>
  );
}

function getVariant(index: number): "featured" | "standard" | "text-only" {
  if (index === 0) return "featured";
  if (index % 2 === 0) return "text-only";
  return "standard";
}

export function BlogIndex({ posts }: { posts: Post[] }) {
  return (
    <div className="min-h-screen bg-white">
      <NewsInsightsSidebar />
      <NewsInsightsHeader />

      <div className="lg:ml-16">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {posts.map((post, index) => {
              const variant = getVariant(index);
              return (
                <div
                  key={post.slug}
                  className={
                    variant === "featured"
                      ? "col-span-1 md:col-span-2 lg:col-span-1"
                      : "col-span-1"
                  }
                >
                  <BlogCard
                    variant={variant}
                    image={post.coverImage}
                    date={post.date}
                    category={post.category}
                    title={post.title}
                    excerpt={post.excerpt}
                    slug={post.slug}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
