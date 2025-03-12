
import { ArrowRight, Search, Home, BarChart3, Compass, Filter, Map, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div 
      className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden"
      id="hero"
    >
      {/* Main background image - solar panels in field */}
      <div 
        className="absolute inset-0 bg-[url('/lovable-uploads/0fb4fc64-c04a-492a-b1ed-e5e09bfdb10a.jpeg')] 
        bg-cover bg-center opacity-25 -z-10"
      ></div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/40 -z-10"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 animate-slide-up bg-gradient-to-r from-primary to-fin-blue bg-clip-text text-transparent">
              UNLOCK ALL THE VALUE BEHIND CLIMATE CHANGE IMPACT
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
              FinSat is the profitable way to develop land and properties sustainably, to make smart Real Estate decisions and mitigate risk, increasing the value of land and property investments.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: "300ms" }}>
              <Button className="bg-primary text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
                JOIN OUR WAITLIST
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Search className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">Search Properties</h3>
              </div>
              <p className="text-sm text-muted-foreground">Find ideal solar properties by address, region or company portfolio with advanced filters.</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-fin-green/10 text-fin-green">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">Financial Analysis</h3>
              </div>
              <p className="text-sm text-muted-foreground">Get NPV, IRR and payback period calculations with interactive revenue projections.</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-fin-yellow/10 text-fin-yellow">
                  <Compass className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">Watchlist</h3>
              </div>
              <p className="text-sm text-muted-foreground">Manage multiple property watchlists with advanced solar inputs and export capabilities.</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-fin-purple/10 text-fin-purple">
                  <Map className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">Dashboard</h3>
              </div>
              <p className="text-sm text-muted-foreground">Visualize solar performance with interactive charts and portfolio-wide analytics.</p>
            </div>
          </div>
          
          {/* Search box preview */}
          <div className="mt-12 bg-white rounded-xl shadow-lg border border-border p-6 animate-slide-up" style={{ animationDelay: "500ms" }}>
            <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
              <h3 className="text-xl font-semibold">Find Your Ideal Solar Properties</h3>
              <div className="flex-1"></div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filters
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Property Type
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search by address, city, state or zip code..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-border focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                Search
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-secondary/30 rounded-lg p-3 text-center">
                <h4 className="text-xs text-muted-foreground">Best Solar Potential</h4>
                <p className="font-semibold">San Diego, CA</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-3 text-center">
                <h4 className="text-xs text-muted-foreground">Fastest Payback</h4>
                <p className="font-semibold">Austin, TX</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-3 text-center">
                <h4 className="text-xs text-muted-foreground">Highest Revenue</h4>
                <p className="font-semibold">Phoenix, AZ</p>
              </div>
              <div className="bg-secondary/30 rounded-lg p-3 text-center">
                <h4 className="text-xs text-muted-foreground">Commercial Properties</h4>
                <p className="font-semibold">128 Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
