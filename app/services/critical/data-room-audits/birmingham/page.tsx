import Birmingham from "@/legacy-pages/services/critical/data-room-audits/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Birmingham | EntireFM",
  description: "Data room and comms room audits across Birmingham. UPS, cooling capacity and power resilience assessments for West Midlands corporate and logistics IT estates.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
