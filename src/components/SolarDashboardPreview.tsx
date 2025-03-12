
import { ArrowRight, BarChart, BarChart3, Calendar, Filter, Gauge, Grid3x3, LayoutDashboard, LineChart, Map, PieChart, Settings, SlidersHorizontal, SunMedium, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";

const SolarDashboardPreview = () => {
  return (
    <section id="dashboard-preview" className="py-20 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <LayoutDashboard className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Interactive Solar Dashboard</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides comprehensive dashboards to visualize solar potential, financial projections, and performance metrics for your real estate investments.
          </p>
        </div>

        {/* Top Controls */}
        <div className="mb-8 bg-white rounded-xl shadow-md p-4 border border-border flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 rounded-full">
              <Settings className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-semibold">Portfolio Dashboard</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Last 12 Months
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Grid3x3 className="h-4 w-4" />
              View
            </Button>
          </div>
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
                  <Button variant="outline" size="sm">
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    Detailed View
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-[340px] bg-[url('/lovable-uploads/0fb4fc64-c04a-492a-b1ed-e5e09bfdb10a.jpeg')] bg-cover bg-center relative">
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

        {/* Additional Dashboard Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Performance Metrics */}
          <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
            <div className="p-4 border-b border-border bg-secondary/20">
              <div className="flex items-center gap-2">
                <Gauge className="h-5 w-5 text-fin-yellow" />
                <h3 className="font-semibold">Performance Metrics</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Energy Efficiency</span>
                  <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-fin-green w-[85%]"></div>
                  </div>
                  <span className="text-sm font-semibold">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Space Utilization</span>
                  <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[72%]"></div>
                  </div>
                  <span className="text-sm font-semibold">72%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">ROI Potential</span>
                  <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-fin-purple w-[93%]"></div>
                  </div>
                  <span className="text-sm font-semibold">93%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Payback Speed</span>
                  <div className="w-32 h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-fin-yellow w-[64%]"></div>
                  </div>
                  <span className="text-sm font-semibold">64%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Watchlist Preview */}
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
                <div className="flex justify-between items-center text-sm">
                  <span>Commercial</span>
                  <span className="font-medium">38 properties</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Residential</span>
                  <span className="font-medium">52 properties</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Industrial</span>
                  <span className="font-medium">21 properties</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span>Mixed-Use</span>
                  <span className="font-medium">14 properties</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
            <div className="p-4 border-b border-border bg-secondary/20">
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-fin-blue" />
                <h3 className="font-semibold">Regional Revenue</h3>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-center py-3 mb-3">
                <div className="relative w-28 h-28 rounded-full bg-secondary/40 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full" style={{ 
                    background: "conic-gradient(#0EA5E9 0% 30%, #10B981 30% 55%, #8B5CF6 55% 75%, #F59E0B 75% 100%)" 
                  }}></div>
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold">$418K</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                  <span className="text-sm">West Coast - 30%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-fin-green"></span>
                  <span className="text-sm">Midwest - 25%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-fin-purple"></span>
                  <span className="text-sm">East Coast - 20%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-fin-yellow"></span>
                  <span className="text-sm">South - 25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button className="rounded-lg px-6 py-3 bg-primary text-white font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2">
            EXPLORE COMPLETE DASHBOARD
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolarDashboardPreview;
