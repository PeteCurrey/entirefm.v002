import DroneInspections from "@/legacy-pages/services/DroneInspections";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drone Building Inspections | Roof & Façade Surveys | EntireFM",
  description: "Drone building inspection services for roofs, façades, and high-rise buildings. Safe, cost-effective surveys of inaccessible areas without scaffolding.",
};

export default function DroneInspectionsPage() {
  return <DroneInspections />;
}
