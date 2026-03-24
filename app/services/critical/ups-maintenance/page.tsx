import UPSMaintenance from "@/legacy-pages/services/critical/UPSMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Testing | Critical Power",
  description: "UPS maintenance including battery impedance testing, load bank verification, and replacement cycles. Static and modular UPS servicing for data centres and mission-critical facilities.",
};

export default function UPSMaintenancePage() {
  return <UPSMaintenance />;
}
