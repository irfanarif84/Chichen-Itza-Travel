import { Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { HelpCircle, Search, ChevronRight, MapPin, Compass, CreditCard, Sun, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createFAQSchema, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FAQSection from "@/components/common/FAQ";
import TrustBadges from "@/components/features/booking/TrustBadges";
import CTASection from "@/components/features/home/CTASection";
import {
  generalChichenItzaFAQs,
  practicalFAQs,
  dayToursFAQs,
  privateToursFAQs,
  cenoteToursFAQs,
  sunriseToursFAQs,
} from "@/lib/faqData";
import type { FAQItem } from "@/lib/faqData";

const allFAQs: FAQItem[] = [
  ...generalChichenItzaFAQs,
  ...practicalFAQs,
  ...dayToursFAQs,
  ...privateToursFAQs,
  ...cenoteToursFAQs,
  ...sunriseToursFAQs,
];

const meta = getPageMeta({
  title: "Chichen Itza Tours FAQ – Your Questions Answered",
  description: "Find answers to all your Chichen Itza tour questions: pricing, what to bring, best time to visit, cancellation policy, and more. Plan your perfect trip.",
  canonical: "/practical/faq",
  jsonLd: [
    createFAQSchema(allFAQs),
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "FAQ" },
    ]),
  ],
});

const categories = [
  { id: "general", label: "General", icon: HelpCircle, faqs: generalChichenItzaFAQs },
  { id: "booking", label: "Booking & Payments", icon: CreditCard, faqs: practicalFAQs },
  { id: "day-tours", label: "Day Tours", icon: Compass, faqs: dayToursFAQs },
  { id: "private", label: "Private Tours", icon: Users, faqs: privateToursFAQs },
  { id: "cenotes", label: "Cenote Tours", icon: MapPin, faqs: cenoteToursFAQs },
  { id: "sunrise", label: "Sunrise Tours", icon: Sun, faqs: sunriseToursFAQs },
];

const FAQPage = () => {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return categories;
    const q = search.toLowerCase();
    return categories
      .map((cat) => ({
        ...cat,
        faqs: cat.faqs.filter(
          (f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)
        ),
      }))
      .filter((cat) => cat.faqs.length > 0);
  }, [search]);

  return (
    <>
      <SEOHead meta={meta} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-12 lg:py-16">
        <div className="container">
          <Breadcrumbs items={[{ label: "FAQ" }]} />
          <div className="mt-4 max-w-3xl">
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4">
              Frequently Asked Questions About Chichen Itza Tours
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-xl">
              Everything you need to know before booking your Chichen Itza adventure — from pricing and logistics to what to wear and bring.
            </p>

            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search questions..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      {!search && (
        <section className="py-8 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <a
                  key={cat.id}
                  href={`#${cat.id}`}
                  className="flex items-center gap-1.5 text-sm bg-card px-3 py-1.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <cat.icon className="h-3.5 w-3.5" />
                  {cat.label} ({cat.faqs.length})
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Sections */}
      <div className="container py-12 lg:py-16">
        {filteredCategories.length > 0 ? (
          <div className="space-y-12">
            {filteredCategories.map((cat) => (
              <div key={cat.id} id={cat.id}>
                <FAQSection
                  faqs={cat.faqs}
                  title={cat.label}
                  subtitle={`${cat.faqs.length} questions`}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No questions match "{search}"</p>
            <Button variant="outline" onClick={() => setSearch("")}>Clear Search</Button>
          </div>
        )}
      </div>

      <div className="container pb-8"><TrustBadges /></div>

      {/* Still Have Questions */}
      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container text-center max-w-2xl">
          <h2 className="font-heading font-bold text-2xl mb-3">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Our travel experts are happy to help you plan the perfect Chichen Itza tour.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/tours">Browse All Tours <ChevronRight className="h-5 w-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/guide/best-time-to-visit">Planning Guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-12 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">Explore More</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "All Tours", href: "/tours" },
              { label: "Day Tours", href: "/tours/day-tours" },
              { label: "Private Tours", href: "/tours/private-tours" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "From Playa del Carmen", href: "/tours-from/playa-del-carmen" },
              { label: "Best Time to Visit", href: "/guide/best-time-to-visit" },
              { label: "What to Bring", href: "/guide/what-to-bring" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default FAQPage;
