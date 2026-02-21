import { Link } from "react-router-dom";
import { ChevronRight, DollarSign, Camera, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import ComparisonTable from "@/components/guide/ComparisonTable";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideImages } from "@/lib/tourImages";

const faqData = [
  {
    question: "How much is the entrance fee to Chichen Itza in 2026?",
    answer:
      "The total entrance fee is approximately 533 Mexican pesos (about $27-30 USD) per person. This includes both the federal INAH fee (185 pesos) and the Yucatan state fee (348 pesos). Children under 13 enter free. Guided tours typically include entrance fees in the package price.",
  },
  {
    question: "Do guided tours include the entrance fee?",
    answer:
      "Yes, virtually all guided tours include the Chichen Itza entrance fee in the total tour price. Tours priced at $89-189 include transportation, guide, entrance fees, lunch, and often cenote visits — excellent value compared to paying separately.",
  },
  {
    question: "Can I pay with credit card at Chichen Itza?",
    answer:
      "Yes, ticket booths accept major credit cards (Visa, Mastercard) as well as cash in Mexican pesos or US dollars. However, cash in pesos is recommended as it's faster, avoids processing issues, and ensures the best exchange rate.",
  },
  {
    question: "Are there discounts for seniors or students?",
    answer:
      "Mexican citizens and residents with valid ID receive significant discounts. Foreign seniors and students do NOT receive discounts — the standard fee applies to all international visitors regardless of age (except children under 13 who enter free).",
  },
  {
    question: "Is there an extra fee for cameras?",
    answer:
      "No extra fee for smartphones or compact cameras. However, professional cameras with detachable lenses (DSLRs, mirrorless) require a special permit costing $45 USD paid separately at entrance.",
  },
  {
    question: "What if I want to visit twice in one day?",
    answer:
      "Your entrance ticket is valid for one entry only. If you exit the site, you cannot re-enter without purchasing a new ticket. Plan to spend your entire visit (2-4 hours) in one session. There are no multi-day passes.",
  },
];

const meta = getPageMeta({
  title: "Chichen Itza Entrance Fees 2026 – Complete Price Guide",
  description:
    "Complete guide to Chichen Itza entrance fees, tickets, payment methods, discounts. Updated 2026 pricing for tours vs independent visits.",
  canonical: "/guide/entrance-fees",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "Entrance Fees" },
    ]),
    createFAQSchema(faqData),
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Entrance Fees" },
];

const additionalFees = [
  { item: "Parking", cost: "80-100 MXN (~$5)", note: "If driving yourself", icon: "🚗" },
  { item: "Locker Rental", cost: "30-50 MXN (~$2-3)", note: "For storing bags/valuables", icon: "🔒" },
  { item: "Bathroom Fee", cost: "5-10 MXN", note: "Some facilities charge small fee", icon: "🚻" },
  { item: "Guidebook", cost: "100-200 MXN (~$5-10)", note: "Sold at entrance, various languages", icon: "📖" },
  { item: "Audio Guide", cost: "100 MXN (~$5)", note: "Optional rental", icon: "🎧" },
  { item: "Bottled Water", cost: "30-40 MXN (~$2)", note: "Vendors inside site", icon: "💧" },
];

const savingTips = [
  { tip: "Book Tours in Advance Online", savings: "Save 10-20%", description: "Last-minute bookings and hotel concierge tours often charge premiums. Book directly online 1-2 weeks ahead for best rates.", icon: "💻" },
  { tip: "Visit During Low Season", savings: "Save 25-35%", description: "May-October tours are 25-35% cheaper than peak season (Dec-Apr). Entrance fees are the same, but tour packages drop significantly.", icon: "📅" },
  { tip: "Bring Cash in Pesos", savings: "Better Exchange Rate", description: "Paying in USD at the entrance gives poor exchange rates. Exchange currency beforehand or withdraw pesos from ATMs.", icon: "💵" },
  { tip: "Small Group vs Private", savings: "Save $80-150", description: "Small group tours ($109) give nearly the same experience as private tours ($189+) for solo/couple travelers.", icon: "👥" },
  { tip: "Pack Your Own Snacks & Water", savings: "Save $10-15", description: "Vendors inside charge tourist prices. Bring bottled water and energy bars from convenience stores.", icon: "🎒" },
  { tip: "Skip Professional Camera Permit", savings: "Save $45", description: "Use smartphones or compact cameras. Modern phone cameras take excellent photos without the $45 DSLR permit fee.", icon: "📱" },
];

const EntranceFeesPage = () => (
  <>
    <SEOHead meta={meta} />

    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
      <img
        src={guideImages["entrance-fees"]}
        alt="Chichen Itza entrance and ticket area for visitors"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="eager"
      />
      <div className="container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza Entrance Fees 2026: Complete Pricing Guide
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Everything you need to know about Chichen Itza entrance costs, ticket types, payment methods, discounts, and how guided tours compare to visiting independently.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Updated: February 2026 • 8 min read
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">
              View Tour Packages (Fees Included) <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Two-column layout */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main Content */}
          <div className="space-y-14">
            {/* Quick Answer */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8">
              <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                Quick Answer: How Much Does It Cost?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 p-4 bg-card rounded-lg border border-border">
                  <div>
                    <p className="font-semibold">Independent Visit:</p>
                    <p className="text-sm text-muted-foreground">533 Mexican pesos (entrance only — no guide, transport, or lunch)</p>
                  </div>
                  <span className="font-heading font-bold text-xl text-primary flex-shrink-0">~$27-30 USD</span>
                </div>
                <div className="flex items-start justify-between gap-4 p-4 bg-success/5 rounded-lg border border-success/20">
                  <div>
                    <p className="font-semibold">Guided Tour Package:</p>
                    <p className="text-sm text-muted-foreground">Includes entrance, transport, expert guide, lunch, often cenotes</p>
                  </div>
                  <span className="font-heading font-bold text-xl text-success flex-shrink-0">$89-189</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Bottom line:</strong> Guided tours offer better value when you factor in transportation, guide expertise, and lunch. See detailed breakdown below.
              </p>
            </div>

            {/* Current Entrance Fees */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <DollarSign className="h-6 w-6 text-primary" />
                Current Entrance Fees Breakdown
              </h2>
              <p className="text-muted-foreground mb-6">
                Chichen Itza entrance fees have two components: a federal fee (INAH) and a Yucatan state fee. Both must be paid to enter.
              </p>

              <div className="bg-card rounded-xl border border-border overflow-hidden mb-6">
                <div className="p-4 bg-muted/50 border-b border-border">
                  <h3 className="font-heading font-semibold text-base">2026 Official Pricing</h3>
                </div>
                <div className="divide-y divide-border">
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold">INAH Federal Fee</p>
                      <p className="text-xs text-muted-foreground">National Institute of Anthropology</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">185 MXN</p>
                      <p className="text-xs text-muted-foreground">~$10 USD</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <p className="font-semibold">Yucatan State Fee</p>
                      <p className="text-xs text-muted-foreground">State government entrance charge</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">348 MXN</p>
                      <p className="text-xs text-muted-foreground">~$18 USD</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-primary/5">
                    <div>
                      <p className="font-bold text-primary">TOTAL ENTRANCE FEE</p>
                      <p className="text-xs text-muted-foreground">Per person (adults & children 13+)</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary text-lg">533 MXN</p>
                      <p className="text-xs text-muted-foreground">~$27-30 USD</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 p-4 border-t border-border">
                  <div>
                    <p className="text-sm font-semibold text-success mb-1">✓ Free Entry:</p>
                    <ul className="text-sm text-muted-foreground space-y-0.5">
                      <li>• Children under 13 years old</li>
                      <li>• Sunday entry for Mexican nationals</li>
                      <li>• Teachers/students with Mexican credentials</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold mb-1">📝 Note:</p>
                    <ul className="text-sm text-muted-foreground space-y-0.5">
                      <li>• Fees updated annually (usually January)</li>
                      <li>• USD equivalent fluctuates with exchange rate</li>
                      <li>• No foreign senior/student discounts</li>
                    </ul>
                  </div>
                </div>
              </div>

              <TipBox type="warning" title="Payment Tip" content="Bring Mexican pesos cash for the fastest entry. Credit cards are accepted but processing can be slow during peak hours. USD is accepted at unfavorable exchange rates." />
            </div>

            {/* Additional Fees */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Additional Fees & Costs
              </h2>

              <div className="bg-accent/5 border border-accent/20 rounded-xl p-5 mb-6">
                <div className="flex items-start gap-3">
                  <Camera className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-semibold text-base mb-1">
                      Professional Camera Permit: $45 USD
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Required for DSLR cameras, mirrorless cameras, or any camera with detachable lenses. Applies to hobbyists and professionals alike. Paid separately at entrance.
                    </p>
                    <p className="text-sm text-success">
                      ✓ Smartphones and compact point-and-shoot cameras don't require permits
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                {additionalFees.map((fee, index) => (
                  <div key={index} className="bg-card rounded-lg border border-border p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">{fee.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <p className="font-semibold text-sm">{fee.item}</p>
                          <span className="text-xs font-medium bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{fee.cost}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{fee.note}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tour vs DIY Comparison */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                Guided Tour vs DIY: Total Cost Comparison
              </h2>
              <p className="text-muted-foreground mb-6">
                Many visitors assume visiting independently is cheaper. However, when you factor in all costs, guided tours often provide better value:
              </p>

              <ComparisonTable
                title="Cost Comparison (2 People from Cancun)"
                headers={["DIY (Independent)", "Guided Tour"]}
                rows={[
                  { label: "Entrance Fees", values: ["$54-60 (2×$27-30)", "✓ Included"] },
                  { label: "Transportation", values: ["$60-80 (rental car)", "✓ Included"] },
                  { label: "Gas + Tolls", values: ["$40-45", "✓ Included"] },
                  { label: "Parking", values: ["$5", "✓ Included"] },
                  { label: "Lunch", values: ["$20-30", "✓ Included"] },
                  { label: "Expert Guide", values: ["$60-90 (if hired)", "✓ Included"] },
                  { label: "TOTAL (2 people)", values: ["$239-310", "$178-378"] },
                ]}
                highlightColumn={2}
              />

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-success/5 border border-success/20 rounded-lg p-4">
                  <p className="text-sm font-semibold text-success mb-2">✓ Why Tours Win:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• No driving stress or navigation</li>
                    <li>• Expert historical commentary included</li>
                    <li>• Skip ticket lines</li>
                    <li>• Hotel pickup/dropoff</li>
                    <li>• Often include cenote visits</li>
                    <li>• Guaranteed good timing (arrive early)</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">→ When to Go DIY:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• You want complete schedule flexibility</li>
                    <li>• Staying in Valladolid or Merida (very close)</li>
                    <li>• Visiting multiple sites over several days</li>
                    <li>• Already have rental car for other reasons</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Money-Saving Tips */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Money-Saving Tips
              </h2>

              <div className="space-y-3">
                {savingTips.map((item, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xl">{item.icon}</span>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-heading font-semibold text-base">{item.tip}</h3>
                        <span className="text-xs font-semibold bg-success/10 text-success px-2 py-0.5 rounded-full">{item.savings}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <FAQSection title="Entrance Fees FAQ" faqs={faqData} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <QuickBookingForm />
            <TrustBadges />

            <div className="bg-success/5 border border-success/20 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-base mb-2">💡 Best Value:</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Our tours include entrance fees, transport, expert guides, and lunch — better value than paying separately.
              </p>
              <Button variant="cta" size="sm" className="w-full" asChild>
                <Link to="/tours">Compare Tour Packages</Link>
              </Button>
            </div>

            <PopularToursWidget />

            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-heading font-semibold text-base mb-3">More Planning Guides</h3>
              <ul className="space-y-2">
                <li><Link to="/guide/how-to-get-there" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ How to Get There</Link></li>
                <li><Link to="/guide/what-to-bring" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ What to Bring</Link></li>
                <li><Link to="/guide/best-time-to-visit" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ Best Time to Visit</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CTASection />

    {/* Related Links */}
    <section className="py-12 bg-muted/30 border-t border-border">
      <div className="container">
        <h2 className="font-heading font-semibold text-lg mb-6">Related Guides</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "How to Get There", href: "/guide/how-to-get-there" },
            { label: "What to Bring", href: "/guide/what-to-bring" },
            { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
            { label: "Photography Tips", href: "/guide/photography-tips" },
            { label: "Dress Code", href: "/guide/dress-code-and-rules" },
            { label: "History & Facts", href: "/guide/history-and-facts" },
            { label: "All Tours", href: "/tours" },
            { label: "FAQ", href: "/practical/faq" },
          ].map((link) => (
            <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {link.label} →
            </Link>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default EntranceFeesPage;
