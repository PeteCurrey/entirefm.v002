import Nottingham from "@/legacy-pages/services/critical/ups-maintenance/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Nottingham | EntireFM",
  description: "UPS servicing for Nottingham pharmaceutical, PBSA and logistics IT infrastructure. Battery replacement and impedance testing across East Midlands critical facilities.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
