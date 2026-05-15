import IndustryPageLayout from "@/components/IndustryPageLayout";

export default function EnvironmentalPage() {
  return (
    <IndustryPageLayout
      name="Environmental"
      heroImage="/assets/industry-environmental.jpg"
      heroAlt="Environmental remediation site using perlite and vermiculite for spill cleanup and water treatment"
      headline="Whittemore's absorbent minerals support spill response, soil remediation, and water treatment with safe, naturally sourced materials."
      description="Absorbent materials for spill cleanup, soil remediation, and water treatment applications."
      aboutLabel="Remediation & Treatment"
      aboutHeading="Clean Solutions from Natural Minerals"
      aboutBody={[
        "Environmental applications require absorbent, non-toxic materials that perform reliably in containment and remediation scenarios. Perlite and vermiculite meet these needs with naturally occurring, chemically inert mineral structures.",
        "Used for oil and chemical spill absorption, stormwater filtration, and soil amendment in remediation projects, these minerals provide effective, environmentally responsible solutions that comply with regulatory standards.",
      ]}
      products={[
        { name: "Vermiculite", path: "/vermiculite/environmental", description: "Absorbent medium for hazardous spill cleanup and soil remediation projects.", image: "/assets/vermiculite-product.webp" },
        { name: "Perlite", path: "/perlite/environmental", description: "Lightweight filtration aid for water treatment and stormwater management systems.", image: "/assets/perlite-product.jpg" },
      ]}
      faqs={[
        { question: "Can vermiculite absorb oil spills?", answer: "Yes. Vermiculite is highly absorbent and is commonly used for oil, chemical, and hazardous material spill cleanup. It can absorb several times its weight in liquid." },
        { question: "Is perlite used in water treatment?", answer: "Yes. Perlite serves as an effective filtration medium in stormwater management and water treatment systems, removing suspended solids and contaminants." },
        { question: "Are these minerals environmentally safe?", answer: "Both perlite and vermiculite are naturally occurring, non-toxic, and chemically inert. They do not leach harmful substances and are safe for use in environmental remediation." },
        { question: "What formats are available for remediation projects?", answer: "Whittemore provides both minerals in bulk and bagged formats suitable for environmental cleanup and soil remediation at any project scale." },
      ]}
      faqHeading="Questions Remediation Pros Ask"
      faqHeadingAccent="Remediation Pros"
    />
  );
}
