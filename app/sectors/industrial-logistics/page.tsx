import IndustrialLogistics from "@/legacy-pages/sectors/IndustrialLogistics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial & Logistics FM | Operational Continuity",
  description: "FM for industrial, logistics & manufacturing. Fire, electrical, HVAC & water hygiene — fully compliant, audit-ready.",
};

export default function IndustrialLogisticsPage() {
  return <IndustrialLogistics />;
}
