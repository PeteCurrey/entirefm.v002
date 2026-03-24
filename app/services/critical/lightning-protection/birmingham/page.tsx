import Birmingham from "@/legacy-pages/services/critical/lightning-protection/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Birmingham | EntireFM",
  description: "BS EN 62305 lightning protection testing in Birmingham. Earth resistance, strike path continuity, and compliance inspections for Midlands commercial properties.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
