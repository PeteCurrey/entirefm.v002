import Chesterfield from "@/legacy-pages/services/water/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in Chesterfield | Local Testing & Statutory Compliance | EntireFM",
  description: "Distribution centre Legionella compliance for Chesterfield. ACOP L8 risk assessments, operational monitoring, and rapid remedials for M1 corridor logistics facilities.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
