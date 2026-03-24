import London from "@/legacy-pages/services/critical/data-room-audits/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in London | EntireFM",
  description: "Data room and server room audits across London. Power redundancy, precision cooling and environmental monitoring for financial services and corporate data centres.",
};

export default function LondonPage() {
  return <London />;
}
