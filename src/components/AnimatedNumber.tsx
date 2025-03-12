
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  formatOptions?: Intl.NumberFormatOptions;
  className?: string;
  prefix?: string;
  suffix?: string;
}

const AnimatedNumber = ({ 
  value, 
  duration = 1000, 
  formatOptions = {}, 
  className,
  prefix = "",
  suffix = ""
}: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef<number>(0);
  const formatter = new Intl.NumberFormat('en-US', formatOptions);

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      const nextValue = startValueRef.current + (value - startValueRef.current) * progress;
      setDisplayValue(nextValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [value, duration]);
  
  return (
    <span className={cn("tabular-nums transition-opacity duration-200", className)}>
      {prefix}{formatter.format(Math.floor(displayValue))}{suffix}
    </span>
  );
};

export default AnimatedNumber;
