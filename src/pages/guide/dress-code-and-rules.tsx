import { Link } from "react-router-dom";
import { ChevronRight, ShieldAlert, Camera, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema, createFAQSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import FAQSection from "@/components/common/FAQ";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import TrustBadges from "@/components/features/booking/TrustBadges";
import PopularToursWidget from "@/components/features/tours/PopularToursWidget";
import { guideImages } from "@/lib/tourImages";

const faqData = [
  {
    question: "Is there a dress code at Chichen Itza?",
    answer:
      "There is no strict formal dress code, but visitors should dress modestly and appropriately for a UNESCO archaeological site. Swimwear, revealing clothing, and offensive graphics are not allowed. Wear comfortable, weather-appropriate clothing. Tank tops are acceptable but avoid very revealing styles.",
  },
  {
    question: "Can you wear shorts to Chichen Itza?",
    answer:
      "Yes, shorts are perfectly acceptable and recommended for comfort in the heat. Knee-length or longer shorts are ideal. Very short shorts may draw disapproval from guards, though enforcement is inconsistent.",
  },
  {
    question: "Can you climb the pyramids at Chichen Itza?",
    answer:
      "No, climbing El Castillo and other structures has been permanently prohibited since 2006. This protects the ancient stones from erosion and ensures safety after a tourist death in 2006. Violating this rule can result in immediate removal and potential fines.",
  },
  {
    question: "Are backpacks allowed at Chichen Itza?",
    answer:
      "Yes, small to medium backpacks are allowed and recommended for carrying water, sunscreen, and essentials. Large hiking backpacks (50L+) may be restricted. All bags are subject to security inspection at entrance.",
  },
  {
    question: "Can you touch the ruins at Chichen Itza?",
    answer:
      "No, touching the ruins is strictly prohibited. The oils from human hands damage the ancient limestone and deteriorate carved details. Guards monitor the site and will warn or remove visitors who touch structures.",
  },
  {
    question: "What items are prohibited at Chichen Itza?",
    answer:
      "Prohibited items include: tripods, monopods, selfie sticks, drones, large backpacks, weapons, glass bottles, balloons, spray paint/markers, pets (except service animals), and professional video equipment without permits. Security confiscates prohibited items with no retrieval.",
  },
];

const meta = getPageMeta({
  title: "Chichen Itza Dress Code & Rules – Visitor Guide 2026",
  description:
    "Complete guide to Chichen Itza dress code, rules, prohibited items, visitor etiquette. What to wear, what not to bring, cultural respect guidelines.",
  canonical: "/guide/dress-code-and-rules",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "Dress Code & Rules" },
    ]),
    createFAQSchema(faqData),
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "Dress Code & Rules" },
];

const prohibitedGroups = [
  { category: "Photography", items: ["Tripods", "Monopods", "Selfie sticks", "Drones", "External flashes"], icon: "📷" },
  { category: "Safety", items: ["Weapons", "Knives", "Sharp objects", "Fireworks", "Flammable materials"], icon: "⚠️" },
  { category: "Preservation", items: ["Spray paint", "Markers", "Chalk", "Stickers", "Chisels/tools"], icon: "🎨" },
  { category: "Site Rules", items: ["Glass bottles", "Alcohol", "Illegal drugs", "Large coolers", "Balloons"], icon: "🚫" },
  { category: "Animals", items: ["Pets (except service dogs)", "Emotional support animals", "Any other animals"], icon: "🐕" },
  { category: "Other", items: ["Kites", "Flying toys", "Skateboards", "Scooters", "Musical instruments"], icon: "🎈" },
];

const DressCodePage = () => (
  <>
    <SEOHead meta={meta} />

    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16 overflow-hidden">
      <img
        src={guideImages["dress-code"]}
        alt="Visitors at Chichen Itza dressed appropriately for the archaeological site"
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="eager"
      />
      <div className="container relative z-10">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza Dress Code & Rules: Complete Visitor Guide
          </h1>
          <p className="text-lg text-muted-foreground mb-2">
            Everything you need to know about what to wear, what's prohibited, site regulations, and cultural etiquette at this UNESCO World Heritage Site.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Updated: February 2026 • 8 min read
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">
              Book a Guided Tour <ChevronRight className="h-5 w-5" />
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
            {/* Quick Summary */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 lg:p-8">
              <h2 className="font-heading font-bold text-xl mb-4 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                Quick Summary: The Essential Rules
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-success mb-2">✓ DO:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Wear modest, comfortable clothing</li>
                    <li>• Bring sun protection (hat, sunscreen)</li>
                    <li>• Stay on designated paths</li>
                    <li>• Respect cultural significance</li>
                    <li>• Follow guide instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-destructive mb-2">✗ DON'T:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Climb or touch the ruins</li>
                    <li>• Bring tripods or selfie sticks</li>
                    <li>• Wear swimwear or offensive clothing</li>
                    <li>• Make excessive noise</li>
                    <li>• Litter or damage property</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dress Code */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4 flex items-center gap-2">
                <ShieldAlert className="h-6 w-6 text-primary" />
                Dress Code: What to Wear
              </h2>
              <p className="text-muted-foreground mb-6">
                While Chichen Itza doesn't enforce a strict dress code like religious sites, visitors should dress respectfully for this UNESCO World Heritage Site and sacred Mayan location. Practical clothing for heat and sun protection is essential.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Appropriate */}
                <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-success" />
                    <h3 className="font-heading font-semibold text-base">✓ Appropriate Clothing</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">For Men:</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        <li>• Lightweight t-shirt or polo</li>
                        <li>• Casual shorts (knee-length ideal)</li>
                        <li>• Athletic/cargo shorts acceptable</li>
                        <li>• Comfortable walking shoes</li>
                        <li>• Sun hat or cap</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-1">For Women:</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        <li>• Lightweight blouse or t-shirt</li>
                        <li>• Tank tops okay (not too revealing)</li>
                        <li>• Shorts, capris, or light pants</li>
                        <li>• Comfortable sundress (practical length)</li>
                        <li>• Closed-toe walking shoes</li>
                        <li>• Sun hat or wide-brim hat</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Inappropriate */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="h-5 w-5 text-destructive" />
                    <h3 className="font-heading font-semibold text-base">✗ Inappropriate Clothing</h3>
                  </div>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">NOT Allowed:</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        <li>• Swimwear (bikinis, swim trunks)</li>
                        <li>• See-through or mesh clothing</li>
                        <li>• Clothing with offensive graphics/text</li>
                        <li>• Extremely revealing tops or bottoms</li>
                        <li>• High heels or flip-flops (impractical)</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Discouraged:</p>
                      <ul className="text-muted-foreground space-y-0.5">
                        <li>• Very short shorts (mid-thigh or higher)</li>
                        <li>• Low-cut or midriff-baring tops</li>
                        <li>• Spaghetti strap tank tops</li>
                        <li>• Clothing with political messages</li>
                        <li>• Costumes or ceremonial dress</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <TipBox type="tip" title="Pro Tip" content="Wear light-colored, moisture-wicking fabric. You'll walk 2-3 miles in intense heat. Dark colors absorb heat and cotton holds sweat. See our complete What to Bring guide for detailed clothing recommendations." />
            </div>

            {/* Major Rules */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-accent" />
                Major Rules & Regulations
              </h2>

              {/* No Climbing */}
              <div className="bg-destructive/5 border-2 border-destructive/30 rounded-xl p-6 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-heading font-bold text-lg mb-2">
                      #1 RULE: NO CLIMBING OR TOUCHING STRUCTURES
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Permanently prohibited since 2006.</strong> You cannot climb El Castillo, Temple of Warriors, or any other structures. You cannot touch, lean against, or sit on ancient stones.
                    </p>
                    <div className="bg-destructive/10 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium">
                        ⚠️ Consequences: Immediate removal from site, potential fines up to $5,000 USD, possible arrest for severe violations. Guards actively monitor and strictly enforce this rule.
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Why:</strong> Prevents erosion damage, preserves ancient carvings, ensures visitor safety (a tourist died falling from El Castillo in 2006).
                    </p>
                  </div>
                </div>
              </div>

              {/* Photography Rules */}
              <div className="bg-card rounded-xl border border-border p-6 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <Camera className="h-5 w-5 text-primary" />
                  <h3 className="font-heading font-semibold text-lg">Photography & Equipment Rules</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-success mb-2">✓ ALLOWED:</p>
                    <ul className="text-muted-foreground space-y-0.5">
                      <li>• Smartphones (unlimited photos)</li>
                      <li>• Compact point-and-shoot cameras</li>
                      <li>• GoPros and action cameras</li>
                      <li>• Photography for personal use</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-accent mb-2">⚠️ REQUIRES PERMIT ($45 USD):</p>
                    <ul className="text-muted-foreground space-y-0.5">
                      <li>• DSLR cameras (detachable lenses)</li>
                      <li>• Mirrorless cameras</li>
                      <li>• Professional camera equipment</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-destructive mb-2">✗ STRICTLY PROHIBITED:</p>
                    <ul className="text-muted-foreground space-y-0.5">
                      <li>• Tripods, monopods (confiscated)</li>
                      <li>• Selfie sticks (confiscated)</li>
                      <li>• Drones (confiscated + legal)</li>
                      <li>• External flashes/strobes</li>
                      <li>• Commercial video without permits</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Behavioral Rules */}
              <div className="bg-card rounded-xl border border-border p-6 mb-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Behavioral Guidelines</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium mb-2">Noise & Conduct:</p>
                    <ul className="text-muted-foreground space-y-0.5">
                      <li>• Keep voices at moderate level</li>
                      <li>• No shouting or loud music</li>
                      <li>• Don't disrupt other tour groups</li>
                      <li>• Respect moments of silence</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">Group Etiquette:</p>
                    <ul className="text-muted-foreground space-y-0.5">
                      <li>• Stay with your tour group</li>
                      <li>• Don't block pathways for photos</li>
                      <li>• Be mindful of others' photos</li>
                      <li>• Follow guide instructions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Path Rules */}
              <div className="bg-card rounded-xl border border-border p-6">
                <h3 className="font-heading font-semibold text-lg mb-4">Path & Access Restrictions</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    "Stay on designated pathways — roped-off areas are strictly prohibited",
                    "Don't enter restricted archaeological zones (clearly marked)",
                    "Some interior chambers are closed to public — respect barriers",
                    "Don't walk on grass or vegetation unless path crosses it",
                    "Wheelchairs have access to main plaza but not all structures",
                  ].map((rule, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span className="text-muted-foreground">{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Prohibited Items */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                Complete List of Prohibited Items
              </h2>

              <div className="mb-6">
                <TipBox type="warning" title="CRITICAL: Items Will Be Confiscated" content="Security thoroughly inspects all bags at entrance. Prohibited items are confiscated with NO retrieval or storage options. You will either forfeit items permanently or return them to your vehicle/hotel (delaying your group)." />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {prohibitedGroups.map((group, index) => (
                  <div key={index} className="bg-card rounded-xl border border-border p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{group.icon}</span>
                      <h3 className="font-heading font-semibold text-sm">{group.category}</h3>
                    </div>
                    <ul className="space-y-1">
                      {group.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <XCircle className="h-3.5 w-3.5 text-destructive flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Cultural Respect */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
                Cultural Respect & Etiquette
              </h2>
              <p className="text-muted-foreground mb-6">
                Chichen Itza is a sacred site for Maya culture and a UNESCO World Heritage Site. Beyond formal rules, respectful behavior honors both the ancient civilization and modern Maya descendants.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-success/5 border border-success/20 rounded-xl p-5">
                  <p className="font-semibold text-success mb-3">✓ Respectful Behavior:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Treat site as you would a cathedral or museum</li>
                    <li>• Listen attentively to guide's historical context</li>
                    <li>• Acknowledge site's spiritual significance</li>
                    <li>• Be mindful of modern Maya people's connection</li>
                    <li>• Purchase authentic handicrafts from local artisans</li>
                    <li>• Learn basic Spanish phrases ("gracias," "permiso")</li>
                    <li>• Ask permission before photographing vendors</li>
                  </ul>
                </div>
                <div className="bg-destructive/5 border border-destructive/20 rounded-xl p-5">
                  <p className="font-semibold text-destructive mb-3">✗ Disrespectful Behavior:</p>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    <li>• Making fun of Maya beliefs or customs</li>
                    <li>• Posing disrespectfully with structures</li>
                    <li>• Littering or defacing property</li>
                    <li>• Treating vendors dismissively</li>
                    <li>• Performing unauthorized ceremonies/rituals</li>
                    <li>• Taking flash photos during special events</li>
                    <li>• Assuming all vendors are "scammers"</li>
                  </ul>
                </div>
              </div>

              <TipBox type="info" title="Cultural Context" content="Over 6 million Maya descendants live across Mexico and Central America today. Chichen Itza remains culturally significant to these communities. Your respect as a visitor helps preserve both the physical site and its living heritage." />
            </div>

            {/* Accessibility */}
            <div>
              <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                Accessibility & Special Considerations
              </h2>

              <div className="space-y-4">
                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-semibold text-base mb-2">♿ Wheelchair Accessibility</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Main plaza and pathways are paved and wheelchair-accessible</li>
                    <li>• Free wheelchair rentals available at entrance (limited quantity)</li>
                    <li>• Many structures cannot be climbed by anyone (stairs prohibited)</li>
                    <li>• Accessible bathrooms available near entrance</li>
                    <li>• Some shaded rest areas have accessible seating</li>
                  </ul>
                </div>

                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-semibold text-base mb-2">🐕‍🦺 Service Animals</h3>
                  <p className="text-sm text-muted-foreground">
                    Certified service dogs are permitted. Emotional support animals are NOT allowed (Mexican law distinguishes between service and ESA animals). Bring service animal certification and ensure your dog can handle heat.
                  </p>
                </div>

                <div className="bg-card rounded-xl border border-border p-5">
                  <h3 className="font-heading font-semibold text-base mb-2">🤰 Pregnant Visitors</h3>
                  <p className="text-sm text-muted-foreground">
                    Chichen Itza is safe for pregnant women. Take frequent rest breaks in shade, stay hydrated (3+ liters water), wear comfortable shoes, and avoid midday heat. Inform your guide so they can adjust pace. Wheelchairs available if needed.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ */}
            <FAQSection title="Dress Code & Rules FAQ" faqs={faqData} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <QuickBookingForm />
            <TrustBadges />

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
              <h3 className="font-heading font-semibold text-base mb-3">📋 Checklist:</h3>
              <ul className="space-y-2">
                {[
                  "Modest, comfortable clothing",
                  "Closed-toe walking shoes",
                  "Sun hat & sunscreen",
                  "No tripods or selfie sticks",
                  "Cash for souvenirs",
                  "Respect cultural significance",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <PopularToursWidget />

            <div className="bg-card rounded-lg border border-border p-5">
              <h3 className="font-heading font-semibold text-base mb-3">More Planning Guides</h3>
              <ul className="space-y-2">
                <li><Link to="/guide/what-to-bring" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ What to Bring</Link></li>
                <li><Link to="/guide/entrance-fees" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ Entrance Fees</Link></li>
                <li><Link to="/guide/history-and-facts" className="text-sm text-muted-foreground hover:text-primary transition-colors">→ History & Facts</Link></li>
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
            { label: "What to Bring", href: "/guide/what-to-bring" },
            { label: "Entrance Fees", href: "/guide/entrance-fees" },
            { label: "Photography Tips", href: "/guide/photography-tips" },
            { label: "How to Get There", href: "/guide/how-to-get-there" },
            { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
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

export default DressCodePage;
