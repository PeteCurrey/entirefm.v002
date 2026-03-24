import Sheffield from "@/legacy-pages/services/water/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Hygiene & Legionella Testing in Sheffield | Local Testing & Statutory Compliance | EntireFM",
  description: "Specialist Legionella compliance for Sheffield's industrial and manufacturing sector. ACOP L8 risk assessments, cooling tower monitoring, and rapid remedials with minimal downtime.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
