import Manchester from "@/legacy-pages/services/critical/power-quality/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis in Manchester | EntireFM",
  description: "Power quality analysis for Manchester media, PBSA and data centre estates. Harmonic distortion testing and voltage regulation across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
