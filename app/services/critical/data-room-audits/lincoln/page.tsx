import Lincoln from "@/legacy-pages/services/critical/data-room-audits/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Room Audits in Lincoln | EntireFM",
  description: "Data room infrastructure audits in Lincoln. Cooling, power and environmental assessments for healthcare IT and public sector server rooms across Lincolnshire.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
