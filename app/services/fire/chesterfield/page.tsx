import Chesterfield from "@/legacy-pages/services/fire/Chesterfield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fire Safety Compliance in Chesterfield | Local Testing & Statutory Compliance | EntireFM",
  description: "Fire compliance for Chesterfield's regional logistics hub. Uptime-focused BS 5839 testing protecting distribution operations.",
};

export default function ChesterfieldPage() {
  return <Chesterfield />;
}
