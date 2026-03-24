import Sheffield from "@/legacy-pages/services/critical/arc-flash-assessment/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Sheffield | EntireFM",
  description: "Arc flash assessment for Sheffield steel works, heavy industry and manufacturing. Incident energy calculations and PPE boundary mapping for high-power electrical systems.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
