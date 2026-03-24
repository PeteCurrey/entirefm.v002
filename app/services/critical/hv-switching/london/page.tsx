import London from "@/legacy-pages/services/critical/hv-switching/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in London | EntireFM",
  description: "HV switching and isolation for London's financial district, hospitals and data centres. 24/7 Authorised Person services and emergency high-voltage response across the capital.",
};

export default function LondonPage() {
  return <London />;
}
