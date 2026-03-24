import MEServices from "@/legacy-pages/services/MEServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanical & Electrical Services | M&E Maintenance UK | EntireFM",
  description: "Comprehensive M&E maintenance for commercial buildings. HVAC, electrical, plumbing, and compliance services with 24/7 emergency response across the UK.",
};

export default function MEServicesPage() {
  return <MEServices />;
}
