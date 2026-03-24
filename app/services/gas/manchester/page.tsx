import Manchester from "@/legacy-pages/services/gas/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in Manchester | Local Testing & Statutory Compliance | EntireFM",
  description: "Gas safety protection for Manchester's PBSA & entertainment estates. CP42 catering, CO risk elimination, and energy-efficiency upgrades.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
