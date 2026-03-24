import London from "@/legacy-pages/services/fire/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in London | Local Testing & Statutory Compliance | EntireFM",
  description: "Protect people, operations, and legal responsibility across Greater London. Statutory fire alarm testing, BS 5839 certification & urgent remedials.",
};

export default function LondonPage() {
  return <London />;
}
