import HVACCompliance from "@/legacy-pages/services/HVACCompliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HVAC, Air Conditioning & F-Gas Compliance | TM44 | EntireFM",
  description: "TM44 inspections, F-Gas leak governance and proactive HVAC maintenance that optimise comfort, uptime, and safety across commercial estates.",
};

export default function HVACCompliancePage() {
  return <HVACCompliance />;
}
