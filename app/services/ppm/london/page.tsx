import London from "@/legacy-pages/services/ppm/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPM Services in London | Planned Preventative Maintenance | Entire FM",
  description: "Proactive PPM programmes integrating fire, electrical, HVAC, water and gas compliance for London estates. Digital governance, predictive maintenance. Build programme.",
};

export default function LondonPage() {
  return <London />;
}
