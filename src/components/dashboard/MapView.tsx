
import React, { useState } from "react";
import { Map, ChartLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import MapContainer from "./MapContainer";

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
      <MapContainer showProjections={showProjections} />
    </div>
  );
};

export default MapView;
