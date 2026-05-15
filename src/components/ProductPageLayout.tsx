"use client";

import { useState } from "react";
import { ChevronRight, Download, Plus, Minus, Phone, Mail } from "lucide-react";
import Link from "next/link";
import FAQSection from "@/components/FAQSection";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/data/blogPosts";

interface Gradation {
  name: string;
  particleSize: string;
  grade: string;
  description: string;
}

interface AccordionItem {
  title: string;
  description: string;
}

interface ApplicationCard {
  title: string;
  description: string;
}

interface ProductPageProps {
  mineral: "Vermiculite" | "Perlite";
  application: string;
  tagline: string[];
  heroImage: string;
  heroAlt: string;
  description: string[];
  formats: string[];
  whyChooseTitle: string;
  benefits: AccordionItem[];
  gradations: Gradation[];
  resourceLabel: string;
  faqs?: { question: string; answer: string }[];
  commonApplications?: ApplicationCard[];
  gradationsIntro?: string;
  differentiator?: string;
  internalLink?: { prompt: string; label: string; href: string };
  internalLinks?: { prompt: string; label: string; href: string }[];
  heroCircleVideo?: string;
}

const ProductPageLayout = ({
  mineral,
  application,
  tagline,
  heroImage,
  heroAlt,
  description,
  formats,
  whyChooseTitle,
  benefits,
  gradations,
  resourceLabel,
  faqs,
  commonApplications,
  gradationsIntro,
  differentiator,
  internalLink,
  internalLinks,
  heroCircleVideo,
}: ProductPageProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <article className="bg-background" itemScope itemType="https://schema.org/Product">
      {/* Breadcrumb */}
      <nav className="container pt-20 md:pt-24 pb-6 md:pb-8 px-6 sm:px-8 md:px-12 text-sm text-muted-foreground" aria-label="Breadcrumb">
        <ol className="flex items-center gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" className="hover:text-accent transition-colors" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <ChevronRight className="w-3.5 h-3.5" />
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href={`/${mineral.toLowerCase()}`} className="hover:text-accent transition-colors" itemProp="item">
              <span itemProp="name">{mineral}</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <ChevronRight className="w-3.5 h-3.5" />
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span className="text-accent font-medium" itemProp="name">
              {application}
            </span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      <div className="container px-6 sm:px-8 md:px-12 pb-8 md:pb-10">
        {/* Page Header */}
        <FadeIn>
          <div className="mb-8">
            <p className="text-accent text-xs font-display font-bold tracking-widest uppercase mb-2">
              {application}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-foreground leading-[1.08]" itemProp="name">
              {mineral} for <span className="text-accent">{application}</span>
            </h1>
          </div>
        </FadeIn>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-10">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero Image */}
            <FadeIn>
              <div className="relative rounded-xl overflow-hidden aspect-[16/9] bg-muted">
                <img
                  src={heroImage}
                  alt={heroAlt}
                  className="w-full h-full object-cover"
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-secondary/10" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="space-y-1">
                    {tagline.map((line) => (
                      <p key={line} className="text-secondary-foreground font-display font-bold text-lg">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
                {heroCircleVideo && (
                  <div className="absolute bottom-4 right-4 w-36 h-36 md:w-52 md:h-52 rounded-full overflow-hidden border-[3px] border-accent shadow-[0_8px_30px_rgba(0,0,0,0.4)] z-10">
                    <video
                      src={heroCircleVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </FadeIn>

            {/* Description */}
            <FadeIn delay={100}>
              <div className="space-y-4" itemProp="description">
                {description.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground font-body leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </FadeIn>

            {/* Differentiator */}
            {differentiator && (
              <div className="rounded-xl border border-accent/20 bg-accent/5 px-6 py-4">
                <p className="text-foreground font-display font-semibold text-base italic">
                  {differentiator}
                </p>
              </div>
            )}

            {/* Internal Link(s) */}
            {internalLink && (
              <p className="text-muted-foreground font-body text-sm">
                {internalLink.prompt}{" "}
                <Link href={internalLink.href} className="text-accent font-display font-semibold hover:underline">
                  {internalLink.label} →
                </Link>
              </p>
            )}
            {internalLinks && internalLinks.length > 0 && (
              <div className="space-y-2">
                {internalLinks.map((link, idx) => (
                  <p key={idx} className="text-muted-foreground font-body text-sm">
                    {link.prompt}{" "}
                    <Link href={link.href} className="text-accent font-display font-semibold hover:underline">
                      {link.label} →
                    </Link>
                  </p>
                ))}
              </div>
            )}

            {/* Common Applications */}
            {commonApplications && commonApplications.length > 0 && (
              <FadeIn>
                <div>
                  <h2 className="text-accent text-xs font-display font-bold tracking-widest uppercase mb-4">
                    Common Applications
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {commonApplications.map((app) => (
                      <span
                        key={app.title}
                        className="px-3.5 py-1.5 rounded-full bg-accent/10 text-accent font-display font-semibold text-xs border border-accent/20 transition-transform duration-200 hover:scale-110"
                      >
                        {app.title}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Available Formats */}
            <FadeIn>
              <div>
                <h2 className="text-accent text-xs font-display font-bold tracking-widest uppercase mb-4">
                  Available Formats
                </h2>
                <ul className="list-disc list-inside space-y-1.5 text-foreground font-body text-base">
                  {formats.map((format) => (
                    <li key={format}>{format}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Why Choose Accordion */}
            <FadeIn>
            <div>
              <h2 className="text-accent text-xs font-display font-bold tracking-widest uppercase mb-6">
                {whyChooseTitle}
              </h2>
              <div className="divide-y divide-border border-t border-b border-border">
                {benefits.map((item, index) => (
                  <div key={item.title}>
                    <button
                      className="w-full flex items-center justify-between py-4 text-left group"
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                      aria-expanded={openAccordion === index}
                    >
                      <span className="text-base font-display font-bold text-foreground group-hover:text-accent transition-colors">
                        {item.title}
                      </span>
                      {openAccordion === index ? (
                        <Minus className="w-4 h-4 text-accent flex-shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-accent flex-shrink-0" />
                      )}
                    </button>
                    {openAccordion === index && (
                      <p className="pb-4 text-base text-muted-foreground font-body leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>

            {/* Sizes and Gradations */}
            <FadeIn>
            <div>
              <h2 className="text-accent text-xs font-display font-bold tracking-widest uppercase mb-3">
                Sizes and Gradations
              </h2>
              {gradationsIntro && (
                <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">{gradationsIntro}</p>
              )}
              {!gradationsIntro && <div className="mb-6" />}
              <div className="space-y-4">
                {gradations.map((grad) => (
                  <div
                    key={grad.name + grad.grade}
                    className="bg-card rounded-xl p-6 border border-border flex items-start justify-between cursor-default transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent/40"
                  >
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">{grad.name}</h3>
                      {grad.particleSize && (
                        <p className="text-accent text-xs font-display font-bold mt-0.5">
                          Typical size: {grad.particleSize}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm font-body mt-1">{grad.description}</p>
                    </div>
                    {grad.grade && (
                      <span className="text-muted-foreground text-sm font-body flex-shrink-0 ml-4">
                        {grad.grade}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
            </FadeIn>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            {/* Resources Card */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-display font-bold text-foreground text-sm mb-4">
                {mineral} Resources
              </h3>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 text-accent font-display font-semibold text-xs hover:bg-accent/20 transition-colors"
              >
                <Download className="w-4 h-4" />
                {resourceLabel}
              </a>
              {(() => {
                const tag = mineral.toLowerCase();
                const count = blogPosts.filter((p) => p.tags.includes(tag)).length;
                if (count === 0) return null;
                return (
                  <div className="mt-5 pt-4 border-t border-border">
                    <Link
                      href={`/blog?tag=${tag}`}
                      className="inline-flex items-center gap-1.5 text-xs text-accent font-display font-semibold hover:underline"
                    >
                      Related Articles ({count}) <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })()}
            </div>

            {/* Talk to Team Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent to-accent/80 p-7 text-accent-foreground shadow-lg">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-xl mb-1.5">Have a question?</h3>
                <p className="font-body text-sm text-accent-foreground/80 mb-5">
                  Our team is ready with answers
                </p>
                <div className="space-y-2.5 mb-6">
                  <a href="tel:978-681-8833" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors group">
                    <Phone className="w-4 h-4 text-accent-foreground" fill="currentColor" strokeWidth={0} />
                    <span className="font-display font-semibold text-xs lg:text-sm truncate">978-681-8833</span>
                  </a>
                  <a href="mailto:sales@whittemoreco.com" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors group">
                    <Mail className="w-4 h-4 text-white shrink-0" />
                    <span className="font-display font-semibold text-xs lg:text-sm truncate">sales@whittemoreco.com</span>
                  </a>
                  <a href="mailto:technical@whittemoreco.com" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors group">
                    <Mail className="w-4 h-4 text-white shrink-0" />
                    <span className="font-display font-semibold text-xs lg:text-sm truncate">technical@whittemoreco.com</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
      {faqs && faqs.length > 0 && <FAQSection faqs={faqs} />}
    </article>
  );
};

export default ProductPageLayout;
