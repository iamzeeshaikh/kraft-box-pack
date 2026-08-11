/**
 * Blog post loader. Posts are markdown files in src/data/blog/; the filename
 * (minus .md) is the slug. Sorted newest first for the listing and sitemap.
 */

export interface BlogPostModule {
  frontmatter: {
    title: string;
    metaTitle: string;
    metaDescription: string;
    date: string;
    image: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    /** Optional last-reviewed date, shown to readers and used for dateModified. */
    updated?: string;
    /**
     * Questions specific to this article's subject. The brief requires a FAQ
     * set on every page that warrants one, and blog questions have to follow
     * the article rather than reuse the matching product page's — otherwise
     * the two compete for the same query with the same answer.
     */
    faqs?: { question: string; answer: string }[];
  };
  Content: any;
}

const files = import.meta.glob<BlogPostModule>('../data/blog/*.md', { eager: true });

export const BLOG_POSTS = Object.entries(files)
  .map(([path, mod]) => ({
    slug: path.split('/').pop()!.replace(/\.md$/, ''),
    url: `/blog/${path.split('/').pop()!.replace(/\.md$/, '')}/`,
    ...mod.frontmatter,
    Content: mod.Content,
  }))
  .sort((a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug));
