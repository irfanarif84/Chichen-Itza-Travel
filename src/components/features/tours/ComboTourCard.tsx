import { Clock, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComboTourCardProps {
  title: string;
  price: number;
  description: string;
  duration: string;
  link: string;
  image?: string;
}

export default function ComboTourCard({
  title,
  price,
  description,
  duration,
  link,
  image = '/images/default-combo-tour.jpg'
}: ComboTourCardProps) {
  return (
    <div className="group border border-border rounded-lg overflow-hidden hover:shadow-card-hover transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={`${title} combo tour`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full font-semibold">
          ${price}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-foreground">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4">
          {description}
        </p>

        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="w-4 h-4" />
            <span>From ${price}</span>
          </div>
        </div>
        
        <Link 
          to={link}
          className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
        >
          View Details
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
