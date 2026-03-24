import Manchester from "@/legacy-pages/services/water/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in Manchester | Local Testing & Statutory Compliance | EntireFM",
  description: "Specialist Legionella compliance for Manchester's student accommodation and commercial properties. ACOP L8 risk assessments, monitoring, and rapid remedials for PBSA, offices, and retail.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
