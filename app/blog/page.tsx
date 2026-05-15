"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const categories = ["All", "Perlite", "Vermiculite", "Safety", "Pool Installs", "Whittemore"];

function BlogContent() {
  const searchParams = useSearchParams();
  const activeTag = searchParams.get("tag");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = blogPosts
    .filter((p) => (activeTag ? p.tags.includes(activeTag) : true))
    .filter((p) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Perlite") return p.tags.includes("perlite");
      if (activeCategory === "Vermiculite") return p.tags.includes("vermiculite");
      return p.category === activeCategory || (activeCategory === "Whittemore" && p.category === "Company");
    });

  const tagLabel = activeTag
    ? activeTag.charAt(0).toUpperCase() + activeTag.slice(1)
    : null;

  return (
    <div className="container pt-16 md:pt-24 lg:pt-32 pb-24 px-6 sm:px-8 md:px-12">
      <div className="mb-20">
        <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
          Blog
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground leading-[1.08]">
          {tagLabel ? `${tagLabel} Articles` : "Insights & Resources"}
        </h1>
        {activeTag && (
          <Link href="/blog" className="inline-flex items-center gap-1 mt-3 text-sm text-accent font-display font-semibold hover:underline">
            ← View all articles
          </Link>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-md font-display text-xs font-bold uppercase tracking-wide transition-colors ${
              activeCategory === cat
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-0 divide-y divide-border border-t border-border">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex flex-col md:flex-row md:items-center justify-between gap-4 py-8"
          >
            <div className="flex-grow max-w-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-accent text-xs font-display font-bold uppercase tracking-wide">
                  {post.category}
                </span>
                <span className="text-muted-foreground text-xs font-body">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="text-muted-foreground text-xs font-body">
                  · {post.readTime}
                </span>
              </div>
              <h2 className="font-display font-bold text-foreground text-lg group-hover:text-accent transition-colors mb-1">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">
                {post.excerpt}
              </p>
            </div>
            <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background">
        <Suspense fallback={<div className="container pt-32 pb-24 text-muted-foreground font-body">Loading...</div>}>
          <BlogContent />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
