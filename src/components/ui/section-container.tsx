
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  background?: "default" | "gradient-1" | "gradient-2" | "gradient-3";
};

export const SectionContainer = ({ 
  children, 
  className,
  background = "default" 
}: SectionContainerProps) => {
  const getBgClass = () => {
    switch (background) {
      case "gradient-1":
        return "bg-gradient-to-b from-white via-primary/5 to-white";
      case "gradient-2": 
        return "bg-gradient-to-br from-secondary/30 via-white to-primary/10";
      case "gradient-3":
        return "bg-gradient-to-tr from-fin-blue/10 via-white to-fin-purple/10";
      default:
        return "";
    }
  };

  return (
    <div className={cn("container mx-auto px-4 md:px-6 relative", getBgClass(), className)}>
      {children}
    </div>
  );
};
