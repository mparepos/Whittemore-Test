import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Perlite" as const,
  application: "Horticulture",
  tagline: ["Fast Drainage", "Root Oxygenation", "Lightweight Growing Media"],
  heroImage: "/assets/industry-horticulture.jpg",
  heroCircleVideo: "/videos/perlite-circle.mp4",
  heroAlt: "Expanded perlite mixed into potting soil for horticultural growing applications",
  description: [
    "Perlite is one of the most widely used soil amendments in commercial horticulture, valued for its ability to improve drainage, aeration, and root-zone structure in growing media.",
    "Unlike vermiculite, which retains moisture, perlite is used to prevent waterlogging and keep root zones oxygenated—making it essential for greenhouse production, propagation, and hydroponic systems.",
    "Its lightweight, sterile, and pH-neutral properties make it a reliable component in professional growing operations.",
  ],
  differentiator: "Perlite is designed to move water through the system, while vermiculite is designed to hold it.",
  internalLink: {
    prompt: "Not sure whether perlite or vermiculite is right for your application?",
    label: "Perlite vs Vermiculite",
    href: "/blog/perlite-vs-vermiculite-which-is-right",
  },
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Potting Mixes", description: "Improves drainage and keeps mixes light and workable" },
    { title: "Seed Starting", description: "Creates air spaces that support young root development" },
    { title: "Propagation & Cuttings", description: "Reduces rot risk while maintaining moisture and oxygen" },
    { title: "Soil Conditioning", description: "Loosens heavy soils and helps prevent compaction" },
    { title: "Hydroponics / Specialty Growing", description: "Acts as an inert, sterile support media" },
  ],
  whyChooseTitle: "Why Growers Choose Perlite",
  benefits: [
    { title: "Improves Drainage & Aeration", description: "Prevents waterlogging and promotes strong, oxygen-rich root environments" },
    { title: "Lightweight & Easy to Handle", description: "Reduces media weight and simplifies transport and application" },
    { title: "Sterile & pH Neutral", description: "Clean, stable material that won't introduce contaminants or alter soil chemistry" },
    { title: "Prevents Soil Compaction", description: "Maintains structure over time, allowing consistent airflow and root development" },
    { title: "Versatile Across Growing Systems", description: "Used in greenhouse production, hydroponics, propagation, and soil blending" },
  ],
  gradations: [
    { name: "Fine", particleSize: "~1–2 mm", grade: "", description: "Small particles — ideal for seed starting blends, micro plugs, and propagation. Helps reduce compaction while retaining moisture." },
    { name: "Medium", particleSize: "~2–3 mm", grade: "", description: "Most common horticulture grade — standard potting mixes and greenhouse production." },
    { name: "Coarse", particleSize: "~3–5 mm", grade: "", description: "Larger particles with open structure — improves drainage in heavier mixes." },
    { name: "Super Coarse Plus", particleSize: "", grade: "", description: "Maximum aeration and drainage — specialty applications including orchids, succulents, and cactus." },
  ],
  gradationsIntro: "Different applications require different particle sizes. Whittemore offers a full range of horticultural vermiculite grades designed for moisture control, root support, and growing system performance. Sizes shown are typical industry ranges, and we can align to your exact specifications.",
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "What ratio of perlite should I use in potting mix?", answer: "Perlite is typically used at 10–30% of a mix, depending on the level of drainage and aeration required." },
    { question: "Can perlite be used as a standalone growing medium?", answer: "Yes, perlite can be used alone in hydroponic or propagation systems, but is often blended with other media for balanced performance." },
    { question: "Is perlite safe for organic growing?", answer: "Yes. Perlite is an inert, naturally derived material commonly used in organic growing systems." },
    { question: "Does perlite hold moisture?", answer: "Perlite holds a small amount of surface moisture while allowing excess water to drain—helping prevent root rot and overwatering." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perlite for Horticulture",
  description: "Expanded perlite for soil amendment, potting mixes, and hydroponic growing media in horticultural applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Perlite",
  category: "Horticultural Minerals",
};

export default function PerliteHorticulturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
