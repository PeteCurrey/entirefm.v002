import Leeds from "@/legacy-pages/services/water/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in Leeds | Local Testing & Statutory Compliance | EntireFM",
  description: "Specialist Legionella compliance for Leeds healthcare, PBSA, and public buildings. ACOP L8 and HTM 04-01 risk assessments, year-round monitoring, and rapid remedials.",
};

export default function LeedsPage() {
  return <Leeds />;
}
