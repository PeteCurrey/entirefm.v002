import Manchester from "@/legacy-pages/services/fire/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Manchester | Local Testing & Statutory Compliance | EntireFM",
  description: "Protect people, operations, and legal responsibility across Greater Manchester. Statutory fire alarm testing, BS 5839 certification for PBSA, hospitality and commercial sites.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
