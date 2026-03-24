import Lincoln from "@/legacy-pages/services/gas/Lincoln";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in Lincoln | Local Testing & Statutory Compliance | EntireFM",
  description: "Healthcare + heritage assets gas safety in Lincoln. Sensitive inspection protocols, CO monitoring, and energy savings in public sector plantrooms.",
};

export default function LincolnPage() {
  return <Lincoln />;
}
