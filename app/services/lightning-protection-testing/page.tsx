import LightningProtectionTesting from "@/legacy-pages/services/LightningProtectionTesting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing | BS EN 62305 Compliance | Entire FM",
  description: "Expert lightning protection testing to BS EN 62305. Earth resistance testing, structural bonding checks, and visual inspection for safeguarding structures from lightning strikes.",
};

export default function LightningProtectionTestingPage() {
  return <LightningProtectionTesting />;
}
