
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ActionButton = () => {
  return (
    <div className="flex justify-center">
      <Button className="rounded-lg px-6 py-3 bg-primary text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
        EXPLORE COMPLETE DASHBOARD
        <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ActionButton;
