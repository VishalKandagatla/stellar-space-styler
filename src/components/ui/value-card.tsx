
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ValueCardColor = 'blue' | 'purple' | 'green' | 'yellow' | 'red';

export interface ValueCardProps {
  color?: ValueCardColor;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

const ValueCard = ({ 
  color = 'blue', 
  title, 
  description, 
  icon, 
  className 
}: ValueCardProps) => {
  const getColorClasses = (): { bg: string; icon: string } => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-fin-blue/5 hover:bg-fin-blue/10',
          icon: 'bg-fin-blue'
        };
      case 'purple':
        return {
          bg: 'bg-fin-purple/5 hover:bg-fin-purple/10',
          icon: 'bg-fin-purple'
        };
      case 'green':
        return {
          bg: 'bg-fin-green/5 hover:bg-fin-green/10',
          icon: 'bg-fin-green'
        };
      case 'yellow':
        return {
          bg: 'bg-fin-yellow/5 hover:bg-fin-yellow/10',
          icon: 'bg-fin-yellow'
        };
      case 'red':
        return {
          bg: 'bg-fin-red/5 hover:bg-fin-red/10',
          icon: 'bg-fin-red'
        };
      default:
        return {
          bg: 'bg-fin-blue/5 hover:bg-fin-blue/10',
          icon: 'bg-fin-blue'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className={cn(`flex gap-4 p-4 rounded-lg ${colors.bg} transition-colors`, className)}>
      <div className={`h-8 w-8 rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}>
        {icon || <Check className="h-4 w-4 text-white" />}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
