"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = ({ faqs, heading = "Frequently Asked Questions", headingAccent }: { faqs: FAQItem[]; heading?: string; headingAccent?: string }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (!faqs || faqs.length === 0) return null;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section className="py-20 bg-card">
        <div className="container max-w-3xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-extrabold text-foreground text-center mb-10">
            {headingAccent ? (
              <>
                {heading.split(headingAccent)[0]}
                <span className="text-accent">{headingAccent}</span>
                {heading.split(headingAccent)[1]}
              </>
            ) : heading}
          </h2>
          <div className="divide-y divide-border border-t border-b border-border">
            {faqs.map((faq, index) => (
              <div key={index}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base font-display font-bold text-foreground pr-4 group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-accent flex-shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-accent flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="pb-5 text-sm text-muted-foreground font-body leading-relaxed">
                    {faq.answer.includes("\n") ? (
                      faq.answer.split("\n").map((line, i) => {
                        const trimmed = line.trim();
                        if (!trimmed) return null;
                        const bulletMatch = trimmed.match(/^[•\-–]\s*(.+?)\s*[–—]\s*(.+)$/);
                        if (bulletMatch) {
                          return (
                            <p key={i} className="ml-4 mt-1.5">
                              <span className="text-accent font-bold">• {bulletMatch[1]}</span>
                              <span> – {bulletMatch[2]}</span>
                            </p>
                          );
                        }
                        return <p key={i} className={i > 0 ? "mt-2" : ""}>{trimmed}</p>;
                      })
                    ) : (
                      faq.answer
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
