import EmergencyLighting from "@/legacy-pages/services/EmergencyLighting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting & BS 5266 Compliance UK | EntireFM",
  description: "BS 5266 certified emergency lighting testing, 3-hour duration verification and rapid remedials. Evacuation safety compliance across UK commercial estates.",
};

export default function EmergencyLightingPage() {
  return <EmergencyLighting />;
}
