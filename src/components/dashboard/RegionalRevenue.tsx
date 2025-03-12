
import { PieChart } from "lucide-react";

const RegionalRevenue = () => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center gap-2">
          <PieChart className="h-5 w-5 text-fin-blue" />
          <h3 className="font-semibold">Regional Revenue</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-center py-3 mb-3">
          <div className="relative w-28 h-28 rounded-full bg-secondary/40 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full" style={{ 
              background: "conic-gradient(#0EA5E9 0% 30%, #10B981 30% 55%, #8B5CF6 55% 75%, #F59E0B 75% 100%)" 
            }}></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold">$418K</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-primary"></span>
            <span className="text-sm">West Coast - 30%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-fin-green"></span>
            <span className="text-sm">Midwest - 25%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-fin-purple"></span>
            <span className="text-sm">East Coast - 20%</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-fin-yellow"></span>
            <span className="text-sm">South - 25%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionalRevenue;
