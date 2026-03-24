import Chesterfield from "@/legacy-pages/services/critical/power-quality/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Quality Analysis in Chesterfield | EntireFM",
  description: "Power quality monitoring for Chesterfield distribution centres and logistics parks. Voltage disturbance diagnostics protecting automated warehouse systems along the M1.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
