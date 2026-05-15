import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function HorticulturePage() {
  return (
    <IndustryPageLayout
      name="Horticulture"
      heroImage="/assets/industry-horticulture.jpg"
      heroAlt="Horticulture growing environment with perlite and vermiculite soil amendments"
      headline="The foundation of healthy growth starts below the surface. Whittemore's perlite and vermiculite support balanced moisture, aeration, and root development across a wide range of horticultural growing environments."
      description="Soil amendments, growing media, and seed coatings for commercial nurseries and agriculture."
      aboutLabel="Perlite & Vermiculite"
      aboutHeading="Where Healthy Growth Begins"
      aboutBody={[
        "Horticulture professionals rely on growing media that support consistent plant development.",
        "Perlite and vermiculite are widely used across propagation, greenhouse production, and blended growing media to help manage root-zone conditions. Depending on the application, they may be used independently or combined to support different growing needs throughout the plant life cycle.",
      ]}
      products={[
        { name: "Vermiculite", path: "/vermiculite/horticulture", description: "Retains moisture and nutrients for consistent hydration in potting mixes and seed starting.", image: "/assets/vermiculite-product.webp" },
        { name: "Perlite", path: "/perlite/horticulture", description: "Provides drainage and aeration to prevent waterlogging and promote healthy root systems.", image: "/assets/perlite-product.jpg" },
      ]}
      faqs={[
        { question: "Which is better for seed starting — perlite or vermiculite?", answer: "Vermiculite is generally preferred for seed starting because it retains moisture and keeps seeds consistently hydrated. Perlite can be blended in for improved drainage in humid environments." },
        { question: "Can I use perlite and vermiculite in hydroponic systems?", answer: "Yes. Perlite is commonly used as a standalone hydroponic medium for its excellent drainage. Vermiculite can be blended in to increase water retention in certain hydroponic setups." },
        { question: "Are these minerals safe for organic growing?", answer: "Both perlite and vermiculite are natural, inert minerals with no chemical additives. They are widely accepted in organic growing operations." },
        { question: "What formats are available for commercial growers?", answer: "Whittemore supplies both minerals in bulk, super sacks, and bagged formats in multiple gradations to meet commercial nursery and greenhouse requirements." },
      ]}
      faqHeading="Questions Growers Ask"
      faqHeadingAccent="Growers"
    />
  );
}
