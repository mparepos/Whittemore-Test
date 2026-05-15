"use client";

import { CheckCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const madeInUsaBadge = "/assets/made-in-usa-badge.png";

const stats = [
  { label: "Verified ore chemistry" },
  { label: "Manufactured in the USA" },
  { label: "Traceable raw material sourcing" },
  { label: "100+ years of experience" },
  { label: "Consistent particle gradations" },
  { label: "Third Generation Family Owned" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 md:py-32 bg-background overflow-hidden" aria-label="About Whittemore">
      <div className="container grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-center">
        {/* Image with green accent block and Made in USA badge */}
        <div className="relative">
          {/* Green accent block behind */}
          <div className="absolute -bottom-5 -right-5 w-full h-full rounded-full bg-accent/15 z-0" />
          <div className="relative z-10">
            <video
              src="/videos/hero-homepage.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="rounded-full shadow-lg w-full max-w-[500px] md:max-w-[520px] mx-auto object-cover aspect-square transition-opacity duration-1000"
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
            {/* Made in the USA badge */}
            <div className="absolute bottom-[4%] left-[4%] z-20 bg-white rounded-lg p-2 md:p-3 drop-shadow-2xl shadow-xl">
              <img
                src={madeInUsaBadge}
                alt="Made in USA"
                loading="lazy"
                width={1584}
                height={672}
                className="w-28 md:w-40 lg:w-48 h-auto select-none block"
              />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Dots + label */}
          <FadeIn>
          <div className="flex items-center gap-3 animate-about-tag-entrance">
            <div className="flex gap-1.5">
              {[1, 0.7, 0.4, 0.2].map((targetOpacity, i) => (
                <span
                  key={i}
                  className="w-3 h-3 rounded-full bg-accent"
                  style={{
                    opacity: 0,
                    animation: `dotBounceIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${300 + i * 200}ms forwards`,
                    '--dot-target-opacity': targetOpacity,
                  } as React.CSSProperties}
                />
              ))}
            </div>
            <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase opacity-0 animate-about-label-slide">
              About Whittemore
            </p>
          </div>

          <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground leading-tight mt-6">
            Built to Perform.
            <br />
            <span className="text-accent">Proven on the Job.</span>
          </h2>
          </FadeIn>
          <p className="text-muted-foreground font-body leading-relaxed text-[14px]">
            For over a century, Whittemore has produced expanded vermiculite and perlite engineered for demanding applications. Our controlled processing delivers clean, consistent materials with repeatable performance at scale.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-2 -mx-2 sm:mx-0">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-start gap-3"
                style={{
                  opacity: 0,
                  animation: `fadeSlideUp 0.5s ease-out ${i * 150}ms forwards`,
                }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-foreground font-bold">{stat.label}</span>
              </div>
            ))}
          </div>

          <a
            href="/about"
            className="inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-medium text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide mt-2"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
