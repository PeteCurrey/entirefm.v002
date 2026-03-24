import London from "@/legacy-pages/services/critical/arc-flash-assessment/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in London | EntireFM",
  description: "Arc flash assessment for London data centres, financial trading floors and critical infrastructure. IEEE 1584 incident energy analysis and PPE boundary mapping across the capital.",
};

export default function LondonPage() {
  return <London />;
}
