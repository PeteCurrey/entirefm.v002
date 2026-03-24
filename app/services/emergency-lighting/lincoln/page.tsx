import Lincoln from "@/legacy-pages/services/emergency-lighting/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Lincoln | Local Testing & Statutory Compliance | EntireFM",
  description: "BS 5266 testing for healthcare & heritage estates where evacuation reliability is non-negotiable. Life-safety compliance.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
