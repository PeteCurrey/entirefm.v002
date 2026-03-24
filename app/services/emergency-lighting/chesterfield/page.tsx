import Chesterfield from "@/legacy-pages/services/emergency-lighting/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Lighting Compliance in Chesterfield | Local Testing & Statutory Compliance | EntireFM",
  description: "Compliance testing for logistics & industrial estates along the M1. BS 5266 emergency lighting for warehouses.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
