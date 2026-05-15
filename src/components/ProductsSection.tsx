import { ArrowRight, Settings } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

const products = [
  {
    title: "Perlite",
    description: "Lightweight expanded perlite that improves insulation, filtration, and structural performance across pool, horticulture, and industrial applications.",
    image: null as string | null,
    video: "/videos/perlite-home-circle.mp4",
    icon: null as typeof Settings | null,
    alt: "Expanded perlite mineral granules - lightweight volcanic glass aggregate",
    link: "/perlite",
  },
  {
    title: "Vermiculite",
    description: "Expanded vermiculite engineered for moisture retention, fire resistance, and lightweight construction performance.",
    image: null as string | null,
    video: "/videos/vermiculite-hero.mp4",
    icon: null,
    alt: "Expanded vermiculite mineral granules - lightweight laminar aggregate",
    link: "/vermiculite",
  },
  {
    title: "Custom Blending",
    description: "Custom mineral blends, specialty gradations, and private-label manufacturing built around your application and supply requirements.",
    image: null as string | null,
    icon: Settings,
    alt: "",
    link: "/custom-solutions",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-16 md:py-24 bg-card overflow-hidden" aria-label="Products and Services">
      <div className="container">
        <div className="flex items-end justify-between mb-14">
          <FadeIn>
            <div>
              <p className="text-accent text-xs font-display font-bold tracking-[0.2em] uppercase mb-2">
                What We Do
              </p>
              <h2 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground">
                Products & Services
              </h2>
            </div>
          </FadeIn>
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center justify-center gap-2 min-w-[200px] px-8 py-3.5 rounded-md bg-accent text-accent-foreground font-display font-medium text-sm border border-accent hover:bg-transparent hover:text-accent transition-all duration-200 uppercase tracking-wide"
          >
            Contact Sales
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.link}
              className="group flex flex-col items-center cursor-pointer"
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="h-[22rem] flex items-center justify-center py-6">
                {product.video ? (
                  <div className="relative w-72 h-72">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-lg group-hover:scale-105 transition-transform duration-500">
                      <video
                        src={product.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ) : product.image ? (
                  <div className="relative w-72 h-72">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-lg group-hover:scale-105 transition-transform duration-500">
                      <img
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        itemProp="image"
                      />
                    </div>
                  </div>
                ) : product.icon ? (
                  <div className="relative w-72 h-72">
                    <div className="w-full h-full rounded-full overflow-hidden border-4 border-accent shadow-lg flex items-center justify-center bg-background">
                      <product.icon className="w-12 h-12 text-accent" />
                    </div>
                  </div>
                ) : (
                  <Settings className="w-12 h-12 text-muted-foreground" />
                )}
              </div>
              <div className="w-full bg-background rounded-xl border border-border shadow-sm p-6 flex flex-col flex-grow hover:shadow-xl transition-all duration-300">
                <h3
                  className="inline-flex items-center gap-2 text-xl font-display font-bold text-foreground uppercase tracking-wide mb-3 group-hover:gap-3 group-hover:text-accent transition-all duration-200"
                  itemProp="name"
                >
                  {product.title}
                  <ArrowRight className="w-5 h-5 text-accent" />
                </h3>
                <p className="text-muted-foreground text-sm font-body leading-relaxed flex-grow" itemProp="description">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
