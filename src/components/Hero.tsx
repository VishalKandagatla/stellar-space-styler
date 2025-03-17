
import { useState } from "react";
import { ArrowRight, Search, Building2, MapPin, Gauge, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTrialSignup } from "@/hooks/use-trial-signup";
import { useDemoRequest } from "@/hooks/use-demo-request";
import { usePropertySearch } from "@/hooks/use-property-search";
import SearchResultsModal from "@/components/SearchResultsModal";

const Hero = () => {
  // State for form inputs
  const [email, setEmail] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [solarPotential, setSolarPotential] = useState("");
  const [showResultsModal, setShowResultsModal] = useState(false);
  
  // Custom hooks for backend functionality
  const { isLoading: isTrialLoading, startFreeTrial } = useTrialSignup();
  const { isLoading: isDemoLoading, scheduleDemo } = useDemoRequest();
  const { isLoading: isSearchLoading, results, searchProperties } = usePropertySearch();
  
  // Handle free trial button click
  const handleStartTrial = async () => {
    const trialEmail = prompt("Please enter your email to start your free trial:");
    if (trialEmail) {
      await startFreeTrial(trialEmail);
    }
  };
  
  // Handle demo button click
  const handleWatchDemo = async () => {
    const demoEmail = prompt("Please enter your email to schedule a demo:");
    if (demoEmail) {
      await scheduleDemo(demoEmail);
    }
  };
  
  // Handle property search
  const handleSearch = async () => {
    const searchResults = await searchProperties({
      propertyType,
      location,
      solarPotential
    });
    
    if (searchResults.length > 0) {
      setShowResultsModal(true);
    }
  };

  return (
    <div className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Abstract background with gradient overlay - increased opacity */}
      <div className="absolute inset-0 bg-[url('/lovable-uploads/0fb4fc64-c04a-492a-b1ed-e5e09bfdb10a.jpeg')] bg-cover bg-center opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-fin-blue/40"></div>
      
      {/* Geometric patterns - increased opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border-8 border-fin-blue/40 rounded-full opacity-90 rotate-12"></div>
        <div className="absolute top-60 -left-20 w-40 h-40 border-4 border-fin-purple/40 rounded-full opacity-90"></div>
        <div className="absolute bottom-20 right-40 w-60 h-60 border-6 border-fin-green/40 rounded-full opacity-90 -rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="inline-block p-2 px-4 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
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
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group"
              onClick={handleStartTrial}
              disabled={isTrialLoading}
            >
              {isTrialLoading ? "Processing..." : "Start Free Trial"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-primary/30 backdrop-blur"
              onClick={handleWatchDemo}
              disabled={isDemoLoading}
            >
              {isDemoLoading ? "Processing..." : "Watch Demo"}
            </Button>
          </div>
        </div>

        {/* Property search bar */}
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 animate-fade-in [animation-delay:600ms]">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Building2 className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input 
                type="text" 
                placeholder="Property type or address" 
                className="pl-10 h-12 bg-white border-gray-200" 
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input 
                type="text" 
                placeholder="Location" 
                className="pl-10 h-12 bg-white border-gray-200" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Gauge className="h-5 w-5 text-muted-foreground" />
              </div>
              <Input 
                type="text" 
                placeholder="Solar potential" 
                className="pl-10 h-12 bg-white border-gray-200" 
                value={solarPotential}
                onChange={(e) => setSolarPotential(e.target.value)}
              />
            </div>
            <Button 
              className="h-12 px-6 bg-gradient-to-r from-fin-blue to-fin-purple text-white shadow-md"
              onClick={handleSearch}
              disabled={isSearchLoading}
            >
              <Search className="h-5 w-5 mr-2" />
              {isSearchLoading ? "Searching..." : "Search"}
            </Button>
          </div>
        </div>

        {/* Search Results Modal */}
        <SearchResultsModal 
          isOpen={showResultsModal}
          onClose={() => setShowResultsModal(false)}
          results={results}
        />
      </div>
    </div>
  );
};

export default Hero;
