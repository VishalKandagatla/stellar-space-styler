
import { SectionContainer } from "@/components/ui/section-container";
import CTAButton from "./cta/CTAButton";
import CTAContent from "./cta/CTAContent";
import CTACard from "./cta/CTACard";

const AboutCTA = () => {
  return (
    <section className="py-16 md:py-24 mb-8">
      <SectionContainer>
        <CTACard>
          <CTAContent 
            title="Join Us in Shaping a Sustainable Future"
            description="At Finsat, our ambition is to lead transformative change toward a sustainable future by unifying advanced technologies under one visionary platform."
          />
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CTAButton to="/contact">
              Contact Us
            </CTAButton>
            
            <CTAButton to="/join-team" variant="outline">
              Join Our Team
            </CTAButton>
          </div>
        </CTACard>
      </SectionContainer>
    </section>
  );
};

export default AboutCTA;
