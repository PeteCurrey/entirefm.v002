import London from "@/legacy-pages/services/critical/power-redundancy/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in London | EntireFM",
  description: "Power redundancy and N+1 testing for London data centres, financial trading floors and hospitals. Dual-feed verification and failover simulation across the capital.",
};

export default function LondonPage() {
  return <London />;
}
