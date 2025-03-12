
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const elements = heroRef.current.querySelectorAll(".parallax-element");
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const moveX = (e.clientX - centerX) / 30;
      const moveY = (e.clientY - centerY) / 30;
      
      elements.forEach((el, i) => {
        const depth = (i + 1) * 0.2;
        const translateX = moveX * depth;
        const translateY = moveY * depth;
        
        (el as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-50"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 parallax-element"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-fin-blue/10 rounded-full blur-3xl -z-10 parallax-element"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/5 border border-primary/10 text-primary mb-6 animate-fade-in">
            <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
            The intelligent financial satellite platform
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up" style={{ animationDelay: "100ms" }}>
            Navigate Your Financial Universe
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
            Explore real-time market insights, personalized portfolio tracking, and data-driven investment opportunities in one elegant platform.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: "300ms" }}>
            <button className="rounded-lg px-6 py-3 bg-primary text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              Launch Dashboard
            </button>
            <button className="rounded-lg px-6 py-3 bg-white text-foreground font-medium border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl animate-slide-up" style={{ animationDelay: "400ms" }}>
            <div className="absolute inset-0 bg-gradient-radial from-black/20 to-transparent opacity-20 pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1642790551116-18e150f248e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Finsat Dashboard Preview" 
              className="w-full h-auto object-cover rounded-2xl parallax-element" 
              style={{ transform: "scale(1.02)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
