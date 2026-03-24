import Nottingham from "@/legacy-pages/services/fire/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Nottingham | Local Testing & Statutory Compliance | EntireFM",
  description: "Fire compliance for Nottingham's historic buildings and student-dense environment. BS 5839 testing protecting heritage structures and PBSA developments.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
