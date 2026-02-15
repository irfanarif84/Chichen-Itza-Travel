import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ShieldCheck, Clock } from "lucide-react";

interface CTABoxProps {
  title?: string;
  subtitle?: string;
  phone?: string;
}

const CTABox = ({
  title = "Need Help Choosing?",
  subtitle = "Our travel experts are ready to help you find the perfect tour.",
  phone = "+52-984-123-4567",
}: CTABoxProps) => (
  <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
    <h3 className="font-heading font-bold text-base mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground mb-4">{subtitle}</p>

    <div className="space-y-2 mb-4">
      <Button variant="cta" className="w-full" size="default" asChild>
        <Link to="/practical/contact">
          <MessageCircle className="h-4 w-4 mr-1.5" /> Get Free Quote
        </Link>
      </Button>
      <Button variant="outline" className="w-full" size="default" asChild>
        <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
          <Phone className="h-4 w-4 mr-1.5" /> Call Us
        </a>
      </Button>
    </div>

    <div className="space-y-2 text-xs text-muted-foreground">
      <span className="flex items-center gap-1.5">
        <ShieldCheck className="h-3.5 w-3.5 text-success" /> Free cancellation up to 24h
      </span>
      <span className="flex items-center gap-1.5">
        <Clock className="h-3.5 w-3.5 text-primary" /> Response within 1 hour
      </span>
    </div>
  </div>
);

export default CTABox;
