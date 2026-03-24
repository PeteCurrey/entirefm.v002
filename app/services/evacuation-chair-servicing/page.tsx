import EvacuationChairServicing from "@/legacy-pages/services/EvacuationChairServicing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Evacuation Chair Servicing | Emergency Evacuation Equipment | Entire FM",
  description: "Annual evacuation chair servicing for multi-storey buildings. Gear, belt, and brake checks, frame integrity inspection, and compliance guidance for safe emergency evacuation.",
};

export default function EvacuationChairServicingPage() {
  return <EvacuationChairServicing />;
}
