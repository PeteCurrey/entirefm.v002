import GasSafety from "@/legacy-pages/services/GasSafety";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Gas Safety & Boiler Compliance Services | Gas Safe Inspections",
  description: "Gas Safe inspections, CP1/CP15 certification, catering CP42 compliance and carbon monoxide risk elimination across commercial estates.",
};

export default function GasSafetyPage() {
  return <GasSafety />;
}
