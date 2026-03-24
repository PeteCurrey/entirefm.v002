import Derby from "@/legacy-pages/services/fire/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Derby | Local Testing & Statutory Compliance | EntireFM",
  description: "Fire compliance for Derby's rail and aerospace corridor. Critical asset safety with BS 5839 certification protecting advanced manufacturing operations.",
};

export default function DerbyPage() {
  return <Derby />;
}
