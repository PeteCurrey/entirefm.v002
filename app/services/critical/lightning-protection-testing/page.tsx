import LightningProtectionTesting from "@/legacy-pages/services/critical/LightningProtectionTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing | BS EN 62305 Compliance | Entire FM",
  description: "Lightning protection testing to BS EN 62305 standards. Earth resistance testing, strike path continuity verification, and rooftop system inspections ensuring safety and insurance compliance.",
};

export default function LightningProtectionTestingPage() {
  return <LightningProtectionTesting />;
}
