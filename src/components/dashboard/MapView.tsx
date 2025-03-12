
import { Map } from "lucide-react";
import { Button } from "@/components/ui/button";

const MapView = () => {
  return (
    <div className="col-span-2 rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur border border-border h-[400px]">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Map className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Interactive Property Map</h3>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Filter
            </Button>
            <Button variant="outline" size="sm">
              Detailed View
            </Button>
          </div>
        </div>
      </div>
      <div className="h-[340px] bg-[url('/lovable-uploads/0fb4fc64-c04a-492a-b1ed-e5e09bfdb10a.jpeg')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-end p-6">
          <div className="grid grid-cols-3 gap-4 w-full">
            <div className="glass rounded-lg p-3 text-center backdrop-blur-md">
              <h4 className="text-xs text-white/80">Solar Potential</h4>
              <p className="text-white font-semibold">1,450 kWh/m²</p>
            </div>
            <div className="glass rounded-lg p-3 text-center backdrop-blur-md">
              <h4 className="text-xs text-white/80">Avg. ROI</h4>
              <p className="text-white font-semibold">15.7%</p>
            </div>
            <div className="glass rounded-lg p-3 text-center backdrop-blur-md">
              <h4 className="text-xs text-white/80">Payback Period</h4>
              <p className="text-white font-semibold">6.3 Years</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
