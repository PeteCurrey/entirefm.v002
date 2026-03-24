import GreaseTrapMaintenance from "@/legacy-pages/services/GreaseTrapMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grease Trap Maintenance | Commercial Kitchen Grease Management",
  description: "Commercial kitchen grease management compliance. Expert grease trap servicing and environmental compliance.",
};

export default function GreaseTrapMaintenancePage() {
  return <GreaseTrapMaintenance />;
}
