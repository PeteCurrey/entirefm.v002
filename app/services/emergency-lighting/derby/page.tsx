import Derby from "@/legacy-pages/services/emergency-lighting/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Derby | Local Testing & Statutory Compliance | EntireFM",
  description: "Evacuation safety for Derby's industrial and transport estates. BS 5266 testing for manufacturing facilities.",
};

export default function DerbyPage() {
  return <Derby />;
}
