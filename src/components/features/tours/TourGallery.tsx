import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface TourGalleryProps {
  images: string[];
  heroImage?: string;
  tourTitle: string;
}

const TourGallery = ({ images, heroImage, tourTitle }: TourGalleryProps) => {
  const gallery = images.length > 0 ? images : heroImage ? [heroImage, heroImage, heroImage, heroImage] : [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null)), [gallery.length]);
  const next = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % gallery.length : null)), [gallery.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, close, prev, next]);

  if (gallery.length === 0) return null;

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-2 gap-2 rounded-lg overflow-hidden">
        {gallery.slice(0, 4).map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View ${tourTitle} photo ${i + 1}`}
          >
            <img
              src={src}
              alt={`${tourTitle} - photo ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center"
          onClick={close}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 text-primary-foreground/80 hover:text-primary-foreground p-2"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 text-primary-foreground/80 hover:text-primary-foreground p-2"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 text-primary-foreground/80 hover:text-primary-foreground p-2"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          <img
            src={gallery[lightboxIndex]}
            alt={`${tourTitle} - photo ${lightboxIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          <div className="absolute bottom-4 text-primary-foreground/70 text-sm">
            {lightboxIndex + 1} of {gallery.length}
          </div>
        </div>
      )}
    </>
  );
};

export default TourGallery;
