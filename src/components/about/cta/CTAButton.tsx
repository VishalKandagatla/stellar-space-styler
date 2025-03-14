
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface CTAButtonProps {
  to: string;
  variant?: "primary" | "outline";
  children: ReactNode;
  icon?: ReactNode;
}

const CTAButton = ({ to, variant = "primary", children, icon }: CTAButtonProps) => {
  return variant === "primary" ? (
    <Button 
      size="lg" 
      className="bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group" 
      asChild
    >
      <Link to={to}>
        {children}
        {icon || <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />}
      </Link>
    </Button>
  ) : (
    <Button 
      size="lg" 
      variant="outline" 
      className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-primary/30 backdrop-blur" 
      asChild
    >
      <Link to={to}>
        {children}
      </Link>
    </Button>
  );
};

export default CTAButton;
