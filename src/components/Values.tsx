
import { Check, Users, FlaskConical, Lightbulb, Globe, Heart } from "lucide-react";

const ValueCard = ({ icon: Icon, title, description, index }: { 
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}) => {
  // Calculate different angles for each card to create a "scattered" effect
  const rotation = index % 2 === 0 ? 'rotate-1' : '-rotate-1';
  const delay = index * 150;
  
  return (
    <div className={`relative group animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
      {/* Card background with rotation */}
      <div className={`bg-white/90 backdrop-blur-md rounded-xl shadow-lg p-6 border border-white/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${rotation} group-hover:rotate-0`}>
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-fin-blue/10 to-transparent rounded-bl-full"></div>
        
        <div className="relative">
          <div className="h-14 w-14 bg-gradient-to-br from-primary/10 to-fin-blue/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-7 w-7 text-primary group-hover:text-fin-blue transition-colors" />
          </div>
          
          <h3 className="text-lg font-semibold mb-3 gradient-text">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
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
    <section id="values" className="py-24 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-fin-purple/5 via-white to-fin-blue/5"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-[linear-gradient(90deg,transparent_0%,rgba(220,220,255,0.2)_50%,transparent_100%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 bg-[linear-gradient(90deg,transparent_0%,rgba(220,240,255,0.2)_50%,transparent_100%)]"></div>
      
      {/* Floating shapes */}
      <div className="absolute top-40 left-20 w-40 h-40 rounded-full border-4 border-fin-blue/5 animate-float"></div>
      <div className="absolute bottom-40 right-20 w-60 h-60 rounded-full border-4 border-fin-purple/5 animate-float [animation-delay:2s]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-4 border-fin-green/5 animate-float [animation-delay:4s]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-4 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-4 animate-fade-in">
            <span className="text-sm font-medium text-primary flex items-center justify-center">
              <Check className="h-4 w-4 mr-2" />
              What Guides Us
            </span>
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight gradient-text animate-slide-down mb-4">OUR VALUES</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our core values guide everything we do, from product development to customer relationships.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
