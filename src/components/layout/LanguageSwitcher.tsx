import { Link } from "react-router-dom";
import { useLocale } from "@/lib/i18n/useLocale";

const LanguageSwitcher = () => {
  const { locale, alternatePath } = useLocale();
  const paths = alternatePath();

  return (
    <div className="flex items-center gap-1 text-sm font-medium">
      <Link
        to={paths.en}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "en"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Switch to English"
      >
        EN
      </Link>
      <Link
        to={paths.es}
        className={`px-2 py-1 rounded transition-colors ${
          locale === "es"
            ? "bg-primary text-primary-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Cambiar a Español"
      >
        ES
      </Link>
    </div>
  );
};

export default LanguageSwitcher;
