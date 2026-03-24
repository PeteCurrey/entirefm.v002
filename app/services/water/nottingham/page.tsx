import Nottingham from "@/legacy-pages/services/water/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in Nottingham | Local Testing & Statutory Compliance | EntireFM",
  description: "Student accommodation Legionella compliance for Nottingham. ACOP L8 risk assessments, vacation period flushing, and rapid remedials for PBSA, universities, and commercial properties.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
