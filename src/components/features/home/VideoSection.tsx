import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLocale } from "@/lib/i18n/useLocale";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLocale();

  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">{t("video.label")}</span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-4">{t("video.h2")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{t("video.description")}</p>
            <ul className="space-y-3 mb-6">
              {[t("video.bullet1"), t("video.bullet2"), t("video.bullet3"), t("video.bullet4")].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="lg" onClick={() => setIsOpen(true)}>
              <Play className="h-5 w-5 mr-2" /> {t("video.watchVideo")}
            </Button>
          </div>

          {/* Video thumbnail */}
          <div className="relative">
            <div
              className="relative rounded-xl overflow-hidden cursor-pointer group aspect-video"
              onClick={() => setIsOpen(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&q=80"
                alt="El Castillo pyramid at Chichen Itza with tourists exploring"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-foreground/80 text-primary-foreground text-sm px-3 py-1 rounded">2:34</div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-lg -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>

      {/* Video modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-foreground border-none">
          <DialogTitle className="sr-only">Chichen Itza Tour Experience Video</DialogTitle>
          <DialogDescription className="sr-only">
            Watch our video showcasing the incredible experience of visiting Chichen Itza with our guided tours.
          </DialogDescription>
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-10 p-2 rounded-full bg-foreground/80 text-primary-foreground hover:bg-foreground transition-colors"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="aspect-video">
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Video player would embed here</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
