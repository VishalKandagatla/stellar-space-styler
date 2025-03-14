
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Droplet, Flame, Earth, AirVent, Users, MapPin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Placeholder for a Mapbox token
const MAPBOX_TOKEN = "YOUR_MAPBOX_TOKEN"; // Replace with your actual token

const About = () => {
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

      // Add team locations
      const teamLocations = [
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

  // Team members data
  const teamMembers = [
    {
      name: "Michelle Del Valle",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      location: "New York, USA"
    },
    {
      name: "Marcello Miradoli",
      role: "COO EU",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      location: "Rome, Italy"
    },
    {
      name: "Carolina Cappabianca",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      location: "Buenos Aires, Argentina"
    },
    {
      name: "Florim Shabani",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      location: "Pristina, Kosovo"
    },
    {
      name: "Ethan Moody",
      role: "Product Manager",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      location: "California, USA"
    },
    {
      name: "Janicka Bassis",
      role: "Head of EU Real Estate",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      location: "Amsterdam, Netherlands"
    },
    {
      name: "Besim Ajvazi",
      role: "Geoinformatics, PhD",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      location: "Sarajevo, Bosnia"
    },
    {
      name: "Grant Anderson",
      role: "Advisor",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
      location: "Austin, USA"
    },
    {
      name: "Tarun Luthra",
      role: "Geophysics, PhD",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      location: "Delhi, India"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] overflow-hidden">
      {/* Dynamic background elements */}
      <div className="fixed inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-80"></div>
      
      {/* Animated gradient orbs in background */}
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-fin-blue/40 rounded-full blur-3xl opacity-90 animate-float"></div>
      <div className="fixed top-1/4 -right-20 w-80 h-80 bg-fin-purple/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:2s]"></div>
      <div className="fixed bottom-20 left-20 w-96 h-96 bg-fin-green/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:4s]"></div>
      <div className="fixed bottom-40 right-40 w-72 h-72 bg-fin-yellow/40 rounded-full blur-3xl opacity-90 animate-float [animation-delay:6s]"></div>
      
      <Navbar />
      <main className="relative z-10">
        {/* Hero section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <SectionContainer>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block p-2 px-4 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
                <span className="text-sm font-medium text-fin-blue flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-fin-yellow" />
                  About Us
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                <span className="bg-gradient-to-r from-primary via-fin-blue to-fin-purple bg-clip-text text-transparent animate-fade-in drop-shadow-sm">
                  About Finsat
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
                A pioneering technology company committed to driving sustainability and innovation across critical environmental domains: Air, Water, Earth, and Fire (Solar).
              </p>
            </div>
          </SectionContainer>
        </section>
        
        {/* Introduction section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-white via-white to-fin-blue/10">
          <SectionContainer>
            <div className="grid md:grid-cols-5 gap-12 items-center">
              <div className="md:col-span-3 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Finsat is a pioneering technology company committed to driving sustainability and innovation across critical environmental domains: Air, Water, Earth, and Fire (Solar). Initially established as a leader in solar feasibility and asset management solutions, Finsat is evolving into a broader environmental technology platform to address diverse sustainability challenges.
                </p>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="inline-flex items-center rounded-full bg-fin-blue/10 px-3 py-1 text-sm font-medium text-fin-blue">
                    <Flame className="mr-1 h-4 w-4" /> Solar Energy
                  </span>
                  <span className="inline-flex items-center rounded-full bg-fin-green/10 px-3 py-1 text-sm font-medium text-fin-green">
                    <Earth className="mr-1 h-4 w-4" /> Earth Sustainability
                  </span>
                  <span className="inline-flex items-center rounded-full bg-fin-cyan/10 px-3 py-1 text-sm font-medium text-fin-cyan">
                    <Droplet className="mr-1 h-4 w-4" /> Water Resources
                  </span>
                  <span className="inline-flex items-center rounded-full bg-fin-purple/10 px-3 py-1 text-sm font-medium text-fin-purple">
                    <AirVent className="mr-1 h-4 w-4" /> Air Quality
                  </span>
                </div>
              </div>
              
              <div className="md:col-span-2">
                <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] group">
                  <img 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                    alt="Finsat Team" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                    <p className="text-white/80 text-sm">Driving transformative change toward a sustainable future</p>
                  </div>
                </div>
              </div>
            </div>
          </SectionContainer>
        </section>
        
        {/* Why Choose Finsat section */}
        <section className="py-16 md:py-24">
          <SectionContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6">Why Choose Finsat?</h2>
              <p className="text-muted-foreground">
                Our integrated platform delivers powerful tools for sustainable solutions across multiple environmental domains.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Flame,
                  title: "Solar (Fire)",
                  description: "Advanced property analysis, financial modeling (NPV, IRR, payback period), and AI-driven solar asset management.",
                  color: "bg-fin-orange/10 text-fin-orange"
                },
                {
                  icon: AirVent,
                  title: "Air Quality Management",
                  description: "Upcoming analytics to monitor, predict, and mitigate air quality issues through intelligent data solutions.",
                  color: "bg-fin-purple/10 text-fin-purple"
                },
                {
                  icon: Droplet,
                  title: "Water Resource Optimization",
                  description: "Future capabilities include technology-driven water usage analysis and conservation strategies for sustainable management.",
                  color: "bg-fin-cyan/10 text-fin-cyan"
                },
                {
                  icon: Earth,
                  title: "Earth Sustainability",
                  description: "Innovative approaches to land management, soil health monitoring, and sustainable agricultural practices powered by AI and machine learning.",
                  color: "bg-fin-green/10 text-fin-green"
                }
              ].map((domain, index) => (
                <Card key={index} className="bg-white/50 backdrop-blur border-none shadow-md hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="pt-6">
                    <div className={`h-12 w-12 rounded-full ${domain.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                      <domain.icon className="h-6 w-6" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{domain.title}</h3>
                    
                    <p className="text-muted-foreground">{domain.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </SectionContainer>
        </section>
        
        {/* Our Commitment section */}
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
                    <div className="bg-white/80 rounded-xl p-6 h-[400px] flex flex-col items-center justify-center">
                      <Globe className="h-16 w-16 text-fin-blue mb-4" />
                      <h3 className="text-lg font-medium mb-2">Global Impact Map</h3>
                      <p className="text-center text-muted-foreground">
                        To view our interactive global impact map, please add your Mapbox token in the code.
                      </p>
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
        
        {/* Team section */}
        <section className="py-16 md:py-24">
          <SectionContainer>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-fin-blue font-semibold mb-3">
                <Users className="h-5 w-5" />
                <span>OUR TEAM</span>
              </div>
              
              <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
              
              <p className="text-muted-foreground">
                Our experienced and multidisciplinary leadership team drives Finsat's vision and innovation.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white/70 backdrop-blur border-none shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    </div>
                    
                    <div className="p-5 relative mt-[-80px]">
                      <Avatar className="h-20 w-20 border-4 border-white shadow-lg mb-3">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      
                      <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                      <p className="text-white/80 text-sm mb-3">{member.role}</p>
                      
                      <div className="flex items-center text-white/70 text-sm mt-2">
                        <MapPin className="h-3.5 w-3.5 mr-1" />
                        {member.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </SectionContainer>
        </section>
        
        {/* CTA section */}
        <section className="py-16 md:py-24 mb-8">
          <SectionContainer>
            <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold mb-4">Join Us in Shaping a Sustainable Future</h2>
                <p className="text-muted-foreground">
                  At Finsat, our ambition is to lead transformative change toward a sustainable future by unifying advanced technologies under one visionary platform.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-primary/30 backdrop-blur">
                  Join Our Team
                </Button>
              </div>
            </div>
          </SectionContainer>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
