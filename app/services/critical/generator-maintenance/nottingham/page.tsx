import Nottingham from "@/legacy-pages/services/critical/generator-maintenance/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator Maintenance & Load Bank Testing in Nottingham | EntireFM",
  description: "Generator servicing and load testing for Nottingham PBSA, pharmaceutical and logistics estates. ATS changeover testing and fuel system maintenance across Nottinghamshire.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
