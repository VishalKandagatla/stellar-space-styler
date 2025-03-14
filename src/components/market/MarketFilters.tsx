
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface MarketFiltersProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const MarketFilters = ({ activeTab, setActiveTab }: MarketFiltersProps) => {
  return (
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
  );
};
