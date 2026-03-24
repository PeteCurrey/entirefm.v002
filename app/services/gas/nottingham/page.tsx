import Nottingham from "@/legacy-pages/services/gas/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in Nottingham | Local Testing & Statutory Compliance | EntireFM",
  description: "PBSA & heritage structures gas safety in Nottingham. Full compliance governance, CO monitoring, and boiler energy optimisation.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
