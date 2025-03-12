
import React from "react";

const EnergyProjectionGraph = () => {
  return (
    <div className="w-full h-full bg-gray-900/90 flex flex-col p-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-white/90 font-semibold text-sm">Annual Energy Projection</h4>
        <span className="text-fin-green text-xs font-medium">+12.4% YoY</span>
      </div>
      
      {/* Main graph area */}
      <div className="flex-1 flex items-end gap-2 pb-6">
        {[40, 65, 80, 95, 75, 85, 92, 88, 78, 90, 85, 95].map((value, index) => (
          <div key={index} className="flex-1 flex flex-col items-center gap-1">
            <div 
              className="w-full bg-gradient-to-t from-fin-blue to-fin-blue/20 rounded-t-sm relative overflow-hidden group"
              style={{ height: `${value}%` }}
            >
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-[linear-gradient(to_top,rgba(14,165,233,0.3),transparent)]"></div>
            </div>
            <span className="text-[8px] text-white/50">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
            </span>
          </div>
        ))}
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
