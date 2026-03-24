import Nottingham from "@/legacy-pages/services/critical/power-redundancy/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Nottingham | EntireFM",
  description: "Power redundancy validation for Nottingham pharmaceutical, PBSA and logistics estates. N+1 testing and dual-supply verification across Nottinghamshire.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
