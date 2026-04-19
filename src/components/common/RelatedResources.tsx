import { ArrowRight } from "lucide-react";
import LocaleLink from "@/components/LocaleLink";
import { useLocale } from "@/lib/i18n/useLocale";

interface ResourceLink {
  to: string;
  label: string;
  labelEs: string;
  desc: string;
  descEs: string;
}

const TOP_TOURS: ResourceLink[] = [
  {
    to: "/tours/day-tours",
    label: "Chichen Itza Day Tours",
    labelEs: "Tours de un Día a Chichén Itzá",
    desc: "All-inclusive group day trips with cenote and lunch.",
    descEs: "Excursiones de un día con cenote y comida incluidos.",
  },
  {
    to: "/tours/private-tours",
    label: "Private Chichen Itza Tours",
    labelEs: "Tours Privados a Chichén Itzá",
    desc: "Your own guide, vehicle and itinerary.",
    descEs: "Tu propio guía, vehículo e itinerario.",
  },
  {
    to: "/tours/sunrise-tours",
    label: "Sunrise Tours",
    labelEs: "Tours al Amanecer",
    desc: "Beat the crowds and the heat — enter at 8 a.m.",
    descEs: "Evita multitudes y calor — entra a las 8 a.m.",
  },
  {
    to: "/tours-from/cancun",
    label: "Tours from Cancún",
    labelEs: "Tours desde Cancún",
    desc: "Hotel pickup from every Cancún resort.",
    descEs: "Recogida en hoteles de toda la zona de Cancún.",
  },
  {
    to: "/tours-from/playa-del-carmen",
    label: "Tours from Playa del Carmen",
    labelEs: "Tours desde Playa del Carmen",
    desc: "Direct departures from 5th Avenue and resorts.",
    descEs: "Salidas directas desde la 5ta Avenida y resorts.",
  },
  {
    to: "/tours-from/tulum",
    label: "Tours from Tulum",
    labelEs: "Tours desde Tulum",
    desc: "Combine Chichen Itza with the Tulum Riviera.",
    descEs: "Combina Chichén Itzá con la Riviera de Tulum.",
  },
];

const TOP_GUIDES: ResourceLink[] = [
  {
    to: "/guide/best-time-to-visit",
    label: "Best Time to Visit",
    labelEs: "Mejor Época para Visitar",
    desc: "Month-by-month weather, crowds and prices.",
    descEs: "Clima, multitudes y precios mes a mes.",
  },
  {
    to: "/guide/what-to-bring",
    label: "What to Bring",
    labelEs: "Qué Llevar",
    desc: "Complete packing list for visitors.",
    descEs: "Lista completa de equipaje para visitantes.",
  },
  {
    to: "/guide/entrance-fees",
    label: "Entrance Fees",
    labelEs: "Tarifas de Entrada",
    desc: "Updated 2026 ticket pricing and discounts.",
    descEs: "Precios y descuentos actualizados 2026.",
  },
  {
    to: "/guide/how-to-get-there",
    label: "How to Get There",
    labelEs: "Cómo Llegar",
    desc: "Tours, rental cars, buses — fully compared.",
    descEs: "Tours, autos, autobuses — comparados.",
  },
  {
    to: "/guide/dress-code-and-rules",
    label: "Dress Code & Rules",
    labelEs: "Código de Vestimenta y Reglas",
    desc: "What to wear, what's prohibited on site.",
    descEs: "Qué vestir, qué está prohibido en el sitio.",
  },
  {
    to: "/guide/photography-tips",
    label: "Photography Tips",
    labelEs: "Consejos de Fotografía",
    desc: "Best angles, golden hours and gear rules.",
    descEs: "Mejores ángulos, horas doradas y reglas de equipo.",
  },
];

const RelatedResources = ({
  showTours = true,
  showGuides = true,
  className = "",
}: {
  showTours?: boolean;
  showGuides?: boolean;
  className?: string;
}) => {
  const { isEs } = useLocale();

  return (
    <section className={`border-t border-border pt-10 mt-12 ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {showTours && (
          <div>
            <h2 className="font-heading font-bold text-2xl mb-1">
              {isEs ? "Tours Populares a Chichén Itzá" : "Popular Chichen Itza Tours"}
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              {isEs
                ? "Los tours mejor calificados, todos con cancelación gratuita."
                : "Our top-rated tours — all with free cancellation."}
            </p>
            <ul className="space-y-3">
              {TOP_TOURS.map((t) => (
                <li key={t.to}>
                  <LocaleLink
                    to={t.to}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {isEs ? t.labelEs : t.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isEs ? t.descEs : t.desc}
                      </p>
                    </div>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        )}

        {showGuides && (
          <div>
            <h2 className="font-heading font-bold text-2xl mb-1">
              {isEs ? "Guías de Planificación" : "Planning Guides"}
            </h2>
            <p className="text-sm text-muted-foreground mb-5">
              {isEs
                ? "Todo lo que necesitas saber antes de visitar."
                : "Everything you need to know before you visit."}
            </p>
            <ul className="space-y-3">
              {TOP_GUIDES.map((g) => (
                <li key={g.to}>
                  <LocaleLink
                    to={g.to}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 text-primary mt-1 shrink-0 group-hover:translate-x-1 transition-transform" />
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {isEs ? g.labelEs : g.label}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isEs ? g.descEs : g.desc}
                      </p>
                    </div>
                  </LocaleLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default RelatedResources;
