import Lincoln from "@/legacy-pages/services/critical/arc-flash-assessment/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Lincoln | EntireFM",
  description: "Arc flash assessment for Lincoln healthcare, food processing and agricultural estates. IEEE 1584 incident energy analysis for HV and LV electrical systems across Lincolnshire.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
