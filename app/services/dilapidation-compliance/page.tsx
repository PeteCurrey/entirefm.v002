import DilapidationCompliance from "@/legacy-pages/services/DilapidationCompliance";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dilapidation & End-of-Lease Compliance | Lease Handover | Remedial Works | EntireFM",
  description: "Dilapidation and end-of-lease compliance services. Engineering inspections, remedial works, and handover certification for commercial property lease exits.",
};

export default function DilapidationCompliancePage() {
  return <DilapidationCompliance />;
}
