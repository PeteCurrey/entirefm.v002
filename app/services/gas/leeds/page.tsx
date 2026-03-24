import Leeds from "@/legacy-pages/services/gas/Leeds";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in Leeds | Local Testing & Statutory Compliance | EntireFM",
  description: "Corporate + hospitality heating/catering safety in Leeds. CP42 catering inspections, boiler servicing, and energy-efficiency upgrades.",
};

export default function LeedsPage() {
  return <Leeds />;
}
