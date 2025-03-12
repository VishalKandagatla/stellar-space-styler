
import React from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const EnergyProjectionGraph = () => {
  // Monthly energy data with projected values
  const data = [
    { name: 'Jan', value: 40, projection: 42 },
    { name: 'Feb', value: 65, projection: 68 },
    { name: 'Mar', value: 80, projection: 83 },
    { name: 'Apr', value: 95, projection: 98 },
    { name: 'May', value: 75, projection: 78 },
    { name: 'Jun', value: 85, projection: 88 },
    { name: 'Jul', value: 92, projection: 95 },
    { name: 'Aug', value: 88, projection: 91 },
    { name: 'Sep', value: 78, projection: 81 },
    { name: 'Oct', value: 90, projection: 93 },
    { name: 'Nov', value: 85, projection: 88 },
    { name: 'Dec', value: 95, projection: 98 },
  ];

  return (
    <div className="w-full h-full bg-gray-900/90 flex flex-col p-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-white/90 font-semibold text-sm">Annual Energy Projection</h4>
        <span className="text-fin-green text-xs font-medium">+12.4% YoY</span>
      </div>
      
      {/* Recharts area chart */}
      <div className="flex-1 pb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: -20, bottom: 5 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorProjection" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#36d399" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#36d399" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            />
            <YAxis 
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} 
              axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'rgba(30,41,59,0.9)', 
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px',
                color: 'white' 
              }}
              labelStyle={{ color: 'rgba(255,255,255,0.7)' }}
              formatter={(value) => [`${value}%`, '']}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="#0ea5e9" 
              fillOpacity={1}
              fill="url(#colorValue)" 
            />
            <Area 
              type="monotone" 
              dataKey="projection" 
              stroke="#36d399" 
              strokeDasharray="3 3"
              fillOpacity={1}
              fill="url(#colorProjection)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      
      {/* Bottom stats */}
      <div className="flex justify-between items-center pt-2 border-t border-white/10">
        <div className="text-center">
          <p className="text-[10px] text-white/50 mb-1">Total Output</p>
          <p className="text-white font-semibold text-sm">24.7 MWh</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-white/50 mb-1">Peak Month</p>
          <p className="text-white font-semibold text-sm">April</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] text-white/50 mb-1">Efficiency</p>
          <p className="text-white font-semibold text-sm">87.3%</p>
        </div>
      </div>
    </div>
  );
};

export default EnergyProjectionGraph;
