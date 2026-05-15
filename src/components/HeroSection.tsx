"use client";

import { Search, ArrowRight } from "lucide-react";
import DotPattern from "@/components/DotPattern";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[85vh] flex items-center overflow-hidden" aria-label="Hero">
      {/* Full-bleed background video */}
      <div className="absolute inset-0">
        <video
          src="/videos/hero-homepage.mp4"
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
            const handleSeeked = () => { el.style.opacity = '1'; };
            el.addEventListener('timeupdate', handleTime);
            el.addEventListener('seeked', handleSeeked);
          }}
        />
        {/* Dark overlay gradient — heavier on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/30" />
      </div>

      {/* Dot pattern accent */}
      <DotPattern className="bottom-0 left-0 text-accent !opacity-40" />
      <DotPattern className="top-12 right-12 text-accent hidden md:block !opacity-40" />

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl space-y-6 md:space-y-8 animate-fade-in-up">
          <p className="text-accent text-sm font-display font-bold tracking-widest uppercase">
            Trusted Since 1919
          </p>
          <h1
            className="font-display font-extrabold text-secondary-foreground leading-[1.08]"
            style={{ fontSize: "clamp(2.25rem, 5.2vw, 4rem)" }}
          >
            U.S. Manufacturer of{" "}
            <span className="text-accent">Perlite</span><span className="text-accent">,</span>{" "}
            <span className="text-accent">Vermiculite</span><span className="text-accent">,</span> <span className="text-secondary-foreground">&</span>{" "}
            <span className="text-secondary-foreground">Custom Blended Products</span>
          </h1>
          <p className="text-secondary-foreground text-base md:text-[18px] max-w-lg font-body leading-relaxed">
            Whittemore is a reliable and trusted supplier across horticultural, swimming pool, construction, industrial, filtration, and environmental markets.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/perlite"
              className="group inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
            >
              Perlite
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/vermiculite"
              className="group inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-normal text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
            >
              Vermiculite
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
          <a
            href="#industries"
            className="group inline-flex items-center gap-2 text-secondary-foreground font-display font-semibold text-sm hover:underline uppercase tracking-wide"
          >
            <Search className="w-4 h-4 text-secondary-foreground transition-transform duration-500 group-hover:[transform:rotateY(180deg)]" />
            Find your Industry
          </a>
        </div>
      </div>

      {/* Bottom accent bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-accent" />
    </section>
  );
};

export default HeroSection;
