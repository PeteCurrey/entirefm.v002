import London from "@/legacy-pages/services/critical/lightning-protection/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in London | BS EN 62305 | EntireFM",
  description: "BS EN 62305 lightning protection testing across London. Certified inspections for high-rise buildings, data centres, and critical infrastructure.",
};

export default function LondonPage() {
  return <London />;
}
