
import { ArrowRight, Search, Building2, MapPin, Gauge, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Abstract background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/0fb4fc64-c04a-492a-b1ed-e5e09bfdb10a.jpeg')] bg-cover bg-center opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-fin-blue/10"></div>
      
      {/* Geometric patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border-8 border-fin-blue/10 rounded-full opacity-60 rotate-12"></div>
        <div className="absolute top-60 -left-20 w-40 h-40 border-4 border-fin-purple/10 rounded-full opacity-60"></div>
        <div className="absolute bottom-20 right-40 w-60 h-60 border-6 border-fin-green/10 rounded-full opacity-60 -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-block p-2 px-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
            <span className="text-sm font-medium text-fin-blue flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-fin-yellow" />
              Revolutionizing Solar Investment Through Advanced AI Technology
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-primary via-fin-blue to-fin-purple bg-clip-text text-transparent animate-fade-in drop-shadow-sm">
              Unlock The Future Of
            </span>
          </h1>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-fin-blue via-fin-purple to-primary bg-clip-text text-transparent animate-fade-in drop-shadow-sm relative inline-block">
              Solar Investment
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto">
            Discover, analyze, and maximize solar potential in real estate with AI-powered insights and comprehensive financial analytics.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Button size="lg" className="bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-primary/30 backdrop-blur">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto glass rounded-2xl shadow-xl animate-fade-in [animation-delay:600ms] hover:shadow-2xl transition-all duration-300 overflow-hidden border border-white/30">
          <div className="p-6 border-b border-white/30 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fin-blue/20 to-fin-purple/20 grid place-items-center">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-semibold gradient-text">Find Your Ideal Solar Properties</h2>
            </div>
          </div>
          
          <div className="p-6 backdrop-blur-md">
            <div className="relative mb-6 group">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-hover:text-primary transition-colors" />
              <input 
                type="text" 
                placeholder="Search by address, city, state or zip code..." 
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-white/40 bg-white/50 backdrop-blur focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-inner"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <PropertyTypeCard 
                icon={Building2} 
                title="Commercial" 
                count={85} 
                color="fin-green"
              />
              <PropertyTypeCard 
                icon={Gauge} 
                title="Industrial" 
                count={42} 
                color="fin-blue"
              />
              <PropertyTypeCard 
                icon={BarChart3} 
                title="Mixed-Use" 
                count={29} 
                color="fin-purple"
              />
              <PropertyTypeCard 
                icon={Search} 
                title="Residential" 
                count={156} 
                color="fin-yellow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertyTypeCard = ({ 
  icon: Icon, 
  title, 
  count, 
  color 
}: { 
  icon: React.ElementType; 
  title: string; 
  count: number; 
  color: string;
}) => (
  <div className="p-4 rounded-xl bg-gradient-to-br from-white/80 to-white/40 backdrop-blur border border-white/40 hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
    <Icon className={`h-6 w-6 text-${color} mb-2 group-hover:scale-110 transition-transform`} />
    <h3 className="font-medium gradient-text">{title}</h3>
    <p className="text-sm text-muted-foreground">{count} Properties</p>
  </div>
);

export default Hero;
