
import React, { useState } from "react";
import MapProjectionMarker from "./MapProjectionMarker";
import EnergyProjectionGraph from "./EnergyProjectionGraph";

interface MapContainerProps {
  showProjections: boolean;
}

const MapContainer: React.FC<MapContainerProps> = ({ showProjections }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="h-[340px] relative group overflow-hidden rounded-b-xl">
      {/* Base satellite image */}
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
      
      {/* Overlay effect - lighter for the light theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-gray-100/30 to-transparent opacity-60"></div>
      
      {/* Grid overlay for technical effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>
      
      {/* Data points with glow effects */}
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
      
      {/* Animated glowing dots */}
      <div className="absolute h-2 w-2 rounded-full bg-fin-green animate-pulse" style={{top: '30%', left: '20%'}}></div>
      <div className="absolute h-2 w-2 rounded-full bg-fin-blue animate-pulse [animation-delay:1s]" style={{top: '40%', left: '60%'}}></div>
      <div className="absolute h-2 w-2 rounded-full bg-fin-yellow animate-pulse [animation-delay:2s]" style={{top: '70%', left: '40%'}}></div>
      <div className="absolute h-2 w-2 rounded-full bg-fin-purple animate-pulse [animation-delay:3s]" style={{top: '20%', left: '80%'}}></div>
    </div>
  );
};

export default MapContainer;
