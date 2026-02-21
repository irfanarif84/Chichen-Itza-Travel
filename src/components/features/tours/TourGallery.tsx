import { useState, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

interface TourGalleryProps {
  images: string[];
  altTexts?: string[];
  heroImage?: string;
  tourTitle: string;
}

const TourGallery = ({ images, altTexts, heroImage, tourTitle }: TourGalleryProps) => {
  const gallery = images.length > 0 ? images : heroImage ? [heroImage] : [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const thumbStripRef = useRef<HTMLDivElement>(null);
  const lightboxThumbRef = useRef<HTMLDivElement>(null);

  const getAlt = (i: number) =>
    altTexts?.[i] ?? `${tourTitle} - photo ${i + 1}`;

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + gallery.length) % gallery.length : null)),
    [gallery.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % gallery.length : null)),
    [gallery.length]
  );

  // Keyboard nav
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  // Scroll active thumb into view in lightbox
  useEffect(() => {
    if (lightboxIndex === null || !lightboxThumbRef.current) return;
    const active = lightboxThumbRef.current.children[lightboxIndex] as HTMLElement;
    active?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [lightboxIndex]);

  if (gallery.length === 0) return null;

  const VISIBLE_THUMBS = 8;

  return (
    <>
      {/* ── Masonry Hero Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 rounded-xl overflow-hidden">
        {/* Featured large image */}
        <button
          onClick={() => setLightboxIndex(0)}
          className="relative md:col-span-3 aspect-[4/3] md:aspect-auto md:row-span-2 overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`View ${tourTitle} featured photo`}
        >
          <img
            src={gallery[0]}
            alt={getAlt(0)}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="eager"
            width={800}
            height={600}
            decoding="async"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
        </button>

        {/* Top-right image */}
        {gallery.length > 1 && (
          <button
            onClick={() => setLightboxIndex(1)}
            className="relative md:col-span-2 aspect-[4/3] overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View ${tourTitle} photo 2`}
          >
            <img
              src={gallery[1]}
              alt={getAlt(1)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={600}
              decoding="async"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
          </button>
        )}

        {/* Bottom-right image with "View all" overlay */}
        {gallery.length > 2 && (
          <button
            onClick={() => setLightboxIndex(2)}
            className="relative md:col-span-2 aspect-[4/3] overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`View ${tourTitle} photo 3`}
          >
            <img
              src={gallery[2]}
              alt={getAlt(2)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={600}
              decoding="async"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
            {gallery.length > 3 && (
              <div className="absolute bottom-3 right-3 bg-background/90 backdrop-blur-sm text-foreground text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                <Images className="h-3.5 w-3.5" />
                View all {gallery.length} photos
              </div>
            )}
          </button>
        )}
      </div>

      {/* ── Thumbnail Strip ── */}
      {gallery.length > 3 && (
        <div className="mt-2 relative">
          <div
            ref={thumbStripRef}
            className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {gallery.slice(3, 3 + VISIBLE_THUMBS).map((src, idx) => {
              const realIdx = idx + 3;
              return (
                <button
                  key={realIdx}
                  onClick={() => setLightboxIndex(realIdx)}
                  className="relative flex-shrink-0 w-24 h-16 sm:w-28 sm:h-[4.5rem] rounded-lg overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label={`View ${tourTitle} photo ${realIdx + 1}`}
                >
                  <img
                    src={src}
                    alt={getAlt(realIdx)}
                    className="w-full h-full object-cover transition-transform duration-200 group-hover:scale-110"
                    loading="lazy"
                    width={112}
                    height={72}
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors" />
                </button>
              );
            })}

            {/* "More" button if gallery exceeds visible thumbs */}
            {gallery.length > 3 + VISIBLE_THUMBS && (
              <button
                onClick={() => setLightboxIndex(3 + VISIBLE_THUMBS)}
                className="flex-shrink-0 w-24 h-16 sm:w-28 sm:h-[4.5rem] rounded-lg bg-muted flex items-center justify-center text-xs font-semibold text-muted-foreground hover:bg-muted/80 transition-colors"
                aria-label={`View remaining ${gallery.length - 3 - VISIBLE_THUMBS} photos`}
              >
                +{gallery.length - 3 - VISIBLE_THUMBS} more
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-foreground/95 flex flex-col items-center justify-center"
          onClick={close}
          role="dialog"
          aria-label="Image gallery lightbox"
          aria-modal="true"
        >
          {/* Close */}
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 z-10 text-primary-foreground/80 hover:text-primary-foreground p-2 rounded-full hover:bg-primary-foreground/10 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute top-5 left-5 text-primary-foreground/70 text-sm font-medium">
            {lightboxIndex + 1} / {gallery.length}
          </div>

          {/* Nav buttons */}
          {gallery.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/70 hover:text-primary-foreground p-3 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 text-primary-foreground/70 hover:text-primary-foreground p-3 rounded-full hover:bg-primary-foreground/10 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Main image */}
          <img
            src={gallery[lightboxIndex]}
            alt={getAlt(lightboxIndex)}
            className="max-h-[70vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Alt text caption */}
          <p className="mt-3 text-primary-foreground/60 text-sm text-center max-w-lg px-4">
            {getAlt(lightboxIndex)}
          </p>

          {/* Bottom thumbnail strip */}
          {gallery.length > 1 && (
            <div
              ref={lightboxThumbRef}
              className="mt-4 flex gap-1.5 overflow-x-auto max-w-[90vw] pb-2 px-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              onClick={(e) => e.stopPropagation()}
            >
              {gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setLightboxIndex(i)}
                  className={`flex-shrink-0 w-14 h-10 rounded overflow-hidden border-2 transition-all ${
                    i === lightboxIndex
                      ? "border-primary opacity-100 scale-105"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                  aria-label={`Jump to photo ${i + 1}`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default TourGallery;
