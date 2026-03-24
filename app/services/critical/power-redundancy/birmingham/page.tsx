import Birmingham from "@/legacy-pages/services/critical/power-redundancy/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Birmingham | EntireFM",
  description: "Power redundancy and N+1 validation for Birmingham data centres and manufacturing plants. Failover testing, ATS verification and resilience audits across the West Midlands.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
