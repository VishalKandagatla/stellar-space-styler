
import { Activity, TrendingUp, DollarSign, Briefcase, LineChart } from "lucide-react";
import FinancialCard from "./FinancialCard";
import AnimatedNumber from "./AnimatedNumber";
import LineChart from "./LineChart";

// Sample data
const portfolioData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 2780 },
  { name: "May", value: 1890 },
  { name: "Jun", value: 2390 },
  { name: "Jul", value: 3490 },
  { name: "Aug", value: 4000 },
  { name: "Sep", value: 5000 },
  { name: "Oct", value: 6000 },
  { name: "Nov", value: 7000 },
  { name: "Dec", value: 9000 },
];

const marketData = [
  { name: "Jan", value: 6000 },
  { name: "Feb", value: 6500 },
  { name: "Mar", value: 6300 },
  { name: "Apr", value: 6800 },
  { name: "May", value: 7000 },
  { name: "Jun", value: 7500 },
  { name: "Jul", value: 7300 },
  { name: "Aug", value: 7800 },
  { name: "Sep", value: 8000 },
  { name: "Oct", value: 8500 },
  { name: "Nov", value: 8300 },
  { name: "Dec", value: 8800 },
];

const Dashboard = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">Dashboard Overview</h2>
            <p className="text-muted-foreground">Your financial satellite view for December 10, 2023</p>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0 space-x-3">
            <select className="bg-white border border-border rounded-lg h-10 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50">
              <option value="1d">1d</option>
              <option value="7d">7d</option>
              <option value="1m">1m</option>
              <option value="3m">3m</option>
              <option value="1y" selected>1y</option>
              <option value="all">All</option>
            </select>
            <button className="h-10 px-4 rounded-lg bg-white border border-border text-sm font-medium shadow-sm hover:bg-secondary/50 transition-colors">
              Refresh
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <FinancialCard
            title="Portfolio Value"
            value={<AnimatedNumber value={258943.28} formatOptions={{ style: 'currency', currency: 'USD' }} className="tracking-tight" />}
            icon={<Briefcase className="h-5 w-5" />}
            trend={12.8}
            description="vs. last month"
            className="animate-fade-in"
            style={{ animationDelay: "100ms" }}
          />
          
          <FinancialCard
            title="Market Index"
            value={<AnimatedNumber value={4892.57} formatOptions={{ maximumFractionDigits: 2 }} className="tracking-tight" />}
            icon={<LineChart className="h-5 w-5" />}
            trend={3.2}
            description="vs. last month"
            className="animate-fade-in"
            style={{ animationDelay: "200ms" }}
          />
          
          <FinancialCard
            title="Daily Return"
            value={<AnimatedNumber value={1245.89} formatOptions={{ style: 'currency', currency: 'USD' }} className="tracking-tight" />}
            icon={<TrendingUp className="h-5 w-5" />}
            trend={-2.4}
            description="vs. yesterday"
            className="animate-fade-in"
            style={{ animationDelay: "300ms" }}
          />
          
          <FinancialCard
            title="Total Assets"
            value={<AnimatedNumber value={15} formatOptions={{ maximumFractionDigits: 0 }} className="tracking-tight" />}
            icon={<DollarSign className="h-5 w-5" />}
            description="Diversified portfolio"
            className="animate-fade-in"
            style={{ animationDelay: "400ms" }}
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FinancialCard title="Portfolio Performance" className="h-[400px]">
              <div className="absolute top-6 right-6 flex items-center space-x-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-fin-blue mr-2"></span>
                  <span className="text-xs text-muted-foreground">Portfolio</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 rounded-full bg-fin-purple mr-2"></span>
                  <span className="text-xs text-muted-foreground">Market</span>
                </div>
              </div>
              
              <div className="mt-2 h-[280px]">
                <LineChart data={portfolioData} height={280} strokeColor="#0EA5E9" />
              </div>
            </FinancialCard>
          </div>
          
          <div>
            <FinancialCard title="Market Index" className="h-[400px]">
              <div className="mt-2 h-[280px]">
                <LineChart 
                  data={marketData} 
                  height={280} 
                  strokeColor="#8B5CF6" 
                  showGrid={false}
                />
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">S&P 500</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">4,783.35</span>
                    <span className="text-xs ml-2 text-fin-green">+1.2%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">NASDAQ</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">16,742.39</span>
                    <span className="text-xs ml-2 text-fin-red">-0.3%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">DOW</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">37,863.80</span>
                    <span className="text-xs ml-2 text-fin-green">+0.8%</span>
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

export default Dashboard;
