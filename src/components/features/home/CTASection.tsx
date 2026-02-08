import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-16 lg:py-20 bg-gradient-cta text-primary-foreground">
    <div className="container text-center">
      <h2 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
        Ready to Explore Chichen Itza?
      </h2>
      <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
        Book your tour today and experience one of the world's most incredible archaeological wonders. Free cancellation on all bookings.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-bold" asChild>
          <Link to="/tours">
            Browse All Tours <ArrowRight className="h-5 w-5 ml-1" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-semibold" asChild>
          <Link to="/practical/contact">Request a Free Quote</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;