"use client";

import Navbar from "@/components/Navbar";
import MineralPageLayout from "@/components/MineralPageLayout";
import Footer from "@/components/Footer";
import { Factory, ShieldCheck, Layers, Sprout, HardHat, Leaf, Waves } from "lucide-react";

const vermiculiteData = {
  mineral: "Vermiculite" as const,
  heroSubtitle: "Whittemore Vermiculite",
  heroTitle: "Premium Expanded Vermiculite",
  heroDescription:
    "Whittemore's expanded vermiculite is engineered to deliver reliable moisture retention, thermal insulation, and non-combustible performance—trusted across horticulture, construction, industrial, environmental, and pool applications.",
  heroImage: "/assets/vermiculite-hero-bg.jpg",
  heroCircleVideo: "/videos/vermiculite-circle.mp4",
  heroImageAlt: "Whittemore premium expanded vermiculite",
  contentImage: "/assets/vermiculite-horticulture.avif",
  contentImageAlt: "Expanded vermiculite granules",
  whatIs: {
    title: "What is Vermiculite?",
    paragraphs: [
      "Vermiculite is a naturally occurring mineral in the mica family — a hydrated magnesium-aluminum-iron silicate — that contains layers of water locked between its crystalline sheets. When heated rapidly, that water flashes to steam and forces the layers apart, exfoliating the mineral into lightweight, accordion-like granules.",
      "Heated to roughly 1400°F, vermiculite ore expands many times its original volume into a porous, absorbent, fire-resistant material. Unlike perlite — which is engineered for drainage and aeration — vermiculite is engineered for retention: holding moisture, nutrients, and heat where they're needed.",
      "At Whittemore, raw vermiculite ore is screened, expanded, and graded in our facility under strict quality controls, producing a clean, asbestos-tested, dimensionally stable material trusted across horticulture, construction, industrial, environmental, and pool applications.",
    ],
  },
  whyChooseTitle: "Why Choose Whittemore Vermiculite?",
  whyChooseIntro:
    "Whittemore manufactures premium expanded vermiculite designed for consistent performance across horticulture, construction, industrial, environmental, and pool applications.",
  whyChooseItems: [
    {
      title: "Naturally Expanded for Insulation & Absorbency",
      icon: Factory,
      description:
        "Heated to high temperatures to create a lightweight, accordion-like structure designed for moisture retention, thermal insulation, and fire resistance.",
    },
    {
      title: "Carefully Sourced & Safety-Tested",
      icon: ShieldCheck,
      description:
        "We partner with trusted suppliers in Africa, Brazil, and the U.S., requiring strict testing protocols to ensure clean, asbestos-free material that meets industry standards.",
    },
    {
      title: "Built for Stable, Reliable Performance",
      icon: Layers,
      description:
        "Our controlled expansion process delivers consistent particle structure and dependable performance across horticulture, construction, and industrial applications.",
    },
  ],
  benefitsTitle: "Benefits of Vermiculite",
  benefits: [
    "High Absorbency — Retains and gradually releases moisture, supporting plant health and environmental applications",
    "Thermal Insulation & Fire Resistance — Non-combustible and stable at high temperatures, ideal for fireproofing and insulation systems",
    "Lightweight & Compressible — Reduces structural weight while maintaining coverage and performance",
    "Chemically Inert — Does not react with other materials, making it suitable for controlled and sensitive applications",
    "Dimensionally Stable — Maintains structure over time without breaking down or compacting",
  ],
  processTitle: "Engineered Through Controlled Expansion",
  processIntro:
    "Vermiculite is a naturally occurring mineral in the mica family. At Whittemore, screened ore is rapidly heated to temperatures approaching 1400°F, causing it to expand into a lightweight, absorbent, and fire-resistant material.",
  processSteps: [
    {
      title: "Precision Exfoliation",
      description:
        "High-temperature expansion creates a porous structure designed for absorbency and insulation",
    },
    {
      title: "Selective Global Sourcing",
      description:
        "We partner with established mining operations in the U.S., Brazil, and Africa to ensure consistent raw material quality",
    },
    {
      title: "Strict Safety & Testing Protocols",
      description:
        "All materials are tested to ensure they are free from asbestos contamination and meet industry best practices",
    },
  ],
  applicationLinks: [
    { label: "Pool Installs", path: "/industries/pool-installs", icon: Waves, image: "/assets/industry-pool.jpg" },
    { label: "Horticulture", path: "/industries/horticulture", icon: Sprout, image: "/assets/industry-horticulture.jpg" },
    { label: "Construction", path: "/vermiculite/construction", icon: HardHat, image: "/assets/industry-construction.jpg" },
    { label: "Industrial", path: "/vermiculite/industrial", icon: Factory, image: "/assets/industry-industrial.jpg" },
    { label: "Environmental", path: "/vermiculite/environmental", icon: Leaf, image: "/assets/industry-environmental.jpg" },
  ],
  resourceLabel: "Download SDS / TDS",
  faqs: [
    { question: "What is vermiculite?", answer: "Vermiculite is a naturally occurring mineral that expands when heated, creating a lightweight material with strong absorbent, insulating, and fire-resistant properties." },
    { question: "Is vermiculite safe to use?", answer: "Yes. Whittemore vermiculite is sourced and tested to ensure it is free from asbestos contamination and meets established industry safety standards." },
    { question: "What is vermiculite used for?", answer: "Vermiculite is used across horticulture, construction, industrial applications, environmental systems, and pool base materials—anywhere absorbency, insulation, or fire resistance is required." },
    { question: "What grades of vermiculite are available?", answer: "Whittemore offers both domestic and imported vermiculite grades:\n\n• 2 Domestic Grades – Fine Grade and Super Fine Grade\n• 4 Imported Grades – available in a range of sizes to match your application\n\nContact us to find the right grade for your project." },
    { question: "How is vermiculite different from perlite?", answer: "Vermiculite is designed for moisture and nutrient retention, while perlite improves drainage and aeration. Many applications use both materials together." },
    { question: "Can I order vermiculite in bulk?", answer: "Yes. Bulk, super sack, and bagged options are available depending on your operational needs." },
  ],
  safetyCallout: {
    text: "Whittemore sources vermiculite only from suppliers that meet strict quality and safety standards. All materials are tested to ensure compliance with industry best practices and are verified asbestos-free.",
    linkText: "Learn more about vermiculite safety",
    linkPath: "/blog/is-vermiculite-safe",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Premium Expanded Vermiculite",
  description:
    "Whittemore's expanded vermiculite for fire safety, absorbency, thermal insulation, and horticultural applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Vermiculite",
  category: "Industrial Minerals",
};

export default function VermiculitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <MineralPageLayout {...vermiculiteData} />
      </main>
      <Footer />
    </>
  );
}
