
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
      <div className="h-[340px] relative group overflow-hidden">
        {/* Base satellite image */}
        <img 
          src="/lovable-uploads/281d937a-6075-4bea-8027-f6e6da08b5de.png" 
          alt="Satellite view of solar panel fields" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Grid overlay for technical effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
        
        {/* Data points with glow effects */}
        <div className="absolute top-1/4 left-1/3 group/marker">
          <div className="w-3 h-3 bg-fin-yellow rounded-full animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10"></div>
          <div className="absolute -inset-4 bg-fin-yellow/20 rounded-full animate-ping opacity-75 duration-1000"></div>
        </div>
        <div className="absolute top-1/2 right-1/4 group/marker">
          <div className="w-3 h-3 bg-fin-green rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"></div>
          <div className="absolute -inset-4 bg-fin-green/20 rounded-full animate-ping opacity-75 duration-700"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2 group/marker">
          <div className="w-3 h-3 bg-fin-blue rounded-full animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.5)] z-10"></div>
          <div className="absolute -inset-4 bg-fin-blue/20 rounded-full animate-ping opacity-75 duration-900"></div>
        </div>

        {/* Information overlay at the bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 flex items-end p-6 transition-all duration-500">
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
