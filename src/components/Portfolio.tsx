
import { LineChart, DonutChart, Share, BarChart3, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import LineChart from "./LineChart";
import FinancialCard from "./FinancialCard";

// Sample portfolio data
const assetAllocation = [
  { id: 1, type: "Stocks", value: 62, color: "#0EA5E9" },
  { id: 2, type: "Bonds", value: 18, color: "#8B5CF6" },
  { id: 3, type: "Cash", value: 8, color: "#10B981" },
  { id: 4, type: "Alternatives", value: 12, color: "#F59E0B" },
];

const topHoldings = [
  { id: 1, name: "Apple Inc.", ticker: "AAPL", allocation: 12.4, value: 32120.24, trend: 5.8 },
  { id: 2, name: "Microsoft Corp.", ticker: "MSFT", allocation: 11.2, value: 29013.44, trend: 7.2 },
  { id: 3, name: "Amazon.com Inc.", ticker: "AMZN", allocation: 8.7, value: 22528.04, trend: -2.1 },
  { id: 4, name: "Alphabet Inc.", ticker: "GOOGL", allocation: 7.6, value: 19679.68, trend: 3.4 },
];

const portfolioPerformance = [
  { name: "Jan", value: 100 },
  { name: "Feb", value: 110 },
  { name: "Mar", value: 105 },
  { name: "Apr", value: 115 },
  { name: "May", value: 125 },
  { name: "Jun", value: 140 },
  { name: "Jul", value: 135 },
  { name: "Aug", value: 150 },
  { name: "Sep", value: 160 },
  { name: "Oct", value: 155 },
  { name: "Nov", value: 170 },
  { name: "Dec", value: 190 },
];

const Portfolio = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Portfolio Analysis</h2>
            <p className="text-muted-foreground">Optimize your investment strategy with data-driven insights</p>
          </div>
          
          <button className="mt-4 md:mt-0 h-10 px-4 rounded-lg bg-white border border-border text-sm font-medium shadow-sm hover:bg-secondary/50 transition-colors flex items-center">
            <Share className="h-4 w-4 mr-2" />
            Export Report
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <FinancialCard title="Portfolio Performance" className="h-[320px]">
              <div className="mt-2 h-[230px]">
                <LineChart 
                  data={portfolioPerformance} 
                  height={230} 
                  strokeColor="#0EA5E9"
                />
              </div>
            </FinancialCard>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FinancialCard title="Risk Analysis" className="h-[260px]">
                <div className="flex flex-col h-full justify-between">
                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Volatility</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-fin-blue w-1/4"></div>
                        </div>
                        <span className="text-xs ml-2">Low</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sharpe Ratio</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-fin-green w-3/4"></div>
                        </div>
                        <span className="text-xs ml-2">High</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Beta</span>
                      <div className="flex items-center">
                        <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-fin-yellow w-2/4"></div>
                        </div>
                        <span className="text-xs ml-2">Medium</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-3 border-t border-border">
                    <div>
                      <div className="text-sm font-medium">Risk Score</div>
                      <div className="text-2xl font-bold">68/100</div>
                    </div>
                    <div className="text-xs text-muted-foreground">Moderately Aggressive</div>
                  </div>
                </div>
              </FinancialCard>
              
              <FinancialCard title="Top Holdings" className="h-[260px]">
                <div className="mt-4 space-y-3 overflow-hidden">
                  {topHoldings.map((holding) => (
                    <div key={holding.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-7 w-7 rounded bg-secondary/80 flex items-center justify-center mr-2 text-xs font-medium">
                          {holding.ticker.substring(0, 2)}
                        </div>
                        <div className="truncate">
                          <div className="text-sm font-medium truncate" style={{ maxWidth: "120px" }}>{holding.name}</div>
                          <div className="text-xs text-muted-foreground">{holding.allocation}% allocation</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium">${holding.value.toLocaleString()}</div>
                        <div className={cn(
                          "text-xs",
                          holding.trend > 0 ? "text-fin-green" : "text-fin-red"
                        )}>
                          {holding.trend > 0 ? "+" : ""}{holding.trend}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-5 pt-3 border-t border-border">
                  <button className="text-sm text-primary font-medium hover:text-primary/80 transition-colors">
                    View All Holdings
                  </button>
                </div>
              </FinancialCard>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-6">
            <FinancialCard title="Asset Allocation" className="h-[320px]">
              <div className="flex justify-center mt-4">
                <div className="relative h-44 w-44">
                  <svg width="176" height="176" viewBox="0 0 176 176" className="transform -rotate-90">
                    {/* Create a donut chart using SVG */}
                    {assetAllocation.reduce((acc, curr, index) => {
                      const prevPercent = acc.percent;
                      const currPercent = prevPercent + curr.value;
                      
                      // Calculate the SVG arc path
                      const startX = 88 + 70 * Math.cos(2 * Math.PI * prevPercent / 100);
                      const startY = 88 + 70 * Math.sin(2 * Math.PI * prevPercent / 100);
                      const endX = 88 + 70 * Math.cos(2 * Math.PI * currPercent / 100);
                      const endY = 88 + 70 * Math.sin(2 * Math.PI * currPercent / 100);
                      
                      // Determine if the arc should be drawn the long way around
                      const largeArcFlag = curr.value > 50 ? 1 : 0;
                      
                      // SVG path for the arc
                      const path = (
                        <path
                          key={curr.id}
                          d={`M 88 88 L ${startX} ${startY} A 70 70 0 ${largeArcFlag} 1 ${endX} ${endY} Z`}
                          fill={curr.color}
                          className="transition-all duration-500"
                        />
                      );
                      
                      return {
                        paths: [...acc.paths, path],
                        percent: currPercent,
                      };
                    }, { paths: [] as React.ReactNode[], percent: 0 }).paths}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="text-xs text-muted-foreground">Total Value</div>
                    <div className="text-xl font-bold">$258,943</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-2 gap-2">
                {assetAllocation.map((asset) => (
                  <div key={asset.id} className="flex items-center">
                    <div className="h-3 w-3 rounded-full mr-2" style={{ backgroundColor: asset.color }}></div>
                    <div className="text-xs">
                      <span className="font-medium">{asset.type}</span>
                      <span className="text-muted-foreground ml-1">{asset.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </FinancialCard>
            
            <FinancialCard title="Performance Metrics" className="h-[260px]">
              <div className="mt-4 space-y-4">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <BarChart3 className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">YTD Return</span>
                  </div>
                  <div className="text-sm font-medium text-fin-green">+18.3%</div>
                </div>
                
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <LineChart className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Annualized</span>
                  </div>
                  <div className="text-sm font-medium text-fin-green">+12.5%</div>
                </div>
                
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <Briefcase className="h-4 w-4 text-muted-foreground mr-2" />
                    <span className="text-sm">Dividend Yield</span>
                  </div>
                  <div className="text-sm font-medium">2.1%</div>
                </div>
                
                <div className="pt-4 mt-4 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-2">Portfolio Health Score</div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-fin-green to-fin-blue w-4/5"></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-muted-foreground">0</span>
                    <span className="text-xs font-medium">80/100</span>
                    <span className="text-xs text-muted-foreground">100</span>
                  </div>
                </div>
              </div>
            </FinancialCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
