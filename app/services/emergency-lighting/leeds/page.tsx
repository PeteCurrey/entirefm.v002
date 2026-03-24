import Leeds from "@/legacy-pages/services/emergency-lighting/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Leeds | Local Testing & Statutory Compliance | EntireFM",
  description: "BS 5266 testing and certification protecting safe evacuation for Leeds' corporate and hospitality estates. Monthly and annual 3-hour duration tests.",
};

export default function LeedsPage() {
  return <Leeds />;
}
