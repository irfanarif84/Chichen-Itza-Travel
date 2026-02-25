import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";
import heroImage from "@/assets/hero-chichen-itza.jpg";
import { useLocale } from "@/lib/i18n/useLocale";

const Hero = () => {
  const { t, localePath } = useLocale();

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.img
          src={heroImage}
          alt="El Castillo pyramid at Chichen Itza during golden hour sunset"
          className="w-full h-full object-cover"
          loading="eager"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-primary-foreground/90 text-sm font-medium">
              {t("hero.rating")}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight">
            {t("hero.h1")}
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/85 mb-6 max-w-lg leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <motion.div
            className="flex flex-wrap gap-3 mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
          >
            <Button variant="hero" size="lg" asChild>
              <Link to={localePath("/tours")}>
                {t("hero.cta")} <ArrowRight className="h-5 w-5 ml-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 hover:text-primary-foreground font-semibold" asChild>
              <Link to={localePath("/practical/contact")}>{t("hero.quote")}</Link>
            </Button>
          </motion.div>

          <div className="flex flex-wrap gap-4 text-primary-foreground/80 text-sm">
            {[t("hero.freeCancellation"), t("hero.instantConfirmation"), t("hero.bestPriceGuarantee")].map((txt) => (
              <span key={txt} className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-success" /> {txt}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
