import EnergyOptimisationAdvanced from "@/legacy-pages/services/EnergyOptimisationAdvanced";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advanced Energy Optimisation | HVAC Tuning | Controls Strategy | EntireFM",
  description: "Advanced energy optimisation reducing mechanical and electrical plant energy consumption through controls tuning, sequencing strategies, and operational improvements.",
};

export default function EnergyOptimisationAdvancedPage() {
  return <EnergyOptimisationAdvanced />;
}
