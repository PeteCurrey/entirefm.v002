import SpacePlanning from "@/legacy-pages/services/SpacePlanning";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Space Planning & Workplace Adjustments | Office Reconfiguration | EntireFM",
  description: "Space planning and workplace adjustments for office reconfiguration. Welfare optimization, moves management and flexible workspace design.",
};

export default function SpacePlanningPage() {
  return <SpacePlanning />;
}
