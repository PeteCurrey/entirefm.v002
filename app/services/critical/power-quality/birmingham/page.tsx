import Birmingham from "@/legacy-pages/services/critical/power-quality/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis & Harmonic Testing in Birmingham | EntireFM",
  description: "Power quality and harmonic analysis for Birmingham manufacturing, logistics and data centre operations. Voltage disturbance diagnostics protecting sensitive equipment.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
