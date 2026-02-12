import { Link } from "react-router-dom";
import { Star, ArrowRight, Quote } from "lucide-react";
import SEOHead from "@/components/common/SEOHead";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { getPageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";

const meta = getPageMeta({
  title: "Testimonials – 10,000+ Happy Travelers | Chichen Itza Tours",
  description: "Read real reviews from 10,000+ travelers who loved our Chichen Itza tours. Rated 4.8/5 stars. See why we're the #1 rated tour operator.",
  canonical: "/practical/testimonials",
});

const reviews = [
  { name: "Sarah & Mark T.", location: "Austin, TX", tour: "Private VIP Tour", rating: 5, date: "January 2026", text: "Absolutely incredible experience! Our guide Carlos was a walking encyclopedia of Mayan history. The skip-the-line access meant we had the pyramid practically to ourselves. Worth every penny." },
  { name: "James L.", location: "London, UK", tour: "Classic Day Tour", rating: 5, date: "December 2025", text: "Best organized tour I've ever been on. The cenote swim at Ik Kil was the highlight — crystal clear water with vines hanging down. Lunch was delicious too." },
  { name: "Maria G.", location: "São Paulo, Brazil", tour: "Sunrise Tour", rating: 5, date: "November 2025", text: "Waking up at 3:30 AM was tough, but watching the sunrise illuminate El Castillo was absolutely magical. Our photographer guide helped us capture amazing shots." },
  { name: "The Chen Family", location: "Vancouver, Canada", tour: "Family Adventure", rating: 5, date: "January 2026", text: "Perfect for our family with 3 kids (ages 5, 8, 12). The activity booklets kept them engaged, and the storytelling made history fun. Safe cenote swimming too!" },
  { name: "David & Rosa P.", location: "Chicago, IL", tour: "Budget Express Tour", rating: 4, date: "October 2025", text: "Great value for the price! The guide was knowledgeable and the transport was comfortable. Only wish we had more time at the site, but for $49 you can't complain." },
  { name: "Emma W.", location: "Sydney, Australia", tour: "Cenote Ik Kil Combo", rating: 5, date: "December 2025", text: "Swimming in the cenote after exploring the ruins was the perfect combination. Our guide was funny, informative, and passionate about Mayan culture." },
  { name: "Robert & Linda M.", location: "Toronto, Canada", tour: "Private VIP Tour", rating: 5, date: "February 2026", text: "The hacienda lunch was spectacular — we felt like royalty. Our private guide adjusted the pace to our interests and we learned so much about the astronomical precision of the Maya." },
  { name: "Akiko S.", location: "Tokyo, Japan", tour: "Sunrise Tour", rating: 5, date: "January 2026", text: "I'm a photographer and this tour was a dream. Early access, perfect lighting, and a guide who knew exactly where to stand for the best shots. My photos look professional!" },
  { name: "Francisco & Ana R.", location: "Mexico City", tour: "Night Light Show", rating: 4, date: "November 2025", text: "The light and sound show projected onto El Castillo at night was breathtaking. A completely different experience from daytime visits. Highly recommend seeing both." },
];

const TestimonialsPage = () => (
  <>
    <SEOHead meta={meta} />
    <div className="container py-6">
      <Breadcrumbs items={[{ label: "Testimonials" }]} />

      <div className="text-center mb-10 mt-6">
        <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-3">
          What Our Travelers Say
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
          Over 10,000 travelers have trusted us with their Chichen Itza experience. Here's what they have to say.
        </p>
        <div className="flex items-center justify-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-accent text-accent" />
            ))}
          </div>
          <span className="font-heading font-bold text-lg">4.8/5</span>
          <span className="text-muted-foreground text-sm">from 10,000+ reviews</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {reviews.map((r, i) => (
          <div key={i} className="bg-card rounded-lg shadow-card p-6 flex flex-col">
            <Quote className="h-6 w-6 text-primary/30 mb-3" />
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">"{r.text}"</p>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className={`h-4 w-4 ${j < r.rating ? "fill-accent text-accent" : "text-muted"}`} />
              ))}
            </div>
            <p className="font-heading font-semibold text-sm">{r.name}</p>
            <p className="text-xs text-muted-foreground">{r.location} • {r.tour}</p>
            <p className="text-xs text-muted-foreground">{r.date}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center bg-card rounded-lg shadow-card p-8">
        <h2 className="font-heading font-bold text-2xl mb-2">Join 10,000+ Happy Travelers</h2>
        <p className="text-muted-foreground mb-4">Book your Chichen Itza tour today with free cancellation.</p>
        <Button variant="cta" size="lg" asChild>
          <Link to="/tours">Explore Tours <ArrowRight className="h-4 w-4 ml-1" /></Link>
        </Button>
      </div>
    </div>
  </>
);

export default TestimonialsPage;
