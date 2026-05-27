import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { remark } from "remark";
import GithubSlugger from "github-slugger";

type TocItem = { id: string; text: string; level: number };

const blogsDirectory = path.join(process.cwd(), "content/blog");

type PostData = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  coverImage: string;
  readingTime: string;
};

export function getAllPosts(): PostData[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fileContents = fs.readFileSync(
        path.join(blogsDirectory, fileName),
        "utf8",
      );
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? slug,
        excerpt: data.excerpt ?? "",
        date: data.date ?? "2025-01-01",
        author: data.author ?? "LexSuite Solicitors",
        category: data.category ?? "Insights",
        tags: data.tags ?? [],
        coverImage: data.coverImage ?? "/og-image.svg",
        readingTime: data.readingTime ?? "5 min read",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string) {
  const fullPath = path.join(blogsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const remarkAddHeadingIds = () => {
    return (tree: any) => {
      const slugger = new GithubSlugger();
      const visit = (node: any) => {
        if (!node) return;
        if (Array.isArray(node)) return node.forEach(visit);
        if (node.type === "heading") {
          const text =
            node.children
              ?.filter((c: any) => c.type === "text" || c.type === "inlineCode")
              .map((c: any) => c.value)
              .join("") || "";
          const id = slugger.slug(text);
          node.data = {
            ...node.data,
            hProperties: {
              ...node.data?.hProperties,
              id,
            },
          };
        }
        if (node.children) visit(node.children);
      };
      // @ts-ignore
      visit(tree.children);
    };
  };

  const source = await serialize(content, {
    parseFrontmatter: false,
    mdxOptions: {
      remarkPlugins: [remarkAddHeadingIds],
    },
  });

  // extract simple TOC from markdown headings using github-slugger to match remark-generated ids
  const ast = await remark().parse(content as any);
  const toc: TocItem[] = [];
  // @ts-ignore - untyped AST
  const visit = (node: any) => {
    if (!node) return;
    if (Array.isArray(node)) return node.forEach(visit);
    if (node.type === "heading") {
      const text =
        node.children
          ?.filter((c: any) => c.type === "text" || c.type === "inlineCode")
          .map((c: any) => c.value)
          .join("") || "";
      const slugger = new GithubSlugger();
      const id = slugger.slug(text);
      toc.push({ id, text, level: node.depth });
    }
    if (node.children) visit(node.children);
  };
  // @ts-ignore
  visit(ast.children);

  return {
    frontmatter: data,
    mdxSource: source,
    toc,
  };
}

export function getPostSlugs() {
  return fs
    .readdirSync(blogsDirectory)
    .filter((name) => name.endsWith(".mdx"))
    .map((name) => name.replace(/\.mdx$/, ""));
}
