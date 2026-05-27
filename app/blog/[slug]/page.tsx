import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug, getPostSlugs } from "../../../lib/mdx";
import { buildPageTitle, buildCanonical } from "../../../lib/seo";
import { TableOfContents } from "../../../components/blog/TableOfContents";

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter } = await getPostBySlug(params.slug);
  return {
    title: buildPageTitle(frontmatter.title),
    description: frontmatter.excerpt,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url: buildCanonical(`/blog/${params.slug}`),
      images: [
        {
          url: frontmatter.coverImage || "/og-image.svg",
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: { canonical: buildCanonical(`/blog/${params.slug}`) },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter, mdxSource, toc } = await getPostBySlug(params.slug);
  const related = getAllPosts()
    .filter(
      (post) =>
        post.category === frontmatter.category && post.slug !== params.slug,
    )
    .slice(0, 3);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    image: frontmatter.coverImage || "/og-image.svg",
    author: {
      "@type": "Organization",
      name: frontmatter.author || "LexSuite Solicitors",
    },
    datePublished: frontmatter.date,
    publisher: {
      "@type": "Organization",
      name: "LexSuite Solicitors",
      logo: {
        "@type": "ImageObject",
        url: "https://lexsuite.com.ng/logo-dark.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": buildCanonical(`/blog/${params.slug}`),
    },
  };

  return (
    <main className="bg-off-white py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostingSchema),
        }}
      />
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="lg:flex lg:gap-8">
          <article className="flex-1 rounded-3xl bg-white p-10 shadow-sm">
            <div className="mb-4 inline-flex rounded-full bg-grey-100 px-3 py-1 text-xs uppercase tracking-[0.3em] text-grey-600">
              {frontmatter.category}
            </div>
            <h1 className="text-4xl font-semibold text-navy">
              {frontmatter.title}
            </h1>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-grey-500">
              <span>{frontmatter.date}</span>
              <span>{frontmatter.readingTime}</span>
            </div>
            <div className="prose prose-invert mt-10 max-w-none text-grey-700">
              <MDXRemote source={mdxSource} />
            </div>
          </article>
          <aside className="mt-8 w-72 lg:mt-0">
            <TableOfContents toc={toc || []} />
          </aside>
        </div>

        {related.length > 0 ? (
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-navy">Related posts</h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {related.map((post) => (
                <article
                  key={post.slug}
                  className="rounded-3xl border border-grey-200 bg-white p-6 shadow-sm">
                  <p className="text-sm uppercase tracking-[0.3em] text-grey-500">
                    {post.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold text-navy">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-grey-600">
                    {post.excerpt}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="mt-6 inline-flex text-sm font-semibold text-gold">
                    Read →
                  </a>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
