import Birmingham from "@/legacy-pages/services/water/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in Birmingham | Local Testing & Statutory Compliance | EntireFM",
  description: "Legionella compliance for West Midlands businesses. ACOP L8 risk assessments, monitoring programmes, and rapid remedials for warehouses, retail, and corporate estates in Birmingham.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
