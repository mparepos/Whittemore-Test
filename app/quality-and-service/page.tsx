import Link from "next/link";
import {
  PhoneCall,
  ClipboardList,
  Package,
  Truck,
  Clock,
  Compass,
  ShieldCheck,
  FlaskConical,
  CheckCircle2,
  FileText,
  Award,
  Users,
  HardHat,
  Building2,
  HeartHandshake,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";
import DotPattern from "@/components/DotPattern";

const serviceItems = [
  { icon: Compass, title: "Technical Product Guidance", desc: "Material selection support tailored to your application." },
  { icon: ClipboardList, title: "Custom Quote Support", desc: "Quotes built around your volume, grade, and timeline." },
  { icon: Package, title: "Flexible Packaging Options", desc: "Bags, supersacks, and bulk loading to fit your operation." },
  { icon: Truck, title: "Shipment Coordination", desc: "Logistics handled end-to-end across the U.S." },
  { icon: Clock, title: "Reliable Lead-Time Communication", desc: "Honest timelines and proactive updates, no surprises." },
];

const supplierCallouts = [
  "Longstanding supplier relationships",
  "Quarterly independent testing",
  "Industry best-practice compliance",
  "COAs available upon request",
];

const certifications = [
  { src: "/assets/cert-omri.png", name: "OMRI Listed", url: "https://www.omri.org/" },
  { src: "/assets/cert-perlite-institute.png", name: "Perlite Institute Member", url: "https://www.perlite.org/" },
  { src: "/assets/cert-vermiculite-association.png", name: "The Vermiculite Association Member", url: "https://www.vermiculite.org/" },
  { src: "/assets/cert-soil-mulch.png", name: "Mulch & Soil Council Member", url: "https://mulchandsoilcouncil.org/" },
  { src: "/assets/cert-iso-9001.png", name: "ISO 9001 Certification, Pending", url: "https://www.iso.org/iso-9001-quality-management.html" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Quality & Service, Whittemore Company",
  description: "Three generations of family ownership, dependable supplier relationships, responsive service, and a commitment to doing things the right way.",
  publisher: { "@type": "Organization", name: "Whittemore Company, Inc." },
};

export default function QualityServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        {/* HERO */}
        <section className="relative min-h-[560px] flex items-center overflow-hidden">
          <img
            src="/assets/hero-facility.jpg"
            alt="Whittemore manufacturing facility, perlite and vermiculite production"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
          <DotPattern className="bottom-0 left-0 text-accent !opacity-40" />
          <DotPattern className="top-12 right-12 text-accent hidden md:block !opacity-40" />
          <div className="container relative z-10 py-20 md:py-28 lg:py-36">
            <FadeIn>
              <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-4">
                Quality & Service
              </p>
              <h1
                className="font-display font-extrabold text-secondary-foreground mb-6 max-w-3xl leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4.6vw, 3.75rem)" }}
              >
                Quality and Service for<br />Three Generations
              </h1>
              <p className="text-secondary-foreground/85 font-body text-base md:text-lg max-w-2xl leading-relaxed mb-8">
                Three generations of family ownership have shaped how we operate, with consistent standards, long-term supplier and customer relationships, and a commitment to quality and service.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide min-w-[200px] justify-center"
              >
                Talk to Our Team
              </Link>
            </FadeIn>
          </div>
        </section>

        {/* Service Experience */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-14">
              <FadeIn className="lg:col-span-5">
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Service Experience
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground leading-tight">
                  A Real Person Answers the Phone
                </h2>
              </FadeIn>
              <FadeIn className="lg:col-span-7">
                <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed mb-4">
                  When you call us during business hours, a live person picks up. Every time. No phone trees, no voicemail mazes, just knowledgeable staff ready to help.
                </p>
                <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  Our team works directly with customers to help identify the right material, packaging, and delivery solution for each application. From initial inquiry through delivery, we prioritize clear communication and dependable service.
                </p>
              </FadeIn>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {serviceItems.map((item, i) => (
                <FadeIn key={item.title} delay={i * 60}>
                  <div className="h-full bg-card rounded-xl border border-border p-6 hover:border-accent/40 hover:shadow-md transition-all duration-300">
                    <div className="w-11 h-11 rounded-md bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-accent" strokeWidth={2.25} />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Supplier Standards */}
        <section className="py-20 md:py-28 bg-muted">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn>
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Supplier Standards
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-6 leading-tight">
                  Supplier Standards & Material Integrity
                </h2>
                <div className="space-y-4 text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  <p>
                    We maintain longstanding relationships with our perlite and vermiculite ore suppliers, and we hold them to rigorous standards.
                  </p>
                  <p>
                    Our vermiculite ore suppliers are required to follow the best-practices protocol established by the Vermiculite Association, which mandates quarterly testing through one of two independent, specialized laboratories.
                  </p>
                  <p className="text-foreground font-medium">
                    We only work with suppliers who meet this standard. No exceptions.
                  </p>
                  <p>
                    Certificates of Analysis are available upon request.
                  </p>
                </div>
              </FadeIn>

              <FadeIn>
                <div className="bg-background rounded-2xl border border-border p-8 md:p-10 shadow-sm">
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                    <FlaskConical className="w-6 h-6 text-accent" strokeWidth={2.25} />
                    <span className="font-display font-bold text-foreground text-sm uppercase tracking-wider">
                      Quality Assurance
                    </span>
                  </div>
                  <ul className="space-y-5">
                    {supplierCallouts.map((c) => (
                      <li key={c} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" strokeWidth={2.25} />
                        <span className="text-foreground font-body text-base md:text-lg leading-snug">
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-3 text-sm text-muted-foreground">
                    <FileText className="w-4 h-4 text-accent" />
                    <span className="font-body">COAs available upon request</span>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Industry Membership */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="max-w-3xl mb-14">
              <FadeIn>
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Industry Membership
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground mb-5 leading-tight">
                  Longstanding Industry Membership
                </h2>
                <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  Decades of membership in these leading industry organizations keep us connected to the latest standards, research, and best practices, and reflect our long-term commitment to doing this work the right way.
                </p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { year: "1974", org: "Perlite Institute", desc: "Active member for over 50 years, contributing to and benefiting from the global standard for perlite manufacturing." },
                { year: "1991", org: "The Vermiculite Association", desc: "More than three decades of participation in industry research, safety standards, and best-practice protocols." },
              ].map((m, i) => (
                <FadeIn key={m.org} delay={i * 100}>
                  <div className="relative bg-card rounded-xl border border-border p-8 md:p-10 hover:border-accent/40 hover:shadow-md transition-all duration-300 h-full">
                    <div className="absolute top-0 left-8 -translate-y-1/2 bg-accent text-accent-foreground font-display font-bold text-sm tracking-widest px-4 py-1.5 rounded">
                      MEMBER SINCE {m.year}
                    </div>
                    <Award className="w-10 h-10 text-accent mb-5 mt-2" strokeWidth={1.75} />
                    <h3 className="font-display font-extrabold text-foreground text-xl md:text-2xl mb-3">
                      {m.org}
                    </h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="mt-20 pt-14 border-t border-border">
                <p className="text-center text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-10">
                  Certifications & Memberships
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10 items-center justify-items-center max-w-5xl mx-auto">
                  {certifications.map((cert) => (
                    <a
                      key={cert.name}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${cert.name}, visit official website (opens in a new tab)`}
                      className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-80 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                    >
                      <img
                        src={cert.src}
                        alt={cert.name}
                        title={cert.name}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="w-24 h-24 md:w-28 md:h-28 object-contain"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Quality & Safety Culture */}
        <section className="py-20 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
          <DotPattern className="top-12 right-12 text-accent !opacity-30" />
          <DotPattern className="bottom-0 left-0 text-accent !opacity-30" />
          <div className="container relative z-10">
            <div className="max-w-3xl mb-14">
              <FadeIn>
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Culture
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold mb-5 leading-tight">
                  Quality & Safety from the Inside Out
                </h2>
                <p className="text-secondary-foreground/80 font-body text-base md:text-lg leading-relaxed">
                  At Whittemore Co., quality and safety aren't managed from the top down, they're built into our culture at every level. Our in-house committees are made up of employees from across the company, ensuring that the people closest to the work have a voice in how we do it.
                </p>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  icon: ShieldCheck,
                  title: "Quality Control Committee",
                  desc: "An employee-led committee responsible for material consistency, gradation accuracy, and continuous process improvement across every production run.",
                },
                {
                  icon: HardHat,
                  title: "Safety Committee",
                  desc: "Cross-functional employee representation drives our safety standards, because the people doing the work know it best.",
                },
              ].map((item, i) => (
                <FadeIn key={item.title} delay={i * 100}>
                  <div className="h-full bg-secondary-foreground/[0.04] border border-secondary-foreground/10 rounded-xl p-8 md:p-10 hover:border-accent/40 transition-colors duration-300 backdrop-blur-sm">
                    <item.icon className="w-10 h-10 text-accent mb-5" strokeWidth={1.75} />
                    <h3 className="font-display font-extrabold text-xl md:text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-secondary-foreground/75 font-body text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="mt-12 flex items-start gap-4 max-w-3xl">
                <Package className="w-6 h-6 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
                <p className="text-secondary-foreground/80 font-body text-base md:text-lg leading-relaxed">
                  We offer a variety of bagging options and bulk loading capabilities to meet the needs of customers large and small.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <FadeIn className="lg:col-span-5">
                <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                  Community
                </p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground leading-tight mb-5">
                  Proud to Call Lawrence, MA Home
                </h2>
                <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                  Most of our workforce lives and works right here in Lawrence, MA. We're deeply invested in this community, not just as an employer, but as a neighbor.
                </p>
              </FadeIn>

              <div className="lg:col-span-7 space-y-5">
                {[
                  {
                    icon: Users,
                    title: "Employment Partnerships",
                    desc: "We partner with Lazarus House and the Essex County Work Release Program, providing meaningful employment opportunities for people working to rebuild their lives and reenter the workforce.",
                  },
                  {
                    icon: Building2,
                    title: "Local Programs & Youth",
                    desc: "We donate to community programs focused on expanding employment and supporting local youth, including the Lawrence High School girls' basketball team.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Growing Together",
                    desc: "We believe a strong business and a strong community grow together.",
                  },
                ].map((item, i) => (
                  <FadeIn key={item.title} delay={i * 80}>
                    <div className="bg-card border border-border rounded-xl p-6 md:p-7 flex gap-5 hover:border-accent/40 hover:shadow-md transition-all duration-300">
                      <div className="w-12 h-12 rounded-md bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-accent" strokeWidth={2.25} />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-foreground text-base md:text-lg mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section className="py-20 md:py-24 bg-muted">
          <div className="container">
            <FadeIn>
              <div className="max-w-4xl mx-auto bg-background border border-border rounded-2xl p-8 md:p-12 lg:p-14 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" aria-hidden="true" />
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center relative">
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                    <Award className="w-12 h-12 md:w-14 md:h-14 text-accent" strokeWidth={1.75} />
                  </div>
                  <div className="text-center md:text-left">
                    <p className="text-accent text-xs font-display font-bold tracking-[0.25em] uppercase mb-3">
                      Recognized for Excellence
                    </p>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-extrabold text-foreground mb-4 leading-tight">
                      2011 Business of the Year, Enterprise Bank
                    </h2>
                    <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed">
                      An honor recognizing outstanding companies in the Merrimack Valley for exceptional business performance, integrity, and commitment to the community. It's a recognition we carry forward in everything we do.
                    </p>
                  </div>
                </div>
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
