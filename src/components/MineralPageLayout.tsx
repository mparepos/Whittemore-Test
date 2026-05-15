"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Download, Phone, Mail, CheckCircle, ArrowRight, Shield, type LucideIcon } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import { blogPosts } from "@/data/blogPosts";

interface ApplicationLink {
  label: string;
  path: string;
  icon: LucideIcon;
  image?: string;
}

interface WhyChooseItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

interface ProcessStep {
  title: string;
  description: string;
}

interface MineralPageProps {
  mineral: "Vermiculite" | "Perlite";
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  heroVideo?: string;
  heroCircleVideo?: string;
  heroImageAlt: string;
  contentImage: string;
  contentImageAlt: string;
  whyChooseTitle: string;
  whyChooseIntro: string;
  whyChooseItems: WhyChooseItem[];
  benefitsTitle: string;
  benefits: string[];
  processTitle: string;
  processIntro: string;
  processSteps: ProcessStep[];
  applicationLinks: ApplicationLink[];
  resourceLabel: string;
  differenceItems?: string[];
  differenceTitle?: string;
  safetyCallout?: { text: string; linkText: string; linkPath: string };
  faqs?: { question: string; answer: string }[];
  whatIs?: { title: string; paragraphs: string[] };
}

const MineralPageLayout = ({
  mineral,
  heroSubtitle,
  heroTitle,
  heroDescription,
  heroImage,
  heroVideo,
  heroCircleVideo,
  heroImageAlt,
  contentImage,
  contentImageAlt,
  whyChooseTitle,
  whyChooseIntro,
  whyChooseItems,
  benefitsTitle,
  benefits,
  processTitle,
  processIntro,
  processSteps,
  applicationLinks,
  resourceLabel,
  differenceItems,
  differenceTitle,
  safetyCallout,
  faqs,
  whatIs,
}: MineralPageProps) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <article className="bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0">
          {heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover transition-opacity duration-1000"
              ref={(el) => {
                if (!el) return;
                const handleTime = () => {
                  const timeLeft = el.duration - el.currentTime;
                  el.style.opacity = timeLeft < 1 ? String(Math.max(timeLeft, 0)) : '1';
                };
                el.addEventListener('timeupdate', handleTime);
              }}
            />
          ) : heroImage ? (
            <img src={heroImage} alt={heroImageAlt} className="w-full h-full object-cover" />
          ) : null}
          <div className="absolute inset-0 bg-secondary/85" />
        </div>
        <div className="container relative z-10 py-16 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <FadeIn className="flex-1">
            <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
              {heroSubtitle}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-secondary-foreground max-w-2xl leading-[1.08] mb-5">
              {heroTitle}
            </h1>
            <p className="text-secondary-foreground/80 font-body max-w-xl text-base leading-relaxed mb-8">
              {heroDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide mb-12"
            >
              Request a Quote <ChevronRight className="w-4 h-4" />
            </Link>
            <p className="text-white text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">Applications</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
              {applicationLinks.map((link) => {
                const AppIcon = link.icon;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="group flex flex-col items-center gap-2 sm:gap-2.5 rounded-xl border border-accent/40 bg-accent/20 backdrop-blur-sm px-3 py-4 sm:px-4 sm:py-5 hover:bg-accent/40 hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
                  >
                    {link.image ? (
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent">
                        <img src={link.image} alt={link.label} className="w-full h-full object-cover" />
                      </div>
                    ) : (
                      <AppIcon className="w-6 h-6 text-accent" />
                    )}
                    <span className="font-display font-medium text-secondary-foreground text-xs text-center group-hover:text-accent transition-colors">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </FadeIn>
          {heroCircleVideo && (
            <div className="hidden lg:flex items-center justify-center flex-shrink-0">
              <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <video
                  src={heroCircleVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover object-[center_30%]"
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Mobile/Tablet Video Circle */}
      {heroCircleVideo && (
        <div className="flex lg:hidden items-center justify-center py-6 bg-background">
          <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
            <video
              src={heroCircleVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-[center_30%]"
            />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`container ${heroCircleVideo ? 'pt-6 lg:pt-16' : 'pt-16'} md:pt-20 pb-16 md:pb-24 px-6 sm:px-8 md:px-12`}>
        <div className="grid lg:grid-cols-3 gap-16 lg:gap-20 lg:items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-16">

            {/* What Is Section */}
            {whatIs && (
              <FadeIn>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-6">
                    {whatIs.title}
                  </h2>
                  <div className="space-y-4">
                    {whatIs.paragraphs.map((p, i) => (
                      <p key={i} className="text-muted-foreground font-body text-base leading-relaxed">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Benefits */}
            <FadeIn>
              <div>
                <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-8">
                  {benefitsTitle}
                </p>
                <div className="bg-accent/5 rounded-2xl p-8 md:p-10">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {benefits.map((benefit) => {
                      const [title, ...rest] = benefit.split(" — ");
                      const description = rest.join(" — ");
                      return (
                        <div
                          key={benefit}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <div>
                            <h3 className="font-display font-bold text-foreground text-base mb-1">
                              {title}
                            </h3>
                            {description && (
                              <p className="text-muted-foreground font-body text-sm leading-relaxed">
                                {description}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Why Choose Section */}
            <FadeIn>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-10">
                  Why Choose <span className="text-accent">Whittemore {mineral}</span>?
                </h2>
                <div className="space-y-6">
                  {whyChooseItems.map((item, i) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={item.title}>
                        <div className="flex items-start gap-5">
                          <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 border-l-4 border-accent flex-shrink-0 mt-0.5">
                            <ItemIcon className="w-6 h-6 text-accent" strokeWidth={2.25} />
                          </span>
                          <div>
                            <h3 className="font-display font-bold text-foreground text-base mb-1">
                              {item.title}
                            </h3>
                            <p className="text-muted-foreground font-body text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        {i < whyChooseItems.length - 1 && (
                          <div className="border-b border-border mt-6" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>

            {/* Whittemore Difference Callout */}
            {differenceItems && differenceItems.length > 0 && (
              <FadeIn>
                <div className="rounded-xl border border-accent/20 bg-accent/5 p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-display font-extrabold text-foreground mb-5">
                    {differenceTitle || "The Whittemore Difference"}
                  </h3>
                  <div className="space-y-3">
                    {differenceItems.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* Process Section */}
            <FadeIn>
              <div>
                <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
                  Our Process
                </p>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4">
                  {processTitle}
                </h2>
                <p className="text-muted-foreground font-body leading-relaxed mb-10">
                  {processIntro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 items-stretch">
                  {processSteps.map((step, i) => (
                    <div key={step.title} className="flex items-stretch">
                      <div className="flex-1 rounded-xl border border-border bg-background p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-display font-bold text-sm">
                            {i + 1}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-foreground text-base mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {i < processSteps.length - 1 && (
                        <div className="hidden md:flex items-center justify-center px-3">
                          <ArrowRight className="w-5 h-5 text-accent" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Safety Callout */}
            {safetyCallout && (
              <FadeIn>
                <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 md:p-8 flex items-start gap-4">
                  <Shield className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wide mb-2">
                      Safety & Sourcing Commitment
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                      {safetyCallout.text}
                    </p>
                    <Link
                      href={safetyCallout.linkPath}
                      className="inline-flex items-center gap-1.5 text-accent font-display font-bold text-sm hover:underline"
                    >
                      {safetyCallout.linkText} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">

            {/* Resources Card */}
            <div>
              <h3 className="lg:hidden text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-4">
                {mineral} Resources
              </h3>
              <div className="bg-background rounded-xl p-6 border border-border shadow-md">
                <h3 className="hidden lg:flex font-display font-bold text-foreground text-sm mb-4 items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent flex-shrink-0" />
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
            </div>

            {/* Talk to Team Card */}
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-accent to-accent/80 p-7 text-accent-foreground border border-border shadow-md">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-sm" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />
              <div className="relative z-10">
                <h3 className="font-display font-extrabold text-xl mb-1.5">Have a question?</h3>
                <p className="font-body text-sm text-accent-foreground/80 mb-5">
                  Our team is ready with answers
                </p>
                <div className="space-y-2.5 mb-6">
                  <a href="tel:978-681-8833" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors">
                    <Phone className="w-4 h-4 text-accent-foreground" fill="currentColor" strokeWidth={0} />
                    <span className="font-display font-semibold text-xs lg:text-sm truncate">978-681-8833</span>
                  </a>
                  <a href="mailto:sales@whittemoreco.com" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors">
                    <Mail className="w-4 h-4 text-white shrink-0" />
                    <span className="font-display font-semibold text-xs lg:text-sm truncate">sales@whittemoreco.com</span>
                  </a>
                  <a href="mailto:technical@whittemoreco.com" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-white/15 backdrop-blur-sm hover:bg-white/25 transition-colors">
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
      <ContactSection />
    </article>
  );
};

export default MineralPageLayout;
