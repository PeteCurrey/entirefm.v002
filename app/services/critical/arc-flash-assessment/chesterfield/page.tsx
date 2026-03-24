import Chesterfield from "@/legacy-pages/services/critical/arc-flash-assessment/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arc Flash Assessment & Risk Evaluation in Chesterfield | EntireFM",
  description: "Arc flash risk assessment for Chesterfield logistics and distribution centres. Incident energy calculations, PPE boundary mapping and switchgear labelling for M1 corridor operations.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
