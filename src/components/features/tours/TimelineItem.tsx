import { Clock } from 'lucide-react';

interface TimelineItemProps {
  time: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ 
  time, 
  title, 
  description, 
  isLast = false 
}: TimelineItemProps) {
  return (
    <div className="flex gap-4">
      {/* Time Badge */}
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary">
          <span className="text-sm font-bold text-primary">{time}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow pb-8 border-l-2 border-border pl-6 relative">
        {!isLast && (
          <div className="absolute left-0 top-0 w-0.5 h-full bg-gradient-to-b from-primary/20 to-transparent" />
        )}
        
        <div className="flex items-start gap-2 mb-2">
          <Clock className="w-5 h-5 text-primary mt-0.5" />
          <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
