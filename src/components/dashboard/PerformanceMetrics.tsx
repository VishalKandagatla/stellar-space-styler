
import { Gauge } from "lucide-react";

const PerformanceMetrics = () => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center gap-2">
          <Gauge className="h-5 w-5 text-fin-yellow" />
          <h3 className="font-semibold">Performance Metrics</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm">Energy Efficiency</span>
            <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-fin-green w-[85%]"></div>
            </div>
            <span className="text-sm font-semibold">85%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Space Utilization</span>
            <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-primary w-[72%]"></div>
            </div>
            <span className="text-sm font-semibold">72%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">ROI Potential</span>
            <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-fin-purple w-[93%]"></div>
            </div>
            <span className="text-sm font-semibold">93%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm">Payback Speed</span>
            <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-fin-yellow w-[64%]"></div>
            </div>
            <span className="text-sm font-semibold">64%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceMetrics;
