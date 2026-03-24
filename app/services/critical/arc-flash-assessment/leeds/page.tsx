import Leeds from "@/legacy-pages/services/critical/arc-flash-assessment/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Leeds | EntireFM",
  description: "Arc flash assessment for Leeds corporate offices, financial services and university campuses. IEEE 1584 incident energy analysis and PPE boundary classification.",
};

export default function LeedsPage() {
  return <Leeds />;
}
