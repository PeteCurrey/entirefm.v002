import Manchester from "@/legacy-pages/services/critical/ups-maintenance/Manchester";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Manchester | EntireFM",
  description: "UPS maintenance for Manchester data centres, media facilities and PBSA estates. Battery impedance testing, modular servicing and emergency replacement across Greater Manchester.",
};

export default function ManchesterPage() {
  return <Manchester />;
}
