import { Check } from 'lucide-react';

interface InfoBoxProps {
  title: string;
  icon?: '✓' | '🎒' | string;
  items: string[];
  variant?: 'default' | 'success' | 'info';
}

export default function InfoBox({ 
  title, 
  icon = '✓', 
  items, 
  variant = 'default' 
}: InfoBoxProps) {
  const variantStyles = {
    default: 'bg-card border-border',
    success: 'bg-success/5 border-success',
    info: 'bg-secondary/5 border-secondary'
  };

  const iconComponent = icon === '✓' ? (
    <Check className="w-5 h-5 text-success" />
  ) : (
    <span className="text-2xl">{icon}</span>
  );

  return (
    <div className={`border-2 rounded-lg p-6 ${variantStyles[variant]}`}>
      <div className="flex items-center gap-3 mb-4">
        {iconComponent}
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
