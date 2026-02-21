import { Link } from "react-router-dom";
import { Ship, ChevronRight, Star, Waves, Sun, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/common/SEOHead";
import { getPageMeta, createBreadcrumbSchema } from "@/lib/seo";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import TourCard from "@/components/features/tours/TourCard";
import TourGallery from "@/components/features/tours/TourGallery";
import TrustBadges from "@/components/features/booking/TrustBadges";
import TipBox from "@/components/guide/TipBox";
import CTASection from "@/components/features/home/CTASection";
import { tours } from "@/lib/tourData";
import { comboHeroImages, comboGalleryImages, comboGalleryAltTexts } from "@/lib/tourImages";
import { useMemo } from "react";

const meta = getPageMeta({
  title: "Chichen Itza + Isla Mujeres Multi-Day Tour – Ruins & Beach",
  description: "Combine Chichen Itza ruins with Isla Mujeres paradise island. Multi-day Yucatan adventure with snorkeling, ruins, and Caribbean beaches.",
  canonical: "/combo-tours/isla-mujeres",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Combo Tours" },
      { name: "Isla Mujeres" },
    ]),
  ],
});

const IslaMujeresComboPage = () => {
  const relatedTours = useMemo(
    () => tours.filter((t) => t.category.includes("combo") || t.departureCity.includes("cancun")).slice(0, 6),
    []
  );

  const heroImage = comboHeroImages["isla-mujeres"];
  const galleryImages = comboGalleryImages["isla-mujeres"] || [];
  const galleryAlts = comboGalleryAltTexts["isla-mujeres"] || [];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end">
        <img
          src={heroImage}
          alt="Isla Mujeres Playa Norte with turquoise Caribbean water and white sand"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="container relative z-10 pb-10 pt-20">
          <Breadcrumbs items={[{ label: "Combo Tours" }, { label: "Isla Mujeres" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-primary-foreground/80">4.7/5 from multi-experience travelers</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary-foreground">
              Chichen Itza + Isla Mujeres – Ancient Ruins Meets Caribbean Paradise
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
              The ultimate Yucatan experience: explore the ancient Mayan ruins of Chichen Itza one day, then sail to the stunning Isla Mujeres for crystal-clear Caribbean waters, snorkeling, and white-sand beaches.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Ship, text: "Ferry to island" },
                { icon: Waves, text: "Snorkeling" },
                { icon: Sun, text: "Beach paradise" },
                { icon: Fish, text: "Marine life" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full border border-primary-foreground/20">
                  <item.icon className="h-4 w-4" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">View Related Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          <TourGallery images={galleryImages} altTexts={galleryAlts} tourTitle="Chichen Itza + Isla Mujeres Combo Tour" />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">Ruins & Beach – The Perfect Combination</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Why choose between history and relaxation? This multi-day package lets you experience the best of the Yucatan Peninsula: the awe-inspiring ancient ruins of Chichen Itza and the turquoise Caribbean waters of Isla Mujeres.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Day 1: Chichen Itza</strong> – Depart from Cancun for a full-day guided tour of Chichen Itza with cenote swim and lunch. Return to Cancun in the evening.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <strong>Day 2: Isla Mujeres</strong> – Ferry to Isla Mujeres (20 minutes from Cancun). Snorkel in the underwater museum MUSA, explore the island by golf cart, and relax on Playa Norte — consistently ranked one of the best beaches in the Caribbean.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Both days can be booked separately — explore our <Link to="/tours/day-tours" className="text-primary hover:underline">Chichen Itza day tours</Link> and pair with any Isla Mujeres excursion. Or see our <Link to="/combo-tours/multi-day-yucatan" className="text-primary hover:underline">multi-day Yucatan packages</Link> for more extensive itineraries.
          </p>
          <TipBox
            type="tip"
            title="Booking Tip"
            content="Book Chichen Itza for Day 1 and Isla Mujeres for Day 2. You'll be more tired after the Chichen Itza day trip, so beach relaxation the next day is the perfect recovery. The Ultramar ferry from Cancun to Isla Mujeres departs every 30 minutes."
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">Isla Mujeres Highlights</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Waves, title: "Playa Norte", desc: "One of the Caribbean's top-rated beaches with calm turquoise water and powder-white sand." },
              { icon: Fish, title: "MUSA Snorkeling", desc: "Underwater museum with 500+ sculptures submerged in crystal-clear Caribbean waters." },
              { icon: Sun, title: "Punta Sur", desc: "Dramatic cliff views at the island's southern tip with Ixchel temple ruins." },
              { icon: Ship, title: "Easy Access", desc: "Just 20 minutes by ferry from Cancun. Boats depart every 30 minutes all day." },
            ].map((item, i) => (
              <div key={i} className="bg-card rounded-lg p-6 border border-border text-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-12 lg:py-16">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">Related Tours from Cancún</h2>
          <p className="text-center text-muted-foreground mb-8">Combine any of these with an Isla Mujeres day</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">More Combos</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Cenote Ik Kil Combo", href: "/combo-tours/cenote-ik-kil" },
              { label: "Coba Ruins Combo", href: "/combo-tours/coba-ruins" },
              { label: "Multi-Day Yucatan", href: "/combo-tours/multi-day-yucatan" },
              { label: "From Cancún", href: "/tours-from/cancun" },
              { label: "All Tours", href: "/tours" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label} →</Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default IslaMujeresComboPage;
