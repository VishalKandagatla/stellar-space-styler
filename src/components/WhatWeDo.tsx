
import { Building2, Sparkles, Target, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description,
  index
}: { 
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => (
  <div className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur rounded-xl p-6 shadow-lg border border-white/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
    <div className="flex items-center gap-4 mb-4">
      <div className="h-12 w-12 bg-gradient-to-br from-primary/10 to-fin-blue/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-fin-blue transition-colors" />
      </div>
      <h3 className="text-lg font-semibold gradient-text">{title}</h3>
    </div>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Button variant="ghost" size="sm" className="group/btn">
      Learn more
      <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-1" />
    </Button>
  </div>
);

const WhatWeDo = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Analysis",
      description: "Our advanced AI algorithms analyze solar potential and financial metrics for any property in real-time."
    },
    {
      icon: Target,
      title: "Precise Targeting",
      description: "Find the perfect properties with our comprehensive filtering system based on multiple criteria."
    },
    {
      icon: TrendingUp,
      title: "Financial Insights",
      description: "Get detailed NPV, IRR, and payback period calculations with interactive revenue projections."
    }
  ];

  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-white/80 to-secondary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 rounded-full bg-fin-green/10 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-fin-purple/10 animate-float [animation-delay:2s]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block p-2 px-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 animate-fade-in">
              <span className="text-sm font-medium text-primary flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                Our Capabilities
              </span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight gradient-text animate-slide-down mb-4">What We Do</h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              We empower real estate investors and developers with cutting-edge tools to identify, analyze, and maximize solar potential in their properties.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-fin-purple/20 via-fin-blue/20 to-fin-green/20 rounded-3xl transform rotate-3 hover:rotate-1 transition-transform duration-500 animate-pulse opacity-70"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-fin-blue/40 to-fin-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                
                {/* Image container with pattern overlay */}
                <div className="relative">
                  <img 
                    src="/lovable-uploads/bb445684-3b8b-41cb-93c8-e6f9881c0cfd.png" 
                    alt="Solar Panels at Sunset"
                    className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Geometric pattern overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:30px_30px] opacity-30"></div>
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Sustainable Energy Solutions</h3>
                  <p className="text-white/80">Transforming real estate with innovative solar integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
