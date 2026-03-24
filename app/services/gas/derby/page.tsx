import Derby from "@/legacy-pages/services/gas/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in Derby | Local Testing & Statutory Compliance | EntireFM",
  description: "Aerospace/industrial heating gas compliance in Derby. GS(I&U) Regs enforcement with zero fail tolerance and high-efficiency boiler upgrades.",
};

export default function DerbyPage() {
  return <Derby />;
}
