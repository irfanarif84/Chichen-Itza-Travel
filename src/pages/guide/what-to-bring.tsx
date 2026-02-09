import { Link } from "react-router-dom";
import { Backpack, Sun, Camera, ShieldCheck, ChevronRight, XCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import TipBox from "@/components/guide/TipBox";
import InfoBox from "@/components/guide/InfoBox";
import { guideSchemas } from "@/lib/schema";

const meta = getPageMeta({
  title: "What to Bring to Chichen Itza - Essential Packing List 2026",
  description: "Complete packing list for Chichen Itza. Essential items, what to wear, prohibited items, and pro tips from experienced guides.",
  canonical: "/guide/what-to-bring",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Guide", url: "/guide" },
      { name: "What to Bring" },
    ]),
    guideSchemas["what-to-bring"],
  ],
});

const breadcrumbs = [
  { label: "Guide", href: "/guide" },
  { label: "What to Bring" },
];

const essentialItems = [
  "Comfortable walking shoes (closed-toe recommended)",
  "Sunscreen SPF 30+ (biodegradable if visiting cenotes)",
  "Wide-brimmed hat or cap",
  "Sunglasses with UV protection",
  "Refillable water bottle (1+ liters)",
  "Camera or smartphone for photos",
  "Small backpack or day bag",
  "Cash for tips, souvenirs, and snacks (Mexican pesos preferred)",
];

const cenoteItems = [
  "Swimsuit (wear under clothes)",
  "Quick-dry towel or microfiber towel",
  "Water shoes or sandals with straps",
  "Waterproof phone pouch",
  "Biodegradable sunscreen (required at most cenotes)",
  "Change of dry clothes",
];

const optionalItems = [
  "Portable phone charger / power bank",
  "Insect repellent (DEET-free for eco-sites)",
  "Light rain jacket or poncho (rainy season)",
  "Notebook and pen for notes",
  "Binoculars for detailed carvings",
  "Spanish phrasebook or translation app",
  "Snacks (granola bars, nuts)",
  "Wet wipes or hand sanitizer",
];

const prohibitedItems = [
  "Drones (strictly prohibited, will be confiscated)",
  "Tripods and monopods (not allowed inside)",
  "Selfie sticks (prohibited)",
  "Professional video equipment",
  "Pets (except service animals)",
  "Large backpacks or luggage",
  "Food and beverages (to bring inside the ruins)",
  "Alcoholic beverages",
];

const WhatToBringPage = () => {
  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />

          <div className="max-w-3xl mt-4">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              What to Bring to Chichen Itza
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Pack smart for your visit to one of the New Seven Wonders. Our complete 
              packing checklist covers essentials, cenote gear, and what NOT to bring.
            </p>

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

      {/* Quick Tips */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <TipBox
              type="tip"
              title="Pro Tip: Pack Light"
              content="You'll be walking 2-3 miles over uneven surfaces in hot weather. Carry only what you need in a small, comfortable backpack. Leave valuables at your hotel and bring minimal cash. Most tour operators provide water and storage on the bus."
            />

            <div className="mt-8 prose prose-neutral">
              <h2 className="font-heading font-bold text-2xl mb-4">Overview</h2>
              <p className="text-muted-foreground">
                A day at Chichen Itza involves walking outdoors for 2-4 hours in tropical heat. 
                The archaeological site offers minimal shade and no water refill stations inside. 
                If your tour includes a cenote visit, you'll also need swimming gear. This guide 
                covers everything you need for a comfortable, enjoyable experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Wear */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              What to Wear
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border-2 border-success">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="h-6 w-6 text-success" />
                  <h3 className="font-heading font-semibold text-lg">Recommended</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    Light, breathable clothing (cotton or moisture-wicking)
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    Comfortable walking shoes with good grip
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    Wide-brimmed hat for sun protection
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    Light colors that reflect heat
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-success mt-1 flex-shrink-0" />
                    Swimsuit under clothes (if cenote tour)
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border-2 border-destructive">
                <div className="flex items-center gap-3 mb-4">
                  <XCircle className="h-6 w-6 text-destructive" />
                  <h3 className="font-heading font-semibold text-lg">Avoid</h3>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                    Flip flops or open-back sandals
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                    New shoes that might cause blisters
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                    Dark colors that absorb heat
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                    Heavy jeans or restrictive clothing
                  </li>
                  <li className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                    High heels or dress shoes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Items */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              Essential Packing List
            </h2>

            <div className="space-y-6">
              <InfoBox
                title="Must-Have Essentials"
                icon="🎒"
                items={essentialItems}
                variant="success"
              />

              <InfoBox
                title="For Cenote Swimming"
                icon="🏊"
                items={cenoteItems}
                variant="info"
              />

              <InfoBox
                title="Optional But Helpful"
                icon="✨"
                items={optionalItems}
                variant="default"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Prohibited Items */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              Prohibited Items - Don't Bring These
            </h2>

            <TipBox
              type="warning"
              title="Important: Items Will Be Confiscated"
              content="Security checks are conducted at the entrance. Prohibited items will be confiscated and may not be returned. Drones are strictly illegal to fly at archaeological sites in Mexico and carry heavy fines."
            />

            <div className="mt-6 bg-card rounded-xl p-6 border border-border">
              <ul className="grid sm:grid-cols-2 gap-3">
                {prohibitedItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Special Considerations */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
              Special Considerations
            </h2>

            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Sun className="h-6 w-6 text-accent" />
                  <h3 className="font-heading font-semibold text-lg">Rainy Season (May-October)</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  Afternoon thunderstorms are common during these months. Pack a lightweight 
                  rain jacket or disposable poncho. The showers usually pass within 30-60 minutes.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Light rain jacket or poncho</li>
                  <li>• Waterproof bag for electronics</li>
                  <li>• Quick-dry clothing</li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Camera className="h-6 w-6 text-primary" />
                  <h3 className="font-heading font-semibold text-lg">For Photography Enthusiasts</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  While tripods are prohibited, handheld photography is welcome. Consider these items:
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Polarizing filter for reducing glare</li>
                  <li>• Extra memory cards and batteries</li>
                  <li>• Lens cleaning cloth</li>
                  <li>• Camera strap (wrist straps are more secure)</li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="h-6 w-6 text-success" />
                  <h3 className="font-heading font-semibold text-lg">For Families with Children</h3>
                </div>
                <p className="text-muted-foreground mb-3">
                  The site is stroller-accessible on main paths, but terrain is uneven in places.
                </p>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Lightweight stroller or carrier for toddlers</li>
                  <li>• Extra snacks (available outside but expensive inside)</li>
                  <li>• Entertainment for the drive (2-2.5 hours each way)</li>
                  <li>• Child-sized sun hat and sunscreen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Checklist */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Backpack className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-4">
              Quick Day-of Checklist
            </h2>
            <p className="text-muted-foreground mb-6">
              Before leaving your hotel, make sure you have:
            </p>

            <div className="bg-card rounded-xl p-6 border border-border text-left max-w-md mx-auto">
              <ul className="space-y-2">
                {[
                  "✅ Comfortable shoes on feet",
                  "✅ Sunscreen applied + extra in bag",
                  "✅ Hat and sunglasses",
                  "✅ Full water bottle",
                  "✅ Camera/phone charged",
                  "✅ Cash (pesos preferred)",
                  "✅ Swimsuit (if cenote tour)",
                  "✅ Small towel (if cenote tour)",
                ].map((item, i) => (
                  <li key={i} className="text-foreground">{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/tours">
                  Book Your Tour <ChevronRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/guide/best-time-to-visit">Best Time to Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />

      {/* Internal Links */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">
            Continue Planning Your Visit
          </h2>
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
