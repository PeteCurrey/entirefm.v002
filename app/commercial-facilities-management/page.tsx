import CommercialFacilitiesManagement from "@/legacy-pages/CommercialFacilitiesManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Facilities Management | Office FM Services UK",
  description: "Commercial facilities management for offices, business parks & corporate estates. Fire, electrical, HVAC, water hygiene & planned maintenance.",
};

export default function CommercialFMPage() {
  return <CommercialFacilitiesManagement />;
}
