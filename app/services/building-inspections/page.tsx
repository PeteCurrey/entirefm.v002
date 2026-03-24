import BuildingInspections from "@/legacy-pages/services/BuildingInspections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Testing & Inspection Services | Compliance Testing | EntireFM",
  description: "Comprehensive building testing and inspection services. Fire, electrical, water, gas, HVAC, and structural compliance testing for commercial properties.",
};

export default function BuildingInspectionsPage() {
  return <BuildingInspections />;
}
