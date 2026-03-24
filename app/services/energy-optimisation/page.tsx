import EnergyOptimisation from "@/legacy-pages/services/EnergyOptimisation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Energy Efficiency & Optimisation | TM44 | HVAC Performance | EntireFM",
  description: "Building energy efficiency and optimisation services. Reducing energy demand through HVAC plant optimisation, controls tuning, and compliance audits. Supporting ESG and net zero targets.",
};

export default function EnergyOptimisationPage() {
  return <EnergyOptimisation />;
}
