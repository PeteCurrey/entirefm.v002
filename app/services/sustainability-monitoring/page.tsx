import SustainabilityMonitoring from "@/legacy-pages/services/SustainabilityMonitoring";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainability Performance Monitoring | ESG Reporting | EntireFM",
  description: "Sustainability performance monitoring tracking energy, water, waste and carbon metrics to optimise operational sustainability and ESG reporting for commercial estates.",
};

export default function SustainabilityMonitoringPage() {
  return <SustainabilityMonitoring />;
}
