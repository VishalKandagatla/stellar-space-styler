
import { Globe } from "lucide-react";

const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-4 animate-slide-down">
              <Globe className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">MISSION</h2>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 animate-slide-down [animation-delay:100ms]">WHAT WE STAND FOR</h3>
              <p className="text-muted-foreground mb-8">
                FinSat's purpose is to be the leading authority in releasing the value of climate change impacts on land and properties. With our commitment to sustainability, we stand for building more valuable properties and stronger, peaceful communities for future generations. We prioritize people over technology and bring individuals together to solve the toughest challenges and give them access to insights of the world's most essential resources.
              </p>
              
              <h3 className="text-xl font-semibold mb-4 animate-slide-down [animation-delay:200ms]">HOW WE OPERATE</h3>
              <p className="text-muted-foreground mb-4">
                We provide comprehensive Real Estate Climate Impact Assessments and trends, also in key resources like water drought and flood vulnerability, delivering actionable mitigation opportunities, and transition based ratings, to optimize property value solutions.
              </p>
              <p className="text-muted-foreground">
                We integrate advanced space and in-situ data with IoT systems to monitor, and proprietary AI to predict future trends, ensuring our solutions are verified, regenerative and forward-thinking.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="h-full w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e" 
                alt="Mission" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
