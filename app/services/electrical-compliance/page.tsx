import ElectricalCompliance from "@/legacy-pages/services/ElectricalCompliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Compliance & EICR Testing Services | EntireFM",
  description: "BS 7671 certified EICR testing, thermal imaging and electrical remedials. Protect people, uptime, and legal accountability across commercial estates.",
};

export default function ElectricalCompliancePage() {
  return <ElectricalCompliance />;
}
