
import { SectionContainer } from "./ui/section-container";
import DashboardHeader from "./dashboard/DashboardHeader";
import TopControls from "./dashboard/TopControls";
import MapView from "./dashboard/MapView";
import FinancialProjection from "./dashboard/FinancialProjection";
import PerformanceMetrics from "./dashboard/PerformanceMetrics";
import PropertyDistribution from "./dashboard/PropertyDistribution";
import RegionalRevenue from "./dashboard/RegionalRevenue";
import ActionButton from "./dashboard/ActionButton";

const SolarDashboardPreview = () => {
  return (
    <section id="dashboard-preview" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <SectionContainer>
        <DashboardHeader 
          title="Interactive Solar Dashboard"
          description="Our platform provides comprehensive dashboards to visualize solar potential, financial projections, and performance metrics for your real estate investments."
        />

        <TopControls />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <MapView />
          <FinancialProjection />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <PerformanceMetrics />
          <PropertyDistribution />
          <RegionalRevenue />
        </div>

        <ActionButton />
      </SectionContainer>
    </section>
  );
};

export default SolarDashboardPreview;
