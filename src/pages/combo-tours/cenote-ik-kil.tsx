import { Link } from "react-router-dom";
import { Droplets, ChevronRight, Star, Camera, Waves, Leaf, MapPin } from "lucide-react";
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
  title: "Chichen Itza + Cenote Ik Kil Tour – Swim & Explore",
  description: "Best combo: Chichen Itza ruins + swimming at famous Cenote Ik Kil. Guided tour, lunch, transport included. Free cancellation. From $99.",
  canonical: "/combo-tours/cenote-ik-kil",
  jsonLd: [
    createBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Combo Tours" },
      { name: "Cenote Ik Kil" },
    ]),
  ],
});

const CenoteIkKilComboPage = () => {
  const comboTours = useMemo(
    () => tours.filter((t) => t.category.includes("cenote-tours") || t.category.includes("combo")),
    []
  );

  const heroImage = comboHeroImages["cenote-ik-kil"];
  const galleryImages = comboGalleryImages["cenote-ik-kil"] || [];
  const galleryAlts = comboGalleryAltTexts["cenote-ik-kil"] || [];

  return (
    <>
      <SEOHead meta={meta} />

      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-end">
        <img
          src={heroImage}
          alt="Cenote Ik Kil overhead view with hanging vines and turquoise water"
          className="absolute inset-0 w-full h-full object-cover"
          fetchPriority="high"
          loading="eager"
          width={1200}
          height={672}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
        <div className="container relative z-10 pb-10 pt-20">
          <Breadcrumbs items={[{ label: "Combo Tours" }, { label: "Cenote Ik Kil" }]} />
          <div className="mt-4 max-w-3xl">
            <div className="flex items-center gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-primary-foreground/80">4.8/5 from 2,500+ combo travelers</span>
            </div>
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-4 text-primary-foreground">
              Chichen Itza + Cenote Ik Kil Combo Tour
            </h1>
            <p className="text-lg text-primary-foreground/90 mb-6 max-w-xl">
              Explore the ancient Mayan ruins then cool off with a refreshing swim in Mexico's most famous cenote — a stunning natural sinkhole with hanging vines and crystal-clear water.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Droplets, text: "Cenote swimming" },
                { icon: Camera, text: "Iconic photos" },
                { icon: Leaf, text: "Natural wonder" },
                { icon: MapPin, text: "Just 3 miles apart" },
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm bg-primary-foreground/15 backdrop-blur-sm text-primary-foreground px-3 py-1.5 rounded-full border border-primary-foreground/20">
                  <item.icon className="h-4 w-4" />
                  {item.text}
                </span>
              ))}
            </div>
            <Button variant="cta" size="lg" asChild>
              <a href="#tours">View Combo Tours <ChevronRight className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          <TourGallery images={galleryImages} altTexts={galleryAlts} tourTitle="Chichen Itza + Cenote Ik Kil Combo Tour" />
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container max-w-3xl">
          <h2 className="font-heading font-bold text-2xl mb-4">Why This Combo Is Our #1 Seller</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Cenote Ik Kil is located just 3 miles from Chichen Itza, making it the perfect natural complement to your archaeological adventure. This stunning open-air cenote features dramatic 85-foot limestone walls draped with hanging vines and small waterfalls, creating one of the most photographed swimming spots in Mexico.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            After spending 2-3 hours exploring the ancient ruins in the Yucatan heat, there's nothing more refreshing than descending the carved stone staircase into the cool, crystal-clear waters of Cenote Ik Kil. The cenote maintains a constant temperature of 79°F (26°C) year-round, making it perfect for swimming any time of year.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our combo tours include everything: guided tour of Chichen Itza, cenote entrance and swimming time, traditional Yucatecan lunch, and round-trip transportation. Compare with our <Link to="/tours/cenote-tours" className="text-primary hover:underline">other cenote tours</Link> or <Link to="/combo-tours/coba-ruins" className="text-primary hover:underline">Coba ruins combo</Link>.
          </p>
          <TipBox
            type="info"
            title="Cenote Swimming Tips"
            content="Bring biodegradable sunscreen (regular sunscreen is prohibited), a waterproof camera, and water shoes for the stone steps. Life vests are provided free of charge. The cenote has changing rooms, lockers ($2), and a small café."
          />
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-8 text-center">About Cenote Ik Kil</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Waves, title: "85 ft Deep", desc: "A dramatic open-air cenote with 85-foot limestone walls and crystal-clear turquoise water." },
              { icon: Leaf, title: "Natural Beauty", desc: "Hanging vines, small waterfalls, and tropical vegetation create a magical swimming grotto." },
              { icon: Droplets, title: "79°F Year-Round", desc: "Constant comfortable temperature regardless of season. Perfect for swimming any time of year." },
              { icon: Camera, title: "Instagram Famous", desc: "One of the most photographed natural swimming spots in Mexico. Stunning from every angle." },
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
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-2 text-center">Cenote Combo Tours</h2>
          <p className="text-center text-muted-foreground mb-8">{comboTours.length} combo tours with cenote swimming</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {comboTours.map((tour) => (<TourCard key={tour.id} tour={tour} />))}
          </div>
        </div>
      </section>

      <div className="container py-8"><TrustBadges /></div>
      <CTASection />

      <section className="py-12 bg-muted/30 border-t border-border">
        <div className="container">
          <h2 className="font-heading font-semibold text-lg mb-6">More Combo Tours</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "Coba Ruins Combo", href: "/combo-tours/coba-ruins" },
              { label: "Multi-Day Yucatan", href: "/combo-tours/multi-day-yucatan" },
              { label: "Cenote Tours", href: "/tours/cenote-tours" },
              { label: "Day Tours", href: "/tours/day-tours" },
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

export default CenoteIkKilComboPage;
