import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Perlite" as const,
  application: "Industrial",
  tagline: ["High-Temperature Stable", "Chemically Inert", "Filter Aid Performance"],
  heroImage: "/assets/hero-perlite-industrial.jpg",
  heroCircleVideo: "/videos/perlite-circle.mp4",
  heroAlt: "Expanded perlite used in industrial filtration and cryogenic insulation",
  description: [
    "Perlite plays a critical role in industrial processes where filtration efficiency, thermal insulation, and chemical stability are required.",
    "It is widely used as a filter aid in food and beverage processing, pharmaceutical manufacturing, and water treatment. Perlite is also used for cryogenic insulation in LNG facilities, storage tanks, and piping systems.",
    "Its lightweight, chemically inert properties make it a reliable and cost-effective material across a range of industrial applications.",
  ],
  differentiator: "Perlite is used where filtration performance, thermal stability, and chemical inertness are critical to system reliability.",
  internalLinks: [
    { prompt: "Learn more about perlite safety:", label: "Is Perlite Safe?", href: "/blog/is-perlite-safe" },
    { prompt: "Compare perlite vs vermiculite:", label: "Perlite vs Vermiculite", href: "/blog/perlite-vs-vermiculite-which-is-right" },
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Filter Aid (Food, Beverage & Water Treatment)", description: "" },
    { title: "Cryogenic Insulation (LNG & Storage Systems)", description: "" },
    { title: "Pipe & Industrial Insulation", description: "" },
    { title: "Pharmaceutical Processing", description: "" },
    { title: "Chemical & Process Filtration", description: "" },
  ],
  whyChooseTitle: "Why Industry Relies on Perlite",
  benefits: [
    { title: "Superior Filter Aid Performance", description: "Provides consistent particle structure for efficient filtration and clarity." },
    { title: "Cryogenic Insulation", description: "Maintains performance at extremely low temperatures in LNG and storage systems." },
    { title: "Chemically Inert & pH Neutral", description: "Does not react with liquids or gases, making it ideal for sensitive processes." },
    { title: "High-Temperature Stability", description: "Maintains structure and performance in elevated temperature environments." },
    { title: "Lightweight & Cost Effective", description: "Reduces system weight while improving efficiency and ease of handling." },
  ],
  gradationsIntro: "Different industrial applications require specific particle sizes and performance characteristics. Whittemore offers a range of perlite grades designed for filtration efficiency, insulation performance, and process consistency.\n\nContact our team for detailed specifications and application guidance.",
  gradations: [
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
    { name: "Placeholder", particleSize: "TBD", grade: "TBD", description: "Details coming soon" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "How does perlite work as a filter aid?", answer: "Perlite creates a porous filtration layer that helps remove fine particles from liquids, improving clarity and process efficiency." },
    { question: "Why is perlite used in cryogenic insulation?", answer: "Perlite provides low thermal conductivity and remains stable at extremely low temperatures, making it ideal for LNG storage and transport systems." },
    { question: "Is perlite approved for food processing?", answer: "Yes. Perlite is widely used in food and beverage filtration and meets applicable standards when properly processed and handled." },
    { question: "Can perlite replace diatomaceous earth?", answer: "In many applications, perlite can be used as an alternative filter aid, offering consistent performance and handling advantages." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perlite for Industrial Applications",
  description: "Expanded perlite for filtration, cryogenic insulation, and industrial process applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Perlite",
  category: "Industrial Minerals",
};

export default function PerliteIndustrialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
