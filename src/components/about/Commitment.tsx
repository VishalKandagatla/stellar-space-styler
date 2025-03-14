
import { SectionContainer } from "@/components/ui/section-container";
import { Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Placeholder for a Mapbox token
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN"; // Replace with your actual token

const Commitment = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Only initialize if token is set
    if (MAPBOX_TOKEN !== "YOUR_MAPBOX_TOKEN") {
      mapboxgl.accessToken = MAPBOX_TOKEN;
      
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

    return () => {
      if (map.current) map.current.remove();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-tr from-fin-blue/10 via-white to-fin-purple/10">
      <SectionContainer>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6">Our Commitment</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-4">
              Finsat is uniquely positioned at the intersection of environmental stewardship and advanced technology. Our integrated platform offers comprehensive tools designed to support businesses, governments, and communities in achieving sustainability and compliance goals, reducing environmental impact, and optimizing resource usage.
            </p>
            
            <h3 className="text-xl font-semibold mt-8 mb-4">Driving Value Through Sustainability</h3>
            
            <p className="text-muted-foreground mb-6">
              We believe sustainability is achieved through intelligent decision-making informed by data-driven insights. Our solutions empower stakeholders across industries to:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-fin-blue/10 flex items-center justify-center mt-0.5">
                  <span className="text-fin-blue text-sm font-bold">1</span>
                </div>
                <div>
                  <span className="font-medium">Identify and Analyze</span> environmental challenges with precise geospatial intelligence.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-fin-purple/10 flex items-center justify-center mt-0.5">
                  <span className="text-fin-purple text-sm font-bold">2</span>
                </div>
                <div>
                  <span className="font-medium">Optimize and Deploy</span> resources efficiently, maximizing environmental and economic returns.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="h-6 w-6 rounded-full bg-fin-green/10 flex items-center justify-center mt-0.5">
                  <span className="text-fin-green text-sm font-bold">3</span>
                </div>
                <div>
                  <span className="font-medium">Monitor and Manage</span> assets proactively, ensuring compliance with evolving regulatory standards and enhancing long-term resilience.
                </div>
              </li>
            </ul>
          </div>
          
          <div className="order-1 md:order-2">
            {MAPBOX_TOKEN === "YOUR_MAPBOX_TOKEN" ? (
              <div className="rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-fin-blue/10 to-fin-purple/10 p-1">
                <div className="bg-white/80 rounded-xl p-6 h-[400px] flex flex-col items-center justify-center relative">
                  <img 
                    src="/lovable-uploads/08894289-2a37-4b49-9933-7654a19052bd.png" 
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
        </div>
      </SectionContainer>
    </section>
  );
};

export default Commitment;
