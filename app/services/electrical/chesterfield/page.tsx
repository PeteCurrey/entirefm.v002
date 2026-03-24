import Chesterfield from "@/legacy-pages/services/electrical/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electrical Compliance Chesterfield | Logistics EICR Testing M1 Corridor",
  description: "Rapid compliance testing for logistics-driven businesses along the M1 corridor. BS 7671 certified EICR testing with minimal disruption.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
