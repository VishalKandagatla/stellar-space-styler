
import { Map, Zap, BarChart3, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapView = () => {
  return (
    <div className="col-span-2 rounded-xl overflow-hidden shadow-xl bg-white/90 backdrop-blur border border-border h-[400px] transition-all duration-300 hover:shadow-2xl">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Interactive Property Map</h3>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <span className="hidden sm:inline-block">Filter</span>
              <span className="inline-block sm:hidden">🔍</span>
            </Button>
            <Button variant="outline" size="sm" className="text-xs gap-1">
              <span className="hidden sm:inline-block">Detailed View</span>
              <span className="inline-block sm:hidden">👁️</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[340px] bg-[url('/lovable-uploads/0fb4fc64-c04a-492a-b1ed-e5e09bfdb10a.jpeg')] bg-cover bg-center relative group">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 flex items-end p-6 transition-all duration-500 group-hover:from-transparent group-hover:to-black/70">
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="glass rounded-lg p-3 text-center backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Zap className="h-4 w-4 text-fin-yellow" />
              </div>
              <h4 className="text-xs text-white/80 mb-1">Solar Potential</h4>
              <p className="text-white font-semibold text-sm md:text-base">1,450 kWh/m²</p>
            </div>
            <div className="glass rounded-lg p-3 text-center backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <BarChart3 className="h-4 w-4 text-fin-green" />
              </div>
              <h4 className="text-xs text-white/80 mb-1">Avg. ROI</h4>
              <p className="text-white font-semibold text-sm md:text-base">15.7%</p>
            </div>
            <div className="glass rounded-lg p-3 text-center backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center justify-center mb-2">
                <Timer className="h-4 w-4 text-fin-blue" />
              </div>
              <h4 className="text-xs text-white/80 mb-1">Payback Period</h4>
              <p className="text-white font-semibold text-sm md:text-base">6.3 Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
