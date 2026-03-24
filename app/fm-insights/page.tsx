import FMInsights from "@/legacy-pages/FMInsights";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Insights & Resources | Facilities Management Guidance",
  description: "Expert guidance, compliance updates, and best practice resources for facilities management professionals from the EntireFM team.",
};

export default function FMInsightsPage() {
  return <FMInsights />;
}
