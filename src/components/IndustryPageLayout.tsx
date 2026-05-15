import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import FAQSection, { type FAQItem } from "@/components/FAQSection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import DotPattern from "@/components/DotPattern";
import FadeIn from "@/components/FadeIn";

interface IndustryProduct {
  name: string;
  path: string;
  description: string;
  image?: string;
}

interface IndustryPageProps {
  name: string;
  heroImage: string;
  heroAlt: string;
  headline: string;
  description: string;
  aboutLabel: string;
  aboutHeading: string;
  aboutBody: string[];
  products: IndustryProduct[];
  faqs?: FAQItem[];
  faqHeading?: string;
  faqHeadingAccent?: string;
}

const IndustryPageLayout = ({
  name,
  heroImage,
  heroAlt,
  headline,
  description,
  aboutLabel,
  aboutHeading,
  aboutBody,
  products,
  faqs,
  faqHeading,
  faqHeadingAccent,
}: IndustryPageProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${name} Applications — Whittemore Company`,
    description: headline,
    publisher: { "@type": "Organization", name: "Whittemore Company, Inc." },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[500px] flex flex-col justify-center overflow-hidden">
          <img
            src={heroImage}
            alt={heroAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/60" />
          <DotPattern className="bottom-0 left-0 text-accent !opacity-40" />
          <DotPattern className="top-12 right-12 text-accent hidden md:block !opacity-40" />
          <div className="container relative z-10 py-16 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                Industry Application
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-secondary-foreground mb-5 max-w-2xl leading-[1.08]">
                {name}
              </h1>
              <p className="text-secondary-foreground/80 font-body text-base md:text-lg max-w-xl leading-relaxed mb-8">
                {headline}
              </p>
              <div className="flex flex-wrap gap-4">
                {products.map((p) => (
                  <Link
                    key={p.path}
                    href={p.path}
                    className="group inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
                  >
                    {p.name}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* About Section */}
        <section className="py-14 md:py-20 bg-background">
          <div className="container px-6 sm:px-8 md:px-12">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              <FadeIn>
                <div>
                  <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
                    {aboutLabel}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-6">
                    {aboutHeading}
                  </h2>
                  {aboutBody.map((para, i) => (
                    <p
                      key={i}
                      className={`text-muted-foreground font-body leading-relaxed ${i < aboutBody.length - 1 ? "mb-4" : "mb-8"}`}
                    >
                      {para}
                    </p>
                  ))}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
                  >
                    Talk to our Team
                  </Link>
                </div>
              </FadeIn>

              {/* Product Cards */}
              <div className="space-y-4">
                {products.map((p, i) => (
                  <FadeIn key={p.path} delay={i * 100}>
                    <Link
                      href={p.path}
                      className="group block bg-card rounded-xl p-6 border border-border hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    >
                      <div className="flex items-center gap-5">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-foreground group-hover:text-accent transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-muted-foreground text-sm font-body mt-1">
                            {p.description}
                          </p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {faqs && faqs.length > 0 && <FAQSection faqs={faqs} heading={faqHeading} headingAccent={faqHeadingAccent} />}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default IndustryPageLayout;
