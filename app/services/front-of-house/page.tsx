import FrontOfHouse from "@/legacy-pages/services/FrontOfHouse";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reception Maintenance & Public Environment Quality | EntireFM",
  description: "Transform your reception and public spaces into a brand advantage. Professional FM services for entrances, receptions, and customer-facing environments.",
};

export default function FrontOfHousePage() {
  return <FrontOfHouse />;
}
