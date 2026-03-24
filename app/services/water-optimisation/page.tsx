import WaterOptimisation from "@/legacy-pages/services/WaterOptimisation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Consumption Optimisation | Leak Detection & Efficiency | EntireFM",
  description: "Water consumption optimisation reducing wastage and improving efficiency in commercial estates. Flow restrictors, leak detection, smart metering and benchmarking.",
};

export default function WaterOptimisationPage() {
  return <WaterOptimisation />;
}
