import { MapPin } from "lucide-react";

interface MapEmbedProps {
  title: string;
  from?: string;
  to?: string;
  address?: string;
  embedUrl?: string;
  className?: string;
}

const MapEmbed = ({
  title,
  from,
  to,
  address,
  embedUrl,
  className = "",
}: MapEmbedProps) => {
  // Generate Google Maps embed URL for directions
  const getEmbedUrl = () => {
    if (embedUrl) return embedUrl;
    
    if (from && to) {
      // Directions mode
      return `https://www.google.com/maps/embed/v1/directions?key=YOUR_API_KEY&origin=${encodeURIComponent(from)}&destination=${encodeURIComponent(to)}&mode=driving`;
    }
    
    if (address) {
      // Place mode
      return `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(address)}`;
    }

    // Default to Chichen Itza
    return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.4697377147385!2d-88.5687696!3d20.6842897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5138c6e391c0e7%3A0x7c5e4f58e7d3c827!2sChichen%20Itza!5e0!3m2!1sen!2smx!4v1234567890`;
  };

  return (
    <div className={`rounded-xl overflow-hidden bg-muted ${className}`}>
      <div className="flex items-center gap-2 p-4 bg-card border-b border-border">
        <MapPin className="h-5 w-5 text-primary" />
        <h3 className="font-heading font-semibold">{title}</h3>
        {from && to && (
          <span className="text-sm text-muted-foreground ml-auto">
            {from} → {to}
          </span>
        )}
      </div>
      
      <div className="aspect-video relative">
        {/* Placeholder - replace with actual Google Maps embed */}
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <div className="text-center p-6">
            <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground font-medium">Interactive Map</p>
            <p className="text-sm text-muted-foreground mt-1">
              {from && to ? `Route: ${from} to ${to}` : address || "Chichen Itza, Yucatán, Mexico"}
            </p>
            <p className="text-xs text-muted-foreground mt-4 max-w-sm mx-auto">
              Add your Google Maps API key to enable the interactive map. 
              Replace YOUR_API_KEY in the component.
            </p>
          </div>
        </div>
        
        {/* Uncomment when you have a valid API key */}
        {/* <iframe
          src={getEmbedUrl()}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={title}
        /> */}
      </div>

      {/* Quick info bar */}
      {from && to && (
        <div className="p-4 bg-card border-t border-border grid grid-cols-3 gap-4 text-center text-sm">
          <div>
            <p className="text-muted-foreground">Distance</p>
            <p className="font-semibold text-foreground">120 miles</p>
          </div>
          <div>
            <p className="text-muted-foreground">Drive Time</p>
            <p className="font-semibold text-foreground">2.5 hours</p>
          </div>
          <div>
            <p className="text-muted-foreground">Toll Road</p>
            <p className="font-semibold text-foreground">Available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MapEmbed;
