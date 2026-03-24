import DockLevellerMaintenance from "@/legacy-pages/services/DockLevellerMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dock Leveller Servicing | LOLER & PUWER Compliance | Entire FM",
  description: "LOLER-compliant dock leveller maintenance for warehouse loading bays. Hydraulic checks, safety interlocks, lip extension testing, and control panel integrity verification.",
};

export default function DockLevellerMaintenancePage() {
  return <DockLevellerMaintenance />;
}
