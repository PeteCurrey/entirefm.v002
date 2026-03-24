import Sheffield from "@/legacy-pages/services/critical/ups-maintenance/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Sheffield | EntireFM",
  description: "UPS maintenance for Sheffield's industrial, manufacturing and commercial estates. Battery impedance testing and modular UPS servicing protecting production uptime.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
