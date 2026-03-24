import Birmingham from "@/legacy-pages/services/critical/arc-flash-assessment/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Birmingham | EntireFM",
  description: "Arc flash assessment for Birmingham manufacturing, logistics and automotive estates. Incident energy calculations and HV/LV switchgear risk analysis across the West Midlands.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
