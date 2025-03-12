
import { ArrowRight, SunMedium } from "lucide-react";

const Hero = () => {
  return (
    <div 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      id="hero"
    >
      {/* Main solar panel field background with developers */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562220058-1a0a019ab606')] 
        bg-cover bg-center opacity-80 -z-10"
      ></div>
      
      {/* Vibrant color overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-fin-blue/30 via-transparent to-fin-yellow/30 mix-blend-overlay -z-10"></div>
      
      {/* Additional visual elements for vibrancy */}
      <div className="absolute top-0 right-0 w-full h-full 
        bg-[radial-gradient(circle_at_top_right,rgba(254,240,138,0.5),transparent_70%)] -z-10">
      </div>
      
      {/* Multiple sun elements for depth */}
      <div className="absolute top-20 right-20 text-fin-yellow opacity-60 animate-float">
        <SunMedium size={100} />
      </div>
      
      <div className="absolute bottom-40 left-20 text-fin-yellow opacity-40 animate-float" style={{ animationDelay: "1.5s" }}>
        <SunMedium size={70} />
      </div>
      
      {/* Light beams */}
      <div className="absolute -top-20 right-1/4 w-[300px] h-[600px] bg-gradient-to-b from-fin-yellow/30 to-transparent rotate-[30deg] -z-10"></div>
      
      {/* Content container with glass effect for better readability */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up text-fin-blue">
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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 animate-slide-up" style={{ animationDelay: "400ms" }}>
            <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-border">
              <h3 className="text-sm font-medium">THE PROBLEM</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-border">
              <h3 className="text-sm font-medium">HOW WE SOLVE IT</h3>
            </div>
            <div className="flex flex-col items-center p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-border">
              <h3 className="text-sm font-medium">OUR PLAN</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
