import BMSOptimisation from "@/legacy-pages/services/BMSOptimisation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BMS Servicing & Optimisation | Controls Strategy | Energy Savings | EntireFM",
  description: "BMS servicing and optimisation improving building controls performance. Reducing energy waste and enhancing comfort through controls tuning and strategy improvements.",
};

export default function BMSOptimisationPage() {
  return <BMSOptimisation />;
}
