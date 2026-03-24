import Sheffield from "@/legacy-pages/services/critical/lightning-protection/Sheffield";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lightning Protection Testing in Sheffield | EntireFM",
  description: "BS EN 62305 lightning protection testing in Sheffield. Earth resistance and strike path continuity testing for South Yorkshire commercial buildings.",
};

export default function SheffieldPage() {
  return <Sheffield />;
}
