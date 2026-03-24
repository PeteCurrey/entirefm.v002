import CarParkCOMonitoring from "@/legacy-pages/services/CarParkCOMonitoring";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Park CO Monitoring | Carbon Monoxide Sensors & Ventilation | Entire FM",
  description: "Critical car park CO monitoring systems. Sensor calibration, BMS integration, ventilation override functions, and fire event integration for enclosed parking safety.",
};

export default function CarParkCOMonitoringPage() {
  return <CarParkCOMonitoring />;
}
