
import { ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { MarketStockData } from "./market-utils";

interface MarketTableProps {
  data: MarketStockData[];
}

export const MarketTable = ({ data }: MarketTableProps) => {
  return (
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
          {data.map((stock, index) => (
            <tr 
              key={stock.id} 
              className={cn(
                "transition-colors hover:bg-secondary/30 group",
                index !== data.length - 1 && "border-b border-border"
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
  );
};
