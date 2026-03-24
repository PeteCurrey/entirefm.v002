import WaterTreatmentPlantMaintenance from "@/legacy-pages/services/WaterTreatmentPlantMaintenance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Water Treatment Plant Maintenance | Filtration & Softening Systems | Entire FM",
  description: "Commercial water treatment plant maintenance for large estates. Filtration media checks, softener servicing, chlorination systems, and legionella control integration.",
};

export default function WaterTreatmentPlantMaintenancePage() {
  return <WaterTreatmentPlantMaintenance />;
}
