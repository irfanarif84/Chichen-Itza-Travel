import SEOHead from "@/components/common/SEOHead";
import { getPageMeta } from "@/lib/seo";
import { createFAQSchema } from "@/lib/seo";
import { homepageFAQs } from "@/lib/faqData";
import Hero from "@/components/features/home/Hero";
import PopularTours from "@/components/features/home/PopularTours";
import WhyChooseUs from "@/components/features/home/WhyChooseUs";
import SocialProof from "@/components/features/home/SocialProof";
import VideoSection from "@/components/features/home/VideoSection";
import DepartureSection from "@/components/features/home/DepartureSection";
import TrustBadges from "@/components/features/booking/TrustBadges";
import FAQSection from "@/components/common/FAQ";
import CTASection from "@/components/features/home/CTASection";
import QuickBookingForm from "@/components/features/booking/QuickBookingForm";
import AnimatedSection from "@/components/common/AnimatedSection";

const meta = getPageMeta({
  title: "Chichen Itza Tours – Best Guided Tours & Day Trips 2026",
  description: "Book the best Chichen Itza tours from Cancun, Playa del Carmen & Tulum. Private tours, sunrise visits, cenote combos. Free cancellation & instant confirmation.",
  canonical: "/",
  jsonLd: createFAQSchema(homepageFAQs),
});

const Index = () => (
  <>
    <SEOHead meta={meta} />
    <Hero />

    {/* Quick booking + trust strip */}
    <AnimatedSection>
      <section className="py-8 -mt-12 relative z-10">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <TrustBadges />
            </div>
            <div className="lg:-mt-20">
              <QuickBookingForm />
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>

    <AnimatedSection>
      <PopularTours />
    </AnimatedSection>
    <AnimatedSection>
      <VideoSection />
    </AnimatedSection>
    <AnimatedSection>
      <WhyChooseUs />
    </AnimatedSection>
    <AnimatedSection>
      <SocialProof />
    </AnimatedSection>
    <AnimatedSection>
      <DepartureSection />
    </AnimatedSection>
    <AnimatedSection>
      <FAQSection faqs={homepageFAQs} subtitle="Everything you need to know before visiting Chichen Itza." />
    </AnimatedSection>
    <AnimatedSection>
      <CTASection />
    </AnimatedSection>
  </>
);

export default Index;
