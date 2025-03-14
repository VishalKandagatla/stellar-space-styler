
import { useState, useEffect } from "react";

// Types
export interface MarketStockData {
  id: number;
  name: string;
  ticker: string;
  price: number;
  change: number;
  volume: string;
  marketCap: string;
}

// Sample market data
export const marketTrendData: MarketStockData[] = [
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
export const sortOptions = [
  { label: "Name (A-Z)", value: "name-asc" },
  { label: "Name (Z-A)", value: "name-desc" },
  { label: "Price (High-Low)", value: "price-desc" },
  { label: "Price (Low-High)", value: "price-asc" },
  { label: "Change (High-Low)", value: "change-desc" },
  { label: "Change (Low-High)", value: "change-asc" },
];

// Hook for sorting and filtering data
export const useMarketData = (activeTab: string, sortBy: string): MarketStockData[] => {
  const [sortedData, setSortedData] = useState<MarketStockData[]>([]);
  
  useEffect(() => {
    let filteredData = [...marketTrendData];
    
    // Apply tab filtering
    if (activeTab === "gainers") {
      filteredData = filteredData.filter(item => item.change > 0);
    } else if (activeTab === "losers") {
      filteredData = filteredData.filter(item => item.change < 0);
    }
    
    // Apply sorting
    const [sortKey, sortDirection] = sortBy.split("-");
    const sorted = [...filteredData].sort((a, b) => {
      const aValue = a[sortKey as keyof MarketStockData];
      const bValue = b[sortKey as keyof MarketStockData];
      
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
    
    setSortedData(sorted);
  }, [activeTab, sortBy]);
  
  return sortedData;
};
