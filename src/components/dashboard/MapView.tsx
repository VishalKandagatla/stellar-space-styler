
import { Map, Zap, BarChart3, Timer, ChartLine, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const MapView = () => {
  const [showProjections, setShowProjections] = useState(true);
  
  return (
    <div className="col-span-2 rounded-xl overflow-hidden shadow-xl bg-white/90 backdrop-blur border border-border h-[400px] transition-all duration-300 hover:shadow-2xl">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Interactive Property Map</h3>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs gap-1"
              onClick={() => setShowProjections(!showProjections)}
            >
              <ChartLine className="h-4 w-4" />
              <span className="hidden sm:inline-block">{showProjections ? "Hide" : "Show"} Projections</span>
            </Button>
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
          src="/lovable-uploads/d8db171a-ce83-484b-b3b2-f279f0ea3e6a.png" 
          alt="Solar Panels" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Grid overlay for technical effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
        
        {/* Data points with glow effects */}
        <div className="absolute top-1/4 left-1/3 group/marker">
          <div className="w-3 h-3 bg-fin-yellow rounded-full animate-pulse shadow-[0_0_15px_rgba(245,158,11,0.5)] z-10"></div>
          <div className="absolute -inset-4 bg-fin-yellow/20 rounded-full animate-ping opacity-75 duration-1000"></div>
          
          {/* Projected growth chart for this marker */}
          {showProjections && (
            <div className="absolute top-5 left-0 w-48 h-32 glass rounded-lg p-2 shadow-lg z-20 animate-fade-in origin-top-left">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-semibold">Projected Growth</h4>
                <span className="text-[10px] text-fin-yellow font-medium">+27% YoY</span>
              </div>
              <div className="h-20 flex items-end gap-1">
                {[25, 30, 45, 38, 55, 65, 72].map((value, index) => (
                  <div 
                    key={index}
                    className="flex-1 bg-fin-yellow/30 rounded-t-sm"
                    style={{ height: `${value}%` }}
                  >
                    <div 
                      className="w-full bg-fin-yellow h-[2px] mt-auto"
                      style={{ transform: index < 6 ? `rotate(-${20 - index * 5}deg)` : 'rotate(0deg)', transformOrigin: 'left bottom' }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="h-[1px] w-full bg-black/10 mt-1"></div>
            </div>
          )}
        </div>
        
        <div className="absolute top-1/2 right-1/4 group/marker">
          <div className="w-3 h-3 bg-fin-green rounded-full animate-pulse shadow-[0_0_15px_rgba(16,185,129,0.5)] z-10"></div>
          <div className="absolute -inset-4 bg-fin-green/20 rounded-full animate-ping opacity-75 duration-700"></div>
          
          {/* ROI projection for this marker */}
          {showProjections && (
            <div className="absolute -top-40 -left-24 w-48 h-32 glass rounded-lg p-2 shadow-lg z-20 animate-fade-in">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-semibold">ROI Projection</h4>
                <span className="text-[10px] text-fin-green font-medium">15.7%</span>
              </div>
              <div className="h-20 flex flex-col justify-between py-1">
                <div className="w-full h-5/6 relative rounded-sm overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-1/3 bg-gradient-to-t from-fin-green/40 to-fin-green/5 rounded-t-sm"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-fin-green/50"></div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg height="40" width="100%" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <path
                        d="M0,35 Q10,25 20,32 T40,28 T60,22 T80,15 T100,10"
                        stroke="#10B981"
                        strokeWidth="2"
                        fill="none"
                      />
                    </svg>
                  </div>
                </div>
                <div className="flex justify-between text-[8px] text-muted-foreground">
                  <span>Year 1</span>
                  <span>Year 3</span>
                  <span>Year 5</span>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="absolute bottom-1/3 left-1/2 group/marker">
          <div className="w-3 h-3 bg-fin-blue rounded-full animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.5)] z-10"></div>
          <div className="absolute -inset-4 bg-fin-blue/20 rounded-full animate-ping opacity-75 duration-900"></div>
          
          {/* Energy output projection for this marker */}
          {showProjections && (
            <div className="absolute -top-10 -right-48 w-44 h-32 glass rounded-lg p-2 shadow-lg z-20 animate-fade-in">
              <div className="flex items-center justify-between mb-1">
                <h4 className="text-xs font-semibold">Energy Output</h4>
                <span className="text-[10px] text-fin-blue font-medium">1,450 kWh/m²</span>
              </div>
              <div className="h-20 flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-[8px]">Q1</span>
                  <div className="h-3 flex-1 mx-1 bg-secondary rounded-sm overflow-hidden">
                    <div className="h-full bg-fin-blue/60" style={{ width: '65%' }}></div>
                  </div>
                  <span className="text-[8px]">310</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px]">Q2</span>
                  <div className="h-3 flex-1 mx-1 bg-secondary rounded-sm overflow-hidden">
                    <div className="h-full bg-fin-blue/70" style={{ width: '85%' }}></div>
                  </div>
                  <span className="text-[8px]">410</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px]">Q3</span>
                  <div className="h-3 flex-1 mx-1 bg-secondary rounded-sm overflow-hidden">
                    <div className="h-full bg-fin-blue/80" style={{ width: '95%' }}></div>
                  </div>
                  <span className="text-[8px]">430</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[8px]">Q4</span>
                  <div className="h-3 flex-1 mx-1 bg-secondary rounded-sm overflow-hidden">
                    <div className="h-full bg-fin-blue/60" style={{ width: '60%' }}></div>
                  </div>
                  <span className="text-[8px]">300</span>
                </div>
              </div>
            </div>
          )}
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
