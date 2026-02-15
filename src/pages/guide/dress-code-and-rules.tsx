import { Link } from "react-router-dom";
import { ChevronRight, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import { guideImages } from "@/lib/tourImages";

const meta = getPageMeta({
  title: "Chichen Itza Dress Code & Rules – Visitor Guide 2026",
  description: "What to wear and site rules for Chichen Itza. Dress code, prohibited items, behavior rules, and tips for a smooth visit.",
  canonical: "/guide/dress-code-and-rules",
  jsonLd: createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Guide", url: "/guide" },
    { name: "Dress Code & Rules" },
  ]),
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Dress Code & Rules" },
];

const DressCodePage = () => (
  <>
    <SEOHead meta={meta} />

    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16 overflow-hidden">
      <img src={guideImages["dress-code-and-rules"]} alt="Travel outfit flat lay for visiting Chichen Itza" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="eager" />
      <div className="container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza Dress Code & Visitor Rules
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Know before you go — what to wear, what's allowed, and how to respect this ancient Wonder of the World.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">Book a Tour <ChevronRight className="h-5 w-5" /></Link>
          </Button>
        </div>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <TipBox type="info" title="No Strict Dress Code" content="Chichen Itza doesn't enforce a formal dress code. However, comfort and practicality are essential — you'll be walking 2-3 miles outdoors in tropical heat." />

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 border-2 border-success">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-success" />
                <h3 className="font-heading font-semibold text-lg">Recommended</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Light, breathable clothing",
                  "Comfortable closed-toe shoes",
                  "Wide-brimmed hat",
                  "Sunglasses",
                  "Light-colored fabrics",
                  "Moisture-wicking materials",
                  "Swimsuit under clothes (for cenotes)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border-2 border-destructive">
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="h-6 w-6 text-destructive" />
                <h3 className="font-heading font-semibold text-lg">Avoid</h3>
              </div>
              <ul className="space-y-2">
                {[
                  "Flip flops or sandals without straps",
                  "High heels or dress shoes",
                  "Heavy jeans in summer",
                  "Dark-colored clothing",
                  "Overly revealing outfits",
                  "New shoes (risk of blisters)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl mb-6">Site Rules & Regulations</h2>

          <InfoBox title="Prohibited at Chichen Itza" icon="🚫" items={[
            "Climbing any structure (banned since 2006)",
            "Drones (illegal at all Mexican archaeological sites)",
            "Tripods, monopods, and selfie sticks",
            "Professional video equipment without a permit",
            "Pets (except service animals)",
            "Large bags, backpacks, or luggage",
            "Food and beverages inside the ruins",
            "Touching or leaning on the structures",
            "Smoking anywhere on the archaeological grounds",
            "Playing music or using speakers",
          ]} variant="default" />

          <div className="mt-6">
            <TipBox type="warning" title="Security Check" content="All bags are inspected at the entrance. Prohibited items may be confiscated. Drones are illegal and carry fines up to $5,000 USD. Leave prohibited items at your hotel or tour bus." />
          </div>

          <div className="mt-6">
            <InfoBox title="Allowed & Encouraged" icon="✓" items={[
              "Handheld cameras and smartphones",
              "Small backpacks and day bags",
              "Sealed water bottles",
              "Sun protection (hat, sunscreen, sunglasses)",
              "Binoculars for detailed viewing",
              "Asking your guide questions!",
            ]} variant="success" />
          </div>
        </div>
      </div>
    </section>

    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl mb-6">Respect & Etiquette</h2>
          <div className="space-y-4">
            <TipBox type="info" title="Respect the Site" content="Chichen Itza is a sacred place for the Maya people and a protected UNESCO World Heritage Site. Avoid sitting on structures, carving initials, or removing any stones or artifacts." />
            <TipBox type="tip" title="Vendor Etiquette" content="Local vendors sell handmade crafts throughout the site. A polite 'no, gracias' is sufficient if you're not interested. Bargaining is expected — start at about 50% of the asking price." />
          </div>
        </div>
      </div>
    </section>

    <CTASection />

    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <h2 className="font-heading font-semibold text-lg mb-6">Related Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "What to Bring", href: "/guide/what-to-bring" },
            { label: "Photography Tips", href: "/guide/photography-tips" },
            { label: "Entrance Fees", href: "/guide/entrance-fees" },
            { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
            { label: "History & Facts", href: "/guide/history-and-facts" },
            { label: "How to Get There", href: "/guide/how-to-get-there" },
            { label: "All Tours", href: "/tours" },
            { label: "FAQ", href: "/practical/faq" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default DressCodePage;
