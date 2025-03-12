
import { TrendingUp, Calendar } from "lucide-react";

const FinancialProjection = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur border border-border">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-fin-green" />
            <h3 className="font-semibold">Financial Projection</h3>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">12 Month</span>
          </div>
        </div>
      </div>
      <div className="p-4 h-[340px] flex flex-col">
        <div className="mb-4 p-3 rounded-lg bg-secondary/30 flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold">Annual Revenue</h4>
            <p className="text-2xl font-bold text-fin-green">$84,250</p>
          </div>
          <div className="text-right">
            <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-fin-green/20 text-fin-green">
              +12.4% YoY
            </span>
          </div>
        </div>
        
        <div className="h-[220px] grid place-items-center">
          <div className="bg-gradient-to-r from-fin-blue to-fin-green h-32 w-full rounded-lg opacity-30"></div>
        </div>
        
        <div className="grid grid-cols-3 gap-3 mt-auto">
          <div className="flex flex-col items-center rounded-lg p-2 bg-secondary/30">
            <span className="text-xs text-muted-foreground">NPV</span>
            <span className="font-semibold">$145K</span>
          </div>
          <div className="flex flex-col items-center rounded-lg p-2 bg-secondary/30">
            <span className="text-xs text-muted-foreground">IRR</span>
            <span className="font-semibold">18.2%</span>
          </div>
          <div className="flex flex-col items-center rounded-lg p-2 bg-secondary/30">
            <span className="text-xs text-muted-foreground">ROI</span>
            <span className="font-semibold">2.4x</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProjection;
