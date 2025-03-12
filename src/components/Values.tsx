
import { Check, Users, FlaskConical, Lightbulb, Globe, Heart } from "lucide-react";

const ValueCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 border border-border hover:shadow-md transition-all duration-300">
      <div className="h-12 w-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Values = () => {
  const values = [
    {
      icon: Users,
      title: "PEOPLE BEFORE TECHNOLOGY",
      description: "FinSat ensures that its tools empower communities worldwide to rebuild stronger, live peacefully, and create a legacy for future generations."
    },
    {
      icon: FlaskConical,
      title: "FAIL TEST",
      description: "By learning fast and making action happen in real life, FinSat encourages rapid learning and real-world action."
    },
    {
      icon: Lightbulb,
      title: "CONNECTING PEOPLE, INNOVATION AND TECHNOLOGY",
      description: "By creating strong relationships and learning from each other, FinSat creates a foundation of trust and mutual respect."
    },
    {
      icon: Globe,
      title: "TRANSPARENT DIPLOMACY",
      description: "By respecting and understanding cultural needs, FinSat builds trust-based and effective collaborations."
    },
    {
      icon: Heart,
      title: "HONESTY, OPEN DIALOGUE AND LOYALTY",
      description: "By building strong relationships and learning from each other, FinSat creates a foundation of trust and mutual respect."
    }
  ];

  return (
    <section id="values" className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Check className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">OUR VALUES</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <ValueCard 
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
