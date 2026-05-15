import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Perlite" as const,
  application: "Construction",
  tagline: ["Lightweight Aggregate", "Thermal Insulation", "Improved Workability"],
  heroImage: "/assets/hero-perlite-construction.jpg",
  heroCircleVideo: "/videos/perlite-circle.mp4",
  heroAlt: "Expanded perlite used as lightweight aggregate and insulation in construction",
  description: [
    "Perlite is used in construction as a lightweight, expanded aggregate that improves insulation, reduces structural weight, and enhances workability in building materials.",
    "Unlike vermiculite, which is often used for fireproofing and absorbency, perlite is valued for its ability to reduce density, improve mix consistency, and support efficient installation.",
    "From lightweight concrete and plasters to masonry fill and insulation systems, perlite helps deliver durable, efficient building performance.",
  ],
  differentiator: "Perlite is used where lightweight structure, insulation, and mix performance are critical to system efficiency.",
  internalLinks: [
    { prompt: "Compare perlite vs vermiculite:", label: "Perlite vs Vermiculite", href: "/blog/perlite-vs-vermiculite-which-is-right" },
    { prompt: "Learn more about perlite applications:", label: "Perlite Applications", href: "/perlite" },
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Lightweight Concrete & Plasters", description: "" },
    { title: "Roof Decking & Insulating Concrete", description: "" },
    { title: "Masonry & Stucco Systems", description: "" },
    { title: "Thermal Insulation Fill", description: "" },
    { title: "Loose Fill & Cavity Insulation", description: "" },
  ],
  whyChooseTitle: "Why Builders Choose Perlite",
  benefits: [
    { title: "Reduces Structural Weight", description: "Lightweight aggregate lowers dead load in concrete and fill applications." },
    { title: "Improves Workability", description: "Enhances mix consistency, making concrete and plaster easier to place and finish." },
    { title: "Provides Thermal Insulation", description: "Helps regulate temperature and improve energy efficiency in building systems." },
    { title: "Moisture Resistant & Stable", description: "Does not absorb significant water, helping maintain consistent performance." },
    { title: "Durable & Long-Lasting", description: "Maintains structure over time without compacting or degrading." },
  ],
  gradationsIntro: "Different applications require different particle sizes. Whittemore offers a range of perlite grades designed for lightweight performance, insulation, and mix consistency.",
  gradations: [
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "What is perlite used for in construction?", answer: "Perlite is used as a lightweight aggregate in concrete, plasters, masonry, and insulation systems to reduce weight and improve performance." },
    { question: "Can perlite replace sand in concrete?", answer: "Yes. Perlite can partially replace sand to create lightweight concrete with improved insulation properties." },
    { question: "Does perlite provide insulation?", answer: "Yes. Perlite improves thermal insulation by reducing density and slowing heat transfer." },
    { question: "Is perlite fire-resistant?", answer: "Perlite is non-combustible, but it is primarily used for lightweight and insulation performance, rather than fireproofing systems." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perlite for Construction",
  description: "Expanded perlite for lightweight aggregate, insulation, and fireproofing in construction applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Perlite",
  category: "Construction Minerals",
};

export default function PerliteConstructionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
