import RollerShutterMaintenance from "@/legacy-pages/services/RollerShutterMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roller Shutter & Industrial Door Maintenance | PUWER Compliance | Entire FM",
  description: "Safety-critical roller shutter maintenance under PUWER. Spring/balance testing, motor performance, safety brake checks, guide rail servicing, and emergency release testing.",
};

export default function RollerShutterMaintenancePage() {
  return <RollerShutterMaintenance />;
}
