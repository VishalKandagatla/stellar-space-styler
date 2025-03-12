
import { ArrowRight, Map, BarChart3, LineChart, PieChart, CheckCircle2, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const Feature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 p-4 rounded-xl bg-white/70 backdrop-blur border border-white/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/80">
    <div className="h-10 w-10 bg-gradient-to-br from-primary/10 to-fin-blue/10 rounded-full flex items-center justify-center shrink-0">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h4 className="font-medium mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </div>
);

const Product = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Comprehensive financial analysis including NPV, IRR, and payback period calculations."
    },
    {
      icon: LineChart,
      title: "Performance Tracking",
      description: "Track solar performance and revenue generation over time with interactive charts."
    },
    {
      icon: PieChart,
      title: "Portfolio Insights",
      description: "Get a bird's eye view of your entire solar property portfolio performance."
    }
  ];

  const bulletPoints = [
    "Advanced AI-driven solar potential assessment",
    "Customizable financial modeling tools",
    "Real-time monitoring and performance analytics",
    "Comprehensive property database integration"
  ];

  return (
    <section id="product" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-secondary/20"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-fin-blue/5 via-fin-purple/5 to-fin-green/5"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              {/* 3D rotation effect with multiple layers */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-fin-purple/10 to-fin-blue/10 transform -rotate-2 animate-pulse opacity-70"></div>
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-fin-blue/10 to-fin-green/10 transform rotate-1 animate-pulse [animation-delay:1s] opacity-70"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/30 backdrop-blur-sm">
                <div className="absolute top-0 right-0 bg-gradient-to-bl from-fin-purple/20 to-transparent w-32 h-32 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-fin-blue/20 to-transparent w-32 h-32 rounded-tr-full"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="CityL3ns Dashboard"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Interactive overlays */}
                <div className="absolute top-8 right-8 bg-white/80 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/50 animate-fade-in [animation-delay:600ms]">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-fin-green"></div>
                    <span className="text-xs font-medium">Energy Production</span>
                  </div>
                  <div className="mt-1 h-6 w-32 bg-gradient-to-r from-fin-green/30 to-fin-green rounded-full"></div>
                </div>
                
                <div className="absolute bottom-8 left-8 bg-white/80 backdrop-blur-md rounded-lg p-3 shadow-lg border border-white/50 animate-fade-in [animation-delay:800ms]">
                  <LineChart className="h-4 w-4 text-fin-blue mb-1" />
                  <div className="text-xs font-medium">Revenue Trend</div>
                  <div className="flex items-center gap-1 mt-1">
                    <ArrowRight className="h-3 w-3 text-fin-blue" />
                    <span className="text-xs text-fin-blue">+24.8%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="inline-block p-2 px-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 animate-fade-in">
              <span className="text-sm font-medium text-fin-blue flex items-center">
                <Layers className="h-4 w-4 mr-2" />
                Platform Overview
              </span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight mb-4 gradient-text">
              CityL3ns Platform
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Our interactive GIS platform provides vital information for decision-making, showing you the property's current state while delivering real-time predictive modeling for environmental impact and Climate Change effects.
            </p>
            
            <div className="mb-8">
              <ul className="space-y-3">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-fin-green mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 mb-8">
              {features.map((feature) => (
                <Feature 
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <Button className="rounded-lg px-6 py-3 bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
              Try CityL3ns Now
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
