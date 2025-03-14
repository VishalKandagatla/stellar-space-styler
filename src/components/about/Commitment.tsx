
import { SectionContainer } from "@/components/ui/section-container";
import GlobalMap from "./commitment/GlobalMap";
import CommitmentContent from "./commitment/CommitmentContent";

const Commitment = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-fin-blue/5 to-white overflow-hidden">
      <SectionContainer>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Map Component - Right Side on Desktop */}
          <div className="order-2 md:order-1 md:w-1/2">
            <GlobalMap />
          </div>
          
          {/* Text Content - Left Side on Desktop */}
          <div className="order-1 md:order-2 md:w-1/2">
            <CommitmentContent />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Commitment;
