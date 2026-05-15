import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Vermiculite" as const,
  application: "Environmental",
  tagline: ["High Liquid Retention", "Non-Toxic & Stable", "Chemical Containment"],
  heroImage: "/assets/hero-vermiculite-environmental.jpg",
  heroCircleVideo: "/videos/vermiculite-circle.mp4",
  heroAlt: "Expanded vermiculite used in environmental spill cleanup and soil remediation",
  description: [
    "Vermiculite's natural absorbency and chemical stability make it an effective material for environmental containment, cleanup, and remediation applications.",
    "Unlike perlite, which supports filtration and drainage, vermiculite is used to absorb and retain liquids, helping contain spills and stabilize contaminated materials. It is widely used in spill response, hazardous material packaging, and soil remediation projects.",
    "Its ability to hold liquids while remaining lightweight and non-reactive makes it a reliable solution in environmentally sensitive environments.",
  ],
  differentiator: "Vermiculite is used where liquid retention, containment, and material stabilization are critical to environmental safety.",
  internalLinks: [
    { prompt: "Compare perlite vs vermiculite:", label: "Perlite vs Vermiculite", href: "/blog/perlite-vs-vermiculite-which-is-right" },
    { prompt: "Learn more about vermiculite safety:", label: "Is Vermiculite Safe?", href: "/blog/is-vermiculite-safe" },
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Spill Cleanup & Liquid Containment", description: "" },
    { title: "Soil Remediation & Stabilization", description: "" },
    { title: "Hazardous Material Absorption", description: "" },
    { title: "Revegetation & Soil Conditioning", description: "" },
    { title: "Contaminated Soil Stabilization", description: "" },
  ],
  whyChooseTitle: "Why Vermiculite Works for Environmental Applications",
  benefits: [
    { title: "Absorbs & Retains Liquids", description: "Holds oils, chemicals, and hazardous liquids to prevent spread and contamination." },
    { title: "Non-Toxic & Naturally Occurring", description: "Safe for use in environmentally sensitive areas and remediation projects." },
    { title: "Stabilizes Contaminated Soils", description: "Improves structure and reduces movement of pollutants during cleanup." },
    { title: "Easy Cleanup & Disposal", description: "Lightweight material simplifies handling and post-use removal." },
    { title: "Supports Water Retention in Restoration", description: "Helps maintain moisture in revegetation and restoration efforts." },
  ],
  gradationsIntro: "Different environmental applications require different particle sizes. Whittemore offers vermiculite grades designed for absorption, containment, and soil stabilization performance.",
  gradations: [
    { name: "Fine", particleSize: "1–2 mm", grade: "", description: "Best for surface absorption and soil blending" },
    { name: "Medium", particleSize: "2–4 mm", grade: "", description: "Used for general spill response and remediation applications" },
    { name: "Coarse", particleSize: "4–8 mm", grade: "", description: "Ideal for heavy spill containment and soil conditioning" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "Can vermiculite absorb oil spills?", answer: "Yes. Vermiculite absorbs and retains oils and chemicals, helping contain spills and prevent further spread." },
    { question: "Is vermiculite safe for use near waterways?", answer: "Yes. Vermiculite is non-toxic and naturally occurring, making it suitable for environmentally sensitive areas when used appropriately." },
    { question: "How is spent vermiculite disposed of after spill cleanup?", answer: "Disposal depends on the absorbed material and local regulations, but vermiculite is commonly used because it helps safely contain hazardous substances." },
    { question: "Can vermiculite be used in soil remediation?", answer: "Yes. Vermiculite helps stabilize soils, retain moisture, and support restoration efforts in contaminated or disturbed environments." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vermiculite for Environmental Applications",
  description: "Expanded vermiculite for spill cleanup, soil remediation, and environmental containment applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Vermiculite",
  category: "Environmental Minerals",
};

export default function VermiculiteEnvironmentalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
