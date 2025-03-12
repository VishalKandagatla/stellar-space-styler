
import { Building2 } from "lucide-react";

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold tracking-tight">WHAT WE DO</h2>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">THE PROBLEM</h3>
              <p className="text-muted-foreground">
                In developing and restructuring land and property, sustainability subjects translate into regulatory guidelines to follow and certifications to be obtained. But Climate change risks, especially those linked to water, impact economically on the value and long-term profitability of the project. What's missing from the market is an effective system of data analysis that also provides actionable insights, and that does not require high-level technical skills to be operated.
              </p>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="h-full w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
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

export default WhatWeDo;
