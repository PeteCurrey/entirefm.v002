import IndoorAirQualityTesting from "@/legacy-pages/services/IndoorAirQualityTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indoor Air Quality (IAQ) Testing | Workplace Health & HVAC Performance | EntireFM",
  description: "Indoor air quality testing for commercial, education, and residential buildings. Assessing CO₂, VOCs, particulates, and ventilation effectiveness to protect occupant health.",
};

export default function IndoorAirQualityTestingPage() {
  return <IndoorAirQualityTesting />;
}
