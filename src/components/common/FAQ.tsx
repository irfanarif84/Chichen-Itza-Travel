import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQItem } from "@/lib/faqData";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

const FAQSection = ({ title = "Frequently Asked Questions", subtitle, faqs }: FAQSectionProps) => (
  <section className="py-16 lg:py-20">
    <div className="container max-w-3xl">
      <div className="text-center mb-10">
        <span className="text-primary font-semibold text-sm uppercase tracking-wider">Got Questions?</span>
        <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">{title}</h2>
        {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card rounded-lg px-5 shadow-card border-none"
          >
            <AccordionTrigger className="text-left font-heading font-semibold text-base hover:no-underline hover:text-primary py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;