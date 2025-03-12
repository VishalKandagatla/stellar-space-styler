
import { LayoutDashboard } from "lucide-react";

type DashboardHeaderProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

const DashboardHeader = ({ 
  title, 
  description, 
  icon = <LayoutDashboard className="h-8 w-8 text-primary" />
}: DashboardHeaderProps) => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center gap-2 mb-4">
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default DashboardHeader;
