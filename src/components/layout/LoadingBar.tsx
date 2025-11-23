import { useEffect, useState } from "react";
import { useNavigation } from "react-router-dom";

const LoadingBar = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (navigation.state === "loading") {
      setProgress(30);
      const timer1 = setTimeout(() => setProgress(60), 100);
      const timer2 = setTimeout(() => setProgress(90), 300);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    } else {
      setProgress(100);
      const timer = setTimeout(() => setProgress(0), 300);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  if (progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1">
      <div
        className="h-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[shimmer_2s_ease-in-out_infinite] transition-all duration-300 ease-out shadow-[0_0_10px_hsl(var(--primary))]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default LoadingBar;
