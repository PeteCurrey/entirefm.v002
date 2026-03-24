import Leeds from "@/legacy-pages/services/critical/power-quality/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis in Leeds | EntireFM",
  description: "Power quality analysis and harmonic testing for Leeds financial, corporate and healthcare estates. Voltage sag, transient and THD investigation across West Yorkshire.",
};

export default function LeedsPage() {
  return <Leeds />;
}
