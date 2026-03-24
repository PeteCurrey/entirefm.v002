import London from "@/legacy-pages/services/critical/generator-maintenance/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in London | EntireFM",
  description: "Generator maintenance for London data centres, hospitals and high-rise estates. Load bank testing, ATS verification and 24/7 emergency standby support across Greater London.",
};

export default function LondonPage() {
  return <London />;
}
