import Manchester from "@/legacy-pages/services/critical/arc-flash-assessment/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Manchester | EntireFM",
  description: "Arc flash assessment for Manchester data centres, media facilities and PBSA estates. Incident energy analysis, PPE selection and switchgear labelling across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
