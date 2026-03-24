import Derby from "@/legacy-pages/services/critical/arc-flash-assessment/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Derby | EntireFM",
  description: "Arc flash assessment for Derby's rail, aerospace and precision manufacturing. IEEE 1584 incident energy analysis protecting engineers working on HV and LV switchgear.",
};

export default function DerbyPage() {
  return <Derby />;
}
