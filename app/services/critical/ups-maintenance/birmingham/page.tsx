import Birmingham from "@/legacy-pages/services/critical/ups-maintenance/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Birmingham | EntireFM",
  description: "UPS maintenance and battery replacement for Birmingham hospitals, data centres and manufacturing plants. Impedance testing and modular UPS servicing across the Midlands.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
