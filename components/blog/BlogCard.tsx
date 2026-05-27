"use client";

import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  variant?: "featured" | "standard" | "text-only";
  image?: string;
  date: string;
  category: string;
  title: string;
  excerpt?: string;
  slug: string;
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function hasRealImage(src?: string) {
  return src && src !== "/og-image.svg" && src !== "/placeholder.svg";
}

export function BlogCard({
  variant = "standard",
  image,
  date,
  category,
  title,
  excerpt,
  slug,
}: BlogCardProps) {
  const showImage = hasRealImage(image) && variant !== "text-only";

  return (
    <Link href={`/blog/${slug}`} className="group block">
      <article className="flex flex-col">
        {showImage && (
          <div className="relative aspect-[16/10] overflow-hidden mb-5">
            <Image
              src={image!}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="flex items-center gap-2 text-sm font-medium text-grey-600 mb-2">
          <time dateTime={date}>{formatDate(date)}</time>
          <span className="text-grey-300">|</span>
          <span className="uppercase tracking-[0.15em]">{category}</span>
        </div>

        <h3 className="font-serif text-2xl leading-tight mb-2 transition-colors duration-300 group-hover:text-gold">
          {title}
        </h3>

        {excerpt && variant === "featured" && (
          <p className="text-grey-600 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>
        )}
      </article>
    </Link>
  );
}
