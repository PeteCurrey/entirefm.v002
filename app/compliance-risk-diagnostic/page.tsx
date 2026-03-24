import ComplianceDiagnostic from "@/legacy-pages/ComplianceDiagnostic";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance Risk Diagnostic | EntireFM",
  description: "Assess your estate's compliance risk across fire, water, gas & electrical safety. Free indicative diagnostic.",
};

export default function ComplianceDiagnosticPage() {
  return <ComplianceDiagnostic />;
}
