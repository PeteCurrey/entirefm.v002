import GeneratorMaintenance from "@/legacy-pages/services/critical/GeneratorMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Servicing, ATS Testing & Backup Power",
  description: "Generator maintenance including planned servicing, fuel polishing, load testing, and emergency callout. ATS testing and fire compliance for generator rooms ensuring reliable backup power.",
};

export default function GeneratorMaintenancePage() {
  return <GeneratorMaintenance />;
}
