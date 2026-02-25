import { Shield, Clock, Award, HeartHandshake } from "lucide-react";
import { useLocale } from "@/lib/i18n/useLocale";

const WhyChooseUs = () => {
  const { t } = useLocale();

  const benefits = [
    { icon: Shield, title: t("why.benefit1.title"), description: t("why.benefit1.desc") },
    { icon: Clock, title: t("why.benefit2.title"), description: t("why.benefit2.desc") },
    { icon: Award, title: t("why.benefit3.title"), description: t("why.benefit3.desc") },
    { icon: HeartHandshake, title: t("why.benefit4.title"), description: t("why.benefit4.desc") },
  ];

  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("why.label")}</span>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-3">{t("why.h2")}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">{t("why.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="text-center p-6 rounded-lg bg-background shadow-card hover:shadow-card-hover transition-shadow">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                <b.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
