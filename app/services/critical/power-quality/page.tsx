import PowerQuality from "@/legacy-pages/services/critical/PowerQuality";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis (PF, THD & Voltage Stability)",
  description: "Power quality surveys identifying harmonic distortion, voltage sags, transients, and power factor issues. Corrective engineering to protect critical IT and electrical infrastructure.",
};

export default function PowerQualityPage() {
  return <PowerQuality />;
}
