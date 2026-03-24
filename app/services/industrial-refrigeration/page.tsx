import IndustrialRefrigeration from "@/legacy-pages/services/IndustrialRefrigeration";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industrial Refrigeration Compliance | Cold Room & Chiller Maintenance",
  description: "Service and compliance for chillers, cold rooms and large refrigeration systems. Expert F-gas compliance and temperature control.",
};

export default function IndustrialRefrigerationPage() {
  return <IndustrialRefrigeration />;
}
