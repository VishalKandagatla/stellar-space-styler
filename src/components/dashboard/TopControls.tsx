
import { Settings, SlidersHorizontal, Calendar, Grid3x3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const TopControls = () => {
  return (
    <div className="mb-8 bg-white rounded-xl shadow-md p-4 border border-border flex flex-col sm:flex-row justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-full">
          <Settings className="h-5 w-5 text-primary" />
        </div>
        <h3 className="font-semibold">Portfolio Dashboard</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filters
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          Last 12 Months
        </Button>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Grid3x3 className="h-4 w-4" />
          View
        </Button>
      </div>
    </div>
  );
};

export default TopControls;
