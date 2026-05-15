import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function IndustrialPage() {
  return (
    <IndustryPageLayout
      name="Industrial"
      heroImage="/assets/industry-industrial.jpg"
      heroAlt="Industrial facility using perlite and vermiculite for high-temperature insulation and filtration"
      headline="From high-temperature insulation to precision filtration, Whittemore's minerals meet the demanding performance requirements of industrial operations."
      description="High-temperature insulation, filtration media, and foundry applications for heavy industry."
      aboutLabel="Industrial Solutions"
      aboutHeading="Engineered for Extreme Conditions"
      aboutBody={[
        "Industrial environments demand materials that perform under pressure, heat, and chemical exposure. Perlite and vermiculite deliver reliable performance across foundry, filtration, and insulation applications.",
        "Whether used as cryogenic insulation, molten metal covering agents, or filter aids in beverage and pharmaceutical processing, these minerals provide the thermal stability, chemical inertness, and mechanical integrity that industrial operations require.",
      ]}
      products={[
        { name: "Vermiculite", path: "/vermiculite/industrial", description: "High-temperature insulation and foundry ladle topping for molten metal applications.", image: "/assets/vermiculite-product.webp" },
        { name: "Perlite", path: "/perlite/industrial", description: "Cryogenic insulation and filter aid for precision filtration in food and pharmaceutical processing.", image: "/assets/perlite-product.jpg" },
      ]}
      faqs={[
        { question: "Can perlite be used as a filter aid?", answer: "Yes. Expanded perlite is widely used as a filter aid in food, beverage, and pharmaceutical processing. Its porous structure provides efficient filtration without chemical contamination." },
        { question: "What temperature can vermiculite withstand?", answer: "Vermiculite can withstand temperatures up to approximately 2000°F (1093°C), making it ideal for high-temperature insulation, foundry ladle topping, and refractory applications." },
        { question: "Is perlite used in cryogenic insulation?", answer: "Yes. Perlite's low thermal conductivity makes it an excellent insulator for cryogenic storage tanks containing liquid oxygen, nitrogen, and natural gas." },
        { question: "Can you provide custom gradations for industrial applications?", answer: "Absolutely. Whittemore can produce custom gradations and specifications to meet the requirements of specialized industrial processes. Contact us to discuss your application." },
      ]}
      faqHeading="Questions Engineers Ask"
      faqHeadingAccent="Engineers"
    />
  );
}
