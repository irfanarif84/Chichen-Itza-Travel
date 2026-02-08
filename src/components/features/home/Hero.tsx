import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-chichen-itza.jpg";

const Hero = () => (
  <section className="relative min-h-[85vh] flex items-center">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src={heroImage}
        alt="El Castillo pyramid at Chichen Itza during golden hour sunset"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-hero" />
    </div>

    {/* Content */}
    <div className="container relative z-10 py-20">
      <div className="max-w-2xl">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-primary-foreground/90 text-sm font-medium">
            Rated 4.8/5 from 10,000+ travelers
          </span>
        </div>

        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
          Best Chichen Itza Tours & Day Trips 2026
        </h1>

        <p className="text-lg sm:text-xl text-primary-foreground/85 mb-6 max-w-lg leading-relaxed">
          Explore one of the New Seven Wonders of the World. Book guided tours from Cancún, Playa del Carmen & Tulum with free cancellation.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <Button variant="hero" size="lg" asChild>
            <Link to="/tours">
              Explore All Tours <ArrowRight className="h-5 w-5 ml-1" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-semibold" asChild>
            <Link to="/practical/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm">
          {["Free Cancellation", "Instant Confirmation", "Best Price Guarantee"].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-success" /> {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Hero;