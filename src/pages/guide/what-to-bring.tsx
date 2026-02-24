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
    "Essential packing list for Chichen Itza. What to bring, what NOT to bring, clothing tips, photography gear, and seasonal advice for 2026 visits.",
  canonical: "/guide/what-to-bring",
  ogType: "article",
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

                <p className="text-muted-foreground mb-8">
                  Choosing the right clothing can make or break your comfort level at Chichen Itza.
                  You'll be walking 2-3 miles on stone surfaces in heat and humidity, so prioritize
                  breathability, sun protection, and comfort over fashion.
                </p>

                {/* Top/Shirt */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                    <Shirt className="h-5 w-5 text-primary" /> Top / Shirt Options
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-xl p-5 border-2 border-success">
                      <p className="text-xs font-bold uppercase tracking-wider text-success mb-2">✓ Best Choice</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Moisture-wicking t-shirt (polyester or nylon)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Light-colored (reflects heat better)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Loose-fitting (allows air circulation)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Optional: UPF 50+ sun protection shirt</li>
                      </ul>
                      <p className="text-xs text-success mt-3">Why: Dries 3x faster than cotton when you sweat</p>
                    </div>
                    <div className="bg-card rounded-xl p-5 border-2 border-accent">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">○ Acceptable</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Light cotton t-shirt (breathable but holds sweat)</li>
                        <li>• Tank top or sleeveless (cooler but less sun protection)</li>
                        <li>• Linen shirt (breathable but wrinkles easily)</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-3">Note: Cotton gets heavy when soaked with sweat</p>
                    </div>
                    <div className="bg-card rounded-xl p-5 border-2 border-destructive">
                      <p className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">✗ Avoid</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Dark colors (black/navy absorb heat)</li>
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Heavy fabrics (denim, thick cotton)</li>
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Tight-fitting tops (restricts airflow)</li>
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />No shirt/sports bra only (sunburn guaranteed)</li>
                      </ul>
                      <p className="text-xs text-destructive mt-3">You'll overheat within 30 minutes</p>
                    </div>
                  </div>
                </div>

                {/* Bottom/Pants */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-xl mb-4">Bottom / Pants Options</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-card rounded-xl p-5 border-2 border-success">
                      <p className="text-xs font-bold uppercase tracking-wider text-success mb-2">✓ Best Choice</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Lightweight hiking shorts (quick-dry synthetic)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Athletic shorts with built-in liner</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Knee-length or longer (sun protection)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Loose fit for comfort while walking</li>
                      </ul>
                    </div>
                    <div className="bg-card rounded-xl p-5 border-2 border-accent">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent mb-2">○ Acceptable</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Cotton shorts (comfortable but slow to dry)</li>
                        <li>• Capri pants (more coverage than shorts)</li>
                        <li>• Lightweight sundress (easy but less practical)</li>
                      </ul>
                    </div>
                    <div className="bg-card rounded-xl p-5 border-2 border-destructive">
                      <p className="text-xs font-bold uppercase tracking-wider text-destructive mb-2">✗ Avoid</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Jeans (too hot, restrictive movement)</li>
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Very short shorts (inner thigh chafing)</li>
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />White or very light pants (shows dirt/sweat)</li>
                        <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Skirts (difficult on stairs, wind issues)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footwear */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                    <Footprints className="h-5 w-5 text-primary" /> Footwear: The Most Important Decision
                  </h3>

                  <TipBox
                    type="warning"
                    title="Critical: Your Shoes Make or Break Your Experience"
                    content="Wrong shoes = blisters, sore feet, possible injury on uneven surfaces. More visitors regret their footwear choice than any other packing decision. This is NOT the place to break in new shoes or wear fashion over function."
                  />

                  <div className="grid md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-card rounded-xl p-5 border-2 border-success">
                      <p className="text-xs font-bold uppercase tracking-wider text-success mb-1 flex items-center gap-1"><CheckCircle className="h-3.5 w-3.5" /> BEST: Closed-Toe Walking Shoes</p>
                      <p className="text-xs font-semibold mb-2">Ideal Options:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                        <li>• Trail running shoes (lightweight, good grip)</li>
                        <li>• Hiking shoes or low hiking boots</li>
                        <li>• Well-worn athletic sneakers</li>
                        <li>• Walking shoes for all-day comfort</li>
                      </ul>
                      <p className="text-xs font-semibold mb-2">Must-Have Features:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Broken in (worn at least 5-10 times)</li>
                        <li>• Good tread for grip on smooth stone</li>
                        <li>• Breathable mesh (feet will sweat)</li>
                        <li>• Ankle support for uneven surfaces</li>
                        <li>• Cushioned insole for comfort</li>
                      </ul>
                    </div>
                    <div className="bg-card rounded-xl p-5 border-2 border-accent">
                      <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">○ ACCEPTABLE: Sport Sandals (Risky)</p>
                      <p className="text-xs font-semibold mb-2">If You Must Wear Sandals:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground mb-3">
                        <li>• Teva, Chaco, or Keen sport sandals ONLY</li>
                        <li>• Secure straps (no slip-on styles)</li>
                        <li>• Thick sole with tread</li>
                        <li>• Toe protection (closed-toe sandals)</li>
                      </ul>
                      <p className="text-xs font-semibold mb-2">The Downsides:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Feet get dusty and dirty quickly</li>
                        <li>• Sunburn on top of feet (common!)</li>
                        <li>• Small stones get stuck</li>
                        <li>• Less stability on stairs</li>
                      </ul>
                    </div>
                    <div className="bg-card rounded-xl p-5 border-2 border-destructive">
                      <p className="text-xs font-bold uppercase tracking-wider text-destructive mb-1 flex items-center gap-1"><XCircle className="h-3.5 w-3.5" /> NEVER WEAR</p>
                      <p className="text-xs font-semibold mb-2">Absolutely Forbidden:</p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground mb-3">
                        <li className="flex items-start gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />Flip-flops — dangerous on stairs</li>
                        <li className="flex items-start gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />High heels or wedges</li>
                        <li className="flex items-start gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />Brand new shoes — guaranteed blisters</li>
                        <li className="flex items-start gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />Crocs — slippery on smooth stone</li>
                      </ul>
                      <p className="text-xs font-semibold mb-2">Poor Choices:</p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />Slip-on canvas shoes — no support</li>
                        <li className="flex items-start gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />Ballet flats or loafers</li>
                        <li className="flex items-start gap-1.5"><XCircle className="h-3.5 w-3.5 text-destructive mt-0.5 flex-shrink-0" />Minimalist/barefoot shoes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Accessories */}
                <div className="mb-8">
                  <h3 className="font-heading font-semibold text-xl mb-4">Essential Accessories</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl p-5 border border-border">
                      <p className="font-heading font-semibold mb-3">🧢 Hat Selection</p>
                      <div className="space-y-2 text-sm">
                        <div><span className="text-success font-semibold">✓ Best:</span> <span className="text-muted-foreground">Wide-brim hat (3-4 inch brim min), bucket hat with neck flap, safari hat with chin strap</span></div>
                        <div><span className="text-accent font-semibold">○ Okay:</span> <span className="text-muted-foreground">Baseball cap (only protects face, not ears/neck)</span></div>
                        <div><span className="text-destructive font-semibold">✗ Avoid:</span> <span className="text-muted-foreground">Straw hats without chin strap (blow away), visors (no top-of-head protection)</span></div>
                      </div>
                    </div>
                    <div className="bg-card rounded-xl p-5 border border-border">
                      <p className="font-heading font-semibold mb-3">🕶️ Sunglasses</p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />100% UV protection (UVA and UVB)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Polarized lenses (reduce glare from stone)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Wraparound style (side protection)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Secure fit (won't fall off looking up)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Strap or retainer cord recommended</li>
                      </ul>
                      <p className="text-xs text-muted-foreground mt-2">💡 Bring a hard case — sunglasses in bags get crushed.</p>
                    </div>
                  </div>
                </div>

                {/* Visual Outfit Comparison */}
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">👤 The Perfect Chichen Itza Outfit</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-success/5 rounded-xl p-5 border-2 border-success">
                      <p className="text-success font-bold text-sm mb-3">✓ Example: Well-Prepared Visitor</p>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-semibold">Head:</span> <span className="text-muted-foreground">Wide-brim hat, sunglasses on strap</span></p>
                        <p><span className="font-semibold">Top:</span> <span className="text-muted-foreground">Light gray moisture-wicking shirt</span></p>
                        <p><span className="font-semibold">Bottom:</span> <span className="text-muted-foreground">Khaki quick-dry hiking shorts</span></p>
                        <p><span className="font-semibold">Feet:</span> <span className="text-muted-foreground">Broken-in trail runners + synthetic socks</span></p>
                        <p><span className="font-semibold">Bag:</span> <span className="text-muted-foreground">Small backpack with water, sunscreen</span></p>
                      </div>
                      <p className="text-success text-xs font-semibold mt-3">This person will be comfortable all day!</p>
                    </div>
                    <div className="bg-destructive/5 rounded-xl p-5 border-2 border-destructive">
                      <p className="text-destructive font-bold text-sm mb-3">✗ Example: Unprepared Visitor</p>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-semibold">Head:</span> <span className="text-muted-foreground">Baseball cap, no sunglasses</span></p>
                        <p><span className="font-semibold">Top:</span> <span className="text-muted-foreground">Black cotton t-shirt</span></p>
                        <p><span className="font-semibold">Bottom:</span> <span className="text-muted-foreground">Dark blue jeans</span></p>
                        <p><span className="font-semibold">Feet:</span> <span className="text-muted-foreground">Brand new white sneakers</span></p>
                        <p><span className="font-semibold">Bag:</span> <span className="text-muted-foreground">Shoulder purse, no water</span></p>
                      </div>
                      <p className="text-destructive text-xs font-semibold mt-3">This person will be miserable within an hour!</p>
                    </div>
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
                  <Camera className="inline h-7 w-7 text-primary mr-2" />Photography Gear Guide
                </h2>

                <p className="text-muted-foreground mb-6">
                  Chichen Itza is one of the most photographed sites in the world. Whether you're a smartphone
                  snapper or serious photographer, here's what to bring for the best shots while complying with site rules.
                </p>

                <div className="space-y-4 mb-8">
                  {/* Smartphone */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-primary" /> 📱 Smartphone Photography (Most Common)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">What to Bring:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Fully charged smartphone (100% morning of tour)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Portable battery pack (10,000+ mAh)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Charging cable (keep in bag)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Lens cleaning cloth (microfiber)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Phone case with wrist strap</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Pro Tips:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Clear storage before trip (50+ GB recommended)</li>
                          <li>• Turn on HDR for better dynamic range</li>
                          <li>• Use portrait mode for people + ruins</li>
                          <li>• Shoot in RAW if your phone supports it</li>
                          <li>• Download cloud backup app beforehand</li>
                          <li>• Close background apps to preserve battery</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Compact Camera */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-lg mb-4">📷 Compact Camera / Point-and-Shoot</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">What to Bring:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Compact camera (Sony RX100, Canon G7X, etc.)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Extra battery (fully charged)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />32GB+ memory card</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Padded camera case</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Wrist strap or neck strap</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Settings Recommendations:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Auto mode is fine for most shots</li>
                          <li>• Aperture priority (A/Av) for depth control</li>
                          <li>• ISO 100-400 in bright sun, 800-1600 in shade</li>
                          <li>• Better zoom range than smartphones</li>
                          <li>• Doesn't drain phone battery</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* DSLR / Mirrorless */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-lg mb-4">📸 DSLR / Mirrorless Camera (Advanced)</h3>

                    <TipBox
                      type="warning"
                      title="Professional Equipment Permit Required"
                      content="Cameras with detachable lenses, external flashes, and professional video equipment require a special INAH permit costing $45 USD (paid on-site at entrance). Security will stop you and require payment. This applies even to hobbyists with DSLRs/mirrorless cameras."
                    />

                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">What to Bring:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Wide-angle lens (16-35mm ideal for architecture)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Standard zoom (24-70mm versatile)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Telephoto optional (70-200mm for details)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />2-3 extra batteries (heat drains faster)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Multiple memory cards (64GB+ each)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Circular polarizing filter</li>
                        </ul>
                        <p className="text-xs font-semibold mt-3 mb-2">What NOT to Bring:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Tripod/monopod — strictly prohibited</li>
                          <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />External flash/strobes — not allowed</li>
                          <li className="flex items-start gap-2"><XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />Gimbal stabilizers — professional equipment</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Camera Settings for Chichen Itza:</p>
                        <div className="space-y-2">
                          {[
                            { scene: "General Daylight", settings: "ISO 100-200 • f/8-f/11 • 1/250-1/500s" },
                            { scene: "Architecture (Max Sharpness)", settings: "ISO 100 • f/8-f/13 • Aperture Priority" },
                            { scene: "Portraits (People + Ruins)", settings: "ISO 100-400 • f/2.8-f/5.6 • 1/250s+" },
                            { scene: "Details/Carvings", settings: "ISO 100-400 • f/5.6-f/8 • Focus carefully" },
                          ].map((s) => (
                            <div key={s.scene} className="bg-muted/30 rounded-lg p-2.5">
                              <p className="text-xs font-semibold">{s.scene}:</p>
                              <p className="text-xs text-muted-foreground">{s.settings}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Photography Tips Grid */}
                <div className="mb-6">
                  <h3 className="font-heading font-semibold text-xl mb-4">📸 Photography Tips from the Pros</h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { tip: "Arrive Early", detail: "Sunrise tours offer the best light and empty plazas." },
                      { tip: "Shoot in RAW", detail: "More flexibility editing later. Most phones support it." },
                      { tip: "Include People for Scale", detail: "El Castillo is 79 feet tall — hard to convey without people." },
                      { tip: "Unique Angles", detail: "Walk around the pyramid for fresh perspectives." },
                      { tip: "Capture Details", detail: "Zoom in on serpent heads, glyphs, and carvings." },
                      { tip: "Use Leading Lines", detail: "Pathways and columns create natural lines to El Castillo." },
                      { tip: "Wait for the Moment", detail: "Be patient — wait for people to move out of frame." },
                      { tip: "Bracket Exposures", detail: "Bright sky + dark stone is challenging. Merge in post." },
                    ].map((item) => (
                      <div key={item.tip} className="bg-card rounded-lg p-4 border border-border">
                        <p className="font-semibold text-sm mb-1">{item.tip}</p>
                        <p className="text-xs text-muted-foreground">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  → Read our complete{" "}
                  <Link to="/guide/photography-tips" className="text-primary hover:underline font-medium">
                    Chichen Itza photography guide
                  </Link>
                </p>
              </section>

              {/* ==================== SPECIAL CONSIDERATIONS ==================== */}
              <section id="special">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  Special Considerations
                </h2>

                <p className="text-muted-foreground mb-6">
                  Certain situations require additional planning. Here's what to bring based on your specific needs:
                </p>

                <div className="space-y-6">
                  {/* Cenote */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-lg mb-2 flex items-center gap-2">
                      <Droplet className="h-5 w-5 text-secondary" /> 💧 If Your Tour Includes Cenote Swimming
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Many tours combine Chichen Itza with swimming in nearby cenotes. Add these items:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Additional Items Needed:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />Swimsuit (wear under clothes or pack separately)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />Quick-dry towel or microfiber towel (or rent $3-5)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />Biodegradable sunscreen ONLY (regular prohibited)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />Water shoes or sandals (rocks can be slippery)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />Waterproof bag or dry sack (protect phone)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />Change of clothes (dry shirt/shorts after swimming)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />Plastic bag (for wet swimsuit)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Cenote Rules:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• No regular sunscreen (chemicals harm ecosystem)</li>
                          <li>• No makeup or body oils</li>
                          <li>• Shower before entering (most cenotes require this)</li>
                          <li>• Life jackets often mandatory (provided free)</li>
                          <li>• Lockers available ($2-5) for valuables</li>
                          <li>• Water temperature: 72-78°F year-round</li>
                        </ul>
                        <Link to="/tours/cenote-tours" className="inline-block mt-3 text-sm text-primary hover:underline font-medium">
                          View Chichen Itza + Cenote Tours →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Families */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-lg mb-2 flex items-center gap-2">
                      <Baby className="h-5 w-5 text-primary" /> 👨‍👩‍👧‍👦 Traveling with Children
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Extra Items for Kids:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Extra water (kids dehydrate faster — 1L per child min)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />More snacks than you think (energy bars, crackers, fruit)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Kids' sunscreen stick (easier than lotion)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Child carrier/backpack (for toddlers who tire quickly)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Wet wipes (multi-purpose cleaning)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Small first aid kit (band-aids, children's pain reliever)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Change of clothes (kids get messy)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Stroller (check with tour operator — some sites restrict)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Tips for Kids:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Book <Link to="/tour-types/family-friendly" className="text-primary hover:underline">family-friendly tours</Link> with breaks</li>
                          <li>• Morning tours better (kids have more energy)</li>
                          <li>• Bring tablet/device for bus ride (download content ahead)</li>
                          <li>• Teach kids not to touch ruins (oils damage stone)</li>
                          <li>• Frequent bathroom stops needed (bathrooms are limited)</li>
                          <li>• Make it educational: download kid-friendly Mayan history</li>
                        </ul>
                        <Link to="/tour-types/family-friendly" className="inline-block mt-3 text-sm text-primary hover:underline font-medium">
                          View Family-Friendly Tours →
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Seniors / Mobility */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-semibold text-lg mb-2 flex items-center gap-2">
                      <Accessibility className="h-5 w-5 text-primary" /> 🦽 Seniors & Mobility Considerations
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Additional Items:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Walking stick or trekking poles (stability on uneven surfaces)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Portable folding seat/cane combo (rest when needed)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Prescription medications (keep in carry-on, bring extras)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Compression socks (reduce swelling from walking/heat)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Cushioned insoles (add to shoes for comfort)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Important Notes:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li>• Wheelchairs available at entrance (free, limited quantity)</li>
                          <li>• Main plaza is wheelchair accessible via paved paths</li>
                          <li>• Many structures have steep stairs (not wheelchair accessible)</li>
                          <li>• Shaded rest areas available throughout site</li>
                          <li>• <Link to="/tours/private-tours" className="text-primary hover:underline">Private tours</Link> can go at slower pace</li>
                          <li>• Electric scooters NOT allowed on-site</li>
                        </ul>
                        <Link to="/tours/private-tours" className="inline-block mt-3 text-sm text-primary hover:underline font-medium">
                          View Private Tour Options →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* ==================== DAY-OF TIPS ==================== */}
              <section id="day-of">
                <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
                  Day-of Packing & Final Checklist
                </h2>

                <p className="text-muted-foreground mb-6">
                  The night before and morning of your tour, follow this systematic process to ensure you're perfectly prepared:
                </p>

                <div className="space-y-6">
                  {/* Night Before */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="text-xl">🌙</span> The Night Before Your Tour
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Charge Everything:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Smartphone to 100%</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Portable battery pack</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Camera batteries (all of them)</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Smartwatch if bringing</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider mb-2">Prepare Your Bag:</p>
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Layout all items from checklist</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Pack everything except perishables</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Place bag by door so you don't forget</li>
                          <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />Set out clothes you'll wear</li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider mb-2">Other Preparations:</p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Check weather forecast one last time</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Confirm pickup time and location with tour company</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Set 2 alarms (phone + backup)</li>
                        <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />Get good sleep (7-8 hours minimum)</li>
                      </ul>
                    </div>
                  </div>

                  {/* Morning Of */}
                  <div className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                      <span className="text-xl">☀️</span> Morning of Your Tour (60-90 Min Before Pickup)
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-xs font-bold text-primary mb-2">⏰ First 15 Minutes:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li><span className="text-primary font-medium">1.</span> Wake up, shower if desired</li>
                          <li><span className="text-primary font-medium">2.</span> Check phone for any tour company messages</li>
                          <li><span className="text-primary font-medium">3.</span> Get dressed in prepared outfit</li>
                        </ul>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-xs font-bold text-primary mb-2">⏰ Next 30 Minutes:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li><span className="text-primary font-medium">4.</span> Eat light breakfast (tours include lunch)</li>
                          <li><span className="text-primary font-medium">5.</span> Apply first coat of sunscreen (takes 15 min to absorb)</li>
                          <li><span className="text-primary font-medium">6.</span> Fill water bottles (freeze one overnight if possible)</li>
                          <li><span className="text-primary font-medium">7.</span> Add perishable items to bag (snacks, ice)</li>
                        </ul>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4">
                        <p className="text-xs font-bold text-primary mb-2">⏰ Final 15 Minutes:</p>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          <li><span className="text-primary font-medium">8.</span> Put on walking shoes (wear them, don't pack)</li>
                          <li><span className="text-primary font-medium">9.</span> Put swimsuit on under clothes (if cenote tour)</li>
                          <li><span className="text-primary font-medium">10.</span> Double-check wallet, phone, hat, sunglasses</li>
                          <li><span className="text-primary font-medium">11.</span> Head to pickup point 5 min early</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Final Bag Check */}
                  <div className="bg-card rounded-xl p-5 border border-border">
                    <h3 className="font-heading font-bold text-lg mb-3 flex items-center gap-2">
                      <span className="text-xl">✅</span> Final Bag Check
                    </h3>
                    <ul className="space-y-1.5">
                      {[
                        "Sunscreen ✓ | Hat ✓ | Sunglasses ✓",
                        "Water (2L+) ✓ | Snacks ✓",
                        "Cash (pesos) ✓ | Tour confirmation ✓",
                        "Camera/phone charged ✓ | Battery pack ✓",
                        "Rain poncho (rainy season) ✓",
                        "Towel + dry clothes (cenote tours) ✓",
                      ].map((tip, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary font-medium">{i + 1}.</span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
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
