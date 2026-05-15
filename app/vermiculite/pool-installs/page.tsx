import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Vermiculite" as const,
  application: "Pool Installs",
  tagline: ["Smooth Finish", "Thermal Insulation", "Durable Base"],
  heroImage: "/assets/hero-vermiculite-pool.jpg",
  heroCircleVideo: "/videos/vermiculite-circle.mp4",
  heroAlt: "Vermiculite pool base material for vinyl-liner swimming pool installations",
  description: [
    "Vermiculite is the industry-standard base material for vinyl-liner swimming pools, delivering a smooth, insulating, and durable floor that conforms to any pool shape.",
    "When mixed with Portland cement and water, vermiculite creates a semi-rigid surface that protects the liner, retains pool heat, and resists moisture damage over the life of the pool. It's lightweight, easy to mix, and sets quickly — allowing installation crews to work efficiently without compromising quality.",
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Pool Base / Floor", description: "" },
    { title: "Vinyl-Liner Pools", description: "" },
    { title: "Above-Ground Pools", description: "" },
    { title: "In-Ground Pools", description: "" },
    { title: "Pool Renovation", description: "" },
  ],
  whyChooseTitle: "Why Pool Builders Choose Vermiculite",
  benefits: [
    { title: "Creates a Smooth, Liner-Friendly Surface", description: "Vermiculite pool base trowels to a smooth finish that prevents liner wear and provides a comfortable surface underfoot." },
    { title: "Provides Thermal Insulation", description: "Vermiculite insulates the pool bottom, helping retain heat and potentially reducing energy costs for heated pools." },
    { title: "Conforms to Any Pool Shape", description: "The mixed vermiculite-cement blend can be shaped to fit freeform, geometric, and custom pool designs without cracking." },
    { title: "Resists Moisture & Groundwater", description: "Unlike sand, vermiculite pool base won't wash away or shift due to groundwater pressure, maintaining a stable floor over time." },
    { title: "Sets Quickly for Efficient Installs", description: "Vermiculite pool base sets within hours, allowing crews to install the liner the same day and keep projects on schedule." },
  ],
  gradations: [
    { name: "Medium", particleSize: "2-4mm", grade: "Grade 3", description: "Standard pool base mix — most common for residential pools" },
    { name: "Coarse", particleSize: "4-8mm", grade: "Grade 2", description: "Heavy-duty pool base for commercial and large residential pools" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "What's the mix ratio for vermiculite pool base?", answer: "The typical ratio is approximately 2 parts vermiculite to 1 part Portland cement, mixed with water to a trowelable consistency. Specific ratios may vary by manufacturer recommendation." },
    { question: "How thick should a vermiculite pool bottom be?", answer: "Most installations call for a 2–3 inch layer of vermiculite-cement mix, though thickness may vary based on pool size, soil conditions, and local building codes." },
    { question: "Can vermiculite be used for above-ground pools?", answer: "Yes. Vermiculite pool base works well for both in-ground and above-ground vinyl-liner pools, providing a smooth and protective surface under the liner." },
    { question: "How long does a vermiculite pool bottom last?", answer: "A properly installed vermiculite pool bottom can last the lifetime of the pool. It resists moisture damage and does not deteriorate under normal pool conditions." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vermiculite for Pool Installs",
  description: "Pool-grade vermiculite for smooth, insulating, and durable vinyl-liner pool bottoms.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Vermiculite",
  category: "Pool Construction Minerals",
};

export default function VermiculitePoolInstallsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
