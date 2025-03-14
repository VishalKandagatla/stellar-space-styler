
import { SectionContainer } from "@/components/ui/section-container";
import { Flame, Earth, Droplet, AirVent } from "lucide-react";

const Introduction = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-white via-white to-fin-blue/10">
      <SectionContainer>
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Finsat is a pioneering technology company committed to driving sustainability and innovation across critical environmental domains: Air, Water, Earth, and Fire (Solar). Initially established as a leader in solar feasibility and asset management solutions, Finsat is evolving into a broader environmental technology platform to address diverse sustainability challenges.
            </p>
            
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="inline-flex items-center rounded-full bg-fin-blue/10 px-3 py-1 text-sm font-medium text-fin-blue">
                <Flame className="mr-1 h-4 w-4" /> Solar Energy
              </span>
              <span className="inline-flex items-center rounded-full bg-fin-green/10 px-3 py-1 text-sm font-medium text-fin-green">
                <Earth className="mr-1 h-4 w-4" /> Earth Sustainability
              </span>
              <span className="inline-flex items-center rounded-full bg-fin-cyan/10 px-3 py-1 text-sm font-medium text-fin-cyan">
                <Droplet className="mr-1 h-4 w-4" /> Water Resources
              </span>
              <span className="inline-flex items-center rounded-full bg-fin-purple/10 px-3 py-1 text-sm font-medium text-fin-purple">
                <AirVent className="mr-1 h-4 w-4" /> Air Quality
              </span>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[350px] group">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72" 
                alt="Finsat Team" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-white/80 text-sm">Driving transformative change toward a sustainable future</p>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Introduction;
