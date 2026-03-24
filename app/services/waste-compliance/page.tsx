import WasteCompliance from "@/legacy-pages/services/WasteCompliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Waste Management & Environmental Compliance | Duty of Care | EntireFM",
  description: "Waste management and environmental compliance for commercial estates. Ensuring Duty of Care, documentation, hazardous waste handling, and sustainable waste practices.",
};

export default function WasteCompliancePage() {
  return <WasteCompliance />;
}
