import { getAllPosts } from "../../lib/mdx";
import { BlogIndex } from "../../components/blog/BlogIndex";

export const metadata = {
  title: "Blog | LexSuite Solicitors",
  description:
    "Insights on AI law, NDPA compliance, IP protection and startup legal best practices for Nigerian founders and legal teams.",
};

export default async function BlogPage() {
  const posts = getAllPosts();

  return <BlogIndex posts={posts} />;
}
