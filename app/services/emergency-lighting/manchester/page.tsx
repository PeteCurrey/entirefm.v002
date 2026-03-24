import Manchester from "@/legacy-pages/services/emergency-lighting/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Manchester | Local Testing & Statutory Compliance | EntireFM",
  description: "Protect residents, guests & visitors with BS 5266 testing. Emergency lighting compliance for Manchester's PBSA, retail and hospitality estates.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
