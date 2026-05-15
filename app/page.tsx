import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import IndustriesSection from "@/components/IndustriesSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Whittemore Company, Inc.",
  description: "U.S. manufacturer of expanded perlite and vermiculite for horticulture, construction, industrial, environmental, and pool applications since 1978.",
  url: "https://whittemorecompany.com",
  foundingDate: "1978",
  knowsAbout: [
    "Expanded Perlite",
    "Expanded Vermiculite",
    "Mineral Processing",
    "Horticulture Minerals",
    "Construction Aggregates",
    "Pool Base Materials",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Expanded Perlite",
        description: "Lightweight expanded perlite for insulation, filtration, horticulture, and construction applications.",
        material: "Volcanic glass (perlite ore)",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Product",
        name: "Expanded Vermiculite",
        description: "Expanded vermiculite for moisture retention, fire resistance, lightweight construction, and pool installations.",
        material: "Hydrated laminar mineral (vermiculite ore)",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <IndustriesSection />
        <BlogPreviewSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
