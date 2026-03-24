import ThermalImagingSurveys from "@/legacy-pages/services/ThermalImagingSurveys";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys | Electrical & Building Diagnostics | EntireFM",
  description: "Thermal imaging surveys identifying hidden electrical, building fabric and HVAC inefficiencies using infrared diagnostics. Prevent failures and reduce energy waste.",
};

export default function ThermalImagingSurveysPage() {
  return <ThermalImagingSurveys />;
}
