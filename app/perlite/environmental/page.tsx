import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Perlite" as const,
  application: "Environmental",
  tagline: ["Rapid Absorption", "Inert & Non-Toxic", "Lightweight Filtration Media"],
  heroImage: "/assets/hero-perlite-environmental.jpg",
  heroCircleVideo: "/videos/perlite-circle.mp4",
  heroAlt: "Expanded perlite used in environmental spill cleanup and stormwater management",
  description: [
    "Perlite's lightweight, porous structure makes it an effective material for environmental containment, filtration, and water management applications.",
    "It rapidly absorbs liquids such as hydrocarbons and oils and is commonly used in spill response systems, containment berms, and remediation projects. Perlite is also used in stormwater filtration, green roof media, and constructed wetlands, where flow-through performance and stability are critical.",
    "Its non-toxic, inert composition makes it safe for use in environmentally sensitive applications.",
  ],
  differentiator: "Perlite is used where rapid absorption, filtration, and lightweight media performance are critical to environmental systems.",
  internalLinks: [
    { prompt: "Compare perlite vs vermiculite:", label: "Perlite vs Vermiculite", href: "/blog/perlite-vs-vermiculite-which-is-right" },
    { prompt: "Learn more about perlite applications:", label: "Perlite Applications", href: "/perlite" },
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Spill Response & Liquid Absorption", description: "" },
    { title: "Stormwater Filtration Systems", description: "" },
    { title: "Green Roof Media & Drainage Layers", description: "" },
    { title: "Bioretention & Filtration Systems", description: "" },
    { title: "Constructed Wetlands", description: "" },
  ],
  whyChooseTitle: "Why Perlite Works for Environmental Applications",
  benefits: [
    { title: "Rapid Liquid Absorption", description: "Quickly absorbs oils, hydrocarbons, and other liquids for effective spill response." },
    { title: "Inert & Environmentally Safe", description: "Non-toxic material suitable for use in sensitive environments." },
    { title: "Supports Stormwater Filtration", description: "Improves water flow and filtration performance in drainage systems." },
    { title: "Lightweight for Green Roof Systems", description: "Reduces load while maintaining effective drainage and media structure." },
    { title: "Easy Cleanup & Disposal", description: "Lightweight material simplifies handling and post-use management." },
  ],
  gradationsIntro: "Different environmental applications require different particle sizes. Whittemore offers perlite grades designed for absorption, filtration, and drainage performance.",
  gradations: [
    { name: "Fine", particleSize: "~0.5–1.5 mm", grade: "", description: "Faster absorption — good for spills and sludge solidification" },
    { name: "Medium", particleSize: "~1.5–3 mm", grade: "", description: "Balance of flow and absorption — useful in soil remediation and filtration layers" },
    { name: "Coarse", particleSize: "~3–6 mm", grade: "", description: "Higher void space / drainage — biofilters, stormwater, structural layers" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "Can perlite absorb oil spills?", answer: "Yes. Perlite rapidly absorbs oils and hydrocarbons, making it effective for spill response and containment applications." },
    { question: "Is perlite safe for use near water?", answer: "Yes. Perlite is inert and non-toxic, making it suitable for use in environmentally sensitive areas such as wetlands and waterways." },
    { question: "How is perlite used in green roofs?", answer: "Perlite is used as a lightweight drainage and growing media component that improves water flow and reduces structural load." },
    { question: "Can perlite be used in constructed wetlands?", answer: "Yes. Perlite supports filtration and water management in constructed wetland systems." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perlite for Environmental Applications",
  description: "Expanded perlite for spill cleanup, stormwater management, and environmental remediation.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Perlite",
  category: "Environmental Minerals",
};

export default function PerliteEnvironmentalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
