import DataCentreCoolingCompliance from "@/legacy-pages/services/DataCentreCoolingCompliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Centre Cooling Compliance | CRAC/CRAH Maintenance | Entire FM",
  description: "Expert data centre cooling compliance ensuring uptime and thermal stability. CRAC/CRAH maintenance, redundancy testing, temperature/humidity controls, and energy efficiency optimization.",
};

export default function DataCentreCoolingCompliancePage() {
  return <DataCentreCoolingCompliance />;
}
