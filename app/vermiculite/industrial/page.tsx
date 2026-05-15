import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Vermiculite" as const,
  application: "Industrial",
  tagline: ["Withstands Extreme Heat", "Absorbent & Protective", "Lightweight & Non-Combustible"],
  heroImage: "/assets/hero-vermiculite-industrial.jpg",
  heroCircleVideo: "/videos/vermiculite-circle.mp4",
  heroAlt: "Expanded vermiculite used in industrial insulation and foundry applications",
  description: [
    "Vermiculite delivers reliable performance in industrial environments where heat resistance, absorbency, and material stability are critical.",
    "It is used in high-temperature applications such as furnaces and kilns, as a molten metal covering agent in foundry operations, and as a safe, absorbent material for chemical handling and hazardous material packaging.",
    "Its ability to withstand extreme heat while remaining lightweight and non-reactive makes it essential across a range of industrial processes.",
  ],
  differentiator: "Vermiculite is used where heat protection, absorbency, and safe material containment are critical to operational safety.",
  internalLinks: [
    { prompt: "Compare perlite vs vermiculite:", label: "Perlite vs Vermiculite", href: "/blog/perlite-vs-vermiculite-which-is-right" },
    { prompt: "Learn more about vermiculite safety:", label: "Is Vermiculite Safe?", href: "/blog/is-vermiculite-safe" },
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "High-Temperature Insulation (Furnaces & Kilns)", description: "" },
    { title: "Foundry Topping & Molten Metal Protection", description: "" },
    { title: "Hazardous Material Packaging & Absorbents", description: "" },
    { title: "Chemical Carrier & Soil Remediation", description: "" },
    { title: "Refractory & Thermal Protection Systems", description: "" },
  ],
  whyChooseTitle: "Why Industry Relies on Vermiculite",
  benefits: [
    { title: "Withstands Extreme Temperatures", description: "Maintains structure and performance in high-heat environments such as furnaces and kilns." },
    { title: "Effective Molten Metal Topping", description: "Forms a protective insulating layer that reduces heat loss and improves safety in foundry operations." },
    { title: "Absorbent & Safe for Hazmat Use", description: "Used for chemical containment, spill control, and hazardous material packaging." },
    { title: "Chemical Carrier & Extender", description: "Holds and delivers active materials in industrial and environmental applications." },
    { title: "Lightweight & Non-Combustible", description: "Provides safety and performance without adding unnecessary weight." },
  ],
  gradationsIntro: "Different industrial applications require specific particle sizes and performance characteristics. Whittemore offers a range of vermiculite grades designed for heat protection, absorbency, and material handling performance.\n\nContact our team for detailed specifications and application guidance.",
  gradations: [
    { name: "Large", particleSize: "TBD", grade: "", description: "Details coming soon" },
    { name: "Medium", particleSize: "TBD", grade: "", description: "Details coming soon" },
    { name: "Fine", particleSize: "TBD", grade: "", description: "Details coming soon" },
    { name: "Superfine", particleSize: "TBD", grade: "", description: "Details coming soon" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "What temperature can vermiculite withstand?", answer: "Vermiculite can withstand extremely high temperatures and is commonly used in furnaces, kilns, and fire-resistant applications." },
    { question: "Is vermiculite approved for hazmat shipping?", answer: "Vermiculite is widely used as an absorbent material in hazardous material packaging due to its ability to contain liquids and stabilize contents." },
    { question: "How does vermiculite work as a foundry topping?", answer: "Vermiculite forms an insulating layer over molten metal, helping retain heat and improve safety during casting processes." },
    { question: "Can vermiculite be used as a chemical carrier?", answer: "Yes. Vermiculite is used as a carrier for chemicals and active materials due to its absorbent and stable structure." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vermiculite for Industrial Applications",
  description: "Expanded vermiculite for high-temperature insulation, foundry operations, and industrial process applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Vermiculite",
  category: "Industrial Minerals",
};

export default function VermiculiteIndustrialPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
