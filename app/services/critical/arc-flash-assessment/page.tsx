import ArcFlashAssessment from "@/legacy-pages/services/critical/ArcFlashAssessment";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Risk Assessment (High Voltage & LV Systems)",
  description: "Arc flash risk assessment for high-voltage and low-voltage systems. System modelling, PPE recommendations, safety labelling, and insurance risk reduction through engineered controls.",
};

export default function ArcFlashAssessmentPage() {
  return <ArcFlashAssessment />;
}
