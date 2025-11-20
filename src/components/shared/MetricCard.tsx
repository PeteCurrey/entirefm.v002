import { useEffect, useState } from "react";

interface MetricCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const MetricCard = ({ value, label, prefix = "", suffix = "" }: MetricCardProps) => {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ""));

  useEffect(() => {
    if (isNaN(numericValue)) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
      <div className="text-3xl font-light text-primary mb-2">
        {prefix}{isNaN(numericValue) ? value : count}{suffix}
      </div>
      <div className="text-sm text-muted-foreground font-light">{label}</div>
    </div>
  );
};

export default MetricCard;
