import ThermalImaging from "@/legacy-pages/services/critical/ThermalImaging";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging for Electrical Systems & Data Rooms",
  description: "Non-invasive thermal imaging surveys identifying electrical hotspots, overheating components, and fire risks. BS 7671 compliant infrared inspections for critical infrastructure.",
};

export default function ThermalImagingPage() {
  return <ThermalImaging />;
}
