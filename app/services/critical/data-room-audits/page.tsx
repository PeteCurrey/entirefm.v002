import DataRoomAudits from "@/legacy-pages/services/critical/DataRoomAudits";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Compliance Audits & Power Resilience",
  description: "Comprehensive data room and server room infrastructure audits covering power resilience, cooling adequacy, fire suppression, and environmental monitoring compliance.",
};

export default function DataRoomAuditsPage() {
  return <DataRoomAudits />;
}
