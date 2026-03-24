import Birmingham from "@/legacy-pages/services/emergency-lighting/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Birmingham | Local Testing & Statutory Compliance | EntireFM",
  description: "Life-safety illumination testing across Birmingham's logistics, retail and corporate spaces. BS 5266 compliance with rapid remedials.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
