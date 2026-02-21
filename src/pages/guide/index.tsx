import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, Clock, Camera, DollarSign, ShieldAlert, MapPin, Sun, Backpack, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CTASection from "@/components/features/home/CTASection";
import { guideImages } from "@/lib/tourImages";

const guides = [
  {
    title: "Best Time to Visit Chichen Itza",
    description: "Month-by-month breakdown of weather, crowds, prices, and equinox events. Find the perfect time for your visit.",
    href: "/guide/best-time-to-visit",
    icon: Sun,
    readTime: "10 min",
    imageKey: "best-time-to-visit" as const,
  },
  {
    title: "What to Bring to Chichen Itza",
    description: "Essential packing list including clothing, sun protection, water, and prohibited items you should leave behind.",
    href: "/guide/what-to-bring",
    icon: Backpack,
    readTime: "8 min",
    imageKey: "what-to-bring" as const,
  },
  {
    title: "Chichen Itza History & Facts",
    description: "1,400 years of Mayan history, El Castillo's astronomical secrets, and 25 amazing facts about this ancient wonder.",
    href: "/guide/history-and-facts",
    icon: Landmark,
    readTime: "10 min",
    imageKey: "history-and-facts" as const,
  },
  {
    title: "How to Get to Chichen Itza",
    description: "Complete transport guide from Cancun, Playa del Carmen, Tulum, and Merida. Tours vs rental cars vs buses compared.",
    href: "/guide/how-to-get-there",
    icon: MapPin,
    readTime: "8 min",
    imageKey: "how-to-get-there" as const,
  },
  {
    title: "Entrance Fees & Pricing 2026",
    description: "Updated ticket costs, payment methods, discounts, camera permits, and detailed tour vs DIY cost comparisons.",
    href: "/guide/entrance-fees",
    icon: DollarSign,
    readTime: "8 min",
    imageKey: "entrance-fees" as const,
  },
  {
    title: "Photography Tips",
    description: "Expert tips for capturing stunning photos — best times, camera settings, composition techniques, and equipment rules.",
    href: "/guide/photography-tips",
    icon: Camera,
    readTime: "9 min",
    imageKey: "photography-tips" as const,
  },
  {
    title: "Dress Code & Visitor Rules",
    description: "What to wear, prohibited items, site regulations, and cultural etiquette for this UNESCO World Heritage Site.",
    href: "/guide/dress-code-and-rules",
    icon: ShieldAlert,
    readTime: "8 min",
    imageKey: "dress-code" as const,
  },
  {
    title: "Chichen Itza vs Other Ruins",
    description: "Compare Chichen Itza to Tulum, Coba, Ek Balam, and Uxmal. Find which Mayan ruins match your travel style.",
    href: "/guide/vs-other-ruins",
    icon: BookOpen,
    readTime: "10 min",
    imageKey: "best-time-to-visit" as const,
  },
];

const meta = getPageMeta({
  title: "Chichen Itza Visitor Guide – Everything You Need to Know",
  description: "Complete Chichen Itza visitor guide: best time to visit, what to bring, entrance fees, how to get there, photography tips, dress code, history, and more.",
  canonical: "/guide",
  jsonLd: createBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Visitor Guide" },
  ]),
});

const breadcrumbs = [{ label: "Visitor Guide" }];

const GuideIndexPage = () => (
  <>
    <SEOHead meta={meta} />

    {/* Hero */}
    <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 lg:py-16">
      <div className="container">
        <Breadcrumbs items={breadcrumbs} />
        <div className="max-w-3xl mt-4">
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Chichen Itza Visitor Guide
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Everything you need to plan the perfect visit — from what to wear and when to go, to entrance fees, transport options, and insider photography tips.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/tours">
              Browse Tours <ChevronRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Guide Grid */}
    <section className="py-12 lg:py-16">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link
                key={guide.href}
                to={guide.href}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-card-hover transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={guideImages[guide.imageKey]}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {guide.readTime}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <h2 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">
                      {guide.title}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {guide.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>

    <CTASection />
  </>
);

export default GuideIndexPage;
