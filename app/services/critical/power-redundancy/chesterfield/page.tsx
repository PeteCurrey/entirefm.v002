import Chesterfield from "@/legacy-pages/services/critical/power-redundancy/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Chesterfield | EntireFM",
  description: "N+1 power redundancy testing for Chesterfield logistics and distribution centres. Failover validation and ATS testing protecting M1 corridor warehouse operations.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
