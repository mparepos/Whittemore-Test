import Navbar from "@/components/Navbar";
import ProductPageLayout from "@/components/ProductPageLayout";
import Footer from "@/components/Footer";

const data = {
  mineral: "Perlite" as const,
  application: "Pool Installs",
  tagline: ["Lightweight Fill", "Excellent Drainage", "Stable Base"],
  heroImage: "/assets/hero-perlite-pool.jpg",
  heroAlt: "Expanded perlite used as backfill and drainage material in pool installations",
  description: [
    "Perlite provides lightweight, non-compacting backfill and drainage solutions for swimming pool construction, reducing lateral pressure on pool walls and improving site drainage.",
    "Used as backfill around fiberglass and vinyl-liner pools, perlite reduces the load on pool shells compared to traditional soil or gravel fill. Its excellent drainage properties prevent water buildup behind pool walls, reducing the risk of hydrostatic pressure damage. Perlite backfill is easy to place, won't settle or shift, and provides long-lasting structural support.",
  ],
  formats: ["Bulk", "Super sacks", "Bagged (multiple sizes available)"],
  commonApplications: [
    { title: "Pool Backfill", description: "" },
    { title: "Drainage Layer", description: "" },
    { title: "Fiberglass Pool Support", description: "" },
    { title: "Vinyl-Liner Pools", description: "" },
  ],
  whyChooseTitle: "Why Pool Builders Choose Perlite",
  benefits: [
    { title: "Reduces Lateral Pressure on Pool Walls", description: "Perlite backfill weighs a fraction of soil or gravel, significantly reducing the lateral load on fiberglass and vinyl-liner pool shells." },
    { title: "Excellent Drainage Around Pool Shells", description: "Perlite's porous structure allows water to drain freely, preventing hydrostatic pressure buildup that can damage pool walls." },
    { title: "Won't Settle or Compact", description: "Unlike soil backfill, perlite maintains its volume and structural support over time without settling, shifting, or compacting." },
    { title: "Lightweight & Easy to Place", description: "Perlite backfill can be poured directly from bags or blown into place, reducing labor time and equipment needs on site." },
    { title: "Chemically Inert & Non-Degrading", description: "Perlite won't decompose, attract pests, or react with pool chemicals — providing a stable, maintenance-free backfill solution." },
  ],
  gradations: [
    { name: "Medium", particleSize: "1.5-3mm", grade: "Grade 3", description: "General pool backfill and drainage" },
    { name: "Coarse", particleSize: "3-6mm", grade: "Grade 2", description: "Heavy drainage and structural backfill" },
  ],
  resourceLabel: "Download Technical Info",
  faqs: [
    { question: "Why use perlite instead of gravel for pool backfill?", answer: "Perlite is significantly lighter than gravel, reducing lateral pressure on pool walls by up to 75%. It also provides superior drainage and won't settle over time." },
    { question: "Can perlite be used around fiberglass pools?", answer: "Yes. Perlite is the recommended backfill for fiberglass pools because it reduces lateral pressure on the shell and provides excellent drainage." },
    { question: "Does perlite backfill need to be compacted?", answer: "No. Perlite is self-leveling and does not require mechanical compaction. It can be poured or blown into place around the pool shell." },
    { question: "How much perlite is needed for pool backfill?", answer: "The amount depends on pool size and the gap between the pool shell and excavation. Contact our team for volume estimates based on your specific project dimensions." },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Perlite for Pool Installs",
  description: "Expanded perlite for lightweight backfill and drainage in swimming pool installations.",
  brand: { "@type": "Brand", name: "Whittemore Company, Inc." },
  material: "Expanded Perlite",
  category: "Pool Construction Minerals",
};

export default function PerlitePoolInstallsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main><ProductPageLayout {...data} /></main>
      <Footer />
    </>
  );
}
