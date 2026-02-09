import { AlertCircle, CheckCircle, Info, Lightbulb } from 'lucide-react';

interface TipBoxProps {
  type: 'success' | 'info' | 'warning' | 'tip';
  title: string;
  content: string;
}

export default function TipBox({ type, title, content }: TipBoxProps) {
  const config = {
    success: {
      bg: 'bg-success/5',
      border: 'border-success',
      icon: CheckCircle,
      iconColor: 'text-success'
    },
    info: {
      bg: 'bg-secondary/5',
      border: 'border-secondary',
      icon: Info,
      iconColor: 'text-secondary'
    },
    warning: {
      bg: 'bg-accent/5',
      border: 'border-accent',
      icon: AlertCircle,
      iconColor: 'text-accent'
    },
    tip: {
      bg: 'bg-primary/5',
      border: 'border-primary',
      icon: Lightbulb,
      iconColor: 'text-primary'
    }
  };

  const { bg, border, icon: Icon, iconColor } = config[type];

  return (
    <div className={`${bg} ${border} border-l-4 rounded-r-lg p-6`}>
      <div className="flex gap-3">
        <Icon className={`w-6 h-6 ${iconColor} flex-shrink-0`} />
        <div>
          <h4 className="font-semibold text-foreground mb-2">{title}</h4>
          <p className="text-foreground">{content}</p>
        </div>
      </div>
    </div>
  );
}
