import Services from "@/legacy-pages/Services";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated FM Services | Hard, Soft & Compliance",
  description: "Single-provider FM with the option of standalone services. Hard, soft, compliance, and projects – all coordinated under one accountable partner.",
};

export default function ServicesPage() {
  return <Services />;
}
