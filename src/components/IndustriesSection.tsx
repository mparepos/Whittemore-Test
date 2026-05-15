import { ArrowRight, HelpCircle } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import DotPattern from "@/components/DotPattern";

const horticultureImg = "/assets/industry-horticulture.jpg";
const constructionImg = "/assets/industry-construction.jpg";
const industrialImg = "/assets/industry-industrial.jpg";
const poolImg = "/assets/industry-pool.jpg";
const environmentalImg = "/assets/industry-environmental.jpg";

const industries: { name: string; image: string | null; path: string | null }[] = [
  { name: "Pool Installs", image: poolImg, path: "/industries/pool-installs" },
  { name: "Filtration", image: null, path: null },
  { name: "Horticulture", image: horticultureImg, path: "/industries/horticulture" },
  { name: "Construction", image: constructionImg, path: "/industries/construction" },
  { name: "Industrial", image: industrialImg, path: "/industries/industrial" },
  { name: "Environmental", image: environmentalImg, path: "/industries/environmental" },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="relative py-16 md:py-24 bg-secondary overflow-hidden scroll-mt-20" aria-label="Industries We Serve">
      <DotPattern className="top-8 left-0 text-accent" />
      <DotPattern className="bottom-8 right-0 text-accent hidden md:block" />

      <div className="container relative z-10">
        <FadeIn>
        <div className="text-center mb-14">
          <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-3">
            Industries We Serve
          </p>
          <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-display font-extrabold text-secondary-foreground mb-5">
            Find the Right Mineral for your Industry
          </h2>
          <p className="text-secondary-foreground/60 max-w-2xl mx-auto font-body text-[14px]">
            Whittemore's expanded perlite and vermiculite support demanding applications across horticulture, construction, industrial, environmental, and pool markets.
          </p>
        </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {industries.map((industry) => {
            const content = (
              <>
                {industry.image ? (
                  <img
                    src={industry.image}
                    alt={`${industry.name} applications using Whittemore perlite and vermiculite minerals`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <HelpCircle className="w-16 h-16 text-muted-foreground/30" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/30 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 flex items-center gap-1.5 sm:gap-2">
                  <span className="text-secondary-foreground font-display font-bold text-sm sm:text-sm uppercase tracking-wide truncate">
                    {industry.name}
                  </span>
                  <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </>
            );

            if (industry.path) {
              return (
                <Link
                  key={industry.name}
                  href={industry.path}
                  className="group relative rounded-xl overflow-hidden aspect-[4/3]"
                >
                  {content}
                </Link>
              );
            }

            return (
              <div
                key={industry.name}
                className="group relative rounded-xl overflow-hidden aspect-[4/3]"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
