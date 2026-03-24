import London from "@/legacy-pages/services/water/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in London | Local Testing & Statutory Compliance | EntireFM",
  description: "Comprehensive Legionella compliance and water hygiene services across London. ACOP L8 risk assessments, monitoring programmes, and rapid remedials for corporate, retail & healthcare estates.",
};

export default function LondonPage() {
  return <London />;
}
