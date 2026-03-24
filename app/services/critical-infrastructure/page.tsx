import CriticalInfrastructure from "@/legacy-pages/services/CriticalInfrastructure";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Critical Infrastructure Services | EntireFM",
  description: "Mission-critical engineering compliance for data centres, manufacturing, high-rise assets, and corporate estates. Lightning protection, UPS maintenance, generator servicing, power quality, and thermal imaging.",
};

export default function CriticalInfrastructurePage() {
  return <CriticalInfrastructure />;
}
