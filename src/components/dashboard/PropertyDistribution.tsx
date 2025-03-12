
import { BarChart3 } from "lucide-react";

const PropertyDistribution = () => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-fin-purple" />
          <h3 className="font-semibold">Property Distribution</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-secondary/30 rounded-lg p-3">
            <h4 className="text-xs text-muted-foreground">Total Properties</h4>
            <p className="text-xl font-bold">125</p>
          </div>
          <div className="bg-secondary/30 rounded-lg p-3">
            <h4 className="text-xs text-muted-foreground">Watchlists</h4>
            <p className="text-xl font-bold">7</p>
          </div>
        </div>
        <div className="space-y-3 pt-2">
          <div className="flex justify-between items-center text-sm">
            <span>Commercial</span>
            <span className="font-medium">38 properties</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Residential</span>
            <span className="font-medium">52 properties</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Industrial</span>
            <span className="font-medium">21 properties</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span>Mixed-Use</span>
            <span className="font-medium">14 properties</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDistribution;
