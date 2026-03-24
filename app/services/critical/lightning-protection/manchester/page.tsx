import Manchester from "@/legacy-pages/services/critical/lightning-protection/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Manchester | EntireFM",
  description: "BS EN 62305 lightning protection testing in Manchester. Earth resistance measurement and strike path testing for Greater Manchester commercial buildings.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
