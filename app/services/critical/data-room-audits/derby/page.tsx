import Derby from "@/legacy-pages/services/critical/data-room-audits/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Derby | EntireFM",
  description: "Data room audits for Derby's rail and aerospace sector. UPS, cooling and power distribution assessments protecting mission-critical IT operations across Derbyshire.",
};

export default function DerbyPage() {
  return <Derby />;
}
