
import { Globe, Check } from "lucide-react";

const CommitmentContent = () => {
  return (
    <div>
      <div className="inline-flex items-center gap-2 text-fin-blue font-medium mb-3 bg-fin-blue/10 px-4 py-1.5 rounded-full">
        <Globe className="h-4 w-4" />
        <span>GLOBAL IMPACT</span>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-fin-blue to-fin-purple bg-clip-text text-transparent">Our Commitment</h2>
      
      <p className="text-muted-foreground leading-relaxed mb-6">
        Finsat is uniquely positioned at the intersection of environmental stewardship and advanced technology. Our integrated platform offers comprehensive tools designed to support businesses, governments, and communities in achieving sustainability and compliance goals.
      </p>
      
      <h3 className="text-xl font-semibold mt-8 mb-4">Driving Value Through Sustainability</h3>
      
      <p className="text-muted-foreground mb-6">
        We believe sustainability is achieved through intelligent decision-making informed by data-driven insights. Our solutions empower stakeholders across industries to:
      </p>
      
      <div className="space-y-4 mt-6">
        <CommitmentFeature 
          color="blue" 
          title="Identify and Analyze" 
          description="Environmental challenges with precise geospatial intelligence." 
        />
        
        <CommitmentFeature 
          color="purple" 
          title="Optimize and Deploy" 
          description="Resources efficiently, maximizing environmental and economic returns." 
        />
        
        <CommitmentFeature 
          color="green" 
          title="Monitor and Manage" 
          description="Assets proactively, ensuring compliance with evolving regulatory standards." 
        />
      </div>
    </div>
  );
};

interface CommitmentFeatureProps {
  color: 'blue' | 'purple' | 'green' | 'yellow';
  title: string;
  description: string;
}

const CommitmentFeature = ({ color, title, description }: CommitmentFeatureProps) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-fin-blue/5 hover:bg-fin-blue/10',
          icon: 'bg-fin-blue'
        };
      case 'purple':
        return {
          bg: 'bg-fin-purple/5 hover:bg-fin-purple/10',
          icon: 'bg-fin-purple'
        };
      case 'green':
        return {
          bg: 'bg-fin-green/5 hover:bg-fin-green/10',
          icon: 'bg-fin-green'
        };
      case 'yellow':
        return {
          bg: 'bg-fin-yellow/5 hover:bg-fin-yellow/10',
          icon: 'bg-fin-yellow'
        };
      default:
        return {
          bg: 'bg-fin-blue/5 hover:bg-fin-blue/10',
          icon: 'bg-fin-blue'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className={`flex gap-4 p-4 rounded-lg ${colors.bg} transition-colors`}>
      <div className={`h-8 w-8 rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}>
        <Check className="h-4 w-4 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default CommitmentContent;
