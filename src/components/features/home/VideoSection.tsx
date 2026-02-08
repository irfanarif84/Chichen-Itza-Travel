import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Experience the Wonder
            </span>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl mt-2 mb-4">
              Step Into Ancient Mayan History
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Chichen Itza isn't just ruins—it's a portal to an extraordinary civilization. 
              Watch as our expert guides bring the Temple of Kukulkan, the Great Ball Court, 
              and sacred cenotes to life with stories that have echoed through a thousand years.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Marvel at El Castillo, one of the New Seven Wonders",
                "Learn the secrets of Mayan astronomy and architecture",
                "Swim in crystal-clear sacred cenotes",
                "Savor authentic Yucatecan cuisine",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">✓</span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <Button variant="cta" size="lg" onClick={() => setIsOpen(true)}>
              <Play className="h-5 w-5 mr-2" /> Watch Video
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
              
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl transition-transform duration-300 group-hover:scale-110">
                  <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 bg-foreground/80 text-primary-foreground text-sm px-3 py-1 rounded">
                2:34
              </div>
            </div>

            {/* Decorative elements */}
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
            {/* Replace with actual YouTube embed or video */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <div className="text-center p-8">
                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Video player would embed here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Replace with YouTube embed: 
                  <code className="bg-muted-foreground/20 px-2 py-1 rounded ml-2">
                    &lt;iframe src="youtube.com/embed/VIDEO_ID"&gt;
                  </code>
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default VideoSection;
