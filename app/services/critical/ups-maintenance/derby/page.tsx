import Derby from "@/legacy-pages/services/critical/ups-maintenance/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Derby | EntireFM",
  description: "UPS maintenance for Derby's rail, aerospace and precision manufacturing sector. Battery replacement, impedance testing and static UPS servicing across Derbyshire.",
};

export default function DerbyPage() {
  return <Derby />;
}
