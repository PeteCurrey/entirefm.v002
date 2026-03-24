import Birmingham from "@/legacy-pages/services/fire/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Birmingham | Local Testing & Statutory Compliance | EntireFM",
  description: "Protect people, operations, and legal responsibility across Birmingham and the West Midlands. Statutory fire alarm testing, BS 5839 certification & urgent remedials.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
