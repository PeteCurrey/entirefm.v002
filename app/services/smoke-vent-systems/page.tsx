import SmokeVentSystems from "@/legacy-pages/services/SmokeVentSystems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smoke Vent & Fire Extraction Systems | AOV Testing | EntireFM",
  description: "Professional smoke vent and fire extraction system maintenance. AOV testing, inspection, and certification to BS EN 12101 standards.",
};

export default function SmokeVentSystemsPage() {
  return <SmokeVentSystems />;
}
