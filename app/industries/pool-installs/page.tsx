"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Download, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import DotPattern from "@/components/DotPattern";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";

const poolProducts = [
  {
    name: "E-Z Mix Pool Pre-Mix",
    image: "/assets/ez-mix-pool-base.png",
    alt: "E-Z Mix Pool Base Pre-Mix bag",
    description:
      "Pre-blended vermiculite pool base with Portland cement and admixtures. Just add water for a smooth, firm, and durable pool bottom. Excellent trowelability and consistent results in a 35 lb bag.",
    link: "/vermiculite/pool-installs",
    onePager: "#",
    color: "#5BAEBA",
    circleBg: null as string | null,
    hasBuiltInCircle: true,
  },
  {
    name: "Vermiculite Pool Base",
    image: "/assets/custom-mix-pool-base.png",
    alt: "Custom Mix Pool Base vermiculite bag",
    description:
      "High-quality expanded vermiculite aggregate for contractors who prefer custom on-site mixing. Combine with Portland cement and water for a smooth, non-abrasive foundation. Packaged in 16 lb poly bags.",
    link: "/vermiculite/pool-installs",
    onePager: "#",
    color: "#4A94DC",
    circleBg: null as string | null,
    hasBuiltInCircle: true,
  },
  {
    name: "E-Z Skim Pro",
    image: "/assets/ez-skim-pro.png",
    alt: "E-Z Skim Pro pool skim coat bag",
    description:
      "Professional skim coat for repairing and resurfacing existing pool bases during liner replacement. Fills imperfections, feathers to a smooth edge, and bonds to vermiculite, sand-cement, or grout bottoms.",
    link: "/vermiculite/pool-installs",
    onePager: "#",
    color: "#346E9B",
    circleBg: null as string | null,
    hasBuiltInCircle: true,
  },
];

const valueStrip = [
  "Smooth Pool Base Finish",
  "Easy Trowel Application",
  "Comfortable Underfoot",
  "Reduces Risk of Liner Damage",
];

const benefits = [
  { title: "Smooth Finish for Liners", description: "Creates a clean, even base that helps protect vinyl liners from punctures." },
  { title: "Easy to Mix & Apply", description: "Blends easily with cement and water for fast installation." },
  { title: "Lightweight & Workable", description: "Reduces fatigue and speeds up job completion." },
  { title: "Comfortable Underfoot", description: "Provides a softer feel compared to sand or hard base materials." },
  { title: "Consistent Results", description: "Uniform particle size ensures predictable installs every time." },
];

const comparisonData = [
  { material: "Sand", issue: "Shifts over time", advantage: "Stable, consistent base" },
  { material: "Concrete", issue: "Hard, unforgiving", advantage: "Comfortable underfoot" },
  { material: "Other mixes", issue: "Inconsistent", advantage: "Reliable performance" },
];

const installSteps = [
  "Mix vermiculite with cement",
  "Apply and trowel to desired thickness",
  "Allow to set before liner installation",
];

const faqs = [
  {
    question: "How much vermiculite do I need for a pool base?",
    answer: "Coverage depends on pool size and desired thickness. Contact our team for specific recommendations based on your project dimensions.",
  },
  {
    question: "What mix ratio should I use?",
    answer: "The typical ratio is approximately 2 parts vermiculite to 1 part Portland cement, though specific ratios may vary by product and application.",
  },
  {
    question: "How long does it take to cure?",
    answer: "Vermiculite pool base typically requires 24–48 hours to cure before liner installation, depending on conditions.",
  },
  {
    question: "Can this be used for pool repairs?",
    answer: "Yes. Vermiculite pool base can be used for both new installations and repairs to existing pool bottoms.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Vermiculite Pool Base Material — Whittemore Company",
  description: "Lightweight, smooth, and easy-to-work vermiculite pool base material designed for vinyl liner pool installations.",
  publisher: { "@type": "Organization", name: "Whittemore Company, Inc." },
};

export default function PoolInstallsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[500px] flex flex-col justify-center overflow-hidden">
          <img
            src="/assets/industry-pool.jpg"
            alt="Swimming pool installation using vermiculite base material for a smooth durable pool bottom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/60" />
          <DotPattern className="bottom-0 left-0 text-accent !opacity-40" />
          <DotPattern className="top-12 right-12 text-accent hidden md:block !opacity-40" />
          <div className="container relative z-10 py-16 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                Pool Installation
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-secondary-foreground mb-5 max-w-2xl leading-[1.08]">
                Vermiculite Pool Base Material
              </h1>
              <p className="text-secondary-foreground/80 font-body text-base md:text-lg max-w-xl leading-relaxed mb-8">
                Lightweight, smooth, and easy-to-work material designed for vinyl liner pool installations.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
                >
                  Request a Quote or Sample
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Value Strip */}
        <section className="bg-accent/10 border-y border-accent/20 overflow-hidden">
          <div className="hidden md:block container px-6 sm:px-8 md:px-12 py-5">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
              {valueStrip.map((item, i) => (
                <FadeIn key={item} delay={i * 100}>
                  <span className="flex items-center gap-2 text-foreground font-display font-semibold text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={3} />
                    {item}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
          <div className="md:hidden py-4">
            <div className="flex animate-[marquee_15s_linear_infinite] whitespace-nowrap">
              {[...valueStrip, ...valueStrip].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-foreground font-display font-semibold text-sm mx-6 flex-shrink-0">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" strokeWidth={3} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Pool Products */}
        <section id="pool-products" className="py-14 md:py-20 bg-background scroll-mt-20">
          <div className="container px-6 sm:px-8 md:px-12">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
                Available Products
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4">
                Whittemore Pool Products
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mb-12">
                Whittemore manufactures premium vermiculite pool products — from pre-blended pool base mixes to custom aggregate and professional skim coats. Compared to sand-cement or grout mixes, vermiculite-based products provide improved stability, comfort underfoot, and insulation while reducing shifting, cracking, and liner wear over time.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {poolProducts.map((product, i) => (
                <FadeIn key={product.name} delay={i * 120}>
                  <div className="group bg-background rounded-xl border border-border p-6 md:p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="relative w-44 h-44 md:w-52 md:h-52 mb-6 flex items-center justify-center">
                      {product.circleBg && (
                        <div className="absolute inset-2 rounded-full" style={{ backgroundColor: product.circleBg }} />
                      )}
                      <img
                        src={product.image}
                        alt={product.alt}
                        className={`relative z-10 object-contain group-hover:scale-105 transition-transform duration-500 ${product.hasBuiltInCircle ? "max-w-[120%] max-h-[120%]" : "max-w-[85%] max-h-[85%]"}`}
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-lg font-display font-bold mb-3" style={{ color: product.color }}>
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground text-sm font-body leading-relaxed flex-grow mb-6">
                      {product.description}
                    </p>
                    <a
                      href={product.onePager}
                      download
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 text-accent font-display font-semibold text-xs hover:bg-accent/20 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download One Pager
                    </a>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container px-6 sm:px-8 md:px-12">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
                Application & Installation
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4">
                Designed for Vinyl Liner Pool Installations
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mb-10">
                Whittemore vermiculite is used to create a smooth, stable base beneath vinyl liners, helping protect the liner while improving installation efficiency.
              </p>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <FadeIn key={benefit.title} delay={i * 80}>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={3} />
                    <div>
                      <h3 className="font-display font-bold text-foreground text-sm mb-1">{benefit.title}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <h3 className="text-xl font-display font-extrabold text-foreground mt-12 mb-6">
                How It Works
              </h3>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-start max-w-4xl">
              {installSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <FadeIn delay={idx * 150}>
                    <div className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:border-accent/40 transition-all duration-300">
                      <span className="inline-flex w-10 h-10 rounded-full bg-accent/10 border border-accent/30 items-center justify-center font-display font-extrabold text-accent text-sm mb-3">
                        {idx + 1}
                      </span>
                      <p className="text-foreground font-body text-sm leading-relaxed">{step}</p>
                    </div>
                  </FadeIn>
                  {idx < installSteps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center h-full">
                      <ArrowRight className="w-5 h-5 text-accent" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20 bg-background">
          <div className="container px-6 sm:px-8 md:px-12">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
                Comparison
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-10">
                Why Vermiculite Instead of Sand or Concrete?
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="overflow-x-auto">
                <table className="w-full max-w-3xl text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left font-display font-bold text-foreground py-3 pr-6">Material</th>
                      <th className="text-left font-display font-bold text-foreground py-3 pr-6">Issue</th>
                      <th className="text-left font-display font-bold text-accent py-3">Vermiculite Advantage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row) => (
                      <tr key={row.material} className="border-b border-border/50">
                        <td className="font-display font-semibold text-foreground py-4 pr-6">{row.material}</td>
                        <td className="text-muted-foreground font-body py-4 pr-6">{row.issue}</td>
                        <td className="text-accent font-display font-semibold py-4">{row.advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Grades & Sizes */}
        <section className="py-14 md:py-20 bg-card">
          <div className="container px-6 sm:px-8 md:px-12">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
                Specifications
              </p>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-4">
                Sizes and Gradations
              </h2>
              <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mb-10">
                Whittemore pool-grade vermiculite is available in specific gradations optimized for pool base mixing, skim coat applications, and filtration media.
              </p>
            </FadeIn>
            <div className="space-y-4">
              {[
                {
                  name: "Pool Base",
                  grade: "African Fine Grade A2 / Domestic Fine Grade D3",
                  particleSize: "Placeholder particle size",
                  description: "Placeholder description for pool base vermiculite grade specifications.",
                },
                {
                  name: "EZ Mix",
                  grade: "African Fine Grade A2",
                  particleSize: "Placeholder particle size",
                  description: "Placeholder description for EZ Mix vermiculite grade specifications.",
                },
                {
                  name: "EZ Skim Pro",
                  grade: "African Super Fine A1",
                  particleSize: "Placeholder particle size",
                  description: "Placeholder description for EZ Skim Pro vermiculite grade specifications.",
                },
              ].map((grad, i) => (
                <FadeIn key={grad.name} delay={i * 100}>
                  <div className="bg-card rounded-xl p-6 border border-border flex items-start justify-between cursor-default transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent/40">
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground">{grad.name}</h3>
                      <p className="text-accent text-xs font-display font-bold mt-0.5">
                        Particle Size: {grad.particleSize}
                      </p>
                      <p className="text-muted-foreground text-sm font-body mt-1">{grad.description}</p>
                    </div>
                    <span className="text-muted-foreground text-sm font-body flex-shrink-0 ml-4">
                      {grad.grade}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <FAQSection faqs={faqs} heading="Questions Pool Installers Ask" headingAccent="Pool Installers" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
