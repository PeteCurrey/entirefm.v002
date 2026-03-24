import OfficesCorporate from "@/legacy-pages/sectors/OfficesCorporate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Office FM | Facilities Management Services",
  description: "Compliance-driven FM for corporate offices. Fire, electrical, HVAC, and water hygiene — fully compliant, audit-ready.",
};

export default function OfficesCorporatePage() {
  return <OfficesCorporate />;
}
