
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FinancialCardProps {
  title: string;
  value?: string | number | ReactNode;
  icon?: ReactNode;
  trend?: number;
  description?: string;
  className?: string;
  children?: ReactNode;
  style?: React.CSSProperties;
}

const FinancialCard = ({
  title,
  value,
  icon,
  trend,
  description,
  className,
  children,
  style,
}: FinancialCardProps) => {
  return (
    <div className={cn("premium-card overflow-hidden", className)} style={style}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          {value && (
            <p className="text-2xl font-semibold mt-1 tracking-tight">{value}</p>
          )}
        </div>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>

      {children}

      {trend !== undefined && (
        <div className="flex items-center mt-4">
          <span
            className={cn(
              "text-xs font-medium px-2 py-0.5 rounded-full",
              trend > 0 ? "bg-fin-green/10 text-fin-green" : "bg-fin-red/10 text-fin-red"
            )}
          >
            {trend > 0 ? "+" : ""}
            {trend}%
          </span>
          {description && (
            <span className="text-xs text-muted-foreground ml-2">{description}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default FinancialCard;
