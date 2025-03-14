
import { SectionContainer } from "@/components/ui/section-container";
import { Card, CardContent } from "@/components/ui/card";
import { Flame, AirVent, Droplet, Earth } from "lucide-react";

const ServiceDomains = () => {
  const domains = [
    {
      icon: Flame,
      title: "Solar (Fire)",
      description: "Advanced property analysis, financial modeling (NPV, IRR, payback period), and AI-driven solar asset management.",
      color: "bg-fin-orange/10 text-fin-orange"
    },
    {
      icon: AirVent,
      title: "Air Quality Management",
      description: "Upcoming analytics to monitor, predict, and mitigate air quality issues through intelligent data solutions.",
      color: "bg-fin-purple/10 text-fin-purple"
    },
    {
      icon: Droplet,
      title: "Water Resource Optimization",
      description: "Future capabilities include technology-driven water usage analysis and conservation strategies for sustainable management.",
      color: "bg-fin-cyan/10 text-fin-cyan"
    },
    {
      icon: Earth,
      title: "Earth Sustainability",
      description: "Innovative approaches to land management, soil health monitoring, and sustainable agricultural practices powered by AI and machine learning.",
      color: "bg-fin-green/10 text-fin-green"
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
                <div className={`h-12 w-12 rounded-full ${domain.color} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <domain.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{domain.title}</h3>
                
                <p className="text-muted-foreground">{domain.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

export default ServiceDomains;
