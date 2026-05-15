import Link from "next/link";
import { ChevronRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

function renderParagraph(para: string, i: number) {
  if (para.startsWith("## ")) {
    return (
      <h2 key={i} className="text-xl md:text-2xl font-display font-extrabold text-foreground mt-10 mb-4">
        {para.replace("## ", "")}
      </h2>
    );
  }

  if (para.startsWith("✔ ")) {
    return (
      <div key={i} className="flex items-start gap-3 ml-1">
        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <p className="text-muted-foreground font-body leading-relaxed">{para.replace("✔ ", "")}</p>
      </div>
    );
  }

  if (para.startsWith("LINK:")) {
    const match = para.match(/^LINK:(.+):(.+)$/);
    if (match) {
      return (
        <p key={i} className="mt-2">
          <Link href={match[2]} className="text-accent font-display font-bold text-sm hover:underline inline-flex items-center gap-1.5">
            {match[1]} <ChevronRight className="w-4 h-4" />
          </Link>
        </p>
      );
    }
  }

  if (para.includes("*")) {
    const parts = para.split(/\*(.+?)\*/);
    return (
      <p key={i} className="text-muted-foreground font-body leading-relaxed">
        {parts.map((part, j) => j % 2 === 1 ? <em key={j} className="text-foreground font-medium">{part}</em> : part)}
      </p>
    );
  }

  return (
    <p key={i} className="text-muted-foreground font-body leading-relaxed">
      {para}
    </p>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <main className="container pt-28 pb-24 text-center">
          <h1 className="text-2xl font-display font-bold text-foreground mb-4">Post not found</h1>
          <Link href="/blog" className="text-accent font-display font-semibold text-sm">
            ← Back to Blog
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Organization", name: "Whittemore Company, Inc." },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-background">
        <nav className="container pt-28 pb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-foreground font-medium truncate max-w-[200px]">{post.title}</li>
          </ol>
        </nav>

        <article className="container max-w-2xl pb-24">
          <div className="flex items-center gap-3 mb-4">
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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground mb-8 leading-[1.08]">
            {post.title}
          </h1>

          <div className="space-y-4">
            {post.content.map((para, i) => renderParagraph(para, i))}
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground font-body mb-5">
              Need help selecting the right material for your application? Contact our team for guidance.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
            >
              Request a Quote or Speak with Our Team
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
