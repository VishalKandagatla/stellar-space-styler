
import { SectionContainer } from "@/components/ui/section-container";
import { Globe, Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Placeholder for a Mapbox token
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN"; // Replace with your actual token

const Commitment = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>(MAPBOX_TOKEN);

  const handleTokenChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapboxToken(e.target.value);
  };

  const initializeMap = () => {
    if (!mapContainer.current || map.current) return;

    // Only initialize if token is set
    if (mapboxToken !== "YOUR_MAPBOX_TOKEN") {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        projection: 'globe',
        zoom: 1.5,
        center: [0, 20],
        pitch: 20,
      });

      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Disable scroll zoom for smoother experience
      map.current.scrollZoom.disable();

      // Add atmosphere effect
      map.current.on('style.load', () => {
        map.current?.setFog({
          color: 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2,
        });
      });

      // Add team locations - Fixed by using explicit [number, number] tuples
      const teamLocations = [
        { name: "Michelle Del Valle", coordinates: [-74.006, 40.7128] as [number, number] }, // New York
        { name: "Marcello Miradoli", coordinates: [12.5674, 41.8719] as [number, number] },  // Rome
        { name: "Carolina Cappabianca", coordinates: [-58.3816, -34.6037] as [number, number] }, // Buenos Aires
        { name: "Florim Shabani", coordinates: [21.1655, 42.6629] as [number, number] },     // Pristina
        { name: "Ethan Moody", coordinates: [-119.4179, 36.7783] as [number, number] },      // California
        { name: "Janicka Bassis", coordinates: [4.9041, 52.3676] as [number, number] },      // Amsterdam
        { name: "Besim Ajvazi", coordinates: [18.4131, 43.8563] as [number, number] },       // Sarajevo
        { name: "Grant Anderson", coordinates: [-97.7431, 30.2672] as [number, number] },    // Austin
        { name: "Tarun Luthra", coordinates: [77.1025, 28.7041] as [number, number] }        // Delhi
      ];

      map.current.on('load', () => {
        teamLocations.forEach(location => {
          if (map.current) {
            new mapboxgl.Marker({
              color: "#1e40af"
            })
              .setLngLat(location.coordinates)
              .setPopup(new mapboxgl.Popup().setText(location.name))
              .addTo(map.current);
          }
        });
      });

      // Rotation animation
      const secondsPerRevolution = 240;
      const maxSpinZoom = 5;
      const slowSpinZoom = 3;
      let userInteracting = false;
      let spinEnabled = true;

      function spinGlobe() {
        if (!map.current) return;
        
        const zoom = map.current.getZoom();
        if (spinEnabled && !userInteracting && zoom < maxSpinZoom) {
          let distancePerSecond = 360 / secondsPerRevolution;
          if (zoom > slowSpinZoom) {
            const zoomDif = (maxSpinZoom - zoom) / (maxSpinZoom - slowSpinZoom);
            distancePerSecond *= zoomDif;
          }
          const center = map.current.getCenter();
          center.lng -= distancePerSecond;
          map.current.easeTo({ center, duration: 1000, easing: (n) => n });
        }
      }

      // Event listeners for interaction
      map.current.on('mousedown', () => { userInteracting = true; });
      map.current.on('dragstart', () => { userInteracting = true; });
      map.current.on('mouseup', () => { userInteracting = false; spinGlobe(); });
      map.current.on('touchend', () => { userInteracting = false; spinGlobe(); });
      map.current.on('moveend', () => { spinGlobe(); });

      // Start the globe spinning
      spinGlobe();
    }
  };

  useEffect(() => {
    if (mapboxToken !== "YOUR_MAPBOX_TOKEN") {
      initializeMap();
    }

    return () => {
      if (map.current) map.current.remove();
    };
  }, [mapboxToken]);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-fin-blue/5 to-white overflow-hidden">
      <SectionContainer>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Map Component - Right Side on Desktop */}
          <div className="order-2 md:order-1 md:w-1/2">
            {mapboxToken === "YOUR_MAPBOX_TOKEN" ? (
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-fin-blue/10 to-fin-purple/10 p-1">
                <div className="bg-white/80 rounded-xl p-6 h-[400px] flex flex-col items-center justify-center relative">
                  <img 
                    src="/lovable-uploads/1c0efce7-3d82-4f4b-9220-3d99fb3a48c6.png" 
                    alt="World Map" 
                    className="w-full h-full object-contain absolute inset-0 p-4 opacity-90"
                  />
                  <div className="absolute inset-0 bg-white/60 opacity-50"></div>
                  <div className="relative z-10 text-center">
                    <Globe className="h-16 w-16 text-fin-blue mb-4 mx-auto" />
                    <h3 className="text-lg font-medium mb-2">Global Impact Map</h3>
                    <p className="text-center text-muted-foreground">
                      Our team and projects span across the globe, enabling environmental solutions worldwide.
                    </p>
                    <div className="mt-6">
                      <input
                        type="text"
                        placeholder="Enter your Mapbox token to activate"
                        className="w-full px-4 py-2 text-sm border rounded-md"
                        onChange={handleTokenChange}
                      />
                      <p className="text-xs text-gray-500 mt-2">
                        Get your token at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-fin-blue underline">mapbox.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
                <div ref={mapContainer} className="absolute inset-0" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                  <h3 className="text-lg font-semibold">Global Team & Impact</h3>
                  <p className="text-white/80 text-sm">Our team and partners around the world</p>
                </div>
              </div>
            )}
          </div>
          
          {/* Text Content - Left Side on Desktop */}
          <div className="order-1 md:order-2 md:w-1/2">
            <div className="inline-flex items-center gap-2 text-fin-blue font-medium mb-3 bg-fin-blue/10 px-4 py-1.5 rounded-full">
              <Globe className="h-4 w-4" />
              <span>GLOBAL IMPACT</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fin-blue to-fin-purple bg-clip-text text-transparent">Our Commitment</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Finsat is uniquely positioned at the intersection of environmental stewardship and advanced technology. Our integrated platform offers comprehensive tools designed to support businesses, governments, and communities in achieving sustainability and compliance goals.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Driving Value Through Sustainability</h3>
            
            <p className="text-muted-foreground mb-6">
              We believe sustainability is achieved through intelligent decision-making informed by data-driven insights. Our solutions empower stakeholders across industries to:
            </p>
            
            <div className="space-y-4 mt-6">
              <div className="flex gap-4 p-4 rounded-lg bg-fin-blue/5 hover:bg-fin-blue/10 transition-colors">
                <div className="h-8 w-8 rounded-full bg-fin-blue flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Identify and Analyze</h4>
                  <p className="text-muted-foreground">Environmental challenges with precise geospatial intelligence.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg bg-fin-purple/5 hover:bg-fin-purple/10 transition-colors">
                <div className="h-8 w-8 rounded-full bg-fin-purple flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Optimize and Deploy</h4>
                  <p className="text-muted-foreground">Resources efficiently, maximizing environmental and economic returns.</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-4 rounded-lg bg-fin-green/5 hover:bg-fin-green/10 transition-colors">
                <div className="h-8 w-8 rounded-full bg-fin-green flex items-center justify-center flex-shrink-0">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Monitor and Manage</h4>
                  <p className="text-muted-foreground">Assets proactively, ensuring compliance with evolving regulatory standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Commitment;
