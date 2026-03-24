import PowerQualityAnalysis from "@/legacy-pages/services/PowerQualityAnalysis";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis | Harmonics & Voltage Testing | EntireFM",
  description: "Power quality analysis identifying harmonics, voltage dips and electrical supply anomalies affecting plant performance. Prevent equipment failures and reduce downtime.",
};

export default function PowerQualityAnalysisPage() {
  return <PowerQualityAnalysis />;
}
