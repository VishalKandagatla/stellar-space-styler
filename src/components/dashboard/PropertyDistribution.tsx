import { BarChart3, Building2, Home, Factory, Building } from "lucide-react";
import ValueCard from "@/components/ui/value-card";

const PropertyDistribution = () => {
  const propertyTypes = [
    {
      type: "Commercial",
      count: "38 properties",
      icon: Building2,
      color: "blue" as const
    },
    {
      type: "Residential",
      count: "52 properties",
      icon: Home,
      color: "green" as const
    },
    {
      type: "Industrial",
      count: "21 properties",
      icon: Factory,
      color: "red" as const
    },
    {
      type: "Mixed-Use",
      count: "14 properties",
      icon: Building,
      color: "purple" as const
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
      <div className="p-4 border-b border-border bg-secondary/20">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-fin-purple" />
          <h3 className="font-semibold">Property Distribution</h3>
        </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="bg-secondary/30 rounded-lg p-3">
            <h4 className="text-xs text-muted-foreground">Total Properties</h4>
            <p className="text-xl font-bold">125</p>
          </div>
          <div className="bg-secondary/30 rounded-lg p-3">
            <h4 className="text-xs text-muted-foreground">Watchlists</h4>
            <p className="text-xl font-bold">7</p>
          </div>
        </div>
        <div className="space-y-3 pt-2">
          {propertyTypes.map((property, index) => (
            <ValueCard
              key={index}
              color={property.color}
              icon={<property.icon className="h-3 w-3 text-white" />}
              title={property.type}
              description={property.count}
              compact
              bordered
              className="py-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyDistribution;
