
import { useState } from "react";
import { ArrowUp, ArrowDown, TrendingUp, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample market data
const marketTrendData = [
  { id: 1, name: "Apple Inc.", ticker: "AAPL", price: 193.42, change: 2.31, volume: "58.4M", marketCap: "3.05T" },
  { id: 2, name: "Microsoft Corp.", ticker: "MSFT", price: 376.17, change: 1.64, volume: "22.1M", marketCap: "2.79T" },
  { id: 3, name: "Amazon.com Inc.", ticker: "AMZN", price: 146.88, change: -0.54, volume: "32.6M", marketCap: "1.52T" },
  { id: 4, name: "Alphabet Inc.", ticker: "GOOGL", price: 135.73, change: 0.82, volume: "24.8M", marketCap: "1.70T" },
  { id: 5, name: "Tesla Inc.", ticker: "TSLA", price: 248.48, change: -2.10, volume: "93.2M", marketCap: "789.6B" },
  { id: 6, name: "Meta Platforms Inc.", ticker: "META", price: 344.62, change: 3.27, volume: "19.3M", marketCap: "885.3B" },
  { id: 7, name: "NVIDIA Corp.", ticker: "NVDA", price: 481.37, change: 4.51, volume: "43.9M", marketCap: "1.19T" },
  { id: 8, name: "JPMorgan Chase & Co.", ticker: "JPM", price: 182.28, change: 0.37, volume: "8.2M", marketCap: "524.1B" },
];

// Sort options
const sortOptions = [
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "Price (High-Low)", value: "price-desc" },
  { label: "Price (Low-High)", value: "price-asc" },
  { label: "Change (High-Low)", value: "change-desc" },
  { label: "Change (Low-High)", value: "change-asc" },
];

const MarketTrends = () => {
  const [sortBy, setSortBy] = useState("change-desc");
  const [activeTab, setActiveTab] = useState("all");
  
  // Sort and filter data
  const getSortedData = () => {
    let filteredData = [...marketTrendData];
    
    // Apply tab filtering
    if (activeTab === "gainers") {
      filteredData = filteredData.filter(item => item.change > 0);
    } else if (activeTab === "losers") {
      filteredData = filteredData.filter(item => item.change < 0);
    }
    
    // Apply sorting
    const [sortKey, sortDirection] = sortBy.split("-");
    return filteredData.sort((a, b) => {
      const aValue = a[sortKey as keyof typeof a];
      const bValue = b[sortKey as keyof typeof b];
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc" 
          ? aValue.localeCompare(bValue) 
          : bValue.localeCompare(aValue);
      } else {
        return sortDirection === "asc" 
          ? (aValue as number) - (bValue as number) 
          : (bValue as number) - (aValue as number);
      }
    });
  };
  
  const sortedData = getSortedData();
  
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
          <div className="border-b border-border">
            <div className="flex">
              <button 
                onClick={() => setActiveTab("all")}
                className={cn(
                  "px-5 py-3 text-sm font-medium transition-colors",
                  activeTab === "all" 
                    ? "border-b-2 border-primary text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                All Stocks
              </button>
              <button 
                onClick={() => setActiveTab("gainers")}
                className={cn(
                  "px-5 py-3 text-sm font-medium transition-colors flex items-center",
                  activeTab === "gainers" 
                    ? "border-b-2 border-fin-green text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <ArrowUp className="h-3 w-3 mr-1 text-fin-green" />
                Top Gainers
              </button>
              <button 
                onClick={() => setActiveTab("losers")}
                className={cn(
                  "px-5 py-3 text-sm font-medium transition-colors flex items-center",
                  activeTab === "losers" 
                    ? "border-b-2 border-fin-red text-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                <ArrowDown className="h-3 w-3 mr-1 text-fin-red" />
                Top Losers
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50">
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">TICKER</th>
                  <th className="text-left px-6 py-3 text-xs font-medium text-muted-foreground">COMPANY</th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground">PRICE</th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground">CHANGE</th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground">VOLUME</th>
                  <th className="text-right px-6 py-3 text-xs font-medium text-muted-foreground">MARKET CAP</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((stock, index) => (
                  <tr 
                    key={stock.id} 
                    className={cn(
                      "transition-colors hover:bg-secondary/30 group",
                      index !== sortedData.length - 1 && "border-b border-border"
                    )}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-md bg-secondary/80 flex items-center justify-center mr-3 text-xs font-bold text-foreground">
                          {stock.ticker.substring(0, 2)}
                        </div>
                        <span className="text-sm font-medium">{stock.ticker}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">{stock.name}</td>
                    <td className="px-6 py-4 text-right text-sm font-medium">${stock.price.toFixed(2)}</td>
                    <td className="px-6 py-4 text-right">
                      <div className={cn(
                        "inline-flex items-center px-2 py-1 rounded-full text-xs font-medium",
                        stock.change > 0 
                          ? "bg-fin-green/10 text-fin-green" 
                          : "bg-fin-red/10 text-fin-red"
                      )}>
                        {stock.change > 0 ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                        {Math.abs(stock.change).toFixed(2)}%
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right text-sm">{stock.volume}</td>
                    <td className="px-6 py-4 text-right text-sm">{stock.marketCap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
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
