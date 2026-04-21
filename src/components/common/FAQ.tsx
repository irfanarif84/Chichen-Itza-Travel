import { useState } from "react";
import type { FAQItem } from "@/lib/faqData";
import { useLocale } from "@/lib/i18n/useLocale";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const FAQSection = ({ title, subtitle, faqs }: FAQSectionProps) => {
  const { t } = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const displayTitle = title || t("faq.title");

  return (
    <section className="py-16 lg:py-20">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            {t("faq.label")}
          </span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">
            {displayTitle}
          </h2>
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-lg shadow-card border-none overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left font-heading font-semibold text-base hover:text-primary transition-colors"
                aria-expanded={openIndex === i}
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="flex-shrink-0 ml-4 transition-transform duration-200"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>

              {/*
                CRITICAL SEO FIX: Answer text is ALWAYS present in the DOM.
                CSS max-height controls visibility — no HTML hidden attribute.
                Google crawls and indexes all FAQ answers even when collapsed.
              */}
              <div
                style={{
                  maxHeight: openIndex === i ? "600px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <p className="px-5 pb-4 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
