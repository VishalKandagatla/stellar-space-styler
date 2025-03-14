
import { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Globe } from "lucide-react";

// Placeholder for a Mapbox token
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN"; // Replace with your actual token

interface TeamLocation {
  name: string;
  coordinates: [number, number]; // Explicit typing to ensure coordinates are [longitude, latitude]
}

const teamLocations: TeamLocation[] = [
  { name: "Michelle Del Valle", coordinates: [-74.006, 40.7128] }, // New York
  { name: "Marcello Miradoli", coordinates: [12.5674, 41.8719] },  // Rome
  { name: "Carolina Cappabianca", coordinates: [-58.3816, -34.6037] }, // Buenos Aires
  { name: "Florim Shabani", coordinates: [21.1655, 42.6629] },     // Pristina
  { name: "Ethan Moody", coordinates: [-119.4179, 36.7783] },      // California
  { name: "Janicka Bassis", coordinates: [4.9041, 52.3676] },      // Amsterdam
  { name: "Besim Ajvazi", coordinates: [18.4131, 43.8563] },       // Sarajevo
  { name: "Grant Anderson", coordinates: [-97.7431, 30.2672] },    // Austin
  { name: "Tarun Luthra", coordinates: [77.1025, 28.7041] }        // Delhi
];

const GlobalMap = () => {
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

      // Add team locations
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

  if (mapboxToken === "YOUR_MAPBOX_TOKEN") {
    return (
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
    );
  }

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
      <div ref={mapContainer} className="absolute inset-0" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent to-background/10 rounded-lg" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
        <h3 className="text-lg font-semibold">Global Team & Impact</h3>
        <p className="text-white/80 text-sm">Our team and partners around the world</p>
      </div>
    </div>
  );
};

export default GlobalMap;
