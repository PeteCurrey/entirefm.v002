import CompressorMaintenance from "@/legacy-pages/services/CompressorMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compressor Maintenance | Industrial Air Compressor Servicing",
  description: "Servicing and compliance for air compressor systems used across industrial environments. Expert compressor maintenance and PSSR compliance.",
};

export default function CompressorMaintenancePage() {
  return <CompressorMaintenance />;
}
