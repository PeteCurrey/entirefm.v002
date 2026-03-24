import GeneratorMaintenance from "@/legacy-pages/services/GeneratorMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Servicing & Maintenance | Backup Power Reliability | Entire FM",
  description: "Expert generator maintenance for backup power systems. Weekly testing, full servicing, cooling system checks, load bank testing, and diesel quality management for critical buildings.",
};

export default function GeneratorMaintenancePage() {
  return <GeneratorMaintenance />;
}
