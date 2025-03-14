
import { ReactNode } from "react";

interface CTACardProps {
  children: ReactNode;
}

const CTACard = ({ children }: CTACardProps) => {
  return (
    <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
      {children}
    </div>
  );
};

export default CTACard;
