import London from "@/legacy-pages/services/critical/ups-maintenance/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in London | EntireFM",
  description: "UPS servicing for London data centres, trading floors and corporate headquarters. Battery impedance testing, capacitor replacement and modular UPS maintenance across the capital.",
};

export default function LondonPage() {
  return <London />;
}
