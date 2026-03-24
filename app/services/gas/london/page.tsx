import London from "@/legacy-pages/services/gas/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in London | Local Testing & Statutory Compliance | EntireFM",
  description: "Gas Safe inspections, catering CP42 certification and full legal compliance for high-occupancy estates across London. CO risk elimination, boiler servicing & energy efficiency.",
};

export default function LondonPage() {
  return <London />;
}
