import Derby from "@/legacy-pages/services/critical/power-redundancy/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Power Redundancy Testing & N+1 Validation in Derby | EntireFM",
  description: "Power redundancy validation for Derby aerospace and rail manufacturing. N+1 testing, ATS changeover and UPS failover verification protecting precision production lines.",
};

export default function DerbyPage() {
  return <Derby />;
}
