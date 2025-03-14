
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export type ValueCardColor = 'blue' | 'purple' | 'green' | 'yellow' | 'red' | 'orange' | 'cyan';

export interface ValueCardProps {
  color?: ValueCardColor;
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  bordered?: boolean;
  compact?: boolean;
  onClick?: () => void;
}

const ValueCard = ({ 
  color = 'blue', 
  title, 
  description, 
  icon, 
  className,
  bordered = false,
  compact = false,
  onClick
}: ValueCardProps) => {
  const getColorClasses = (): { bg: string; icon: string; border: string } => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-fin-blue/5 hover:bg-fin-blue/10',
          icon: 'bg-fin-blue',
          border: 'border-fin-blue/20'
        };
      case 'purple':
        return {
          bg: 'bg-fin-purple/5 hover:bg-fin-purple/10',
          icon: 'bg-fin-purple',
          border: 'border-fin-purple/20'
        };
      case 'green':
        return {
          bg: 'bg-fin-green/5 hover:bg-fin-green/10',
          icon: 'bg-fin-green',
          border: 'border-fin-green/20'
        };
      case 'yellow':
        return {
          bg: 'bg-fin-yellow/5 hover:bg-fin-yellow/10',
          icon: 'bg-fin-yellow',
          border: 'border-fin-yellow/20'
        };
      case 'red':
        return {
          bg: 'bg-fin-red/5 hover:bg-fin-red/10',
          icon: 'bg-fin-red',
          border: 'border-fin-red/20'
        };
      case 'orange':
        return {
          bg: 'bg-fin-orange/5 hover:bg-fin-orange/10',
          icon: 'bg-fin-orange',
          border: 'border-fin-orange/20'
        };
      case 'cyan':
        return {
          bg: 'bg-fin-cyan/5 hover:bg-fin-cyan/10',
          icon: 'bg-fin-cyan',
          border: 'border-fin-cyan/20'
        };
      default:
        return {
          bg: 'bg-fin-blue/5 hover:bg-fin-blue/10',
          icon: 'bg-fin-blue',
          border: 'border-fin-blue/20'
        };
    }
  };

  const colors = getColorClasses();
  const padding = compact ? 'p-3' : 'p-4';
  const gap = compact ? 'gap-3' : 'gap-4';
  const iconSize = compact ? 'h-6 w-6' : 'h-8 w-8';
  const borderStyle = bordered ? `border ${colors.border}` : '';
  const cursorStyle = onClick ? 'cursor-pointer' : '';

  return (
    <div 
      className={cn(`flex ${gap} ${padding} rounded-lg ${colors.bg} ${borderStyle} transition-colors ${cursorStyle}`, className)}
      onClick={onClick}
    >
      <div className={`${iconSize} rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}>
        {icon || <Check className={compact ? "h-3 w-3 text-white" : "h-4 w-4 text-white"} />}
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
