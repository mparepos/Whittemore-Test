import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import { ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPreviewSection = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-card" aria-label="Latest from the Blog">
      <div className="container">
        <div className="flex items-end justify-between mb-14">
          <FadeIn>
            <div>
              <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
                Insights
              </p>
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground">
                Latest from the Blog
              </h2>
            </div>
          </FadeIn>
          <Link
            href="/blog"
            className="hidden md:inline-flex items-center gap-2 text-accent font-display font-semibold text-sm hover:gap-3 transition-all duration-200 uppercase tracking-wide"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {latestPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col"
            >
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-accent text-xs font-display font-bold uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="text-muted-foreground text-xs font-body">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-accent transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-2 text-accent font-display font-semibold text-xs uppercase tracking-wide group-hover:gap-3 transition-all duration-200">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/blog"
          className="md:hidden mt-10 inline-flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-wide"
        >
          View All Posts <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default BlogPreviewSection;
