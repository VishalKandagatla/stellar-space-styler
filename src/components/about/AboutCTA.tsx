
import { SectionContainer } from "@/components/ui/section-container";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-24 mb-8">
      <SectionContainer>
        <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Join Us in Shaping a Sustainable Future</h2>
            <p className="text-muted-foreground">
              At Finsat, our ambition is to lead transformative change toward a sustainable future by unifying advanced technologies under one visionary platform.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-primary to-fin-blue text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border-primary/30 backdrop-blur" asChild>
              <Link to="/join-team">
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default AboutCTA;
