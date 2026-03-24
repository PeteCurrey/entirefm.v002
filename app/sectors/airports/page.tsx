import Airports from "@/legacy-pages/sectors/Airports";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airports & Aviation FM | Regional & International | EntireFM",
  description: "Specialist facilities management for airports, hangars & aviation hubs. HVAC, electrical, fire safety & security compliance for mission-critical infrastructure.",
};

export default function AirportsPage() {
  return <Airports />;
}
