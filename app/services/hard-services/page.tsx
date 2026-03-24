import HardServices from "@/legacy-pages/services/HardServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hard Services & M&E Maintenance | Facilities Management UK | EntireFM",
  description: "Full hard FM solutions: HVAC, electrical, plumbing, gas, and building fabric. Guaranteed uptime, 24/7 support, and full compliance across the UK.",
};

export default function HardServicesPage() {
  return <HardServices />;
}
