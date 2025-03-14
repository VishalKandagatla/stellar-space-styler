
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent } from "@/components/ui/card";
import ValueCard from "@/components/ui/value-card";
import { Flame, AirVent, Droplet, Earth } from "lucide-react";

const ServiceDomains = () => {
  const domains = [
    {
      icon: Flame,
      title: "Solar (Fire)",
      description: "Advanced property analysis, financial modeling (NPV, IRR, payback period), and AI-driven solar asset management.",
      color: "orange" as const
    },
    {
      icon: AirVent,
      title: "Air Quality Management",
      description: "Upcoming analytics to monitor, predict, and mitigate air quality issues through intelligent data solutions.",
      color: "purple" as const
    },
    {
      icon: Droplet,
      title: "Water Resource Optimization",
      description: "Future capabilities include technology-driven water usage analysis and conservation strategies for sustainable management.",
      color: "cyan" as const
    },
    {
      icon: Earth,
      title: "Earth Sustainability",
      description: "Innovative approaches to land management, soil health monitoring, and sustainable agricultural practices powered by AI and machine learning.",
      color: "green" as const
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <SectionContainer>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Choose Finsat?</h2>
          <p className="text-muted-foreground">
            Our integrated platform delivers powerful tools for sustainable solutions across multiple environmental domains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {domains.map((domain, index) => (
            <Card key={index} className="bg-white/50 backdrop-blur border-none shadow-md hover:shadow-lg transition-all duration-300 group">
              <CardContent className="pt-6">
                <ValueCard
                  color={domain.color}
                  icon={<domain.icon className="h-5 w-5 text-white" />}
                  title={domain.title}
                  description={domain.description}
                  className="bg-transparent hover:bg-transparent p-0"
                  compact
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default ServiceDomains;
