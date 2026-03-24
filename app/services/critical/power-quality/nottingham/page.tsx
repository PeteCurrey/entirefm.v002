import Nottingham from "@/legacy-pages/services/critical/power-quality/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis in Nottingham | EntireFM",
  description: "Power quality analysis for Nottingham pharmaceutical, logistics and commercial estates. Harmonic filtering and voltage regulation diagnostics across Nottinghamshire.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
