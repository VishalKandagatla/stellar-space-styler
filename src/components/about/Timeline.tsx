import { SectionContainer } from "@/components/ui/section-container";
import { Separator } from "@/components/ui/separator";
import { Clock, Award, Flag, Star, Calendar, Rocket, Lightbulb, Target, Droplet } from "lucide-react";

type MilestoneProps = {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  position: "left" | "right";
}

const Milestone = ({ year, title, description, icon, position }: MilestoneProps) => {
  return (
    <div className="flex items-start gap-4 md:gap-8 relative">
      {position === "left" && (
        <div className="text-right md:w-1/2 pr-8 md:pr-12">
          <p className="text-sm font-semibold text-fin-blue mb-1">{year}</p>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </div>
      )}

      <div className="flex flex-col items-center z-10">
        <div className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center border border-fin-blue/20">
          {icon}
        </div>
        <div className="h-full w-0.5 bg-fin-blue/20 mt-2"></div>
      </div>

      {position === "right" && (
        <div className="md:w-1/2 pl-8 md:pl-12">
          <p className="text-sm font-semibold text-fin-blue mb-1">{year}</p>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm md:text-base">{description}</p>
        </div>
      )}
    </div>
  );
};

const Timeline = () => {
  const milestones = [
    {
      year: "2018",
      title: "Foundation of Finsat",
      description: "Established as a pioneer in solar feasibility and asset management solutions, laying the groundwork for future innovation.",
      icon: <Flag className="h-5 w-5 text-fin-blue" />,
      position: "left" as const
    },
    {
      year: "2019",
      title: "First Solar Platform Release",
      description: "Launched our groundbreaking solar analysis platform, enabling precise property evaluation and financial modeling for sustainable energy projects.",
      icon: <Rocket className="h-5 w-5 text-fin-orange" />,
      position: "right" as const
    },
    {
      year: "2020",
      title: "European Expansion",
      description: "Expanded operations to Europe, establishing our presence in key markets and diversifying our global footprint.",
      icon: <Calendar className="h-5 w-5 text-fin-purple" />,
      position: "left" as const
    },
    {
      year: "2021",
      title: "AI Integration",
      description: "Incorporated advanced AI algorithms for enhanced prediction accuracy and automated decision-making processes.",
      icon: <Lightbulb className="h-5 w-5 text-fin-yellow" />,
      position: "right" as const
    },
    {
      year: "2022",
      title: "Water Domain Launch",
      description: "Expanded our environmental technology platform to include water resource management and optimization tools.",
      icon: <Droplet className="h-5 w-5 text-fin-cyan" />,
      position: "left" as const
    },
    {
      year: "2023",
      title: "Recognition & Awards",
      description: "Received industry recognition for our contributions to environmental sustainability technology and innovation.",
      icon: <Award className="h-5 w-5 text-fin-green" />,
      position: "right" as const
    },
    {
      year: "2024",
      title: "Full Platform Integration",
      description: "Achieved complete integration of Air, Water, Earth, and Fire domains into a unified environmental sustainability platform.",
      icon: <Target className="h-5 w-5 text-fin-blue" />,
      position: "left" as const
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-white via-white to-fin-blue/5">
      <SectionContainer>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore the key milestones and achievements that have shaped Finsat's evolution as a leader in environmental technology.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-fin-blue/5 via-fin-blue/20 to-fin-blue/5 hidden md:block"></div>
          
          <div className="space-y-12 md:space-y-16 relative">
            {milestones.map((milestone, index) => (
              <Milestone
                key={index}
                year={milestone.year}
                title={milestone.title}
                description={milestone.description}
                icon={milestone.icon}
                position={milestone.position}
              />
            ))}
            <div className="flex justify-center">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-fin-blue to-fin-purple shadow-lg flex items-center justify-center text-white">
                <Star className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default Timeline;
