import FMOperations from "@/legacy-pages/FMOperations";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FM Operations & Service Delivery Excellence | EntireFM",
  description: "Strategic planning and day-to-day FM operations. Reliable, compliant, and value-driven service delivery across your entire property portfolio.",
};

export default function FMOperationsPage() {
  return <FMOperations />;
}
