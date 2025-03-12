
import React from "react";

interface MapProjectionMarkerProps {
  position: { top: string; left?: string; right?: string; bottom?: string };
  color: string;
  showProjections: boolean;
  type: "growth" | "roi" | "energy";
}

const MapProjectionMarker: React.FC<MapProjectionMarkerProps> = ({ 
  position, 
  color, 
  showProjections, 
  type 
}) => {
  return (
    <div className={`absolute ${Object.entries(position).map(([key, value]) => `${key}-${value}`).join(' ')} group/marker`}>
      <div className={`w-3 h-3 bg-${color} rounded-full animate-pulse shadow-[0_0_15px_rgba(${
        color === 'fin-yellow' ? '245,158,11' : 
        color === 'fin-green' ? '16,185,129' : 
        '14,165,233'
      },0.5)] z-10`}></div>
      <div className={`absolute -inset-4 bg-${color}/20 rounded-full animate-ping opacity-75 duration-${
        color === 'fin-yellow' ? '1000' : 
        color === 'fin-green' ? '700' : 
        '900'
      }`}></div>
      
      {showProjections && type === "growth" && (
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
      
      {showProjections && type === "roi" && (
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
      
      {showProjections && type === "energy" && (
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
  );
};

export default MapProjectionMarker;
