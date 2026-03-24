import Sheffield from "@/legacy-pages/services/critical/power-redundancy/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Sheffield | EntireFM",
  description: "Power redundancy testing for Sheffield steel, manufacturing and industrial estates. Failover simulation and N+1 verification protecting continuous production operations.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
