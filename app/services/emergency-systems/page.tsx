import EmergencySystems from "@/legacy-pages/services/EmergencySystems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Building Systems | Fire Safety & Life Safety Systems | EntireFM",
  description: "Emergency building systems maintenance. Emergency lighting, fire alarms, smoke ventilation, AOV systems, and backup power for life safety compliance.",
};

export default function EmergencySystemsPage() {
  return <EmergencySystems />;
}
