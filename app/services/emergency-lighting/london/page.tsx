import London from "@/legacy-pages/services/emergency-lighting/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in London | Local Testing & Statutory Compliance | EntireFM",
  description: "BS 5266 testing & 3-hour duration verification to protect life safety and legal compliance across London's commercial estate.",
};

export default function LondonPage() {
  return <London />;
}
