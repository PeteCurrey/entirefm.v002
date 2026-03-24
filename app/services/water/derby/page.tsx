import Derby from "@/legacy-pages/services/water/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in Derby | Local Testing & Statutory Compliance | EntireFM",
  description: "Transport and aerospace Legionella compliance for Derby. ACOP L8 risk assessments, operational monitoring, and rapid remedials for transport hubs and manufacturing facilities.",
};

export default function DerbyPage() {
  return <Derby />;
}
