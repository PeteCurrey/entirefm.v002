import Lincoln from "@/legacy-pages/services/fire/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Lincoln | Local Testing & Statutory Compliance | EntireFM",
  description: "Fire compliance for Lincoln's heritage protected buildings and healthcare facilities. BS 5839 certification respecting conservation requirements.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
