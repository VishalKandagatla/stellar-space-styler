
import { ArrowRight, Search, Building2, MapPin, Gauge, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/0fb4fc64-c04a-492a-b1ed-e5e09bfdb10a.jpeg')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-white/70"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-fin-blue bg-clip-text text-transparent animate-fade-in">
            Unlock The Future Of Solar Investment
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms] max-w-3xl mx-auto">
            Discover, analyze, and maximize solar potential in real estate with AI-powered insights and comprehensive financial analytics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Button size="lg" className="bg-primary text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20 animate-fade-in [animation-delay:600ms]">
          <div className="flex items-center gap-3 mb-6">
            <Search className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Find Your Ideal Solar Properties</h2>
          </div>
          
          <div className="relative mb-6">
            <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input 
              type="text" 
              placeholder="Search by address, city, state or zip code..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-white/50 backdrop-blur focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur border border-border hover:shadow-md transition-all duration-300">
              <Building2 className="h-6 w-6 text-fin-green mb-2" />
              <h3 className="font-medium">Commercial</h3>
              <p className="text-sm text-muted-foreground">85 Properties</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur border border-border hover:shadow-md transition-all duration-300">
              <Gauge className="h-6 w-6 text-fin-blue mb-2" />
              <h3 className="font-medium">Industrial</h3>
              <p className="text-sm text-muted-foreground">42 Properties</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur border border-border hover:shadow-md transition-all duration-300">
              <BarChart3 className="h-6 w-6 text-fin-purple mb-2" />
              <h3 className="font-medium">Mixed-Use</h3>
              <p className="text-sm text-muted-foreground">29 Properties</p>
            </div>
            <div className="p-4 rounded-xl bg-white/50 backdrop-blur border border-border hover:shadow-md transition-all duration-300">
              <Search className="h-6 w-6 text-fin-yellow mb-2" />
              <h3 className="font-medium">Residential</h3>
              <p className="text-sm text-muted-foreground">156 Properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
