import Nottingham from "@/legacy-pages/services/critical/hv-switching/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HV Switching & Isolation Services in Nottingham | EntireFM",
  description: "HV switching and isolation for Nottingham pharmaceutical, PBSA and logistics estates. Safe high-voltage operations with full permit-to-work governance.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
