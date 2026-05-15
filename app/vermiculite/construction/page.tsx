import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Vermiculite" as const,
  application: "Construction",
  tagline: ["Fire-Resistant", "Lightweight Structural Fill", "Thermal Insulation"],
  heroImage: "/assets/hero-vermiculite-construction.jpg",
  heroCircleVideo: "/videos/vermiculite-circle.mp4",
  heroAlt: "Expanded vermiculite used as lightweight aggregate and fireproofing in construction",
  description: [
    "Vermiculite is used in construction as a lightweight, non-combustible aggregate that improves thermal and acoustic performance across a range of building systems.",
    "From loose-fill insulation and fireproofing plasters to lightweight concrete and masonry fill, vermiculite reduces structural load while delivering reliable insulation and fire resistance. Its stability and performance make it a trusted material in both commercial and residential construction.",
  ],
  differentiator: "Vermiculite is used where insulation, fire resistance, and weight reduction are critical to system performance.",
  internalLinks: [
    { prompt: "Learn more about vermiculite safety and sourcing:", label: "Is Vermiculite Safe?", href: "/blog/is-vermiculite-safe" },
    { prompt: "Not sure which mineral is right for your application?", label: "Perlite vs Vermiculite", href: "/blog/perlite-vs-vermiculite-which-is-right" },
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Fireproofing", description: "" },
    { title: "Roof Decking & Lightweight Concrete", description: "" },
    { title: "Ceiling Tiles & Plasters", description: "" },
    { title: "Thermal Insulation Systems", description: "" },
    { title: "Pool Base Applications", description: "" },
  ],
  whyChooseTitle: "Why Builders Choose Vermiculite",
  benefits: [
    { title: "Non-Combustible & Fire Resistant", description: "Supports fire-rated assemblies and passive fire protection systems." },
    { title: "Reduces Structural Dead Load", description: "Lightweight aggregate reduces overall weight in concrete and fill applications." },
    { title: "Excellent Thermal Insulation", description: "Improves energy efficiency and temperature stability in building systems." },
    { title: "Acoustic Dampening", description: "Helps reduce sound transmission in walls, ceilings, and floor systems." },
    { title: "Easy to Mix & Apply", description: "Integrates easily into plasters, screeds, and lightweight concrete mixes." },
  ],
  gradations: [
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "How is vermiculite used in fireproofing?", answer: "Vermiculite is used in fireproofing plasters and coatings to improve fire resistance in walls, ceilings, and structural assemblies." },
    { question: "Can vermiculite replace sand in concrete?", answer: "Yes. Vermiculite can be used as a lightweight aggregate in concrete and screeds to reduce structural load while improving insulation." },
    { question: "Is vermiculite insulation still used today?", answer: "Yes. Vermiculite is widely used in modern construction for insulation, fireproofing, and lightweight fill applications." },
    { question: "What fire ratings does vermiculite achieve?", answer: "Vermiculite is non-combustible and is used in systems designed to meet specific fire-resistance ratings depending on application and assembly." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vermiculite for Construction",
  description: "Expanded vermiculite for lightweight aggregate, fireproofing, and thermal insulation in construction applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Vermiculite",
  category: "Construction Minerals",
};

export default function VermiculiteConstructionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
