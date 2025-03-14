
import React, { useState } from 'react';
import { SectionContainer } from '@/components/ui/section-container';
import { BarChart3, Globe, TrendingUp, PieChart } from 'lucide-react';
import ValueCard from '@/components/ui/value-card';
import { cn } from '@/lib/utils';

const regions = [
  { id: 'north-america', name: 'North America' },
  { id: 'europe', name: 'Europe' },
  { id: 'asia-pacific', name: 'Asia Pacific' },
  { id: 'latin-america', name: 'Latin America' },
  { id: 'middle-east', name: 'Middle East' }
];

// Sample insights data for each region
const regionalInsights = {
  'north-america': [
    { title: 'S&P 500', description: '+2.4% this month', color: 'green' },
    { title: 'US Housing Market', description: 'Cooling trends in urban centers', color: 'blue' },
    { title: 'Tech Sector', description: 'Strong growth in AI investments', color: 'purple' },
    { title: 'Energy Stocks', description: 'Renewable focus increases 18%', color: 'cyan' }
  ],
  'europe': [
    { title: 'FTSE 100', description: '+1.2% this month', color: 'blue' },
    { title: 'EU Regulations', description: 'New policies affecting fintech', color: 'red' },
    { title: 'Brexit Impact', description: 'Trade adjustments stabilizing', color: 'orange' },
    { title: 'Green Energy', description: 'Investment up 22% YoY', color: 'green' }
  ],
  'asia-pacific': [
    { title: 'Nikkei 225', description: '+3.1% this month', color: 'purple' },
    { title: 'China Tech', description: 'Government regulations shifting', color: 'red' },
    { title: 'ASEAN Growth', description: 'Manufacturing expanding 7.4%', color: 'green' },
    { title: 'Australian Mining', description: 'Exports increase due to demand', color: 'yellow' }
  ],
  'latin-america': [
    { title: 'Bovespa', description: '+0.8% this month', color: 'yellow' },
    { title: 'Currency Volatility', description: 'Stabilizing against USD', color: 'orange' },
    { title: 'Agricultural Commodities', description: 'Coffee exports up 12%', color: 'green' },
    { title: 'Emerging Markets', description: 'Investment interest growing', color: 'blue' }
  ],
  'middle-east': [
    { title: 'Oil Prices', description: 'Brent crude up 3.2%', color: 'orange' },
    { title: 'Infrastructure Projects', description: '$82B in new developments', color: 'purple' },
    { title: 'Financial Services', description: 'Digital banking adoption rising', color: 'blue' },
    { title: 'Diversification', description: 'Non-oil sectors growing 6.5%', color: 'green' }
  ]
};

export const MarketInsights = () => {
  const [selectedRegion, setSelectedRegion] = useState('north-america');
  
  return (
    <section className="py-16">
      <SectionContainer>
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold tracking-tight">Market Insights</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Explore our latest market insights tailored to specific regions. Our expert analysts provide in-depth analysis to keep you informed of global trends.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden sticky top-24">
              <div className="p-4 border-b border-border bg-secondary/20">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-fin-purple" />
                  <h3 className="font-semibold">Select Region</h3>
                </div>
              </div>
              
              <div className="p-2">
                {regions.map(region => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-lg transition-colors",
                      selectedRegion === region.id 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "hover:bg-secondary/50 text-foreground"
                    )}
                  >
                    {region.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-3/4">
            <div className="bg-white rounded-xl border border-border shadow-md overflow-hidden">
              <div className="p-4 border-b border-border bg-secondary/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-fin-purple" />
                    <h3 className="font-semibold">{regions.find(r => r.id === selectedRegion)?.name} Market Trends</h3>
                  </div>
                  <span className="text-sm text-muted-foreground">Last updated: July 15, 2023</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {regionalInsights[selectedRegion as keyof typeof regionalInsights].map((insight, index) => (
                    <ValueCard
                      key={index}
                      color={insight.color as any}
                      icon={<PieChart className="h-3 w-3 text-white" />}
                      title={insight.title}
                      description={insight.description}
                      bordered
                    />
                  ))}
                </div>
                
                <div className="bg-secondary/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Key Takeaways</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="bg-fin-green/20 text-fin-green rounded-full p-0.5 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>Markets in {regions.find(r => r.id === selectedRegion)?.name} show resilience despite global economic pressures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-fin-green/20 text-fin-green rounded-full p-0.5 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>Sustainability-focused investments continue to outperform traditional sectors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-fin-green/20 text-fin-green rounded-full p-0.5 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>Digital transformation accelerating across financial services industry</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};
