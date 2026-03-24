import SmartBuildingIoT from "@/legacy-pages/services/SmartBuildingIoT";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Building IoT Sensors & Analytics | Real-Time Monitoring | EntireFM",
  description: "Smart building IoT sensors providing real-time visibility of occupancy, energy, air quality and asset performance. Wireless sensor networks with cloud analytics.",
};

export default function SmartBuildingIoTPage() {
  return <SmartBuildingIoT />;
}
