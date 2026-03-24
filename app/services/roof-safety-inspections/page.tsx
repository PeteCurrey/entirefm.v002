import RoofSafetyInspections from "@/legacy-pages/services/RoofSafetyInspections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roof Safety System Inspections | Working at Height Compliance",
  description: "Guardrails, walkways, fixed ladders, harness points and safe-access assets. Expert roof safety inspections under HSE guidance.",
};

export default function RoofSafetyInspectionsPage() {
  return <RoofSafetyInspections />;
}
