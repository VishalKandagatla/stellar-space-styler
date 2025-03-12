
import { Building2, Sparkles, Target, TrendingUp } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
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
    <section id="what-we-do" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">What We Do</h2>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">
              We empower real estate investors and developers with cutting-edge tools to identify, analyze, and maximize solar potential in their properties.
            </p>
            
            <div className="grid gap-6">
              {features.map((feature) => (
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-fin-blue/20 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1617788138017-80ad40cc9b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                  alt="Solar Panels"
                  className="w-full h-[600px] object-cover"
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
