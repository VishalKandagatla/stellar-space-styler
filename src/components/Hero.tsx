
import { ArrowRight, Sparkles } from "lucide-react";
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
      </div>
    </div>
  );
};

export default Hero;
