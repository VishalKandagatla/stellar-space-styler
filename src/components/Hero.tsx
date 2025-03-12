
import { ArrowRight, SunMedium } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      id="hero"
    >
      {/* Solar-themed Background */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30"></div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-fin-blue/10 via-transparent to-fin-yellow/20 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-fin-yellow/10 blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-fin-blue/10 blur-3xl -z-10 animate-float" style={{ animationDelay: "2s" }}></div>
      
      {/* Sun rays effect */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(254,240,138,0.2),transparent_60%)] -z-10"></div>
      
      {/* Solar panels background */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[url('https://images.unsplash.com/photo-1523712999610-f77fbcfc3843')] bg-cover bg-bottom opacity-5 -z-10"></div>
      
      {/* Moving sun beam effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200%] h-full bg-gradient-to-b from-fin-yellow/5 to-transparent rotate-12 animate-pulse -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up">
            UNLOCK ALL THE VALUE BEHIND CLIMATE CHANGE IMPACT
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            FinSat is the profitable way to develop land and properties sustainably, to make smart Real Estate decisions and mitigate risk, increasing the value of land and property investments. Transform Climate Risk into Development Opportunity with CityL3ns: AI-Powered Weather Intelligence Platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <button className="rounded-lg px-6 py-3 bg-primary text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              JOIN OUR WAITLIST
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-border">
              <h3 className="text-sm font-medium">THE PROBLEM</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-border">
              <h3 className="text-sm font-medium">HOW WE SOLVE IT</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-border">
              <h3 className="text-sm font-medium">OUR PLAN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
