import Manchester from "@/legacy-pages/services/critical/data-room-audits/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Manchester | EntireFM",
  description: "Data room audits for Manchester media, financial and PBSA IT infrastructure. Cooling, UPS and environmental monitoring assessments across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
