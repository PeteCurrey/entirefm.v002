import Nottingham from "@/legacy-pages/services/critical/arc-flash-assessment/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Nottingham | EntireFM",
  description: "Arc flash risk assessment for Nottingham pharmaceutical, PBSA and retail estates. Incident energy calculations and switchgear labelling to IEEE 1584 standards.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
