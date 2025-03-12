
import { Globe, Lightbulb, ArrowRight, Target, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Mission = () => {
  const missionPoints = [
    "Leading authority in climate change impact analysis",
    "Building sustainable properties for future generations",
    "Prioritizing people-centric technology solutions",
    "Bringing experts together to solve complex challenges"
  ];

  return (
    <section id="mission" className="py-24 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-secondary/30 to-fin-blue/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-24 h-24 rounded-full border-4 border-fin-blue/10 animate-float [animation-delay:3s]"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 rounded-full border-4 border-fin-purple/10 animate-float"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <div className="inline-block p-2 px-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 animate-fade-in">
              <span className="text-sm font-medium text-primary flex items-center">
                <Globe className="h-4 w-4 mr-2" />
                Our Purpose
              </span>
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight gradient-text animate-slide-down mb-6">MISSION</h2>
            
            <div className="mb-10">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-fin-blue/10 to-fin-purple/10 animate-pulse opacity-70"></div>
                <div className="glass p-6 rounded-2xl shadow-lg relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fin-blue/20 to-fin-purple/20 flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold gradient-text">WHAT WE STAND FOR</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    FinSat's purpose is to be the leading authority in releasing the value of climate change impacts on land and properties. With our commitment to sustainability, we stand for building more valuable properties and stronger, peaceful communities for future generations.
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {missionPoints.map((point, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-fin-green mt-0.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button variant="outline" size="sm" className="group">
                    Learn more about our mission
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-fin-green/20 to-fin-blue/20 flex items-center justify-center">
                  <Target className="h-5 w-5 text-fin-blue" />
                </div>
                <h3 className="text-xl font-semibold text-fin-blue">HOW WE OPERATE</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">
                We provide comprehensive Real Estate Climate Impact Assessments and trends, also in key resources like water drought and flood vulnerability, delivering actionable mitigation opportunities, and transition based ratings, to optimize property value solutions.
              </p>
              <p className="text-muted-foreground">
                We integrate advanced space and in-situ data with IoT systems to monitor, and proprietary AI to predict future trends, ensuring our solutions are verified, regenerative and forward-thinking.
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="sticky top-32">
              <div className="relative">
                {/* Multi-layered frame effect */}
                <div className="absolute -inset-8 rounded-3xl border-2 border-fin-blue/20 transform -rotate-3"></div>
                <div className="absolute -inset-4 rounded-3xl border-2 border-fin-purple/20 transform rotate-1"></div>
                
                <div className="h-full w-full rounded-xl shadow-xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-fin-blue/40 to-fin-purple/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  
                  {/* Main image */}
                  <img 
                    src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                    alt="Mission" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">Transforming Real Estate</h3>
                    <p className="text-white/80 mb-4">Through sustainable innovation and climate-conscious development</p>
                    <Button variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 group">
                      Our Approach
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
