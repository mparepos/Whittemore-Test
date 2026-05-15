import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Vermiculite" as const,
  application: "Horticulture",
  tagline: ["Moisture Retention", "Nutrient Holding", "Seed Starting"],
  heroImage: "/assets/industry-horticulture.jpg",
  heroCircleVideo: "/videos/vermiculite-circle.mp4",
  heroAlt: "Expanded vermiculite mixed into growing media for horticultural seed starting and propagation",
  description: [
    "Vermiculite is a naturally occurring mineral that expands when heated, creating a lightweight, highly absorbent material widely used in horticulture.",
    "Unlike perlite, which improves drainage, vermiculite is used to retain moisture and stabilize nutrients, helping growers maintain more consistent growing conditions.",
    "From greenhouse propagation to large-scale soil blending, vermiculite supports uniform moisture distribution, root development, and plant health.",
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Seed Starting", description: "Maintains consistent moisture for fast, even germination" },
    { title: "Potting Mixes", description: "Improves moisture and nutrient retention while preventing compaction" },
    { title: "Propagation & Rooting", description: "Provides a clean, stable media for cuttings and plugs" },
    { title: "Soil Amendment", description: "Balances moisture in both sandy and heavy soils" },
    { title: "Bulb & Tuber Storage", description: "Helps regulate moisture and reduce rot risk during storage" },
  ],
  whyChooseTitle: "Why Growers Choose Vermiculite",
  benefits: [
    { title: "Consistent Moisture Retention", description: "Absorbs and gradually releases water to help prevent drying and reduce irrigation frequency." },
    { title: "Improves Soil Structure", description: "Enhances porosity while maintaining moisture balance in both sandy and heavy soils." },
    { title: "Supports Root Development", description: "Creates a stable environment for germination, propagation, and early growth." },
    { title: "Stabilizes Nutrients", description: "Helps retain fertilizers within the growing media for more efficient uptake." },
    { title: "Reliable Across Growing Systems", description: "Used in greenhouse production, propagation, soil blending, and specialty applications." },
  ],
  gradations: [
    { name: "Micron (Ultra-Fine)", particleSize: "<150 microns", grade: "", description: "For precision applications and moisture control in fine media — seed coatings, pelleting, plug mixes, and rooting slurries" },
    { name: "Super Fine", particleSize: "150–500 microns", grade: "", description: "Ideal for early-stage growth and delicate root systems — seed starting, micro plugs, and small cells" },
    { name: "Fine", particleSize: "~0.5–1.5 mm", grade: "", description: "Balanced moisture retention for small containers and bedding plants" },
    { name: "Medium", particleSize: "~1.5–3.0 mm", grade: "", description: "Most versatile grade for general horticulture use — potting mixes, greenhouse and container production" },
    { name: "Coarse", particleSize: "~3–6 mm", grade: "", description: "Improves aeration while maintaining moisture balance — soil conditioning and landscaping blends" },
  ],
  gradationsIntro: "Different applications require different particle sizes. Whittemore offers a full range of horticultural grades, including specialty options.\n\nSizes shown are typical industry ranges. We can align to your exact specifications.",
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "Is vermiculite safe for plants?", answer: "Yes. Horticultural vermiculite is widely used and considered safe when sourced and handled properly." },
    { question: "Does vermiculite hold water?", answer: "Yes. Vermiculite absorbs and gradually releases moisture, helping maintain consistent hydration and reduce plant stress." },
    { question: "Does vermiculite act like a fertilizer?", answer: "No. Vermiculite does not provide nutrients—it helps retain water and nutrients so plants can use them more efficiently." },
    { question: "How is vermiculite different from perlite?", answer: "Vermiculite retains moisture and nutrients, while perlite improves drainage and aeration. Many growing media use both together to balance performance." },
    { question: "Can I use vermiculite on its own?", answer: "Vermiculite can be used alone for germination and propagation, but is typically blended with peat, coir, compost, or perlite for optimal performance." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vermiculite for Horticulture",
  description: "Expanded vermiculite for seed starting, potting mixes, and moisture management in horticultural applications.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Vermiculite",
  category: "Horticultural Minerals",
};

export default function VermiculiteHorticulturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
