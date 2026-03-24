import Lincoln from "@/legacy-pages/services/critical/ups-maintenance/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Maintenance & Battery Replacement in Lincoln | EntireFM",
  description: "UPS maintenance for Lincoln healthcare IT and public sector server rooms. Battery testing, capacitor checks and preventive servicing for Lincolnshire critical infrastructure.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
