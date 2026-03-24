import Birmingham from "@/legacy-pages/services/gas/Birmingham";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gas Safety & Boiler Compliance in Birmingham | Local Testing & Statutory Compliance | EntireFM",
  description: "Industrial gas safety compliance for Birmingham logistics & manufacturing estates. CP1/CP15, CP42 catering, PRV testing, and boiler optimisation.",
};

export default function BirminghamPage() {
  return <Birmingham />;
}
