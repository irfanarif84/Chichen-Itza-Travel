import { Link } from "react-router-dom";
import { ChevronRight, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import FAQSection from "@/components/common/FAQ";
import { generalChichenItzaFAQs } from "@/lib/faqData";
import { guideImages } from "@/lib/tourImages";

const meta = getPageMeta({
  title: "Chichen Itza Entrance Fees 2026 – Complete Price Guide",
  description: "Current Chichen Itza entrance fees for 2026. Mexican nationals vs foreigners, children's prices, free admission days, and money-saving tips.",
  canonical: "/guide/entrance-fees",
  jsonLd: createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guide", url: "/guide" },
    { name: "Entrance Fees" },
  ]),
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Entrance Fees" },
];

const EntranceFeesPage = () => {
  const pricingFAQs = generalChichenItzaFAQs.filter(f => f.category === "pricing");

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative bg-gradient-to-br from-accent/10 via-background to-success/10 py-12 lg:py-16 overflow-hidden">
        <img src={guideImages["entrance-fees"]} alt="Tourists at Chichen Itza entrance gate" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="eager" />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Chichen Itza Entrance Fees 2026
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Complete breakdown of current entrance fees, who pays what, free admission days, and how our tours save you money.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/tours">Book a Tour (Fees Included) <ChevronRight className="h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <TipBox type="success" title="Save with a Tour" content="All our tour packages include the entrance fee. You'll skip the ticket line and your guide handles everything. It's the easiest way to visit." />

            <div className="mt-8">
              <h2 className="font-heading font-bold text-2xl mb-6">Current Fee Structure (2026)</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-heading font-semibold">Visitor Type</th>
                      <th className="text-left py-3 px-4 font-heading font-semibold">INAH Fee</th>
                      <th className="text-left py-3 px-4 font-heading font-semibold">State Fee</th>
                      <th className="text-left py-3 px-4 font-heading font-semibold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">International Adults</td>
                      <td className="py-3 px-4 text-muted-foreground">$90 MXN</td>
                      <td className="py-3 px-4 text-muted-foreground">$524 MXN</td>
                      <td className="py-3 px-4 font-bold text-primary">$614 MXN (~$35 USD)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Mexican Nationals</td>
                      <td className="py-3 px-4 text-muted-foreground">$90 MXN</td>
                      <td className="py-3 px-4 text-muted-foreground">$130 MXN</td>
                      <td className="py-3 px-4 font-bold text-success">$220 MXN (~$13 USD)</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Children under 13</td>
                      <td className="py-3 px-4 text-muted-foreground" colSpan={3}>Free</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-3 px-4 font-medium">Mexican Seniors (60+)</td>
                      <td className="py-3 px-4 text-muted-foreground" colSpan={3}>Free (with INAPAM card)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl mb-6">Additional Costs to Consider</h2>
            <InfoBox title="Potential Extra Expenses" icon="💰" items={[
              "Video camera permit: ~$45 MXN (smartphone recording is free)",
              "Parking: ~$80 MXN ($4.50 USD)",
              "Cenote Ik Kil entry: ~$150 MXN ($8.50 USD) if visiting independently",
              "Life vest rental at cenotes: ~$50 MXN ($3 USD)",
              "Locker rental at cenotes: ~$40 MXN ($2 USD)",
              "Professional photography permit: varies (inquire at entrance)",
            ]} variant="default" />

            <div className="mt-6">
              <TipBox type="tip" title="Money-Saving Tip" content="Sundays are free for Mexican nationals and permanent residents. Visit on a Sunday to save the entrance fee. International visitors pay the same price regardless of the day." />
            </div>

            <div className="mt-6">
              <InfoBox title="What's Included in the Entrance Fee" icon="✓" items={[
                "Access to the full archaeological zone",
                "Use of restrooms near the entrance",
                "Access to on-site vendor areas",
                "Basic site map (available at the entrance)",
              ]} variant="success" />
            </div>

            <div className="mt-6">
              <TipBox type="warning" title="Payment Methods" content="The entrance ticket office primarily accepts cash (Mexican pesos). Some card terminals are available but can be unreliable. ATMs are located near the entrance but charge high fees. Bring pesos in cash to avoid delays." />
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={pricingFAQs} title="Entrance Fee FAQs" subtitle="Common questions about Chichen Itza admission" />
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Continue Planning</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Budget Tours", href: "/tour-types/budget" },
              { label: "How to Get There", href: "/guide/how-to-get-there" },
              { label: "What to Bring", href: "/guide/what-to-bring" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "Family Friendly", href: "/tour-types/family-friendly" },
              { label: "All Tours", href: "/tours" },
              { label: "Dress Code", href: "/guide/dress-code-and-rules" },
              { label: "Photography Tips", href: "/guide/photography-tips" },
              { label: "FAQ", href: "/practical/faq" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EntranceFeesPage;
