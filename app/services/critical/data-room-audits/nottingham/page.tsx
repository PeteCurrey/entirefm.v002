import Nottingham from "@/legacy-pages/services/critical/data-room-audits/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Nottingham | EntireFM",
  description: "Server room and data room audits in Nottingham. Cooling capacity, power resilience and environmental monitoring assessments for pharmaceutical and logistics IT infrastructure.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
