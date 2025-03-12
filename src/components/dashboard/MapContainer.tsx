
import React, { useState } from "react";
import MapProjectionMarker from "./MapProjectionMarker";
import EnergyProjectionGraph from "./EnergyProjectionGraph";

interface MapContainerProps {
  showProjections: boolean;
}

const MapContainer: React.FC<MapContainerProps> = ({ showProjections }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div className="h-[340px] relative group overflow-hidden">
      {/* Base satellite image */}
      <img 
        src="/lovable-uploads/d8db171a-ce83-484b-b3b2-f279f0ea3e6a.png" 
        alt="Solar Panels" 
        className={`absolute inset-0 w-full h-full object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        onLoad={() => setImageLoaded(true)}
        onError={(e) => {
          console.error("Failed to load image:", e);
          setImageLoaded(false);
        }}
      />
      
      {/* Grid overlay for technical effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40"></div>
      
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
        position={{ bottom: "1/3", left: "1/2" }} 
        color="fin-blue" 
        showProjections={showProjections}
        type="energy"
      />

      {/* Replace gradient background with Energy Projection Graph */}
      <div className="absolute inset-0 flex items-end z-10">
        <EnergyProjectionGraph />
      </div>
    </div>
  );
};

export default MapContainer;
