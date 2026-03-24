import Nottingham from "@/legacy-pages/services/critical/thermal-imaging/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in Nottingham | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in Nottingham. Electrical hotspot detection for pharmaceutical, logistics and commercial facilities across Nottinghamshire.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
