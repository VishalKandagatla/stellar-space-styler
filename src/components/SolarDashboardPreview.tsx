
import { BarChart, Calendar, Map, PieChart, SunMedium, TrendingUp } from "lucide-react";

const SolarDashboardPreview = () => {
  return (
    <section id="dashboard-preview" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <SunMedium className="h-8 w-8 text-fin-yellow" />
            <h2 className="text-3xl font-bold">Interactive Solar Analysis</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our CityL3ns platform provides comprehensive dashboards to visualize climate data and solar potential for your real estate investments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Dashboard Preview 1 - Map View */}
          <div className="col-span-2 rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur border border-border h-[400px]">
            <div className="p-4 border-b border-border bg-secondary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Map className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">Interactive Property Map</h3>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-xs rounded-md bg-secondary hover:bg-secondary/80 transition-colors">
                    Filter
                  </button>
                  <button className="px-3 py-1 text-xs rounded-md bg-primary text-white hover:bg-primary/90 transition-colors">
                    Detailed View
                  </button>
                </div>
              </div>
            </div>
            <div className="h-[340px] bg-[url('https://images.unsplash.com/photo-1518495973542-4542c06a5843')] bg-cover bg-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 flex items-end p-6">
                <div className="grid grid-cols-3 gap-4 w-full">
                  <div className="glass rounded-lg p-3 text-center backdrop-blur-md">
                    <h4 className="text-xs text-white/80">Solar Potential</h4>
                    <p className="text-white font-semibold">1,450 kWh/m²</p>
                  </div>
                  <div className="glass rounded-lg p-3 text-center backdrop-blur-md">
                    <h4 className="text-xs text-white/80">Avg. ROI</h4>
                    <p className="text-white font-semibold">15.7%</p>
                  </div>
                  <div className="glass rounded-lg p-3 text-center backdrop-blur-md">
                    <h4 className="text-xs text-white/80">Payback Period</h4>
                    <p className="text-white font-semibold">6.3 Years</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Preview 2 - Chart View */}
          <div className="rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur border border-border">
            <div className="p-4 border-b border-border bg-secondary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-fin-green" />
                  <h3 className="font-semibold">Financial Projection</h3>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">12 Month</span>
                </div>
              </div>
            </div>
            <div className="p-4 h-[340px] flex flex-col">
              <div className="mb-4 p-3 rounded-lg bg-secondary/30 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold">Annual Revenue</h4>
                  <p className="text-2xl font-bold text-fin-green">$84,250</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center text-xs px-2 py-1 rounded-full bg-fin-green/20 text-fin-green">
                    +12.4% YoY
                  </span>
                </div>
              </div>
              
              <div className="h-[220px] grid place-items-center">
                <div className="bg-gradient-to-r from-fin-blue to-fin-green h-32 w-full rounded-lg opacity-30"></div>
              </div>
              
              <div className="grid grid-cols-3 gap-3 mt-auto">
                <div className="flex flex-col items-center rounded-lg p-2 bg-secondary/30">
                  <span className="text-xs text-muted-foreground">NPV</span>
                  <span className="font-semibold">$145K</span>
                </div>
                <div className="flex flex-col items-center rounded-lg p-2 bg-secondary/30">
                  <span className="text-xs text-muted-foreground">IRR</span>
                  <span className="font-semibold">18.2%</span>
                </div>
                <div className="flex flex-col items-center rounded-lg p-2 bg-secondary/30">
                  <span className="text-xs text-muted-foreground">ROI</span>
                  <span className="font-semibold">2.4x</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="rounded-lg px-6 py-3 bg-primary text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
            EXPLORE CITYL3NS PLATFORM
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolarDashboardPreview;
