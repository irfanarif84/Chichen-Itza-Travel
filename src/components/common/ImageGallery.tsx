import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function ImageGallery({ images, columns = 3 }: ImageGalleryProps) {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const gridCols = {
    2: "grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4",
  };

  return (
    <>
      <div className={`grid ${gridCols[columns]} gap-3`}>
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => { setActiveIdx(i); setOpen(true); }}
            className="overflow-hidden rounded-lg aspect-[4/3] focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl p-0 bg-foreground/95 border-none">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-background/20 flex items-center justify-center text-background hover:bg-background/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={images[activeIdx]?.src}
            alt={images[activeIdx]?.alt}
            className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            loading="lazy"
            decoding="async"
          />
          <p className="text-center text-background/80 text-sm py-3">
            {images[activeIdx]?.alt}
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
}
