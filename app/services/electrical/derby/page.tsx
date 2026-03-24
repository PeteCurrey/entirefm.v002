import Derby from "@/legacy-pages/services/electrical/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Compliance Derby | Rail & Aerospace EICR Testing",
  description: "Compliance-led testing for Derby's rail, aerospace and industrial estates. Uptime protection with BS 7671 certified electrical inspections.",
};

export default function DerbyPage() {
  return <Derby />;
}
