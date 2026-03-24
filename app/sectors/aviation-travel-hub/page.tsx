import AviationTravelHub from "@/legacy-pages/sectors/AviationTravelHub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviation & Travel Hub FM | Terminal & Airside Services",
  description: "Specialist facilities management for aviation hubs, travel terminals, and mission-criticial transport infrastructure. CAA-compliant delivery.",
};

export default function AviationTravelHubPage() {
  return <AviationTravelHub />;
}
