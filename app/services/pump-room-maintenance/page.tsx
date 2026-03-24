import PumpRoomMaintenance from "@/legacy-pages/services/PumpRoomMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pump Room Maintenance | Critical Plant Servicing | Entire FM",
  description: "Expert pump room maintenance for heating, water, and fire suppression systems. Duty/standby rotation, seal inspections, flow performance checks, and thermal imaging for commercial properties.",
};

export default function PumpRoomMaintenancePage() {
  return <PumpRoomMaintenance />;
}
