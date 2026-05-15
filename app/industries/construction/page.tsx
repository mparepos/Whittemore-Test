import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function ConstructionPage() {
  return (
    <IndustryPageLayout
      name="Construction"
      heroImage="/assets/industry-construction.jpg"
      heroAlt="Construction site using perlite and vermiculite in lightweight aggregate and insulation"
      headline="Whittemore's expanded minerals deliver lightweight, fire-resistant, and insulating solutions for commercial and residential construction projects."
      description="Lightweight aggregate for concrete, plaster, and fireproofing in commercial and residential construction."
      aboutLabel="Building Materials"
      aboutHeading="Lightweight Performance, Built to Last"
      aboutBody={[
        "In construction, weight and fire resistance matter. Perlite and vermiculite provide lightweight aggregate solutions that reduce structural load while improving thermal and acoustic insulation.",
        "From loose-fill insulation and fireproofing plasters to lightweight concrete and roof deck systems, these minerals are trusted for their durability, non-combustibility, and ease of application across a wide range of building projects.",
      ]}
      products={[
        { name: "Vermiculite", path: "/vermiculite/construction", description: "Fire-resistant loose-fill insulation and lightweight plaster aggregate for construction.", image: "/assets/vermiculite-product.webp" },
        { name: "Perlite", path: "/perlite/construction", description: "Lightweight concrete aggregate and roof insulation board filler for reduced structural load.", image: "/assets/perlite-product.jpg" },
      ]}
      faqs={[
        { question: "Is vermiculite fireproof?", answer: "Vermiculite is non-combustible and provides excellent fire resistance. It's commonly used in fireproofing plasters and spray-applied fire protection for structural steel." },
        { question: "How does perlite reduce structural weight?", answer: "Expanded perlite weighs a fraction of traditional aggregates. When used in lightweight concrete or insulating roof decks, it significantly reduces dead load on building structures." },
        { question: "Can perlite be used in masonry insulation?", answer: "Yes. Loose-fill perlite is poured into concrete block cores to provide thermal insulation without adding significant weight to masonry walls." },
        { question: "Do you supply construction-grade minerals in bulk?", answer: "Yes. Whittemore supplies both perlite and vermiculite in bulk and super sack formats for commercial construction projects." },
      ]}
      faqHeading="Questions Builders Ask"
      faqHeadingAccent="Builders"
    />
  );
}
