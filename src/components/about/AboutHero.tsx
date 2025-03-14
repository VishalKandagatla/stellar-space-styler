
import { SectionContainer } from "@/components/ui/section-container";
import { Sparkles } from "lucide-react";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-20">
      <SectionContainer>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block p-2 px-4 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in">
            <span className="text-sm font-medium text-fin-blue flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-fin-yellow" />
              About Us
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
            <span className="bg-gradient-to-r from-primary via-fin-blue to-fin-purple bg-clip-text text-transparent animate-fade-in drop-shadow-sm">
              About Finsat
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 animate-fade-in [animation-delay:200ms]">
            A pioneering technology company committed to driving sustainability and innovation across critical environmental domains: Air, Water, Earth, and Fire (Solar).
          </p>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutHero;
