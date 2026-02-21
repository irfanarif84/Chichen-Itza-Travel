import { Link } from "react-router-dom";
import {
  Sun,
  Droplet,
  Camera,
  ShieldCheck,
  ChevronRight,
  XCircle,
  CheckCircle,
  Shirt,
  CreditCard,
  Backpack,
  Footprints,
  Baby,
  Accessibility,
  Smartphone,
} from "lucide-react";
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
import { guideSchemas } from "@/lib/schema";
import { guideImages } from "@/lib/tourImages";

const faqData = [
  {
    question: "What should I wear to Chichen Itza?",
    answer:
      "Wear lightweight, breathable clothing like cotton or moisture-wicking fabrics. A t-shirt with shorts or light pants works best. Comfortable closed-toe walking shoes are essential — you'll walk 2-3 miles on uneven stone. A wide-brim hat and sunglasses are mandatory for sun protection.",
  },
  {
    question: "Can I bring a backpack to Chichen Itza?",
    answer:
      "Yes, small to medium backpacks are allowed. Security may inspect bags at the entrance. A daypack (20-30L) is ideal — you'll carry water, sunscreen, camera, and personal items. Avoid large hiking backpacks (50L+).",
  },
  {
    question: "How much water should I bring to Chichen Itza?",
    answer:
      "Bring at least 2 liters (68 oz) per person, more in hot months (April-September). Vendors sell water inside ($1-2/bottle), but bringing your own saves money. Insulated bottles keep water cold. Dehydration is the #1 health issue at the site.",
  },
  {
    question: "Are tripods allowed at Chichen Itza?",
    answer:
      "No. Tripods, monopods, and selfie sticks are strictly prohibited. Professional photography equipment (large cameras with detachable lenses) requires a special permit and $45 USD fee. Regular tourists can use handheld cameras and smartphones freely.",
  },
  {
    question: "Can I bring food into Chichen Itza?",
    answer:
      "Yes, you can bring snacks and light food. Energy bars, fruit, and nuts are popular choices. Most tours include lunch, and there are restaurants inside the zone. Pack items in resealable bags to avoid mess.",
  },
  {
    question: "Do I need to bring cash to Chichen Itza?",
    answer:
      "Yes, bring Mexican pesos in cash for tips ($5-10 USD/person recommended), souvenirs at the artisan market, bathroom fees (5-10 pesos), and snacks. Bring 300-500 pesos ($15-25 USD) per person minimum.",
  },
  {
    question: "What kind of shoes should I wear?",
    answer:
      "Comfortable, closed-toe walking shoes with good tread. Athletic shoes, trail runners, or lightweight hiking shoes are ideal. You'll walk 2-3 miles on uneven stone. Avoid sandals, flip-flops, brand new shoes, and heels.",
  },
  {
    question: "Should I bring sunscreen to Chichen Itza?",
    answer:
      "Absolutely essential! Bring reef-safe, biodegradable sunscreen (SPF 50+) and apply before you arrive. Reapply every 1-2 hours. The Yucatan sun is intense year-round with minimal shade. If visiting cenotes afterward, only biodegradable sunscreen is allowed.",
  },
  {
    question: "Can I bring a drone to Chichen Itza?",
    answer:
      "No. Drones are strictly prohibited at all Mexican archaeological sites and will be confiscated at security. Professional aerial photography requires special permits from INAH which are rarely granted.",
  },
  {
    question: "What should I bring during rainy season?",
    answer:
      "Bring a compact rain poncho ($2-5 locally), quick-dry clothing, waterproof phone case or ziplock bags, extra socks, and a microfiber towel. Most rain falls 2-4 PM daily, so morning tours usually avoid it.",
  },
];

const meta = getPageMeta({
  title: "What to Bring to Chichen Itza – Packing List 2026",
  description:
    "Essential packing list for Chichen Itza. What to bring, what NOT to bring, clothing tips, photography gear, and seasonal recommendations.",
  canonical: "/guide/what-to-bring",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "What to Bring" },
    ]),
    guideSchemas["what-to-bring"],
    createFAQSchema(faqData),
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "What to Bring" },
];

interface PackingItem {
  name: string;
  detail: string;
  required: boolean;
}

interface PackingCategory {
  category: string;
  icon: React.ElementType;
  priority: "Critical" | "Important" | "Helpful";
  items: PackingItem[];
}

const essentialItems: PackingCategory[] = [
  {
    category: "Sun Protection",
    icon: Sun,
    priority: "Critical",
    items: [
      { name: "Reef-safe sunscreen SPF 50+", detail: "Apply before departure, reapply every 2 hours", required: true },
      { name: "Wide-brim hat or cap", detail: "Provides shade for face and neck — essential", required: true },
      { name: "UV-protection sunglasses", detail: "Polarized recommended for glare reduction", required: true },
      { name: "Light long-sleeve shirt", detail: "Backup sun protection layer if needed", required: false },
    ],
  },
  {
    category: "Hydration & Comfort",
    icon: Droplet,
    priority: "Critical",
    items: [
      { name: "Water bottle (2+ liters)", detail: "Insulated bottle keeps water cold longer in heat", required: true },
      { name: "Electrolyte packets/tablets", detail: "Prevent dehydration — Liquid IV, Nuun, or similar", required: false },
      { name: "Small towel or bandana", detail: "Wipe sweat, provide neck shade", required: false },
    ],
  },
  {
    category: "Clothing",
    icon: Shirt,
    priority: "Critical",
    items: [
      { name: "Lightweight, breathable shirt", detail: "Cotton or moisture-wicking fabric", required: true },
      { name: "Comfortable shorts or light pants", detail: "Loose-fitting, allows air circulation", required: true },
      { name: "Closed-toe walking shoes", detail: "Athletic shoes or trail runners — broken in!", required: true },
      { name: "Comfortable socks", detail: "Moisture-wicking to prevent blisters", required: true },
      { name: "Light jacket or cardigan", detail: "For air-conditioned bus and early morning chill", required: false },
    ],
  },
  {
    category: "Photography & Electronics",
    icon: Camera,
    priority: "Important",
    items: [
      { name: "Camera or smartphone", detail: "Fully charged before departure", required: true },
      { name: "Extra memory cards", detail: "You'll take 100-300+ photos easily", required: false },
      { name: "Portable battery pack", detail: "10,000+ mAh for phone/camera charging", required: false },
      { name: "Lens cleaning cloth", detail: "Dust and humidity affect lenses constantly", required: false },
    ],
  },
  {
    category: "Money & Documents",
    icon: CreditCard,
    priority: "Critical",
    items: [
      { name: "Cash (Mexican pesos)", detail: "300-500 pesos for tips, souvenirs, snacks", required: true },
      { name: "Small bills (20, 50, 100 pesos)", detail: "Vendors can't break large bills", required: true },
      { name: "ID or passport copy", detail: "Keep separate from original for safety", required: true },
      { name: "Tour confirmation", detail: "Print or digital on phone", required: true },
      { name: "Emergency contact info", detail: "Hotel address, tour company phone number", required: false },
    ],
  },
  {
    category: "Optional but Recommended",
    icon: Backpack,
    priority: "Helpful",
    items: [
      { name: "Insect repellent (DEET 30%+)", detail: "Especially important for rainy season visits", required: false },
      { name: "Small first-aid kit", detail: "Band-aids, pain relievers, anti-diarrheal", required: false },
      { name: "Snacks (energy bars, nuts)", detail: "Maintain energy during 3+ hour tour", required: false },
      { name: "Ziploc bags", detail: "Protect phone/wallet from sweat and rain", required: false },
      { name: "Hand sanitizer", detail: "Bathrooms may lack soap", required: false },
      { name: "Small notebook & pen", detail: "Note guide's insights and historical details", required: false },
    ],
  },
];

const prohibitedItems = [
  { item: "Tripods, monopods, selfie sticks", reason: "Interfere with visitors, damage risk to structures", icon: "📷" },
  { item: "Drones and UAVs", reason: "Strictly prohibited at all archaeological sites", icon: "🚁" },
  { item: "Professional photo/video equipment", reason: "Requires special permit ($45 USD fee)", icon: "🎥" },
  { item: "Large backpacks (50L+)", reason: "Storage issues, may not be allowed past security", icon: "🎒" },
  { item: "Weapons of any kind", reason: "Security will confiscate immediately", icon: "🔪" },
  { item: "Glass bottles", reason: "Breakage hazard on stone surfaces", icon: "🍾" },
  { item: "Spray paint, markers", reason: "Protection of ancient structures", icon: "🖊️" },
  { item: "Pets (except service animals)", reason: "Not allowed except certified service dogs", icon: "🐕" },
  { item: "Balloons, kites, flying toys", reason: "Can disturb birds and interfere with site", icon: "🎈" },
];

const priorityColors: Record<string, string> = {
  Critical: "border-destructive/40 bg-destructive/5",
  Important: "border-accent/40 bg-accent/5",
  Helpful: "border-secondary/40 bg-secondary/5",
};

const priorityBadgeColors: Record<string, string> = {
  Critical: "bg-destructive/10 text-destructive",
  Important: "bg-accent/10 text-accent",
  Helpful: "bg-secondary/10 text-secondary",
};

const WhatToBringPage = () => {
  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16 overflow-hidden">
        <img
          src={guideImages["what-to-bring"]}
          alt="Travel essentials flat lay for visiting Chichen Itza"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          loading="eager"
        />
        <div className="container relative z-10">
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              What to Bring to Chichen Itza: Complete Packing List 2026
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Pack smart for your visit to one of the New Seven Wonders. Our essential checklist covers
              sun protection, hydration, clothing, photography gear, prohibited items, and seasonal variations.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span>Updated: February 2026</span>
              <span>•</span>
              <span>10 min read</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="cta" size="lg" asChild>
                <Link to="/tours">
                  Book Your Tour <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/guide/best-time-to-visit">Best Time to Visit →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-12">
            {/* ===== Main Content ===== */}
            <div className="space-y-14">
              {/* Quick Answer */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <h2 className="font-heading font-bold text-xl mb-3 flex items-center gap-2">
                  ⚡ Quick Answer: The 5 Absolute Essentials
                </h2>
                <p className="text-muted-foreground mb-4">If you remember nothing else, bring these:</p>
                <ul className="space-y-2">
                  {[
                    "Reef-safe sunscreen (SPF 50+) and a wide-brim hat",
                    "At least 2 liters of water per person",
                    "Comfortable, broken-in closed-toe walking shoes",
                    "Cash in Mexican pesos (300-500 pesos minimum)",
                    "Camera or smartphone (fully charged)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Table of Contents */}
              <nav className="bg-muted/40 rounded-xl p-5 border border-border">
                <h2 className="font-heading font-bold text-lg mb-3">📋 Table of Contents</h2>
                <ol className="grid sm:grid-cols-2 gap-1.5 text-sm">
                  {[
                    { text: "Complete Packing Checklist", id: "checklist" },
                    { text: "What NOT to Bring", id: "prohibited" },
                    { text: "Seasonal Packing Variations", id: "seasonal" },
                    { text: "Clothing Recommendations", id: "clothing" },
                    { text: "Photography Gear Guide", id: "photography" },
                    { text: "Special Considerations", id: "special" },
                    { text: "Day-of Packing Tips", id: "day-of" },
                    { text: "Frequently Asked Questions", id: "faq" },
                  ].map((item, i) => (
                    <li key={i}>
                      <a href={`#${item.id}`} className="text-primary hover:underline">
                        {i + 1}. {item.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* Introduction */}
              <div className="prose-muted space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Packing correctly for Chichen Itza makes the difference between an incredible experience and a
                  miserable one. This ancient wonder sits in the Yucatan jungle with minimal shade, intense sun,
                  high humidity, and requires 2-3 miles of walking on uneven stone surfaces. Come unprepared and
                  you'll suffer from sunburn, dehydration, blisters, or worse.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The archaeological site has strict rules about prohibited items, and security at the entrance is
                  thorough. Bringing banned items means they'll be confiscated with no retrieval — so reading the{" "}
                  <a href="#prohibited" className="text-primary hover:underline font-medium">
                    prohibited items section
                  </a>{" "}
                  could save you expensive gear. Let's ensure you're perfectly prepared for an amazing{" "}
                  <Link to="/tours" className="text-primary hover:underline font-medium">
                    Chichen Itza adventure
                  </Link>
                  .
                </p>
              </div>

              {/* ==================== PACKING CHECKLIST ==================== */}
              <section id="checklist">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3">
                  Complete Packing Checklist by Category
                </h2>
                <p className="text-muted-foreground mb-6">
                  Items marked <span className="text-destructive font-semibold">Required</span> are absolute
                  must-haves; everything else enhances comfort and convenience.
                </p>

                <div className="space-y-6">
                  {essentialItems.map((cat) => {
                    const Icon = cat.icon;
                    return (
                      <div
                        key={cat.category}
                        className={`rounded-xl border-l-4 ${priorityColors[cat.priority]} p-5`}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-card shadow-sm">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-lg">{cat.category}</h3>
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${priorityBadgeColors[cat.priority]}`}>
                              {cat.priority} Priority
                            </span>
                          </div>
                        </div>

                        <ul className="space-y-3">
                          {cat.items.map((item) => (
                            <li key={item.name} className="flex items-start gap-3">
                              {item.required ? (
                                <div className="mt-0.5 h-5 w-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                                  <CheckCircle className="h-3.5 w-3.5 text-success" />
                                </div>
                              ) : (
                                <div className="mt-0.5 h-5 w-5 rounded-full border-2 border-muted-foreground/30 flex-shrink-0" />
                              )}
                              <div>
                                <span className="font-semibold">{item.name}</span>
                                {item.required && (
                                  <span className="ml-2 text-[10px] font-bold text-destructive uppercase tracking-wider">
                                    Required
                                  </span>
                                )}
                                <p className="text-sm text-muted-foreground">{item.detail}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <TipBox
                  type="tip"
                  title="Packing Tip: The Layering Strategy"
                  content="Pack your bag in layers: top (sunscreen, hat, sunglasses, water — easy access), middle (snacks, extra clothing, first aid), bottom (rain poncho, extra batteries — items for later)."
                />
              </section>

              {/* ==================== PROHIBITED ITEMS ==================== */}
              <section id="prohibited">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3">
                  What NOT to Bring to Chichen Itza
                </h2>

                <TipBox
                  type="warning"
                  title="⚠️ Confiscation Policy"
                  content="Security at Chichen Itza entrance is thorough. Prohibited items will be confiscated with NO retrieval and NO storage lockers. Leave banned items at your hotel."
                />

                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {prohibitedItems.map((pi) => (
                    <div
                      key={pi.item}
                      className="flex items-start gap-3 bg-destructive/5 border border-destructive/15 rounded-lg p-4"
                    >
                      <span className="text-xl flex-shrink-0">{pi.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{pi.item}</span>
                          <XCircle className="h-4 w-4 text-destructive flex-shrink-0" />
                        </div>
                        <p className="text-xs text-muted-foreground mt-0.5">Why: {pi.reason}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* ==================== SEASONAL VARIATIONS ==================== */}
              <section id="seasonal">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-3">
                  Seasonal Packing Variations
                </h2>
                <p className="text-muted-foreground mb-6">
                  Your packing list should adapt based on when you're visiting. Here's what changes:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Dry Season */}
                  <div className="bg-accent/5 border border-accent/20 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sun className="h-5 w-5 text-accent" />
                      <div>
                        <h3 className="font-heading font-bold">Dry Season (Nov-Apr)</h3>
                        <p className="text-xs text-muted-foreground">Lower humidity, intense sun</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-success mb-1">✓ Extra Items to Bring:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Lip balm with SPF (dry air cracks lips)</li>
                          <li>• Extra sunscreen (sun more intense)</li>
                          <li>• Dust bandana for face</li>
                          <li>• Moisturizer (low humidity dries skin)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-destructive mb-1">✗ Can Skip:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Rain gear (almost zero rain risk)</li>
                          <li>• Waterproof bags</li>
                          <li>• Extra socks for rain</li>
                        </ul>
                      </div>
                      <p className="text-xs bg-accent/10 rounded p-2 text-foreground">
                        💡 Dehydration happens faster with intense sun + low humidity. Bring 50% more water than you think.
                      </p>
                    </div>
                  </div>

                  {/* Rainy Season */}
                  <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Droplet className="h-5 w-5 text-secondary" />
                      <div>
                        <h3 className="font-heading font-bold">Rainy Season (May-Oct)</h3>
                        <p className="text-xs text-muted-foreground">Higher humidity, afternoon showers</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-success mb-1">✓ Extra Items to Bring:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Compact rain poncho ($2-5 locally)</li>
                          <li>• Quick-dry clothing (skip cotton)</li>
                          <li>• Waterproof phone case or ziplock bags</li>
                          <li>• Extra pair of socks</li>
                          <li>• Microfiber towel</li>
                          <li>• Insect repellent (more mosquitoes)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-destructive mb-1">✗ Can Skip:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Heavy rain jacket (too hot — poncho better)</li>
                          <li>• Umbrella (cumbersome at the site)</li>
                        </ul>
                      </div>
                      <p className="text-xs bg-secondary/10 rounded p-2 text-foreground">
                        💡 Morning tours (before 12 PM) almost always avoid rain. Showers are predictable (2-4 PM daily).
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  → Read our complete{" "}
                  <Link to="/guide/best-time-to-visit" className="text-primary hover:underline font-medium">
                    guide to the best time to visit Chichen Itza
                  </Link>
                </p>
              </section>

              {/* ==================== CLOTHING ==================== */}
              <section id="clothing">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  Clothing Recommendations: What to Wear
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card rounded-xl p-6 border-2 border-success">
                    <div className="flex items-center gap-3 mb-4">
                      <CheckCircle className="h-6 w-6 text-success" />
                      <h3 className="font-heading font-semibold text-lg">Recommended</h3>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "Light, breathable fabric (cotton or moisture-wicking)",
                        "Comfortable walking shoes with good grip",
                        "Wide-brimmed hat for face and neck shade",
                        "Light colors that reflect heat",
                        "Swimsuit under clothes (if cenote tour)",
                        "Loose-fitting shorts or lightweight pants",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                          {item}
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
                        "Flip flops or open-back sandals",
                        "Brand new shoes (blisters guaranteed)",
                        "Dark colors that absorb heat",
                        "Heavy jeans or restrictive clothing",
                        "High heels or dress shoes",
                        "Anything you wouldn't want to sweat through",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-card rounded-xl p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Footprints className="h-6 w-6 text-primary" />
                    <h3 className="font-heading font-semibold text-lg">Shoe Guide</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Your shoe choice is arguably the most important packing decision. You'll walk 2-3 miles
                    over uneven stone pathways, gravel, and occasional grass. Here's what works best:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { label: "Best Choice", shoes: "Trail runners or light hikers", why: "Grip, support, breathability" },
                      { label: "Good Choice", shoes: "Athletic sneakers", why: "Comfortable, broken-in pairs only" },
                      { label: "Acceptable", shoes: "Sport sandals (Teva/Keen)", why: "Closed-toe with straps only" },
                    ].map((opt) => (
                      <div key={opt.label} className="text-center bg-muted/30 rounded-lg p-3">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{opt.label}</p>
                        <p className="font-semibold text-sm">{opt.shoes}</p>
                        <p className="text-xs text-muted-foreground">{opt.why}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">
                  → See full{" "}
                  <Link to="/guide/dress-code-and-rules" className="text-primary hover:underline font-medium">
                    dress code and rules guide
                  </Link>
                </p>
              </section>

              {/* ==================== PHOTOGRAPHY ==================== */}
              <section id="photography">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  Photography Gear Guide
                </h2>

                <div className="space-y-4">
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Smartphone className="h-6 w-6 text-primary" />
                      <h3 className="font-heading font-semibold text-lg">Smartphone Photography (Most Visitors)</h3>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>• Clean your lens before entering (dust and humidity are constant)</li>
                      <li>• Use burst mode for group shots at El Castillo</li>
                      <li>• Enable HDR for high-contrast stone/sky shots</li>
                      <li>• Bring a portable battery pack — GPS + camera drains fast</li>
                      <li>• Download your guide's contact info in case you get separated</li>
                    </ul>
                  </div>

                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Camera className="h-6 w-6 text-primary" />
                      <h3 className="font-heading font-semibold text-lg">Camera Equipment (Enthusiasts)</h3>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>• <strong>Remember:</strong> Tripods, monopods, and selfie sticks are banned</li>
                      <li>• Professional cameras with detachable lenses require a $45 USD permit</li>
                      <li>• Bring a polarizing filter to reduce glare from stone surfaces</li>
                      <li>• Wide-angle lens (16-35mm) captures entire pyramid beautifully</li>
                      <li>• Wrist strap is more secure than neck strap in crowds</li>
                      <li>• Extra batteries — heat drains batteries 30-50% faster</li>
                      <li>• Lens cleaning cloth and blower (dust is constant)</li>
                    </ul>
                  </div>

                  <TipBox
                    type="info"
                    title="Golden Hour at Chichen Itza"
                    content="The best light for photography is at opening (8 AM) and near closing (4 PM). Midday sun creates harsh shadows on the pyramid. Book a sunrise tour for the ultimate photography experience with almost no other visitors."
                  />

                  <p className="text-sm text-muted-foreground">
                    → Read our complete{" "}
                    <Link to="/guide/photography-tips" className="text-primary hover:underline font-medium">
                      photography tips for Chichen Itza
                    </Link>
                  </p>
                </div>
              </section>

              {/* ==================== SPECIAL CONSIDERATIONS ==================== */}
              <section id="special">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  Special Considerations
                </h2>

                <div className="space-y-4">
                  {/* Cenote */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Droplet className="h-6 w-6 text-secondary" />
                      <h3 className="font-heading font-semibold text-lg">If Your Tour Includes a Cenote</h3>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      Most popular tours include a cenote swim. Add these to your packing list:
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-1.5 text-sm text-muted-foreground">
                      {[
                        "Swimsuit (wear under clothes)",
                        "Quick-dry towel or microfiber towel",
                        "Water shoes or sport sandals",
                        "Waterproof phone pouch ($5-10)",
                        "Biodegradable sunscreen (required)",
                        "Change of dry clothes for bus ride",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <CheckCircle className="h-3.5 w-3.5 text-secondary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/tours/cenote-tours"
                      className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
                    >
                      View Cenote Tour Packages →
                    </Link>
                  </div>

                  {/* Families */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Baby className="h-6 w-6 text-primary" />
                      <h3 className="font-heading font-semibold text-lg">Families with Children</h3>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>• Lightweight stroller or carrier for toddlers (main paths are accessible)</li>
                      <li>• Extra snacks and water (children dehydrate faster)</li>
                      <li>• Entertainment for the drive (2-2.5 hours each way)</li>
                      <li>• Child-sized sun hat and kid-safe sunscreen</li>
                      <li>• Comfortable walking shoes (no sandals for kids either)</li>
                      <li>• Small backpack kids can carry (builds engagement)</li>
                    </ul>
                    <Link
                      to="/tour-types/family-friendly"
                      className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
                    >
                      View Family-Friendly Tours →
                    </Link>
                  </div>

                  {/* Seniors / Mobility */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <Accessibility className="h-6 w-6 text-primary" />
                      <h3 className="font-heading font-semibold text-lg">Seniors & Limited Mobility</h3>
                    </div>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      <li>• Walking cane or trekking pole (allowed and helpful on uneven terrain)</li>
                      <li>• Cushioned, supportive shoes with excellent grip</li>
                      <li>• Portable folding seat for rest breaks</li>
                      <li>• Extra water — older adults dehydrate faster</li>
                      <li>• Prescription medications in original packaging</li>
                      <li>• Consider a private tour for flexible pacing</li>
                    </ul>
                    <Link
                      to="/tours/private-tours"
                      className="inline-block mt-3 text-sm text-primary hover:underline font-medium"
                    >
                      View Private Tour Options →
                    </Link>
                  </div>
                </div>
              </section>

              {/* ==================== DAY-OF TIPS ==================== */}
              <section id="day-of">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  Day-of Packing & Final Checklist
                </h2>

                <div className="space-y-6">
                  {[
                    {
                      icon: "⏰",
                      title: "Night Before",
                      tips: [
                        "Charge phone, camera, and portable battery fully",
                        "Set out clothes, shoes, and hat",
                        "Pre-apply sunscreen bottle near your bag",
                        "Fill and refrigerate water bottles",
                        "Print or screenshot tour confirmation",
                        "Set alarm — most tours depart 6:00-7:00 AM",
                      ],
                    },
                    {
                      icon: "🌅",
                      title: "Morning Of",
                      tips: [
                        "Apply sunscreen 15 minutes before departure",
                        "Eat a solid breakfast (you'll need energy)",
                        "Wear your walking shoes — don't pack them",
                        "Put swimsuit on under clothes (if cenote tour)",
                        "Grab water bottles from fridge",
                        "Double-check: wallet, phone, hat, sunglasses",
                      ],
                    },
                    {
                      icon: "✅",
                      title: "Final Bag Check",
                      tips: [
                        "Sunscreen ✓ | Hat ✓ | Sunglasses ✓",
                        "Water (2L+) ✓ | Snacks ✓",
                        "Cash (pesos) ✓ | Tour confirmation ✓",
                        "Camera/phone charged ✓ | Battery pack ✓",
                        "Rain poncho (rainy season) ✓",
                        "Towel + dry clothes (cenote tours) ✓",
                      ],
                    },
                  ].map((block) => (
                    <div key={block.title} className="bg-card rounded-xl p-5 border border-border">
                      <h3 className="font-heading font-bold text-lg mb-3 flex items-center gap-2">
                        <span className="text-xl">{block.icon}</span> {block.title}
                      </h3>
                      <ul className="space-y-1.5">
                        {block.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-medium">{i + 1}.</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* ==================== FAQ ==================== */}
              <section id="faq">
                <FAQSection
                  title="Frequently Asked Questions About Packing"
                  subtitle="Common questions from travelers planning their Chichen Itza visit"
                  faqs={faqData}
                />
              </section>

              {/* Final CTA */}
              <div className="text-center bg-primary/5 rounded-xl p-8 border border-primary/20">
                <h2 className="font-heading font-bold text-2xl mb-3">
                  Ready for Your Chichen Itza Adventure?
                </h2>
                <p className="text-muted-foreground mb-5">
                  Now that you know exactly what to pack, book your perfect tour!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/tours">
                      Browse All Tours <ChevronRight className="h-5 w-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/practical/contact">Ask a Question</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* ===== Sidebar ===== */}
            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              <QuickBookingForm />
              <TrustBadges />

              {/* Quick Checklist Widget */}
              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-heading font-bold text-base mb-3">📋 Quick Checklist</h3>
                <ul className="space-y-2">
                  {[
                    "Sunscreen & hat",
                    "Water (2L minimum)",
                    "Walking shoes",
                    "Cash (pesos)",
                    "Camera",
                    "Snacks",
                    "Rain poncho (rainy season)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-4 w-4 rounded border-2 border-muted-foreground/30 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => window.print()}
                  className="mt-4 text-sm text-primary hover:underline font-medium w-full text-center"
                >
                  Print Checklist →
                </button>
              </div>

              <PopularToursWidget />

              {/* More Guides */}
              <div className="bg-card rounded-lg border border-border p-5">
                <h3 className="font-heading font-bold text-base mb-3">More Planning Guides</h3>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
                    { label: "How to Get There", href: "/guide/how-to-get-there" },
                    { label: "Photography Tips", href: "/guide/photography-tips" },
                    { label: "Entrance Fees", href: "/guide/entrance-fees" },
                    { label: "Dress Code & Rules", href: "/guide/dress-code-and-rules" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link to={link.href} className="text-primary hover:underline">
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Internal Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Continue Planning Your Visit</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "How to Get There", href: "/guide/how-to-get-there" },
              { label: "Entrance Fees", href: "/guide/entrance-fees" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Photography Tips", href: "/guide/photography-tips" },
              { label: "Dress Code & Rules", href: "/guide/dress-code-and-rules" },
              { label: "All Tours", href: "/tours" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatToBringPage;
