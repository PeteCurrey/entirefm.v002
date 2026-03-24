import London from "@/legacy-pages/services/critical/thermal-imaging/London";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thermal Imaging Surveys in London | Electrical Hotspot Detection | EntireFM",
  description: "Thermal imaging surveys in London. Electrical hotspot detection and energy loss investigation for data centres and critical facilities across Greater London.",
};

export default function LondonPage() {
  return <London />;
}
