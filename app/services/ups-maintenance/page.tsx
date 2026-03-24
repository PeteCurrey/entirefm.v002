import UPSMaintenance from "@/legacy-pages/services/UPSMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance | Uninterruptible Power Supply Servicing | Entire FM",
  description: "Critical UPS maintenance for data rooms and essential services. Battery impedance testing, load bank testing, bypass function verification, and failure risk profiling.",
};

export default function UPSMaintenancePage() {
  return <UPSMaintenance />;
}
