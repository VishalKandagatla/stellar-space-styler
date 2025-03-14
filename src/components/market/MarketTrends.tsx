
import { useState } from "react";
import { TrendingUp, Info } from "lucide-react";
import { MarketFilters } from "./MarketFilters";
import { MarketTable } from "./MarketTable";
import { sortOptions, useMarketData } from "./market-utils";

const MarketTrends = () => {
  const [sortBy, setSortBy] = useState("change-desc");
  const [activeTab, setActiveTab] = useState("all");
  
  const sortedData = useMarketData(activeTab, sortBy);
  
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Market Trends</h2>
            <p className="text-muted-foreground">Track the latest movements in the global markets</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <div className="relative">
              <select 
                className="h-10 pl-3 pr-8 rounded-lg border border-border bg-white text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-primary/50"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-border overflow-hidden">
          <MarketFilters activeTab={activeTab} setActiveTab={setActiveTab} />
          <MarketTable data={sortedData} />
          
          <div className="px-6 py-4 bg-secondary/20 border-t border-border flex items-center justify-between">
            <div className="flex items-center text-xs text-muted-foreground">
              <Info className="h-3 w-3 mr-2" />
              Data delayed by 15 minutes
            </div>
            
            <button className="text-sm text-primary font-medium flex items-center hover:text-primary/80 transition-colors">
              <span>View All Markets</span>
              <TrendingUp className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;
