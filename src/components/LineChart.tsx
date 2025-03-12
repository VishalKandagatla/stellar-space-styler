
import { useEffect, useRef } from "react";
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

interface ChartData {
  name: string;
  value: number;
  [key: string]: any;
}

interface LineChartProps {
  data: ChartData[];
  dataKey?: string;
  className?: string;
  areaColor?: string;
  strokeColor?: string;
  height?: number;
  showGrid?: boolean;
  showAxis?: boolean;
  showTooltip?: boolean;
  animate?: boolean;
}

const LineChart = ({
  data,
  dataKey = "value",
  className,
  areaColor = "#0EA5E9",
  strokeColor = "#0EA5E9",
  height = 200,
  showGrid = true,
  showAxis = true,
  showTooltip = true,
  animate = true,
}: LineChartProps) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    if (animate && chartRef.current) {
      // Animation when component mounts
      setTimeout(() => {
        const chart = chartRef.current;
        if (chart && chart.querySelector) {
          const paths = chart.querySelectorAll("path.recharts-line-curve");
          if (paths.length) {
            const path = paths[0];
            const length = path.getTotalLength();
            
            // Initial conditions
            path.style.transition = "none";
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            
            // Force a reflow to apply initial styles
            path.getBoundingClientRect();
            
            // Start animation
            path.style.transition = `stroke-dashoffset 1.5s ease-in-out`;
            path.style.strokeDashoffset = "0";
          }
        }
      }, 100);
    }
  }, [animate, data]);

  return (
    <div className={cn("w-full h-full", className)} ref={chartRef}>
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
        >
          {showGrid && (
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              horizontal={true} 
              stroke="#E5E7EB" 
            />
          )}
          
          {showAxis && (
            <>
              <XAxis 
                dataKey="name" 
                tick={{ fill: "#9CA3AF", fontSize: 12 }} 
                axisLine={false} 
                tickLine={false} 
                padding={{ left: 10, right: 10 }} 
              />
              <YAxis 
                tick={{ fill: "#9CA3AF", fontSize: 12 }} 
                axisLine={false} 
                tickLine={false} 
                width={30}
              />
            </>
          )}
          
          {showTooltip && (
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "white", 
                border: "1px solid #E5E7EB", 
                borderRadius: "8px", 
                boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                padding: "8px 12px",
              }}
              labelStyle={{ color: "#6B7280", marginBottom: "4px" }}
              itemStyle={{ color: "#111827" }}
              formatter={(value: number) => [`${value}`, ""]}
            />
          )}
          
          <Line 
            type="monotone" 
            dataKey={dataKey} 
            stroke={strokeColor} 
            strokeWidth={2.5} 
            dot={false} 
            activeDot={{ r: 4, stroke: "white", strokeWidth: 2, fill: strokeColor }} 
            isAnimationActive={animate}
          />
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart;
