import Chesterfield from "@/legacy-pages/services/critical/ups-maintenance/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Chesterfield | EntireFM",
  description: "UPS servicing for Chesterfield distribution centres and logistics IT rooms. Battery replacement, impedance testing and preventive maintenance along the M1 corridor.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
