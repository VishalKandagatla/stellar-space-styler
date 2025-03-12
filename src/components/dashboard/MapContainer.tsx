
import React, { useState } from "react";
import MapProjectionMarker from "./MapProjectionMarker";
import EnergyProjectionGraph from "./EnergyProjectionGraph";

interface MapContainerProps {
  showProjections: boolean;
}

const MapContainer: React.FC<MapContainerProps> = ({ showProjections }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="h-[340px] relative group overflow-hidden rounded-b-xl perspective-container">
      {/* Enhanced base satellite image with 3D effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-fin-blue/5 to-fin-purple/5 transform-3d rotate-y-hover">
        <img 
          src="/lovable-uploads/d8db171a-ce83-484b-b3b2-f279f0ea3e6a.png" 
          alt="Solar Panels" 
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'} group-hover:scale-105`}
          onLoad={() => setImageLoaded(true)}
          onError={(e) => {
            console.error("Failed to load image:", e);
            setImageLoaded(false);
          }}
        />
        
        {/* Enhanced overlay effect with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent opacity-70"></div>
        
        {/* Enhanced grid overlay with animated pulse */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20 animate-pulse"></div>
        </div>
        
        {/* Enhanced data points with glow effects */}
        <MapProjectionMarker 
          position={{ top: "1/4", left: "1/3" }} 
          color="fin-yellow" 
          showProjections={showProjections}
          type="growth"
        />
        
        <MapProjectionMarker 
          position={{ top: "1/2", right: "1/4" }} 
          color="fin-green" 
          showProjections={showProjections}
          type="roi"
        />
        
        <MapProjectionMarker 
          position={{ top: "2/3", left: "1/2" }} 
          color="fin-blue" 
          showProjections={showProjections}
          type="energy"
        />

        {/* Replace gradient background with Energy Projection Graph */}
        <div className="absolute inset-0 flex items-end z-10">
          <EnergyProjectionGraph />
        </div>
        
        {/* Enhanced animated glowing dots with pulse effect */}
        <div className="absolute h-2 w-2 rounded-full bg-fin-green animate-pulse-glow" style={{top: '30%', left: '20%'}}></div>
        <div className="absolute h-2 w-2 rounded-full bg-fin-blue animate-pulse-glow [animation-delay:1s]" style={{top: '40%', left: '60%'}}></div>
        <div className="absolute h-2 w-2 rounded-full bg-fin-yellow animate-pulse-glow [animation-delay:2s]" style={{top: '70%', left: '40%'}}></div>
        <div className="absolute h-2 w-2 rounded-full bg-fin-purple animate-pulse-glow [animation-delay:3s]" style={{top: '20%', left: '80%'}}></div>
        
        {/* New interactive elements */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-lg p-2 border border-white/30 text-white text-xs flex items-center gap-2 animate-fade-in">
          <div className="h-2 w-2 rounded-full bg-fin-green animate-pulse"></div>
          Live Data Stream
        </div>
        
        <div className="absolute bottom-16 right-4 bg-black/30 backdrop-blur-md rounded-lg p-2 border border-white/10 text-white text-xs flex items-center gap-2 animate-fade-in [animation-delay:400ms]">
          <div className="inline-block h-2 w-2 rounded-full bg-fin-yellow mr-1"></div>
          ROI Analysis Active
        </div>
      </div>
    </div>
  );
};

export default MapContainer;
