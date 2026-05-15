"use client";

import Navbar from "@/components/Navbar";
import MineralPageLayout from "@/components/MineralPageLayout";
import Footer from "@/components/Footer";
import { Thermometer, Earth, Gauge, Sprout, HardHat, Factory, Leaf, Waves, Trophy } from "lucide-react";

const perliteData = {
  mineral: "Perlite" as const,
  heroSubtitle: "Whittemore Perlite",
  heroTitle: "Premium Expanded Perlite",
  heroDescription:
    "As the longest continuously operating perlite manufacturer in North America, Whittemore delivers expanded perlite engineered for superior drainage, insulation, and lightweight performance — trusted across horticulture, construction, industrial filtration, and specialty applications.",
  heroImage: "/assets/perlite-hero-bg.png",
  heroCircleVideo: "/videos/perlite-circle.mp4?v=2",
  heroImageAlt: "Whittemore premium expanded perlite",
  contentImage: "/assets/perlite-product.jpg",
  contentImageAlt: "Expanded perlite granules",
  whatIs: {
    title: "What is Perlite?",
    paragraphs: [
      "Perlite is an amorphous volcanic glass formed by the rapid cooling of viscous lava and the secondary hydration of obsidian. It contains 3–5% trapped water by weight, which is the key to its dramatic expansion behavior when heated.",
      "When processed at temperatures between 1600–2000°F, the trapped water vaporizes and creates microscopic bubbles — expanding the ore 7 to 20 times its original volume into ultra-lightweight, porous, bright white particles. The white color comes from light reflecting off those countless fused glass bubbles.",
      "At Whittemore, raw perlite ore is expanded and graded in our facility to exact specifications, producing a clean, inert, sterile, pH-neutral material trusted across horticulture, construction, industrial filtration, and specialty applications.",
    ],
  },
  whyChooseTitle: "Why Choose Whittemore Perlite?",
  whyChooseIntro:
    "Whittemore manufactures and distributes premium expanded perlite, engineered for consistent performance across horticultural, construction, industrial, and specialty applications.",
  whyChooseItems: [
    {
      title: "North America's Longest-Running Perlite Manufacturer",
      icon: Trophy,
      description:
        "Whittemore is the longest continuously operating perlite manufacturer in North America — a century of expertise behind every batch.",
    },
    {
      title: "Precision Expanded",
      icon: Thermometer,
      description:
        "Expanded at high temperatures to create uniform, lightweight particles with consistent structure and performance.",
    },
    {
      title: "Responsibly Sourced",
      icon: Earth,
      description:
        "We partner with trusted mining operations and maintain strict quality controls from raw ore through final production.",
    },
    {
      title: "Built for Consistency",
      icon: Gauge,
      description:
        "Controlled processing ensures uniform particle size, density, and performance—batch after batch.",
    },
  ],
  benefitsTitle: "Benefits of Perlite",
  benefits: [
    "Improves Drainage & Aeration — Prevents compaction and supports strong root development",
    "Lightweight & Easy to Handle — Reduces transportation costs and simplifies installation",
    "Non-Combustible & Inert — Safe for construction, horticulture, and industrial applications",
    "Stable & Long-Lasting — Does not break down or degrade over time",
    "Sterile & pH Neutral — Clean, consistent material that won't introduce contaminants",
  ],
  processTitle: "Engineered Through Controlled Expansion",
  processIntro:
    "Perlite ore is a hydrated volcanic glass — naturally occurring and abundant — that expands dramatically when heated past its softening point. At Whittemore, every batch is processed in our facility under strict quality controls, ensuring the material you receive meets exact specifications.",
  processSteps: [
    {
      title: "Select Raw Material",
      description:
        "Sourced from proven U.S. and international volcanic deposits through trusted, long-term mining partners — and tested in our facility for purity, moisture content (typically 3–5%), and expansion potential before processing begins",
    },
    {
      title: "Controlled Thermal Expansion (1600–2000°F)",
      description:
        "Processed in Whittemore's industrial furnaces above perlite's softening point — vaporizing the trapped water and expanding the ore 7 to 20 times its original volume into lightweight, porous particles with consistent density",
    },
    {
      title: "Graded to Whittemore Specifications",
      description:
        "Screened and classified in-house to exact particle sizes tailored for horticulture, construction, filtration, and industrial applications",
    },
  ],
  applicationLinks: [
    { label: "Pool Installs", path: "/industries/pool-installs", icon: Waves, image: "/assets/industry-pool.jpg" },
    { label: "Horticulture", path: "/industries/horticulture", icon: Sprout, image: "/assets/industry-horticulture.jpg" },
    { label: "Construction", path: "/perlite/construction", icon: HardHat, image: "/assets/industry-construction.jpg" },
    { label: "Industrial", path: "/perlite/industrial", icon: Factory, image: "/assets/industry-industrial.jpg" },
    { label: "Environmental", path: "/perlite/environmental", icon: Leaf, image: "/assets/industry-environmental.jpg" },
  ],
  resourceLabel: "Download SDS / TDS",
  faqs: [
    { question: "What is perlite and where does it come from?", answer: "Perlite is an amorphous volcanic glass formed from the rapid cooling of viscous lava and the secondary hydration of obsidian. Its naturally trapped water content (3–5% by weight) is what allows it to expand 7 to 20 times its original volume when heated to 1600–2000°F, producing the lightweight, porous white particles used across industry." },
    { question: "Is perlite safe to use?", answer: "Yes. Expanded perlite is inert, non-toxic, and non-combustible. It does not contain harmful additives and is widely used across horticulture, construction, and industrial applications." },
    { question: "What grades of perlite are available?", answer: "Whittemore offers a range of perlite grades to match specific applications:\n\n• Fine – ideal for seed starting and smaller growing media\n• Medium – the most common grade for general horticulture use\n• Coarse – improves drainage and aeration in heavier mixes\n• Filter Aid – used in industrial and pool filtration applications\n\nWe can help match the right grade to your application and performance requirements." },
    { question: "What is the difference between perlite and vermiculite?", answer: "Perlite improves drainage and aeration, while vermiculite improves moisture and nutrient retention. Many professional growers and contractors use both to balance water management and airflow in their applications." },
    { question: "Can I order perlite in bulk?", answer: "Yes. Whittemore offers perlite in bulk, super sacks, and bagged formats in multiple sizes. Contact us for pricing and availability." },
    { question: "What industries commonly use Whittemore perlite?", answer: "Whittemore perlite is used across horticulture, construction, industrial processing, environmental systems, and pool filtration applications." },
    { question: "What sizes and grades are available?", answer: "We offer a full range of grades—from fine to coarse—tailored to your application and performance requirements." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Premium Expanded Perlite",
  description:
    "Whittemore's expanded perlite for drainage, insulation, filtration, and lightweight applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Perlite",
  category: "Industrial Minerals",
};

export default function PerlitePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main>
        <MineralPageLayout {...perliteData} />
      </main>
      <Footer />
    </>
  );
}
