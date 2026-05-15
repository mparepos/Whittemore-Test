"use client";

import Link from "next/link";
import {
  Layers,
  Cog,
  Package,
  Boxes,
  Gauge,
  Building2,
  ShoppingBag,
  PackageOpen,
  Container,
  Truck,
  TrainTrack,
  Flame,
  Thermometer,
  ShieldCheck,
  Waves,
  Snowflake,
  ThermometerSun,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  ClipboardList,
  Beaker,
  PackageCheck,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import DotPattern from "@/components/DotPattern";

const capabilities = [
  { icon: Layers, label: "Custom Blending" },
  { icon: Cog, label: "Toll Processing" },
  { icon: Package, label: "Contract Packaging" },
  { icon: Boxes, label: "Granular & Powder Materials" },
  { icon: Gauge, label: "Small Batch to Bulk Scale" },
  { icon: Building2, label: "Construction & Industrial" },
];

const packagingScale = [
  { icon: ShoppingBag, label: "Small Bags", note: "Retail & specialty sizes" },
  { icon: PackageOpen, label: "Pallets", note: "Stacked, shrink-wrapped units" },
  { icon: Container, label: "Bulk Containers", note: "Super sacks & totes" },
  { icon: Truck, label: "Tankers", note: "Pneumatic bulk transport" },
  { icon: TrainTrack, label: "Walking Floor Trailers", note: "High-volume bulk loads" },
];

const applications = [
  { icon: Thermometer, image: "/assets/app-chimney-lining.jpg", title: "Chimney Lining", desc: "Insulating fill blends engineered for high-heat flue environments." },
  { icon: Flame, image: "/assets/app-fireproofing.jpg", title: "Fireproofing", desc: "Lightweight cementitious blends for passive fire protection systems." },
  { icon: Waves, image: "/assets/app-pool-aggregate.jpg", title: "Swimming Pool Aggregate", desc: "Drainage and base aggregate blends for in-ground pool installations." },
  { icon: Snowflake, image: "/assets/app-low-temp-insulation.jpg", title: "Low-Temperature Insulation", desc: "Cryogenic-grade insulation fill for cold-storage and process applications." },
  { icon: ThermometerSun, image: "/assets/app-high-temp-insulation.jpg", title: "High-Temperature Insulation", desc: "Refractory and high-heat insulation blends for industrial equipment." },
  { icon: Sparkles, image: "/assets/app-specialty-blends.jpg", title: "Specialty Blended Applications", desc: "Custom formulations developed around your specifications and end use." },
];

const processSteps = [
  { icon: MessageSquare, step: "01", title: "Inquiry", desc: "Tell us what you need, materials, scale, and end use." },
  { icon: ClipboardList, step: "02", title: "Specification Review", desc: "Our team reviews requirements and confirms feasibility." },
  { icon: Beaker, step: "03", title: "Blending & Processing", desc: "Production runs against your specification and tolerances." },
  { icon: PackageCheck, step: "04", title: "Packaging", desc: "Packed to spec, from retail bags to bulk transport." },
  { icon: Send, step: "05", title: "Delivery", desc: "Coordinated logistics across the U.S., on your timeline." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Custom Blending, Toll Manufacturing & Contract Packaging",
  provider: { "@type": "Organization", name: "Whittemore Company, Inc." },
  description: "Flexible blending, toll processing, and contract packaging services for perlite, vermiculite, and specialty granular and powder products.",
  areaServed: "United States",
  serviceType: ["Custom Blending", "Toll Processing", "Contract Packaging"],
};

export default function CustomSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[560px] flex items-center overflow-hidden">
          <img
            src="/assets/hero-custom-blending.jpg"
            alt="Industrial perlite and vermiculite blending and packaging facility"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/30" />
          <DotPattern className="bottom-0 left-0 text-accent !opacity-40" />
          <DotPattern className="top-12 right-12 text-accent hidden md:block !opacity-30" />
          <div className="container relative z-10 py-20 md:py-28 lg:py-36">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-4">
                Custom Blending
              </p>
              <h1
                className="font-display font-extrabold text-secondary-foreground mb-6 max-w-4xl leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4.6vw, 3.75rem)" }}
              >
                Custom Blending, <span className="whitespace-nowrap">Toll Manufacturing</span><br />& Contract Packaging
              </h1>
              <p className="text-secondary-foreground/85 font-body text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Flexible blending, toll processing, and packaging solutions for perlite, vermiculite, and specialty granular and powder products.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide min-w-[200px] justify-center"
              >
                Discuss Your Project
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <FadeIn className="lg:col-span-5">
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Capabilities
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground leading-tight mb-6">
                  Flexible Production Capabilities for Specialized Applications
                </h2>
                <div className="space-y-4 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  <p>
                    Whittemore provides custom blending, toll processing, and contract packaging services for perlite, vermiculite, and other granular and powder products.
                  </p>
                  <p>
                    Our flexible production capabilities support construction, industrial, and specialty applications at any scale.
                  </p>
                </div>
              </FadeIn>

              <FadeIn className="lg:col-span-7">
                <div className="grid sm:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden border border-border">
                  {capabilities.map((cap) => (
                    <div
                      key={cap.label}
                      className="bg-card p-6 md:p-7 flex items-start gap-4 hover:bg-accent/5 transition-colors duration-300"
                    >
                      <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <cap.icon className="w-5 h-5 text-accent" strokeWidth={2.25} />
                      </div>
                      <div className="pt-1.5">
                        <p className="font-display font-bold text-foreground text-sm md:text-base leading-snug">
                          {cap.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Flexible Packaging */}
        <section className="py-20 md:py-28 bg-muted">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <FadeIn>
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Packaging
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-5 leading-tight">
                  Flexible Packaging for Any Scale
                </h2>
                <div className="space-y-4 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  <p>
                    Whether you need small retail bags or full bulk shipments, we can accommodate it. Our packaging options range from various bag and container sizes all the way up to bulk tankers and walking floor trailers.
                  </p>
                  <p className="text-foreground font-medium">
                    If you have a packaging requirement, chances are we can meet it.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-[34px] left-[10%] right-[10%] h-px bg-border" aria-hidden="true" />
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4 relative">
                {packagingScale.map((item, i) => (
                  <FadeIn key={item.label} delay={i * 80}>
                    <div className="flex flex-col items-center text-center group">
                      <div className="w-[68px] h-[68px] rounded-full bg-background border-2 border-border group-hover:border-accent flex items-center justify-center mb-5 transition-colors duration-300 relative z-10 shadow-sm">
                        <item.icon className="w-7 h-7 text-accent" strokeWidth={2} />
                      </div>
                      <p className="font-display font-bold text-foreground text-sm md:text-base mb-1.5 leading-tight">
                        {item.label}
                      </p>
                      <p className="text-muted-foreground font-body text-xs md:text-sm leading-snug">
                        {item.note}
                      </p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn>
              <div className="mt-12 max-w-md mx-auto flex items-center gap-3 text-xs font-display font-bold tracking-[0.2em] uppercase text-muted-foreground">
                <span>Small Batch</span>
                <div className="flex-1 h-px bg-gradient-to-r from-accent/30 via-accent to-accent/30" />
                <span>Bulk Scale</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Blending & Toll Processing */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <FadeIn>
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Blending & Toll Processing
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-5 leading-tight">
                  Blending & Toll Processing for Construction & Industrial Applications
                </h2>
                <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  We blend and toll process perlite and vermiculite with cement and other ingredients for a wide range of construction and industrial applications.
                </p>
              </FadeIn>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {applications.map((app, i) => (
                <FadeIn key={app.title} delay={i * 60}>
                  <div className="group h-full bg-card border border-border rounded-xl overflow-hidden hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={app.image}
                        alt={app.title}
                        loading="lazy"
                        width={1024}
                        height={768}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/10 to-transparent" />
                      <div className="absolute top-4 left-4 w-11 h-11 rounded-md bg-background/95 backdrop-blur-sm flex items-center justify-center shadow-sm">
                        <app.icon className="w-5 h-5 text-accent" strokeWidth={2.25} />
                      </div>
                    </div>
                    <div className="p-7 md:p-8 flex-1 relative">
                      <div className="absolute top-0 left-0 h-1 w-12 bg-accent group-hover:w-full transition-all duration-500" aria-hidden="true" />
                      <h3 className="font-display font-extrabold text-foreground text-lg md:text-xl mb-3 leading-snug">
                        {app.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                        {app.desc}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership */}
        <section className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
          <DotPattern className="top-12 right-12 text-accent !opacity-30" />
          <DotPattern className="bottom-0 left-0 text-accent !opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-3xl mb-14">
              <FadeIn>
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Partnership
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold mb-5 leading-tight">
                  Built Around Your Specifications
                </h2>
                <div className="space-y-4 text-secondary-foreground/80 font-body text-base md:text-lg leading-relaxed">
                  <p>
                    If you have a blending, toll manufacturing, or packaging need, we want to hear about it.
                  </p>
                  <p>
                    Our team welcomes inquiries and is ready to work with you to find the right solution for your specifications.
                  </p>
                </div>
              </FadeIn>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-14">
              {processSteps.map((s, i) => (
                <FadeIn key={s.step} delay={i * 80}>
                  <div className="relative h-full bg-secondary-foreground/[0.04] border border-secondary-foreground/10 rounded-xl p-6 hover:border-accent/40 transition-colors duration-300 backdrop-blur-sm">
                    <div className="mb-5">
                      <span className="font-display font-extrabold text-accent/40 text-2xl tracking-tight">
                        {s.step}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base md:text-lg mb-2 leading-snug">
                      {s.title}
                    </h3>
                    <p className="text-secondary-foreground/70 font-body text-sm leading-relaxed">
                      {s.desc}
                    </p>
                    {i < processSteps.length - 1 && (
                      <ArrowRight
                        className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 w-5 h-5 text-accent/50 z-10"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8 pt-10 border-t border-secondary-foreground/10">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.25} />
                  <span className="font-body text-secondary-foreground/85">Flexible</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.25} />
                  <span className="font-body text-secondary-foreground/85">Responsive</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" strokeWidth={2.25} />
                  <span className="font-body text-secondary-foreground/85">Specification-Driven</span>
                </div>
                <Link
                  href="/contact"
                  className="sm:ml-auto inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide min-w-[200px] justify-center"
                >
                  Start a Conversation
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
