import { ArrowRight, SunMedium } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      id="hero"
    >
      {/* Main background image - solar panels in field */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1613665813446-82a78c468a1d')] 
        bg-cover bg-center opacity-30 -z-10"
      ></div>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent -z-10"></div>

      {/* Subtle sun effects */}
      <div className="absolute top-0 right-0 w-full h-full 
        bg-[radial-gradient(circle_at_top_right,rgba(254,240,138,0.3),transparent_70%)] -z-10">
      </div>
      
      {/* Floating sun icon */}
      <div className="absolute top-20 right-20 text-fin-yellow opacity-30 animate-float">
        <SunMedium size={100} />
      </div>

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
