import { MessageCircle } from "lucide-react";

const WA_HREF =
  "https://wa.me/18145939266?text=Hi!%20I%27d%20like%20to%20book%20a%20Chichen%20Itza%20tour";

export default function WhatsAppButton() {
  return (
    <>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes wa-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4); }
            50%       { box-shadow: 0 0 0 8px rgba(37, 211, 102, 0); }
          }
          .wa-pulse { animation: wa-pulse 2.5s ease-in-out infinite; }
        }
        @media (min-width: 768px) {
          .wa-btn:hover {
            width: auto;
            padding-left: 1rem;
            padding-right: 1.25rem;
          }
          .wa-btn:hover .wa-text {
            max-width: 160px;
            opacity: 1;
            margin-right: 8px;
          }
        }
      `}</style>
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book via WhatsApp"
        className="wa-btn wa-pulse fixed z-50 flex items-center justify-center overflow-hidden rounded-full w-12 h-12 right-4 bottom-20 md:w-14 md:h-14 md:right-6 md:bottom-6 transition-all duration-300"
        style={{ backgroundColor: "#25D366" }}
      >
        <span className="wa-text max-w-0 overflow-hidden opacity-0 whitespace-nowrap text-white text-sm font-semibold transition-all duration-300">
          Book via WhatsApp
        </span>
        <MessageCircle className="text-white shrink-0" size={24} />
      </a>
    </>
  );
}
