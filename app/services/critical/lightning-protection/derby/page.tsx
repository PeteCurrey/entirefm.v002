import Derby from "@/legacy-pages/services/critical/lightning-protection/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Derby | EntireFM",
  description: "BS EN 62305 lightning protection testing in Derby. Earth resistance and continuity checks for Derbyshire commercial properties.",
};

export default function DerbyPage() {
  return <Derby />;
}
