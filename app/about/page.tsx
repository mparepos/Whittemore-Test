"use client";

import Link from "next/link";
import { User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import DotPattern from "@/components/DotPattern";

const timeline = [
  {
    year: "1919",
    title: "A Legacy Begins",
    description:
      "Whittemore was established as a mineral supply company in Massachusetts, serving local industries with raw vermiculite and perlite materials for insulation and construction.",
  },
  {
    year: "1949",
    title: "Leading the Way in Perlite Processing",
    description:
      "Whittemore became one of the first U.S. companies to commercially expand perlite, opening dedicated processing facilities and setting early standards for gradation quality.",
  },
  {
    year: "1973",
    title: "Family Ownership, Long-Term Vision",
    description:
      "In 1973, the Sheehy family assumed full ownership of the company, establishing a culture of reinvestment, quality control, and long-term customer relationships that continues today.",
  },
  {
    year: "1993",
    title: "Expanding into Vermiculite Processing",
    description:
      "Whittemore expanded its capabilities to include vermiculite processing, adding new exfoliation furnaces and quality systems to serve the growing horticulture and construction markets.",
  },
  {
    year: "2010s",
    title: "Modernizing the Legacy",
    description:
      "The Whittemore team invested in facility upgrades, automated grading systems, and expanded warehousing to improve consistency, throughput, and logistics across all product lines.",
  },
  {
    year: "Today",
    title: "Consistent Materials. Trusted Performance.",
    description:
      "Today, Whittemore continues to deliver precision-graded perlite and vermiculite to customers across horticulture, construction, industrial, environmental, and pool markets nationwide.",
  },
];

const team = [
  { name: "Name", role: "CEO & Founder", bio: "Over 40 years leading Whittemore's mineral processing operations with a focus on quality and customer partnerships." },
  { name: "Name", role: "V.P. of Operations", bio: "Oversees day-to-day plant operations, quality assurance, and supply chain logistics across all product lines." },
  { name: "Name", role: "Director of Sales", bio: "Manages key accounts and new business development across horticulture, construction, and industrial markets." },
  { name: "Name", role: "Quality & Compliance", bio: "Ensures product consistency, testing protocols, and regulatory compliance for every shipment." },
  { name: "Name", role: "Plant Manager", bio: "Leads the production team with a focus on efficiency, safety, and maintaining Whittemore's gradation standards." },
  { name: "Name", role: "Customer Service", bio: "Coordinates orders, logistics, and customer communications to ensure smooth delivery every time." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <video
            src="/videos/hero-homepage.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            ref={(el) => {
              if (!el) return;
              const handleTime = () => {
                const timeLeft = el.duration - el.currentTime;
                el.style.opacity = timeLeft < 1 ? String(Math.max(timeLeft, 0)) : '1';
              };
              const handleSeeked = () => { el.style.opacity = '1'; };
              el.addEventListener('timeupdate', handleTime);
              el.addEventListener('seeked', handleSeeked);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/30" />
          <DotPattern className="bottom-0 left-0 text-accent !opacity-40" />
          <DotPattern className="top-12 right-12 text-accent hidden md:block !opacity-40" />
          <div className="container relative z-10 py-16 md:py-24 lg:py-32 px-6 sm:px-8 md:px-12">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                About
              </p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-extrabold text-secondary-foreground mb-5 max-w-2xl leading-[1.08]">
                Whittemore Company
              </h1>
              <p className="text-secondary-foreground/80 font-body text-base md:text-lg max-w-xl leading-relaxed mb-8">
                For over a century, Whittemore has produced expanded vermiculite and perlite engineered for demanding applications. Our controlled processing delivers clean, consistent materials with repeatable performance at scale.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-medium text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
              >
                Contact Us
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative py-24 bg-muted overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[60%] h-full bg-background/50 origin-top-right skew-x-[-12deg] translate-x-[20%]" />
            <div className="absolute top-0 left-0 w-[40%] h-full bg-background/30 origin-top-left skew-x-[8deg] -translate-x-[10%]" />
          </div>
          <div className="container max-w-4xl">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
                  Our Story
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground">
                  A Century of Mineral Expertise
                </h2>
              </div>
            </FadeIn>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-12 md:space-y-0">
                {timeline.map((item, i) => {
                  const isLeft = i % 2 === 0;
                  return (
                    <FadeIn
                      key={item.year}
                      delay={i * 80}
                      direction={isLeft ? "left" : "right"}
                    >
                      <div
                        className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent border-2 border-background z-10"
                        style={{ top: `${(i / (timeline.length - 1)) * 100}%` }}
                      />

                      <div className={`md:grid md:grid-cols-2 md:gap-12 md:py-8 group cursor-default transition-transform duration-300 hover:scale-[1.03] pl-10 md:pl-0`}>
                        <div className={`rounded-xl p-4 transition-all duration-300 group-hover:bg-background/60 group-hover:shadow-md ${isLeft ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                          <h3 className="font-display font-extrabold text-foreground text-2xl md:text-3xl mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <p className={`text-3xl md:text-4xl font-display font-extrabold transition-colors duration-300 group-hover:text-accent ${item.year === "Today" ? "text-accent" : "text-muted-foreground/20"}`}>
                            {item.year}
                          </p>
                        </div>

                        <div className={`hidden md:flex items-center ${isLeft ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right md:justify-end"}`} />
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Horizontal Timeline */}
        <section className="relative py-24 bg-background overflow-hidden">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
                  Our Story
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-3">
                  A Century of Mineral Expertise
                </h2>
              </div>
            </FadeIn>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 bottom-6 w-12 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-6 w-12 bg-gradient-to-l from-background to-transparent z-10" />

            <div
              className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory pb-6"
              role="region"
              aria-label="Whittemore historical milestones, scroll horizontally"
              tabIndex={0}
            >
              <div className="relative flex gap-6 px-6 sm:px-10 md:px-16 min-w-max">
                <div className="absolute left-0 right-0 top-[88px] h-px bg-border" aria-hidden="true" />

                {timeline.map((item, i) => (
                  <FadeIn key={`h-${item.year}`} delay={i * 60}>
                    <div className="snap-center w-[280px] sm:w-[320px] flex flex-col items-center text-center">
                      <p
                        className={`text-3xl md:text-4xl font-display font-extrabold mb-4 ${
                          item.year === "Today" ? "text-accent" : "text-muted-foreground/40"
                        }`}
                      >
                        {item.year}
                      </p>
                      <div className="w-4 h-4 rounded-full bg-accent border-2 border-background shadow-md relative z-10" />
                      <div className="mt-6 bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 w-full">
                        <h3 className="font-display font-bold text-foreground text-lg mb-3">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-body text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Compact Timeline */}
        <section className="relative py-24 bg-muted overflow-hidden">
          <div className="container px-6 sm:px-8 md:px-12">
            <FadeIn>
              <div className="text-center mb-12">
                <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
                  Our Story
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-3">
                  A Century of Mineral Expertise
                </h2>
              </div>
            </FadeIn>

            <div className="relative">
              <div className="hidden sm:block absolute left-0 right-0 top-[34px] h-px bg-border" aria-hidden="true" />

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-3 lg:gap-4 relative">
                {timeline.map((item, i) => (
                  <FadeIn key={`c-${item.year}`} delay={i * 50}>
                    <div className="flex flex-col items-center text-center group cursor-default">
                      <p
                        className={`font-display font-extrabold text-xl sm:text-2xl lg:text-3xl mb-2 transition-colors duration-300 ${
                          item.year === "Today" ? "text-accent" : "text-muted-foreground/50 group-hover:text-accent"
                        }`}
                      >
                        {item.year}
                      </p>
                      <div className="w-3 h-3 rounded-full bg-accent border-2 border-muted shadow-sm relative z-10 mb-3" />
                      <h3 className="font-display font-bold text-foreground text-sm lg:text-base mb-1.5 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-xs leading-relaxed line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container px-6 sm:px-8 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <FadeIn>
                <div className="lg:sticky lg:top-24">
                  <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
                    Our Standards
                  </p>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-5">
                    Partnering With Suppliers Who Use Best Practices
                  </h2>
                  <p className="text-muted-foreground font-body text-base leading-relaxed mb-8">
                    At Whittemore, product quality starts long before it reaches our plant. We partner only with suppliers who demonstrate proven best practices in mining, processing, safety, and sustainability.
                  </p>
                </div>
              </FadeIn>

              <div className="space-y-5">
                {[
                  { title: "Responsible Sourcing", desc: "We work with producers who operate under strong environmental controls, progressive land reclamation plans, and responsible resource management." },
                  { title: "Quality & Process Control", desc: "Suppliers must maintain consistent ore chemistry, documented testing, and modern processing systems to ensure dependable performance in every load." },
                  { title: "Worker Safety", desc: "We prioritize partners with comprehensive safety programs — training, PPE compliance, and proactive hazard prevention — not just paperwork." },
                  { title: "Transparency & Traceability", desc: "Clear documentation, SDS availability, and traceable supply chains help us ensure reliability from mine to finished product." },
                  { title: "Continuous Improvement", desc: "We collaborate with suppliers who invest in innovation, process upgrades, and ongoing quality improvement." },
                ].map((item, i) => (
                  <FadeIn key={item.title} delay={i * 80}>
                    <div className="border-l-4 border-accent bg-background rounded-r-xl pl-6 pr-6 py-5 hover:shadow-md transition-all duration-300">
                      <h3 className="font-display font-bold text-foreground text-base mb-1.5">{item.title}</h3>
                      <p className="text-muted-foreground font-body text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-background">
          <div className="container">
            <FadeIn>
              <div className="text-center mb-14">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground">
                  Meet Our Team
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <FadeIn key={member.name + member.role} delay={i * 100}>
                  <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                    <div className="bg-muted flex items-center justify-center py-10">
                      <div className="w-40 h-40 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-inner">
                        <User className="w-16 h-16 text-muted-foreground/30" />
                      </div>
                    </div>
                    <div className="p-6 text-center flex-1 flex flex-col">
                      <h3 className="font-display font-bold text-foreground text-lg">
                        {member.name}
                      </h3>
                      <p className="text-accent text-xs font-display font-semibold uppercase tracking-wide mt-1 mb-3">
                        {member.role}
                      </p>
                      <p className="text-muted-foreground text-sm font-body leading-relaxed flex-1">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
