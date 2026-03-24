import Nottingham from "@/legacy-pages/services/emergency-lighting/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Nottingham | Local Testing & Statutory Compliance | EntireFM",
  description: "BS 5266 testing for PBSA, retail and heritage estates. Student accommodation and heritage building evacuation safety.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
