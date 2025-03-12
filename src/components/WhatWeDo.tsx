
import { Building2, Sparkles, Target, TrendingUp } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-gradient-to-br from-white to-secondary/20 backdrop-blur rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
    <div className="h-12 w-12 bg-gradient-to-br from-primary/10 to-fin-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <Icon className="h-6 w-6 text-primary group-hover:text-fin-blue transition-colors" />
    </div>
    <h3 className="text-lg font-semibold mb-2 gradient-text">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
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
    <section id="what-we-do" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary animate-slide-down" />
              <h2 className="text-3xl font-bold tracking-tight gradient-text animate-slide-down">What We Do</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              We empower real estate investors and developers with cutting-edge tools to identify, analyze, and maximize solar potential in their properties.
            </p>
            
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-fin-blue/20 rounded-3xl transform rotate-3 hover:rotate-1 transition-transform duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-gradient-to-r from-fin-blue/40 to-fin-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                <img 
                  src="/lovable-uploads/bb445684-3b8b-41cb-93c8-e6f9881c0cfd.png" 
                  alt="Solar Panels at Sunset"
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
