import PowerRedundancy from "@/legacy-pages/services/critical/PowerRedundancy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing (Load Banks & N+1)",
  description: "N+1 and N+2 power redundancy design, load bank testing, Black Building Tests, and backup power validation for mission-critical infrastructure.",
};

export default function PowerRedundancyPage() {
  return <PowerRedundancy />;
}
