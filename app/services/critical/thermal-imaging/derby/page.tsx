import Derby from "@/legacy-pages/services/critical/thermal-imaging/Derby";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging for Electrical Systems & Data Rooms — Derby | EntireFM",
  description: "Thermal imaging surveys in Derby. Electrical hotspot detection and energy loss investigation for manufacturing, logistics and critical facilities across Derbyshire.",
};

export default function DerbyPage() {
  return <Derby />;
}
