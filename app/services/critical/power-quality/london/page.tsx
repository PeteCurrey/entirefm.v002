import London from "@/legacy-pages/services/critical/power-quality/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis & Harmonic Testing in London | EntireFM",
  description: "Power quality analysis for London data centres, financial trading floors and critical infrastructure. Harmonic testing, voltage regulation and PFC assessment across the capital.",
};

export default function LondonPage() {
  return <London />;
}
