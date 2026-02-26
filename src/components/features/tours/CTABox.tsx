import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ShieldCheck, Clock } from "lucide-react";
import { useLocale } from "@/lib/i18n/useLocale";
import { LocaleLink } from "@/components/LocaleLink";

interface CTABoxProps {
  title?: string;
  subtitle?: string;
  phone?: string;
}

const CTABox = ({ title, subtitle, phone = "+52-984-123-4567" }: CTABoxProps) => {
  const { isEs } = useLocale();
  const displayTitle = title || (isEs ? "¿Necesitas Ayuda para Elegir?" : "Need Help Choosing?");
  const displaySubtitle = subtitle || (isEs ? "Nuestros expertos en viajes están listos para ayudarte a encontrar el tour perfecto." : "Our travel experts are ready to help you find the perfect tour.");

  return (
    <div className="bg-primary/5 border border-primary/20 rounded-lg p-5">
      <h3 className="font-heading font-bold text-base mb-2">{displayTitle}</h3>
      <p className="text-sm text-muted-foreground mb-4">{displaySubtitle}</p>

      <div className="space-y-2 mb-4">
        <Button variant="cta" className="w-full" size="default" asChild>
          <LocaleLink to="/practical/contact">
            <MessageCircle className="h-4 w-4 mr-1.5" /> {isEs ? "Obtener Cotización Gratis" : "Get Free Quote"}
          </LocaleLink>
        </Button>
        <Button variant="outline" className="w-full" size="default" asChild>
          <a href={`tel:${phone.replace(/[^+\d]/g, "")}`}>
            <Phone className="h-4 w-4 mr-1.5" /> {isEs ? "Llámanos" : "Call Us"}
          </a>
        </Button>
      </div>

      <div className="space-y-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-success" /> {isEs ? "Cancelación gratuita hasta 24h" : "Free cancellation up to 24h"}
        </span>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5 text-primary" /> {isEs ? "Respuesta en menos de 1 hora" : "Response within 1 hour"}
        </span>
      </div>
    </div>
  );
};

export default CTABox;
