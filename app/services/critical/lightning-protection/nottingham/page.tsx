import Nottingham from "@/legacy-pages/services/critical/lightning-protection/Nottingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Nottingham | EntireFM",
  description: "BS EN 62305 lightning protection testing in Nottingham. Earth resistance and strike path testing for East Midlands commercial buildings.",
};

export default function NottinghamPage() {
  return <Nottingham />;
}
