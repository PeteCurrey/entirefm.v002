import HVAC from "@/legacy-pages/services/HVAC";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial HVAC Maintenance & Air Conditioning UK | EntireFM",
  description: "F-Gas certified HVAC maintenance for commercial buildings. Air conditioning, heating, ventilation, and climate control with 24/7 emergency response across the UK.",
};

export default function HVACPage() {
  return <HVAC />;
}
