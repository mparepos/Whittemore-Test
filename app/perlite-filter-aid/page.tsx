import Link from "next/link";
import { Check, Waves } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import FadeIn from "@/components/FadeIn";

export default function PerliteFilterAidPage() {
  const benefits = [
    "Safer alternative to diatomaceous earth (DE)",
    "Cleaner & easier to handle",
    "Easy drop-in replacement for DE filters",
    "Strong filtration performance and better flow",
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Hero / Main Feature */}
        <section className="relative overflow-hidden bg-[hsl(210,55%,30%)]">
          <div className="absolute inset-0">
            <img
              src="/assets/pool-water-bg.jpg"
              alt=""
              className="w-full h-full object-cover opacity-40"
              aria-hidden="true"
            />
          </div>
          <div className="container relative z-10 px-6 sm:px-8 md:px-12">
            <div className="relative md:min-h-[480px]">
              <div className="py-20 md:py-28 md:max-w-[85%]">
                <FadeIn>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                    <div className="pl-[50px] md:pl-[60px]">
                      <p
                        className="flex items-center gap-2 text-xs font-display font-bold italic tracking-[0.25em] uppercase mb-3"
                        style={{ color: "#eceec0" }}
                      >
                        <Waves className="w-5 h-5" strokeWidth={3} />
                        Coming Soon
                      </p>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold text-white leading-[1.05]">
                        Perlite<br />
                        <span style={{ color: "#6dded6" }}>Pool Filter</span><br />
                        <span className="text-white">Media</span>
                      </h1>
                      <p className="mt-6 text-white/85 font-body text-base md:text-lg max-w-md leading-relaxed">
                        A cleaner, safer, high-performance perlite filter aid engineered as a drop-in replacement for diatomaceous earth in pool filtration systems.
                      </p>
                      <Link
                        href="/contact"
                        className="mt-8 inline-flex items-center gap-2 px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-medium text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
                      >
                        Request Information
                      </Link>
                    </div>
                    <ul className="space-y-3 md:space-y-5 md:pt-16 lg:pt-20">
                      {benefits.map((item, i) => (
                        <li
                          key={item}
                          className="flex items-start gap-4"
                          style={{ opacity: 0, animation: `fadeSlideUp 0.5s ease-out ${i * 120}ms forwards` }}
                        >
                          <span className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center">
                            <Check className="w-5 h-5 text-white" strokeWidth={3} />
                          </span>
                          <span className="text-white font-display font-bold text-sm md:text-base uppercase tracking-wide leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
