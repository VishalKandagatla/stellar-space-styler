
import { ArrowRight, Map, BarChart3, LineChart, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Feature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="flex gap-4 p-4 rounded-xl bg-white/50 backdrop-blur border border-border hover:shadow-md transition-all duration-300">
    <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
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

  return (
    <section id="product" className="py-24 bg-gradient-to-b from-white to-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-fin-purple/20 to-fin-blue/20 rounded-3xl transform -rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="CityL3ns Dashboard"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="mb-8">
              <h2 className="text-3xl font-bold tracking-tight mb-4 flex items-center gap-2">
                <Map className="h-8 w-8 text-primary" />
                CityL3ns Platform
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our interactive GIS platform provides vital information for decision-making, showing you the property's current state while delivering real-time predictive modeling for environmental impact and Climate Change effects.
              </p>
              
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
              
              <Button className="rounded-lg px-6 py-3 bg-primary text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2">
                Try CityL3ns Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
