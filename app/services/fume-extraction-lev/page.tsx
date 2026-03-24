import FumeExtractionLEV from "@/legacy-pages/services/FumeExtractionLEV";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LEV Testing & Maintenance | Local Exhaust Ventilation Compliance",
  description: "Protecting air quality and ensuring compliance with COSHH regulations. Expert LEV testing and fume extraction maintenance.",
};

export default function FumeExtractionLEVPage() {
  return <FumeExtractionLEV />;
}
