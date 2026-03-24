import HealthcarePublic from "@/legacy-pages/sectors/HealthcarePublic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare & Public Sector FM | Zero Tolerance Compliance",
  description: "Zero tolerance on compliance — risk removed, governance proven. Healthcare and public sector FM with CQC and HSE accountability.",
};

export default function HealthcarePage() {
  return <HealthcarePublic />;
}
