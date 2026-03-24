import LightningProtection from "@/legacy-pages/services/critical/LightningProtection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing & Earthing Compliance | EntireFM",
  description: "Lightning protection testing for critical infrastructure. Annual testing, earth resistance measurement, continuity testing and BS EN 62305 compliance for commercial buildings.",
};

export default function LightningProtectionPage() {
  return <LightningProtection />;
}
