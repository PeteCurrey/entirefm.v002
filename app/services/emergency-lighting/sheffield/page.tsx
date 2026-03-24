import Sheffield from "@/legacy-pages/services/emergency-lighting/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Sheffield | Local Testing & Statutory Compliance | EntireFM",
  description: "Life-safety illumination testing for Sheffield's industrial, retail and public estates. BS 5266 compliance with rapid remedial execution.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
